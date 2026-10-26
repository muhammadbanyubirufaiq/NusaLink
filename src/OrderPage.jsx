import React, { useEffect, useRef, useState } from 'react';
import { IconArrow } from './components';
import { categories, extras, findPlan, orderURL, rupiah, totals, connectionLabel, serviceNotes } from './catalog';
import { validateCustomer } from './orderValidation';
import './order.css';

const phases = [['konfigurasi', 'Konfigurasi'], ['data', 'Data pelanggan'], ['konfirmasi', 'Tinjau & konfirmasi']];
const fields = [
  ['name', 'Nama lengkap', 'text', 'name'],
  ['email', 'Email', 'email', 'email'],
  ['phone', 'Nomor telepon', 'tel', 'tel'],
  ['organization', 'Instansi', 'text', 'organization'],
  ['address', 'Alamat pemasangan', 'text', 'street-address'],
];

function CostSummary({ category, plan, selected, phase, confirmed, valid, navigate, confirm }) {
  const total = totals(plan, selected);
  const summary = useRef(null);
  const [canStick, setCanStick] = useState(false);
  useEffect(() => {
    const measure = () => setCanStick(!!summary.current && summary.current.scrollHeight <= window.innerHeight - 136);
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;
    if (summary.current) observer?.observe(summary.current);
    window.addEventListener('resize', measure);
    measure();
    return () => { observer?.disconnect(); window.removeEventListener('resize', measure); };
  }, []);
  return <aside ref={summary} className={'booking-summary' + (canStick ? ' can-stick' : '')} aria-labelledby="booking-summary-title">
    <h2 id="booking-summary-title">Ringkasan biaya</h2>
    <p className="booking-summary-plan">{category.name} {plan.name}<span className="booking-summary-allocation">{connectionLabel(plan)}</span></p>
    <dl className="booking-costs">
      <div><dt>Pemasangan standar<small>Sekali bayar</small></dt><dd>{rupiah(plan.installation)}</dd></div>
      {extras.filter(extra => selected.includes(extra.id)).map(extra => <div key={extra.id}><dt>{extra.name}<small>1 unit · dibeli · sekali bayar</small></dt><dd>{rupiah(extra.price)}</dd></div>)}
      <div><dt>Layanan bulan pertama</dt><dd>{rupiah(plan.monthly)}</dd></div>
    </dl>
    <div className="booking-initial" aria-live="polite" aria-atomic="true"><span>Total awal</span><strong data-testid="initial-total">{rupiah(total.initial)}</strong></div>
    <p className="booking-cost-caption">Termasuk layanan bulan pertama.</p>
    <div className="booking-recurring"><span>Bulan berikutnya</span><strong data-testid="monthly-total">{rupiah(total.monthly)}<small>/bulan</small></strong></div>
    {!confirmed && <div className="booking-next-action">
      {phase === 'konfigurasi' ? <button className="button primary" onClick={() => navigate('data')}>Lanjut ke data pelanggan <IconArrow /></button>
        : phase === 'data' ? <button className="button primary" form="booking-customer-form" type="submit">Tinjau pesanan <IconArrow /></button>
          : valid ? <><button className="button primary" onClick={confirm}>Konfirmasi demo <IconArrow /></button><p className="booking-action-note">Tidak ada pembayaran atau pesanan nyata.</p></>
            : <a className="button primary" href={orderURL(plan.id) + '/data'}>Lengkapi data pelanggan <IconArrow /></a>}
    </div>}
    <p className="booking-demo">Estimasi simulasi tugas kuliah, bukan harga operasional terverifikasi. Tidak ada pembayaran atau pengiriman pesanan. Draft hanya bertahan selama halaman terbuka dan hilang setelah refresh.</p>
    <a className="booking-text-link" href="#/faq">Pertanyaan tentang layanan <IconArrow /></a>
  </aside>;
}

