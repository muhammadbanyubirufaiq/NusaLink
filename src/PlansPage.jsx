import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { categories, extras, orderURL, rupiah, connectionLabel, serviceNotes } from './catalog';
import './plans.css';

function PlanOption({ category, plan }) {
  return <article className="pricing-option" aria-labelledby={'pricing-' + plan.id} data-plan={plan.id}>
    <div className="pricing-option-heading">
      <h3 id={'pricing-' + plan.id}>{plan.name}</h3>
      <p className="pricing-monthly"><strong>{rupiah(plan.monthly)}</strong><span>/bulan</span></p>
    </div>
    <dl className="pricing-specs">
      <div><dt>Kecepatan maks.</dt><dd>{plan.speed}<span> Mbps</span></dd></div>
      <div><dt>Perangkat</dt><dd>{plan.devices}</dd></div>
      <div><dt>Titik Wi-Fi</dt><dd>{plan.access}</dd></div>
    </dl>
    <p className="pricing-allocation">{connectionLabel(plan)}</p>
    <dl className="pricing-installation"><div><dt>Pemasangan <span>sekali bayar</span></dt><dd>{rupiah(plan.installation)}</dd></div></dl>
    <a className="button secondary pricing-choose" href={orderURL(plan.id)}>Pilih {category.name} {plan.name}<ArrowUpRight size={16} aria-hidden="true" /></a>
  </article>;
}

export function Plans() {
  return <main id="main" tabIndex={-1} className="pricing-page">
    <div className="pricing-shell">
      <header className="pricing-intro">
        <h1>Paket & Harga</h1>
        <p>Bandingkan layanan Rumah, Bisnis, dan Institusi & Komunitas.</p>
      </header>

      <div className="pricing-categories">
        {categories.map(category => <section className="pricing-category" key={category.id} aria-labelledby={'pricing-category-' + category.id}>
          <header className="pricing-category-heading"><h2 id={'pricing-category-' + category.id}>{category.name}</h2><p>{category.target}</p></header>
          <div className="pricing-features"><ul aria-label={'Fitur utama ' + category.name}>{category.features.map(feature => <li key={feature}>{feature}</li>)}</ul></div>
          {category.plans.map(plan => <PlanOption key={plan.id} category={category} plan={plan} />)}
        </section>)}
      </div>

      <div className="pricing-comparison-note">
        <p>{serviceNotes.performance} Hasil dipengaruhi cuaca, kapasitas operator, dan kondisi lokasi.</p>
        <p>Total awal pada pemesanan mencakup pemasangan, layanan bulan pertama, serta perangkat tambahan yang dipilih. Biaya bulanan berikutnya ditampilkan terpisah.</p>
      </div>

      <section className="pricing-included" aria-labelledby="pricing-included-title">
        <div className="pricing-included-heading"><p className="pricing-eyebrow">CAKUPAN LAYANAN</p><h2 id="pricing-included-title">Sudah termasuk<br /> dalam layanan.</h2><p>Perangkat, pemasangan, dan pengelolaan dalam satu layanan. Fitur pengelolaan mengikuti kategori dan paket yang dipilih.</p></div>
        <div className="pricing-service-details">
          <div className="pricing-detail"><h3>Perangkat & pemasangan</h3><p>{serviceNotes.loan} Instalasi standar mencakup kabel hingga 20 m dan konfigurasi jaringan. Jumlah titik Wi-Fi mengikuti paket.</p></div>
          <div className="pricing-detail"><h3>Pengelolaan & dukungan</h3><p>Monitoring jaringan serta dukungan Senin–Sabtu, pukul 08.00–17.00 WIB. Rumah menggunakan layanan residensial sesuai paket.</p><p>{serviceNotes.priority}</p></div>
          <div className="pricing-detail"><h3>Tambahan opsional</h3><dl className="pricing-extras">{extras.map(extra => <div key={extra.id}><dt>{extra.name}<small>{extra.description}</small></dt><dd>{rupiah(extra.price)}<span>/unit · sekali bayar</span></dd></div>)}</dl><p>{serviceNotes.extrasOwnership} Access point memperluas area Wi-Fi, bukan menambah kapasitas internet. Tiang khusus, pekerjaan sipil, kabel ekstra, dan transportasi terpencil memerlukan survei serta penawaran terpisah.</p></div>
        </div>
      </section>

      <section className="pricing-special" aria-labelledby="pricing-special-title"><div><h2 id="pricing-special-title">Kebutuhan maritim atau tanggap bencana?</h2><p>Diskusikan kebutuhan operasional Anda untuk mendapatkan solusi yang sesuai.</p></div><a className="text-link" href="#/kontak">Hubungi Kami<ArrowUpRight size={16} aria-hidden="true" /></a></section>
      <p className="pricing-demo">{serviceNotes.estimate} Pemesanan tidak mengirim pesanan atau memproses pembayaran nyata.</p>
    </div>
  </main>;
}
