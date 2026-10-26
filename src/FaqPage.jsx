import React, { useState } from 'react';
import { categories, extras, rupiah, connectionLabel, serviceNotes } from './catalog';
import { IconArrow } from './components';
import './faq.css';

const groups = [
  {
    id: 'layanan', title: 'Layanan & paket', questions: [
      {
        id: 'pilih-paket', question: 'Paket mana yang sesuai untuk kebutuhan saya?',
        answer: <><p>Pilih kategori berdasarkan penggunaan di lokasi Anda.</p><ul>{categories.map(category => <li key={category.id}><strong>{category.name}:</strong> {category.target}</li>)}</ul><p>Bandingkan kapasitas, jumlah perangkat, dan titik Wi-Fi di <a href="#/paket">Paket & Harga</a>.</p></>,
      },
      {
        id: 'layanan-bulanan', question: 'Apa saja yang termasuk dalam layanan bulanan?',
        answer: <><p>Layanan mencakup akses internet sesuai paket, penggunaan perangkat bawaan paket berstatus pinjaman, monitoring jaringan, serta dukungan operasional.</p><p>Bisnis mencakup dashboard monitoring dan segmentasi Wi-Fi tamu/staf. Institusi & Komunitas mencakup software voucher Wi-Fi, pembagian bandwidth, dan pelatihan operator lokal.</p><p>NusaLink mengintegrasikan konektivitas dari operator dengan jaringan di lokasi, bukan memiliki atau meluncurkan satelit sendiri. Lihat penjelasan di <a href="#/solusi">Solusi Teknologi</a>.</p></>,
      },
      {
        id: 'kecepatan', question: 'Apakah kecepatan selalu mencapai angka paket?',
        answer: <p>Tidak. Angka pada paket adalah kecepatan maksimum ilustratif, bukan jaminan kecepatan setiap saat. Kondisi jaringan operator, cuaca, lokasi, dan jumlah pengguna aktif dapat memengaruhi hasilnya. Jumlah perangkat adalah acuan perencanaan, bukan jaminan seluruh pengguna mendapat kecepatan maksimum bersamaan.</p>,
      },
      {
        id: 'kuota', question: 'Apakah ada batas kuota data?',
        answer: <><p>Paket organisasi memiliki alokasi data prioritas bulanan. Rumah menggunakan layanan residensial sesuai paket.</p><ul>{categories.filter(category => category.id !== 'rumah').map(category => <li key={category.id}><strong>{category.name}:</strong> {category.plans.map(plan => `${plan.name}: ${connectionLabel(plan)}`).join('; ')}.</li>)}</ul><p>{serviceNotes.priority}</p></>,
      },
    ],
  },
  {
    id: 'pemasangan', title: 'Biaya & pemasangan', questions: [
      {
        id: 'biaya-awal', question: 'Bagaimana total biaya awal dihitung?',
        answer: <><p>Total awal terdiri dari biaya pemasangan sekali bayar, layanan bulan pertama, dan perangkat tambahan yang Anda pilih. Bulan berikutnya mengikuti biaya bulanan paket.</p><p>Ringkasan di pemesanan demo menghitung pilihan tersebut secara otomatis. {serviceNotes.estimate} Instalasi khusus dan transportasi terpencil memerlukan penawaran terpisah.</p><p>Lihat rincian biaya pada <a href="#/paket">Paket & Harga</a>.</p></>,
      },
      {
        id: 'instalasi', question: 'Apa yang termasuk pemasangan standar?',
        answer: <><p>Pemasangan standar mencakup terminal satelit dan router pinjaman, kabel hingga 20 meter, serta konfigurasi jaringan. Jumlah titik Wi-Fi mengikuti paket.</p><p>Tiang khusus, pekerjaan sipil, kabel tambahan, dan transportasi lokasi terpencil belum termasuk. Kebutuhan ini dipastikan melalui survei dan penawaran terpisah.</p><p>Pelajari kesiapan lokasi di <a href="#/panduan">Panduan Pemasangan</a> atau lihat <a href="#/cara-kerja">alur layanan</a>.</p></>,
      },
      {
        id: 'perangkat', question: 'Apakah terminal dan router menjadi milik saya?',
        answer: <p>{serviceNotes.loan} {serviceNotes.extrasOwnership} Jumlah titik Wi-Fi dan kapasitas perangkat yang dilayani mengikuti paket yang Anda pilih.</p>,
      },
      {
        id: 'tambahan', question: 'Perangkat tambahan apa yang tersedia?',
        answer: <><p>Pemesanan demo menyediakan dua perangkat tambahan opsional yang dibeli pelanggan dengan biaya sekali bayar per unit:</p><ul>{extras.map(extra => <li key={extra.id}><strong>{extra.name} — {rupiah(extra.price)}.</strong> {extra.description}</li>)}</ul><p>Access point memperluas jangkauan Wi-Fi lokal, bukan otomatis menambah kapasitas internet. Panel surya dan rancangan energi khusus memerlukan penilaian lokasi; keduanya bukan pilihan perangkat tambahan standar pada demo.</p></>,
      },
    ],
  },
  {
    id: 'dukungan', title: 'Dukungan & demo', questions: [
      {
        id: 'bantuan-jaringan', question: 'Bagaimana dukungan jaringan diberikan?',
        answer: <><p>Penawaran layanan mencakup monitoring jaringan dan dukungan operasional Senin–Sabtu, pukul 08.00–17.00 WIB. Cakupan fitur tambahan mengikuti paket.</p><p>Untuk membahas kebutuhan atau pertanyaan layanan, buka <a href="#/kontak">Hubungi Kami</a>.</p></>,
      },
      {
        id: 'status-demo', question: 'Apakah layanan dan pemesanan ini sudah nyata?',
        answer: <><p>Belum. NusaLink merupakan konsep perusahaan untuk tugas kuliah. Harga dan pemesanan di website ini adalah simulasi, tanpa pembayaran atau pengiriman pesanan ke perusahaan.</p><p>Dashboard monitoring dan voucher Wi-Fi merupakan fitur penawaran konsep, belum berupa aplikasi operasional di website ini.</p></>,
      },
      {
        id: 'cara-demo', question: 'Bagaimana cara mencoba pemesanan demo?',
        answer: <><p>Mulai dari <a href="#/paket">Paket & Harga</a>, lalu pilih paket yang ingin dicoba.</p><ol><li>Atur paket dan perangkat tambahan pada tahap konfigurasi.</li><li>Isi data contoh pada tahap data pelanggan.</li><li>Tinjau ringkasan, lalu pilih Konfirmasi demo.</li></ol><p>Anda dapat kembali ke tahap sebelumnya untuk mengubah pilihan sebelum konfirmasi.</p></>,
      },
      {
        id: 'data-demo', question: 'Apakah data saya dikirim atau disimpan?',
        answer: <><p>Data formulir demo tidak dikirim ke perusahaan atau disimpan secara permanen oleh aplikasi.</p><p>Isian dan pilihan perangkat tambahan tetap tersedia saat berpindah paket atau halaman selama sesi halaman terbuka. Data hilang setelah refresh atau menutup halaman. Gunakan data contoh saat mencoba demo.</p></>,
      },
    ],
  },
];

