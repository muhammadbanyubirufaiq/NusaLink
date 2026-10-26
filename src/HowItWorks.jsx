import React from 'react';
import { IconArrow } from './components';
import './how-it-works.css';

// Service journey only. These stages are explanatory, not order status data.
const stages = [
  {
    title: 'Survei kebutuhan',
    content: <><p>Anda menyampaikan lokasi, jumlah pengguna, kondisi listrik, kebutuhan Wi-Fi, dan akses pemasangan.</p><p>NusaLink memeriksa kondisi lokasi untuk menilai kebutuhan serta kendala. Hasilnya menjadi dasar rancangan layanan.</p></>,
  },
  {
    title: 'Solusi dan penawaran',
    content: <><p>NusaLink menentukan pilihan koneksi, perangkat, kapasitas, dan dukungan. Anda meninjau penawaran hingga solusi serta cakupan pekerjaan disepakati.</p><p className="journey-detail">Rancangan dan biaya mengikuti lokasi. Tiang khusus, pekerjaan sipil, kabel ekstra, serta transportasi terpencil memerlukan penawaran terpisah.</p><a className="journey-link" href="#/solusi">Solusi Teknologi <IconArrow /></a></>,
  },
  {
    title: 'Pemasangan dan pengujian',
    content: <><p>Teknisi memasang perangkat, menata kabel, serta mengonfigurasi koneksi dan Wi-Fi sesuai solusi yang disepakati.</p><p>Anda memeriksa hasil pengujian bersama tim, lalu menerima informasi akses dan petunjuk penggunaan dasar saat serah terima.</p><a className="journey-link" href="#/panduan">Panduan Pemasangan <IconArrow /></a></>,
  },
  {
    title: 'Monitoring dan pengelolaan',
    content: <><p>Setelah layanan aktif, NusaLink memantau jaringan dan perangkat. Masukan Anda tentang penggunaan di lokasi membantu pengelolaan berikutnya.</p><p className="journey-detail">Pengelolaan akses, segmentasi Wi-Fi, voucher, dan pemantauan energi mengikuti paket atau rancangan; tidak semuanya termasuk dalam setiap layanan.</p></>,
  },
  {
    title: 'Dukungan dan penyesuaian',
    content: <><p>Anda menyampaikan kendala atau perubahan kebutuhan. NusaLink membantu penanganan gangguan dan pemeliharaan sesuai cakupan layanan.</p><p>Kebutuhan dinilai kembali sebelum perangkat atau kapasitas disesuaikan. Pelatihan pengelola lokal mengikuti fasilitas layanan.</p></>,
  },
];

export function HowItWorks() {
  return <main id="main" tabIndex={-1} className="service-journey">
    <div className="journey-shell">
      <header className="journey-intro">
        <p className="journey-eyebrow">LAYANAN NUSALINK</p><h1>Cara Kerja</h1>
        <p>Lima tahap untuk menghubungkan lokasi Anda. Dari penilaian kebutuhan hingga pengelolaan jaringan sehari-hari.</p>
      </header>

      <ol className="journey-stages" role="list" aria-label="Lima tahap layanan NusaLink">
        {stages.map(({ title, content }, index) => <li className="journey-stage" key={title}>
          <header className="journey-stage-heading"><span className="journey-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <h2><span className="journey-sr">Tahap {index + 1}. </span>{title}</h2></header>
          <div className="journey-copy">{content}</div>
        </li>)}
      </ol>

      <section className="journey-next" aria-labelledby="journey-next-title">
        <div><h2 id="journey-next-title">Mulai dari kebutuhan Anda.</h2><p>Bandingkan paket standar atau bicarakan kebutuhan lokasi yang memerlukan penyesuaian.</p></div>
        <div className="journey-actions"><a className="button primary" href="#/paket">Lihat Paket & Harga <IconArrow /></a><a className="journey-contact" href="#/kontak">Hubungi Kami <IconArrow /></a></div>
      </section>
      <p className="journey-demo">NusaLink merupakan konsep layanan untuk tugas kuliah. Pemesanan demo hanya membuat ringkasan di browser; tidak mengirim pesanan, memesan survei, atau menjadwalkan teknisi. Monitoring dan voucher merupakan fitur penawaran konsep, belum berupa aplikasi operasional di website ini.</p>
    </div>
  </main>;
}
