import React from 'react';
import { Satellite, Router, Wifi, Cable, ArrowDown } from 'lucide-react';
import { Eyebrow, IconArrow } from './components';
import './solutions.css';

function Node({ icon: Icon, title, detail, className = '' }) {
  return <div className={'tech-node ' + className}><Icon size={30} strokeWidth={1.25} aria-hidden="true" /><div><strong>{title}</strong>{detail && <span>{detail}</span>}</div></div>;
}

function SatelliteDiagram() {
  return <figure className="tech-diagram satellite-diagram" aria-labelledby="satellite-caption">
    <img className="network-equipment" src="/assets/network-equipment.svg" width="800" height="480" alt="" aria-hidden="true" />
    <ol className="satellite-flow" aria-label="Alur koneksi satelit">
      <li><strong>Operator</strong><span>Jaringan satelit</span></li>
      <li><strong>Terminal</strong><span>Kirim & terima data</span></li>
      <li><strong>Router</strong><span>Jaringan lokal</span></li>
      <li><strong>Perangkat</strong><span>Akses internet</span></li>
    </ol>
    <figcaption id="satellite-caption">Skema koneksi dua arah. Layanan satelit berasal dari operator; perangkat di lokasi dikelola NusaLink. Ilustrasi bukan model tertentu.</figcaption>
  </figure>;
}

function HybridDiagram() {
  return <figure className="tech-diagram hybrid-diagram" aria-labelledby="hybrid-caption">
    
    <div className="hybrid-sources"><Node icon={Satellite} title="Satelit" /><Node icon={Cable} title="Fiber / seluler" /></div>
    <div className="hybrid-lines" aria-hidden="true"><i /><i /></div>
    <Node icon={Router} title="Router pengelola jalur" detail="Jalur utama & cadangan dikonfigurasi di sini" className="hybrid-router" />
    <ArrowDown className="hybrid-down" size={24} aria-hidden="true" />
    <Node icon={Wifi} title="Jaringan di lokasi" detail="Perangkat pengguna" className="hybrid-destination" />
    <figcaption id="hybrid-caption">Jalur cadangan, bukan penggabungan kecepatan. Perpindahan mengikuti perangkat dan konfigurasi.</figcaption>
  </figure>;
}

const management = [
  ['Monitoring jaringan', 'Memantau status koneksi dan perangkat melalui sistem pengelolaan yang disepakati.'],
  ['Pengelolaan akses', 'Mengatur pengguna, pembagian bandwidth, serta voucher Wi-Fi bila tersedia pada layanan.'],
  ['Pemeliharaan perangkat', 'Pemeriksaan dan penanganan perangkat mengikuti cakupan layanan serta kondisi lokasi.'],
  ['Dukungan teknis', 'Membantu penelusuran gangguan dan penyesuaian konfigurasi jaringan.'],
  ['Pelatihan pengelola lokal', 'Membekali pengelola untuk penggunaan dan pemeriksaan dasar sehari-hari.'],
];

