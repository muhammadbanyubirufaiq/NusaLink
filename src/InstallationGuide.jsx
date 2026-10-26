import React from 'react';
import { IconArrow } from './components';
import { serviceNotes } from './catalog';
import './installation.css';

const sections = [
  ['persiapan', 'Persiapan'],
  ['proses', 'Proses pemasangan'],
  ['setelah', 'Setelah pemasangan'],
  ['bantuan', 'Bantuan'],
];
const preparations = [
  ['Lokasi dan kebutuhan', 'Siapkan alamat, akses menuju lokasi, perkiraan jumlah pengguna, serta area yang perlu terhubung.'],
  ['Listrik dan ruang perangkat', 'Tunjukkan sumber listrik dan tempat perangkat yang aman. Sampaikan jika pasokan listrik sering terputus.'],
  ['Pandangan langit', 'Tunjukkan area terbuka yang dapat dinilai untuk penempatan terminal. Posisi akhir mengikuti survei dan karakter perangkat.'],
  ['Akses dan jalur kabel', 'Koordinasikan akses teknisi serta kemungkinan jalur kabel melalui area yang mudah diperiksa.'],
  ['Cakupan Wi-Fi', 'Tandai ruang atau area yang membutuhkan Wi-Fi. Jumlah titik akses mengikuti paket dan rancangan lokasi.'],
];
const installation = [
  ['Pemeriksaan lokasi', 'Teknisi memeriksa kondisi lokasi dan mengonfirmasi kebutuhan bersama Anda.'],
  ['Penentuan posisi perangkat', 'Teknisi menentukan posisi terminal, router, dan titik Wi-Fi sesuai survei serta karakter perangkat.'],
  ['Pemasangan dan penataan kabel', 'Teknisi memasang perangkat dan menata jalur kabel sesuai rancangan yang disepakati.'],
  ['Aktivasi dan konfigurasi', 'Teknisi menyiapkan koneksi operator serta konfigurasi jaringan yang digunakan di lokasi.'],
  ['Pengaturan Wi-Fi dan akses', 'Teknisi mengatur jaringan Wi-Fi serta akses pengguna. Segmentasi atau voucher disesuaikan dengan paket.'],
  ['Pengujian dan serah terima', 'Teknisi menguji koneksi bersama Anda dan menjelaskan informasi akses serta penggunaan dasar.'],
];
const handover = [
  ['Hubungkan perangkat Anda', 'Coba sambungkan ponsel atau laptop ke jaringan Wi-Fi yang dijelaskan teknisi.'],
  ['Coba area yang dibutuhkan', 'Buka situs atau layanan internet di area penggunaan. Sampaikan bagian yang belum terjangkau saat pemeriksaan bersama.'],
  ['Pahami informasi akses', 'Pastikan Anda memahami nama jaringan, cara memperoleh akses, dan petunjuk dasar sesuai konfigurasi layanan.'],
  ['Simpan jalur dukungan', 'Ketahui cara menghubungi NusaLink dan informasi yang perlu disampaikan ketika terjadi gangguan.'],
];

function goToSection(event, section) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  const heading = document.getElementById('guide-' + section);
  heading?.focus({ preventScroll: true });
  heading?.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
}

