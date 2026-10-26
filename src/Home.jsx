import React from 'react';
import { Satellite, Wifi, Network, BatteryCharging } from 'lucide-react';
import { Hero } from './experience';
import { advantages } from './data';
import { Eyebrow, IconArrow, SectorsCarousel, Reveal } from './components';
export function Home({ active, setActive }) {
  return <main tabIndex={-1} id="main" className="landing">
    <Hero active={active} setActive={setActive} />
    <Reveal as="section" id="tentang" tabIndex={-1} aria-labelledby="profil-title" className="section about">
      <div><Eyebrow>TENTANG NUSALINK</Eyebrow><h2 id="profil-title">Konektivitas yang memahami kondisi Indonesia.</h2></div>
      <div className="about-copy"><p>NusaLink adalah penyedia layanan internet satelit terkelola dan jaringan Wi-Fi komunitas untuk wilayah terpencil Indonesia. Kami memadukan konektivitas dari operator, perangkat jaringan, energi cadangan, dan dukungan operasional sesuai kebutuhan lokasi.</p><p className="about-note">Kami menggunakan kapasitas operator satelit, bukan membangun atau meluncurkan satelit sendiri.</p></div>
    </Reveal>
    <section id="solusi" className="section solutions home-solutions">
      <Reveal className="section-head"><div className="solution-intro"><Eyebrow>SOLUSI NUSALINK</Eyebrow><h2>Jauh dari kota.<br /><span>Dekat dengan peluang.</span></h2><p>Konektivitas lengkap, dikelola dari instalasi hingga operasional. Satu solusi yang menyesuaikan realitas di lapangan.</p></div><figure className="solution-scene"><img src="/assets/hero.webp" alt="Foto lanskap pesisir Mandalika, ilustrasi lingkungan kepulauan Indonesia" width="2400" height="1600" loading="lazy" /></figure></Reveal>
      <div className="technology-summary">{[[Satellite, 'Internet Satelit Terkelola', 'Akses internet untuk lokasi yang belum terjangkau jaringan darat.'], [Wifi, 'Wi-Fi Komunitas', 'Bagikan akses dengan Wi-Fi mesh dan software voucher.'], [Network, 'Hybrid Connectivity', 'Padukan satelit, seluler, dan fiber sesuai ketersediaan.'], [BatteryCharging, 'Energi Cadangan', 'Daya pendukung yang mengikuti kebutuhan serta kondisi lokasi.']].map(([Icon, title, description]) => <Reveal as="article" key={title}><Icon size={28} strokeWidth={1.2} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></Reveal>)}</div>
      <a className="text-link section-link" href="#/solusi">Jelajahi Solusi Teknologi <IconArrow /></a>
    </section>
    <section className="section home-advantages" aria-labelledby="advantages-title"><Reveal><Eyebrow>KEUNGGULAN LAYANAN</Eyebrow><h2 id="advantages-title">Satu rancangan.<br /><span>Dukungan berkelanjutan.</span></h2></Reveal><div className="solution-advantages">{advantages.map(([title, desc]) => <Reveal as="article" key={title}><h3>{title}</h3><p>{desc}</p></Reveal>)}</div></section>
    <SectorsCarousel />
    <section className="section contact-short"><div><Eyebrow>LANGKAH BERIKUTNYA</Eyebrow><h2>Mulai dengan paket yang tepat.</h2><p>Bandingkan layanan Rumah, Bisnis, dan Institusi & Komunitas, lalu coba konfigurasi kebutuhan Anda melalui pemesanan demo.</p></div><a className="button primary" href="#/paket">Lihat Paket & Harga <IconArrow /></a></section>
  </main>;
}