export function Order({ route, customer, setCustomer, selected, setSelected }) {
  const { category, plan } = findPlan(route.split('/')[2]);
  const phase = route.split('/')[3] || 'konfigurasi';
  const activeIndex = phases.findIndex(([id]) => id === phase);
  const [errors, setErrors] = useState({});
  const [attempted, setAttempted] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const inputs = useRef({});
  const successHeading = useRef(null);
  const allErrors = validateCustomer(customer, category.id);
  const valid = Object.keys(allErrors).length === 0;
  const navigate = next => { location.hash = orderURL(plan.id) + '/' + next; };

  useEffect(() => { setConfirmed(false); setErrors({}); setAttempted(false); }, [route]);
  useEffect(() => { if (confirmed) successHeading.current?.focus(); }, [confirmed]);

  function focusField(key) {
    const input = inputs.current[key];
    input?.focus({ preventScroll: true });
    input?.scrollIntoView({ block: 'center', behavior: 'instant' });
  }
  function submit(event) {
    event.preventDefault();
    const next = validateCustomer(customer, category.id);
    setErrors(next);
    setAttempted(true);
    const first = fields.find(([key]) => next[key]);
    if (first) requestAnimationFrame(() => focusField(first[0]));
    else navigate('konfirmasi');
  }
  function confirm() {
    if (Object.keys(validateCustomer(customer, category.id)).length) { navigate('data'); return; }
    setConfirmed(true);
  }
  function renderField([key, label, type, autoComplete]) {
    const required = key !== 'organization' || category.id !== 'rumah';
    const shared = {
      id: 'booking-' + key, name: key, required, autoComplete,
      value: customer[key], ref: element => { inputs.current[key] = element; },
      'aria-invalid': errors[key] ? true : undefined,
      'aria-describedby': [key === 'phone' ? 'booking-phone-hint' : '', errors[key] ? 'booking-error-' + key : ''].filter(Boolean).join(' ') || undefined,
      onChange: event => {
        const next = { ...customer, [key]: event.target.value };
        setCustomer(next);
        if (errors[key]) setErrors(previous => ({ ...previous, [key]: validateCustomer(next, category.id)[key] }));
      },
      onBlur: () => setErrors(previous => ({ ...previous, [key]: validateCustomer(customer, category.id)[key] })),
    };
    return <div className={'booking-field' + (key === 'address' ? ' booking-field-wide' : '')} key={key}>
      <label htmlFor={'booking-' + key}>{label}{!required && <span> (opsional)</span>}</label>
      {key === 'address' ? <textarea {...shared} rows={3} /> : <input {...shared} type={type} inputMode={key === 'phone' ? 'tel' : key === 'email' ? 'email' : undefined} minLength={key === 'name' ? 2 : undefined} />}
      {key === 'phone' && <p id="booking-phone-hint" className="booking-field-hint">9–15 digit, termasuk kode negara bila digunakan.</p>}
      {errors[key] && <p className="booking-field-error" id={'booking-error-' + key}>{errors[key]}</p>}
    </div>;
  }

  const reviewRows = fields.filter(([key]) => key !== 'organization' || customer.organization.trim()).map(([key, label]) => [label, customer[key].trim()]);

  return <main id="main" tabIndex={-1} className="booking-page">
    <div className="booking-shell">
      <header className="booking-heading">
        <div className="booking-title-line"><h1>Pesan {category.name}</h1><a className="booking-back" href="#/paket">← Semua paket</a></div>
        <p>Internet terkelola, disesuaikan dengan kebutuhan Anda.</p>
      </header>
      <nav className="booking-progress" aria-label="Tahap pemesanan"><ol>{phases.map(([id, title], index) => <li key={id} aria-current={phase === id ? 'step' : undefined}>
        {index < activeIndex ? <a href={orderURL(plan.id) + '/' + id}><span>{String(index + 1).padStart(2, '0')}</span>{title}</a> : <span className="booking-phase"><span>{String(index + 1).padStart(2, '0')}</span>{title}</span>}
      </li>)}</ol></nav>

      <div className="booking-layout">
        <div className="booking-content">
          {phase === 'konfigurasi' ? <>
            <section className="booking-section" aria-labelledby="booking-service-title">
              <h2 id="booking-service-title">Pilih layanan</h2>
              <label className="booking-category" htmlFor="booking-category">Kategori<select id="booking-category" value={category.id} onChange={event => {
                const nextCategory = categories.find(item => item.id === event.target.value);
                const sameTier = nextCategory.plans.find(item => item.name === plan.name) || nextCategory.plans[0];
                location.hash = orderURL(sameTier.id);
              }}>{categories.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
              <fieldset className="booking-plans"><legend>Paket bulanan</legend><div className="booking-plan-options">
                {category.plans.map(option => <label className={'booking-plan' + (option.id === plan.id ? ' is-selected' : '')} key={option.id}>
                  <input type="radio" name="booking-plan" aria-label={'Paket ' + option.name} aria-describedby={'details-' + option.id} checked={option.id === plan.id} onChange={() => { location.hash = orderURL(option.id); }} />
                  <span className="booking-plan-title">{option.name}</span>
                  <span id={'details-' + option.id} className="booking-plan-info"><strong>{rupiah(option.monthly)}<small>/bulan</small></strong><span>Hingga {option.speed} Mbps</span><span>{option.devices} perangkat</span><span>{option.access} titik Wi-Fi</span><span>{connectionLabel(option)}</span></span>
                </label>)}
              </div></fieldset>
              <ul className="booking-features">{category.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
              <p className="booking-note">{serviceNotes.performance} Hasil juga dipengaruhi lokasi, cuaca, dan kapasitas operator.</p>
              {plan.priorityGB && <p className="booking-note">{serviceNotes.priority}</p>}
            </section>
            <section className="booking-section" aria-labelledby="booking-install-title">
              <div className="booking-section-title"><h2 id="booking-install-title">Perangkat & pemasangan</h2><span>{rupiah(plan.installation)}<small>Sekali bayar</small></span></div>
              <p>{serviceNotes.loan} Instalasi standar mencakup kabel hingga 20 m dan konfigurasi jaringan. Jumlah titik Wi-Fi mengikuti paket.</p>
              <p className="booking-note">Tiang khusus, pekerjaan sipil, kabel ekstra, dan transportasi terpencil memerlukan survei serta penawaran terpisah.</p>
            </section>
            <section className="booking-section" aria-labelledby="booking-extras-title"><h2 id="booking-extras-title">Perangkat tambahan</h2><p className="booking-section-caption">Opsional · pembelian sekali bayar</p>
              <p className="booking-note">{serviceNotes.extrasOwnership}</p>
              <div className="booking-extras">{extras.map(extra => <label className="booking-extra" key={extra.id}>
                <input type="checkbox" aria-label={extra.name} checked={selected.includes(extra.id)} onChange={event => setSelected(event.target.checked ? [...selected, extra.id] : selected.filter(id => id !== extra.id))} />
                <span><strong>{extra.name}</strong><small>{extra.description}</small></span><strong className="booking-extra-price">{rupiah(extra.price)}<small>/unit</small></strong>
              </label>)}</div>
            </section>
          </> : phase === 'data' ? <section className="booking-section booking-data" aria-labelledby="booking-data-title">
            <h2 id="booking-data-title">Data pelanggan</h2><p>Gunakan data contoh untuk mencoba pemesanan ini. Kolom tanpa keterangan opsional wajib diisi.</p>
            <form id="booking-customer-form" noValidate onSubmit={submit}>
              {attempted && Object.values(errors).some(Boolean) && <div className="booking-error-summary" role="alert"><p>Periksa data berikut sebelum melanjutkan.</p><ul>{fields.filter(([key]) => errors[key]).map(([key, label]) => <li key={key}><button type="button" onClick={() => focusField(key)}>{label}: {errors[key]}</button></li>)}</ul></div>}
              <div className="booking-fields">{fields.map(renderField)}</div>
            </form>
            <a className="booking-text-link booking-edit" href={orderURL(plan.id)}>← Ubah konfigurasi</a>
          </section> : <>
            {confirmed ? <div className="booking-success" role="status"><p className="booking-success-label">DEMO SELESAI</p><h2 ref={successHeading} tabIndex={-1}>Simulasi pemesanan selesai</h2><p>Ringkasan dibuat di browser ini. Tidak ada pesanan yang dikirim, pembayaran, atau jadwal teknisi.</p></div> : <div className="booking-review-intro"><h2>Tinjau pesanan Anda</h2><p>Periksa layanan, data, dan biaya sebelum mengonfirmasi demo.</p></div>}
            {!valid ? <section className="booking-section"><h3>Data pelanggan belum lengkap</h3><p>Lengkapi data yang sesuai dengan kategori layanan sebelum konfirmasi.</p><a className="booking-text-link" href={orderURL(plan.id) + '/data'}>Isi data pelanggan <IconArrow /></a></section> : <>
              <section className="booking-section booking-review-service"><div className="booking-review-title"><h3>Layanan dipilih</h3>{!confirmed && <a href={orderURL(plan.id)}>Ubah konfigurasi</a>}</div><p className="booking-review-plan">{category.name} {plan.name}</p><p>Hingga {plan.speed} Mbps · {plan.devices} perangkat · {plan.access} titik Wi-Fi</p><p className="booking-note">{connectionLabel(plan)}. {plan.priorityGB ? serviceNotes.priority : ''}</p><h4>Perangkat tambahan</h4><p>{selected.length ? extras.filter(extra => selected.includes(extra.id)).map(extra => extra.name).join(', ') : 'Tanpa perangkat tambahan'}</p>{selected.length > 0 && <p className="booking-note">{serviceNotes.extrasOwnership}</p>}</section>
              <section className="booking-section"><div className="booking-review-title"><h3>Data & lokasi pemasangan</h3>{!confirmed && <a href={orderURL(plan.id) + '/data'}>Ubah data</a>}</div><dl className="booking-customer-review">{reviewRows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>
              {confirmed && <a className="booking-text-link" href="#/">Kembali ke beranda <IconArrow /></a>}
            </>}
          </>}
        </div>
        <CostSummary category={category} plan={plan} selected={selected} phase={phase} confirmed={confirmed} valid={valid} navigate={navigate} confirm={confirm} />
      </div>
    </div>
  </main>;
}