export function InstallationGuide() {
  return <main id="main" tabIndex={-1} className="installation-manual">
    <div className="install-shell">
      <header className="install-intro"><p className="install-eyebrow">BANTUAN NUSALINK</p><h1>Panduan pemasangan</h1><p>Siapkan lokasi Anda. Tim NusaLink menangani pemasangan, konfigurasi, dan pengujian jaringan.</p></header>
      <nav className="install-toc" aria-label="Dalam panduan ini">{sections.map(([id, title]) => <a key={id} href="#/panduan" onClick={event => goToSection(event, id)}>{title}</a>)}</nav>
      <div className="install-content">
        <section className="install-section" aria-labelledby="guide-persiapan">
          <header className="install-section-heading"><h2 id="guide-persiapan" tabIndex={-1}>Sebelum teknisi datang.</h2><p>Informasi berikut membantu tim menilai kebutuhan dan menyiapkan rancangan yang sesuai dengan lokasi Anda.</p></header>
          <div className="install-section-body">
            <dl className="install-preparation">{preparations.map(([title, description]) => <div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}</dl>
            <aside className="install-scope" aria-label="Cakupan instalasi"><p><strong>Instalasi standar.</strong> {serviceNotes.loan} Instalasi mencakup kabel hingga 20 meter serta konfigurasi jaringan. Jumlah titik Wi-Fi mengikuti paket.</p><p><strong>Kebutuhan tambahan.</strong> Tiang khusus, pekerjaan sipil, kabel ekstra, dan transportasi terpencil memerlukan survei serta penawaran terpisah.</p><p>{serviceNotes.extrasOwnership} UPS jaringan tersedia sebagai pilihan tambahan pada demo; durasi cadangan mengikuti perhitungan beban. Panel surya dan rancangan energi khusus memerlukan penilaian lokasi. <a href="#/paket">Lihat cakupan Paket & Harga</a>.</p></aside>
          </div>
        </section>
        <section className="install-section" aria-labelledby="guide-proses">
          <header className="install-section-heading"><h2 id="guide-proses" tabIndex={-1}>Proses pemasangan.</h2><p>Anda mendampingi konfirmasi kebutuhan dan pemeriksaan hasil. Pekerjaan pemasangan ditangani oleh teknisi.</p></header>
          <div className="install-section-body"><ol className="install-steps">{installation.map(([title, description]) => <li key={title}><h3>{title}</h3><p>{description}</p></li>)}</ol><p className="install-note">Posisi akhir perangkat, kebutuhan tambahan, dan cara konfigurasi mengikuti hasil survei serta spesifikasi perangkat yang digunakan.</p></div>
        </section>
        <section className="install-section" aria-labelledby="guide-setelah">
          <header className="install-section-heading"><h2 id="guide-setelah" tabIndex={-1}>Pastikan siap digunakan.</h2><p>Gunakan pemeriksaan berikut saat serah terima agar informasi akses dan penggunaan dasar sudah Anda pahami.</p></header>
          <ul className="install-handover install-section-body">{handover.map(([title, description]) => <li key={title}><h3>{title}</h3><p>{description}</p></li>)}</ul>
        </section>
        <section className="install-section" aria-labelledby="guide-bantuan">
          <header className="install-section-heading"><h2 id="guide-bantuan" tabIndex={-1}>Koneksi belum berfungsi?</h2><p>Mulai dari hal yang mudah dijangkau. Sampaikan hasil pemeriksaan ini kepada tim dukungan jika koneksi belum pulih.</p></header>
          <div className="install-section-body"><ol className="install-checks"><li><h3>Periksa sumber listrik.</h3><p>Pastikan perangkat memperoleh daya dari sumber listrik yang biasa digunakan, tanpa mengubah instalasi listrik.</p></li><li><h3>Lihat sambungan kabel.</h3><p>Periksa secara visual kabel yang aman dan mudah dijangkau. Laporkan sambungan yang lepas atau rusak kepada teknisi.</p></li><li><h3>Pastikan jaringan Wi-Fi.</h3><p>Pilih nama jaringan yang diberikan saat serah terima dan gunakan informasi akses yang sesuai.</p></li></ol><p className="install-note">Untuk reset pabrik, pembongkaran perangkat, pekerjaan listrik, atau akses ke atap, hubungi teknisi. Langkah tersebut bukan pemeriksaan awal pelanggan.</p><p className="install-support-info">Dukungan operasional: Senin–Sabtu, 08.00–17.00 WIB. <a href="#/faq">Baca pertanyaan umum</a> untuk informasi layanan dan demo.</p></div>
        </section>
      </div>
      <section className="install-help" aria-labelledby="install-help-title"><div><h2 id="install-help-title">Perlu bantuan menyiapkan lokasi Anda?</h2><p>Bicarakan kondisi lokasi dan kebutuhan pemasangan dengan tim NusaLink.</p></div><a className="button primary" href="#/kontak">Hubungi Kami <IconArrow /></a></section>
    </div>
  </main>;
}