function jumpToGroup(id) {
  const heading = document.getElementById('faq-group-' + id);
  if (!heading) return;
  heading.focus({ preventScroll: true });
  heading.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
}

export function FaqPage() {
  const [expanded, setExpanded] = useState(() => new Set());
  const toggle = id => setExpanded(current => {
    const next = new Set(current);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    return next;
  });

  return <main id="main" tabIndex={-1} className="faq-support">
    <div className="faq-shell">
      <header className="faq-intro"><p className="faq-eyebrow">BANTUAN NUSALINK</p><h1>Pertanyaan umum</h1><p>Temukan jawaban tentang layanan, pemasangan, dan pemesanan NusaLink.</p></header>
      <div className="faq-layout">
        <nav className="faq-topics" aria-label="Topik FAQ"><p>Jelajahi topik</p>{groups.map(group => <button type="button" key={group.id} onClick={() => jumpToGroup(group.id)}>{group.title}<span aria-hidden="true">↓</span></button>)}</nav>
        <div className="faq-questions">{groups.map(group => <section className="faq-group" key={group.id} aria-labelledby={'faq-group-' + group.id}>
          <h2 id={'faq-group-' + group.id} tabIndex={-1}>{group.title}</h2>
          <div className="faq-entries">{group.questions.map(item => {
            const open = expanded.has(item.id);
            return <div className={'faq-entry' + (open ? ' is-open' : '')} key={item.id}>
              <h3><button type="button" id={'faq-trigger-' + item.id} aria-expanded={open} aria-controls={'faq-answer-' + item.id} onClick={() => toggle(item.id)}><span>{item.question}</span><span className="faq-toggle" aria-hidden="true" /></button></h3>
              <div className="faq-answer" id={'faq-answer-' + item.id} aria-labelledby={'faq-trigger-' + item.id} hidden={!open}>{item.answer}</div>
            </div>;
          })}</div>
        </section>)}</div>
      </div>
      <section className="faq-help" aria-labelledby="faq-help-title"><div><h2 id="faq-help-title">Belum menemukan jawaban yang Anda cari?</h2><p>Bicarakan kebutuhan lokasi atau pertanyaan layanan melalui halaman kontak.</p></div><a className="button primary" href="#/kontak">Hubungi Kami <IconArrow /></a></section>
    </div>
  </main>;
}