export function SolutionsTechnology() {
  return <main tabIndex={-1} id="main" className="information-page info-solusi technology-page">
    <header className="tech-opening tech-wrap">
      <div className="tech-opening-copy"><a className="tech-back" href="#/">← Kembali ke beranda</a><Eyebrow>SOLUSI TEKNOLOGI</Eyebrow><h1>Koneksi sesuai<br /> kondisi lokasi.</h1><p>Internet satelit, Wi-Fi lokal, jalur cadangan, dan daya pendukung. Dirancang bersama agar konektivitas sesuai dengan kebutuhan Anda.</p></div>
      <figure className="tech-opening-visual"><img className="tech-opening-photo" src="/assets/hero.webp" width="2400" height="1600" fetchPriority="high" alt="Lanskap pesisir dan perbukitan Mandalika, ilustrasi lingkungan kepulauan Indonesia" /><figcaption>Mandalika, Indonesia · Foto ilustratif.</figcaption></figure>
    </header>

    <section className="tech-foundation tech-wrap" aria-labelledby="foundation-title"><h2 id="foundation-title">Teknologinya terhubung.<br />Pengelolaannya terpadu.</h2><div><p>NusaLink mengintegrasikan konektivitas dari operator dengan perangkat jaringan, software pengelolaan, dan dukungan operasional.</p><p className="tech-fine">Kami menggunakan layanan operator satelit, bukan memiliki atau meluncurkan satelit sendiri. Rancangan perangkat dan fasilitas mengikuti paket serta hasil survei. Foto pada halaman ini bersifat ilustratif, bukan dokumentasi instalasi NusaLink.</p></div></section>

    <section className="tech-section tech-wrap tech-satellite" id="teknologi-satelit" aria-labelledby="satellite-title">
      <div className="tech-copy"><h2 id="satellite-title">Internet Satelit<br />Terkelola.</h2><p>Untuk lokasi yang sulit dijangkau fiber atau jaringan darat. Terminal di lokasi berkomunikasi dengan jaringan operator satelit, lalu router menghubungkannya ke perangkat pengguna.</p><p>NusaLink menangani survei, pemasangan, konfigurasi, monitoring, dan dukungan sesuai cakupan layanan.</p><div className="tech-use"><h3>Saat dibutuhkan</h3><p>Rumah terpencil, kantor lapangan, atau fasilitas publik dengan pilihan koneksi darat yang terbatas.</p></div></div>
      <SatelliteDiagram />
    </section>

    <section className="tech-section tech-wrap tech-wifi" id="teknologi-wifi" aria-labelledby="wifi-title">
      <div className="tech-copy"><h2 id="wifi-title">Wi-Fi Komunitas.</h2><p>Satu koneksi internet dibagikan melalui access point atau jaringan mesh ke beberapa area. Internet menjadi sumber akses; Wi-Fi mendistribusikannya di lingkungan setempat.</p><p>Pengelola dapat mengatur akses dan pembagian bandwidth. Software voucher Wi-Fi membantu mengelola penggunaan sesuai konfigurasi layanan.</p><div className="tech-use"><h3>Saat dibutuhkan</h3><p>Akses bersama di desa, sekolah, ruang belajar, atau fasilitas publik yang membutuhkan pengaturan pengguna.</p></div></div>
      <div className="tech-wifi-visual"><figure className="tech-photo"><img src="/assets/hero-komunitas.webp" width="2400" height="1193" loading="lazy" alt="Persawahan dan permukiman Cisoka, Banten, ilustrasi lingkungan distribusi Wi-Fi komunitas" /><figcaption>Cisoka, Banten · Foto ilustratif.</figcaption></figure><div className="wifi-distribution"><ol className="wifi-flow" aria-label="Alur distribusi Wi-Fi"><li><strong>Sumber internet</strong><small>Satelit atau jaringan darat</small></li><li><strong>Router & akses</strong><small>Pengaturan pengguna</small></li><li><strong>AP / mesh</strong><small>Distribusi ke pengguna</small></li></ol><p className="tech-fine wifi-note">Tambahan access point memperluas jangkauan lokal, bukan otomatis menambah kapasitas internet.</p></div></div>
    </section>

    <section className="tech-section tech-wrap tech-hybrid" id="teknologi-hybrid" aria-labelledby="hybrid-title">
      <div className="tech-copy"><h2 id="hybrid-title">Hybrid Connectivity.</h2><p>Koneksi satelit dapat dipadukan dengan fiber atau jaringan seluler sesuai ketersediaan. Jalur cadangan membantu mempertahankan akses ketika salah satu koneksi terganggu.</p><p>Perangkat dan konfigurasi menentukan kapan serta bagaimana jalur berpindah. Perpindahan dapat memengaruhi sesi yang sedang berjalan; koneksi tanpa putus tidak dijamin dalam semua kondisi.</p><div className="tech-use"><h3>Saat dibutuhkan</h3><p>Operasional bisnis atau fasilitas yang memerlukan pilihan koneksi alternatif saat jalur utama bermasalah.</p></div></div>
      <HybridDiagram />
    </section>

    <section className="tech-section tech-wrap tech-energy" id="teknologi-energi" aria-labelledby="energy-title">

      <div className="tech-copy"><h2 id="energy-title">Energi Cadangan.</h2><p>Jaringan juga membutuhkan pasokan daya. UPS, baterai, atau panel surya dapat disesuaikan dengan perangkat dan kondisi listrik di lokasi.</p><p>Kebutuhan daya serta durasi cadangan ditentukan melalui penilaian lokasi. Kapasitas baterai dan rancangan pengisian dipilih berdasarkan hasilnya.</p><div className="tech-use"><h3>Saat dibutuhkan</h3><p>Lokasi dengan listrik tidak stabil atau keterbatasan pasokan daya. Energi cadangan mendukung operasional jaringan, dengan perangkat sesuai rancangan.</p></div></div>
      <figure className="tech-photo energy-photo"><img src="/assets/solusi-energi.webp" width="1800" height="1350" loading="lazy" alt="Teknisi memasang panel surya di atap, foto stok ilustratif pendukung energi" /><figcaption>Pemasangan panel surya · Foto ilustratif.</figcaption></figure>
    </section>

    <section className="tech-management tech-wrap" aria-labelledby="management-title"><div className="management-heading"><h2 id="management-title">Lebih dari koneksi.<br />Ada yang mengelola.</h2><p>Perangkat, akses, dan dukungan dikoordinasikan dalam satu rancangan layanan untuk kebutuhan operasional di lokasi.</p></div><ol className="management-list">{management.map(([title,description])=><li key={title}><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol><p className="tech-fine management-note">Fasilitas, perangkat, jadwal pemeliharaan, dan bentuk dukungan mengikuti paket atau hasil survei; tidak semuanya termasuk dalam setiap paket. Dashboard dan voucher adalah fitur penawaran konsep, belum berupa aplikasi operasional di website ini.</p></section>

    <section className="tech-cta tech-wrap" aria-labelledby="tech-cta-title"><div className="tech-cta-copy"><h2 id="tech-cta-title">Mulai dari kebutuhan<br />lokasi Anda.</h2><p>Bandingkan paket standar untuk Rumah, Bisnis, atau Institusi & Komunitas. Untuk rancangan khusus, bicarakan kondisi lokasi dengan kami.</p></div><div className="tech-actions"><a className="button primary" href="#/paket">Lihat Paket & Harga <IconArrow /></a><a className="button secondary" href="#/kontak">Hubungi Kami <IconArrow /></a></div></section>
  </main>;
}
