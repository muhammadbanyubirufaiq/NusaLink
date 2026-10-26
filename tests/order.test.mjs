import test from 'node:test';
import assert from 'node:assert/strict';
import { categories, extras, connectionLabel, findPlan, totals } from '../src/catalog.js';
import { validateCustomer } from '../src/orderValidation.js';
import { resolveRoute } from '../src/navigation.js';

const sample = { name: 'Pelanggan Uji', email: 'uji@example.com', phone: '+62 812-0000-0000', organization: '', address: 'Jalan Contoh 12, Lokasi Uji' };
const prices = [
  ['rumah-basic', 1500000, 1200000, 2700000],
  ['rumah-plus', 2000000, 1700000, 3700000],
  ['bisnis-basic', 3000000, 2800000, 5800000],
  ['bisnis-plus', 4500000, 4700000, 9200000],
  ['komunitas-basic', 3500000, 3000000, 6500000],
  ['komunitas-plus', 5000000, 5000000, 10000000],
];

for (const [id, installation, monthly, initial] of prices) {
  test(`${id}: approved simulation prices, extras and legacy order routes`, () => {
    const { plan } = findPlan(id);
    assert.equal(plan.installation, installation);
    assert.equal(plan.monthly, monthly);
    for (const [selected, delta] of [[[], 0], [['mesh'], 1350000], [['ups'], 1500000], [['mesh', 'ups'], 2850000]]) {
      assert.deepEqual(totals(plan, selected), { extra: delta, initial: initial + delta, monthly });
    }
    // Removing extras returns exactly to the original total.
    assert.equal(totals(plan, []).initial, initial);
    for (const phase of ['', '/konfigurasi', '/data', '/konfirmasi']) assert.equal(resolveRoute(`#/pesan/${id}${phase}`).page, 'order');
  });
}

test('required whitespace is rejected without changing the supplied data', () => {
  const blank = Object.fromEntries(Object.keys(sample).map(key => [key, '   ']));
  const snapshot = structuredClone(blank);
  assert.deepEqual(Object.keys(validateCustomer(blank, 'bisnis')), ['name', 'email', 'phone', 'organization', 'address']);
  assert.deepEqual(blank, snapshot);
});

test('organization is optional for Rumah and required for Bisnis/Institusi & Komunitas', () => {
  assert.deepEqual(validateCustomer(sample, 'rumah'), {});
  for (const category of ['bisnis', 'komunitas']) {
    assert.ok(validateCustomer(sample, category).organization);
    assert.deepEqual(validateCustomer({ ...sample, organization: 'Instansi Uji' }, category), {});
  }
});

for (const [phone, accepted] of [['12345678', false], ['123456789', true], ['123456789012345', true], ['1234567890123456', false], ['0812abc0000', false], ['++6281200000000', false], ['+62 (812) 0000-0000', true]]) {
  test(`telephone boundary/format ${phone}`, () => assert.equal(!validateCustomer({ ...sample, phone }, 'rumah').phone, accepted));
}

for (const email of ['', '   ', 'uji@', 'uji@example', 'uji pengguna@example.com']) {
  test(`invalid email ${JSON.stringify(email)}`, () => assert.ok(validateCustomer({ ...sample, email }, 'rumah').email));
}

test('long valid data can be reviewed; optional data and input are preserved', () => {
  const long = { ...sample, name: 'Pelanggan Uji '.repeat(10), organization: 'Instansi Uji', address: 'Alamat lokasi uji.\n'.repeat(30) };
  const snapshot = structuredClone(long);
  assert.deepEqual(validateCustomer(long, 'komunitas'), {});
  assert.deepEqual(long, snapshot);
});

test('invalid plan or phase is not treated as an order route', () => {
  for (const route of ['#/pesan/rumah-enterprise', '#/pesan/rumah-plus/bayar', '#/pesan/rumah-plus/data/lain']) assert.notEqual(resolveRoute(route).page, 'order');
});


test('priority allocations and category rename preserve internal IDs', () => {
  assert.equal(categories[2].id, 'komunitas');
  assert.equal(categories[2].name, 'Institusi & Komunitas');
  for (const category of categories) for (const plan of category.plans) {
    assert.equal(plan.priorityGB, category.id === 'rumah' ? null : plan.name === 'Basic' ? 500 : 1000);
    assert.equal(connectionLabel(plan), category.id === 'rumah' ? 'Layanan residensial sesuai paket' : `Data prioritas ${plan.name === 'Basic' ? '500 GB' : '1 TB'}/bulan`);
  }
  assert.deepEqual(extras.map(extra => [extra.id, extra.price]), [['mesh', 1350000], ['ups', 1500000]]);
});

test('Rumah Plus requested examples and cancellation keep monthly fee unchanged', () => {
  const {plan} = findPlan('rumah-plus');
  for (const [selected, initial] of [[[], 3700000], [['mesh'], 5050000], [['mesh', 'ups'], 6550000], [['mesh'], 5050000], [[], 3700000]]) {
    assert.equal(totals(plan, selected).initial, initial);
    assert.equal(totals(plan, selected).monthly, 1700000);
  }
});
