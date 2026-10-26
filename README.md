> **Perubahan navbar terbaru:** halaman selain landing memakai navbar normal yang ikut tergulir keluar layar. Floating landing tetap dipertahankan. Lihat [pemeriksaan navbar dokumen](docs/VERIFIKASI-NAVBAR-DOKUMEN.md).

> **Pembaruan aktif:** harga simulasi baru, kategori **Institusi & Komunitas**, dan navbar floating khusus landing page. Data terpusat di `src/catalog.js`; mode navbar di `src/navbar-modes.css`. Lihat [verifikasi harga, kategori, dan navbar](docs/VERIFIKASI-HARGA-KATEGORI-NAVBAR.md).

> Pembaruan terbaru: halaman Paket & Harga telah dirapikan. Komponen: `src/PlansPage.jsx`, CSS: `src/plans.css`, data tetap `src/catalog.js`. Lihat [hasil verifikasi Paket & Harga](docs/VERIFIKASI-PAKET-HARGA.md).

> Pembaruan warna terbaru: latar `#071019`, footer `#050C13`, dan warna pendukung terpusat di `src/theme.css`. Layout, isi, foto, serta fungsi tetap dipertahankan. Lihat [verifikasi tema](docs/VERIFIKASI-TEMA.md) untuk pemeriksaan dan batas verifikasinya.

# NusaLink — Pemesanan Demo / Navy Gelap

React 19 + Vite. Konsep perusahaan internet satelit terkelola dan Wi-Fi komunitas untuk tugas kuliah. Revisi terbaru menyempurnakan pemesanan Rumah, Bisnis dan Komunitas. Desain landing dan halaman informasi, kategori, isi paket, harga serta navbar/footer dipertahankan.

## Menjalankan

Gunakan Node.js 22 atau lebih baru (diuji dengan Node.js 24.22.1).
Ekstrak ZIP dan buka terminal pada folder yang berisi `package.json`:

```sh
npm ci
npm run dev
```

Buka http://localhost:4173.

```sh
npm run build
npm run preview
```

Build produksi berada di `dist/`. Jangan membuka `index.html` lewat `file://`.
Hosting statis menggunakan isi folder `dist/` di root domain. Navigasi hash mendukung refresh deep link tanpa rewrite server.

## Revisi terbaru: pemesanan Rumah, Bisnis dan Komunitas

Buka Paket & Harga dan pilih paket, atau langsung http://localhost:4173/#/pesan/rumah-plus.

- Satu komponen untuk enam paket dan tiga tahap: konfigurasi → data pelanggan → tinjau/konfirmasi demo.
- Pilihan paket native radio, spesifikasi dari katalog yang sama, tambahan opsional, dan keadaan aktif yang jelas.
- Ringkasan membedakan pemasangan/tambahan sekali bayar, bulan pertama, total awal, dan bulan berikutnya. Bulan pertama tercantum sebagai bagian total awal.
- Desktop memakai konfigurasi di kiri dan ringkasan di kanan. Sticky hanya aktif saat ringkasan muat pada tinggi layar; pada layar pendek dan mobile ringkasan mengikuti alur halaman.
- Formulir memakai label, autocomplete, keyboard email/tel, pesan per kolom, ringkasan kesalahan dan fokus ke kolom yang perlu diperbaiki. Instansi opsional untuk Rumah dan wajib untuk Bisnis/Komunitas.
- Data dan tambahan tetap ada saat kembali mengedit atau mengganti kategori/paket. Tier Basic/Plus dipertahankan saat berganti kategori. Seluruh tambahan katalog saat ini tersedia untuk semua kategori.
- Draft hanya dalam memori halaman, hilang setelah refresh. Konfirmasi hanya membuat ringkasan lokal; tidak ada pembayaran, pesanan, email atau penjadwalan nyata.
- CSS dibatasi pada `.booking-page`. Tidak ada aset/foto/dependensi baru.

Source utama: `src/OrderPage.jsx`, `src/order.css`, `src/orderValidation.js`. Harga tetap di `src/catalog.js`. `experience.jsx` mengekspor komponen Order baru; `App.jsx` mempertahankan fokus/scroll pada perubahan paket dalam tahap pemesanan yang sama.

Pengujian otomatis tanpa dependensi tambahan:

```sh
node --test tests/order.test.mjs
```

Rincian hasil uji browser, contoh perhitungan dan batas verifikasi: **docs/VERIFIKASI-PEMESANAN.md**. Build produksi sudah tersedia di `dist/`; pemeriksaan browser dilakukan pada server pengembangan Vite.

## Revisi sebelumnya: Cara Kerja lebih clean

Buka **Tentang → Cara Kerja** atau http://localhost:4173/#/cara-kerja.

- Pembuka satu kolom, judul lebih tegas dan pengantar pendek. Lima tahap tetap terbuka dalam satu grid baca yang konsisten.
- Judul tahap dipersingkat. Label hasil berulang dihapus; peran pelanggan, tindakan tim dan keputusan tahap dirangkai dalam paragraf.
- Ukuran dan bobot heading diperkuat, jumlah variasi tipografi dikurangi, garis pemisah dibuat halus. Mobile menggunakan lebar paragraf penuh, tanpa indentasi kolom nomor.
- Satu tombol utama Paket & Harga, dengan Hubungi Kami sebagai tautan pendamping. Tautan Solusi Teknologi dan Panduan Pemasangan tetap tersedia.
- Tidak ada foto, ilustrasi generation, font, dependensi atau aset baru. Identitas navy/ivory/mint dan halaman lain dipertahankan.

Source: `src/HowItWorks.jsx` dan `src/how-it-works.css`. CSS dibatasi pada `.service-journey`. Rincian uji serta batas verifikasi ada di **CATATAN-REVISI.md**.

## Revisi sebelumnya: Hubungi Kami

Buka **Hubungi Kami** melalui navbar atau http://localhost:4173/#/kontak.

- WhatsApp menjadi tindakan utama; email menjadi pilihan pendamping. Nomor/email mudah dipilih dan memiliki tombol salin dengan status aksesibel.
- Jam layanan dekat kanal kontak. Konteks kebutuhan dan tautan FAQ/Panduan/Paket disajikan ringkas. Tidak ada formulir, alamat kantor, peta atau foto.
- Tombol Chat WhatsApp dan Kirim Email membuka dialog ilustratif. Native dialog membuat latar inert, ditambah penguncian Tab dua arah, tombol tutup, Escape serta pemulihan fokus ke pemicu. Tidak menghubungi nomor atau alamat email nyata.
- Keterangan kontak ilustratif muncul satu kali pada bagian bawah isi halaman. Footer lama dipertahankan.
- Source baru: `src/ContactPage.jsx`, `src/contact.css`, `src/contactConfig.js`. `Information.jsx` hanya mengganti komponen kontak lama dan wiring rutenya. CSS baru dibatasi pada `.contact-hub`.

### Mengganti konfigurasi kontak

Edit **src/contactConfig.js**. Nomor tampilan, email, teks tombol, jam layanan dan catatan berada pada objek `contactConfig`. Nilai awal adalah data ilustratif yang ditentukan untuk desain: **bukan verifikasi kepemilikan** domain, kotak masuk atau nomor.

Biarkan `mode: 'illustrative'` dan `verified: false` untuk proyek tugas kuliah. Semua tombol komunikasi tetap dialog tanpa tautan eksternal. Jika kelak data operasional dan kepemilikan kedua kanal telah diverifikasi, perbarui nomor/email, lalu ubah menjadi `mode: 'operational'` **dan** `verified: true`. Kedua syarat harus terpenuhi; mengubah satu saja tidak mengaktifkan tautan. Fungsi `contactHref` membentuk WhatsApp dari nomor lokal (0 awal diubah menjadi 62) dan mailto dari email. Dialog diganti tautan hanya pada mode tersebut. Tidak diperlukan perubahan layout.

Pengujian dan keterbatasan clipboard/browser dicatat dalam CATATAN-REVISI.md. Tidak ada aset visual baru.

## Revisi sebelumnya: Panduan lebih clean

Ilustrasi pembuka, sidebar, label peran berulang, panah daftar isi dan garis per item dilepas. Judul desktop memakai satu baris, daftar isi menjadi horizontal, dan semua bagian memakai alignment judul/pengantar di kiri serta isi di kanan. Mobile menjadi satu kolom. Enam langkah tetap utuh; nomor, lebar baca dan spacing diseragamkan. Cakupan instalasi tetap terbuka.

Hanya InstallationGuide.jsx dan installation.css berubah pada source aplikasi. Tidak ada aset baru; SVG sebelumnya sudah dilepas. Jalankan `npm ci` lalu `npm run dev`, buka http://localhost:4173/#/panduan. Lihat CATATAN-REVISI.md untuk pemeriksaan terbaru.

## Revisi sebelumnya: Panduan Pemasangan

Buka **Bantuan → Panduan Pemasangan** atau `http://localhost:4173/#/panduan`.

- Pembuka ringkas dengan ilustrasi SVG umum terminal → router → jaringan Wi-Fi. Ilustrasi dibuat dengan kode, bukan foto atau gambar hasil generation; tidak mewakili model perangkat tertentu.
- Daftar isi empat bagian: Persiapan, Proses pemasangan, Setelah pemasangan, Bantuan. Klik/Enter memfokuskan judul tujuan tanpa mengganti rute; offset memperhitungkan navbar. Mobile memakai pintasan di atas isi.
- Pembagian peran jelas: pelanggan menyiapkan lokasi, teknisi menjalankan enam tahap pemasangan, lalu pelanggan memeriksa hasil bersama teknisi. Tidak ada checklist interaktif yang mengklaim pekerjaan nyata sudah selesai.
- Cakupan standar mengikuti proyek: terminal/router pinjaman, kabel hingga 20 meter dan konfigurasi. Kebutuhan khusus tetap melalui survei dan penawaran terpisah.
- Pemeriksaan awal terbatas pada daya, kabel yang aman dijangkau, dan Wi-Fi. Reset pabrik, pembongkaran, pekerjaan listrik dan akses atap diarahkan ke teknisi.
- Seluruh isi inti langsung terbaca. Penutup menyediakan satu CTA Hubungi Kami, dengan tautan FAQ pada bagian bantuan.

Source ada di `src/InstallationGuide.jsx` dan `src/installation.css`. CSS hanya berlaku dalam `.installation-manual`. `Information.jsx` mengarahkan rute panduan ke komponen baru; empat ringkasan panduan lama di `data.js` digantikan isi yang lebih lengkap. Tidak ada foto atau dependensi baru. Rincian pemeriksaan dan keterbatasan ada di **CATATAN-REVISI.md**.

## Revisi sebelumnya: FAQ

Buka **Bantuan → FAQ** atau `http://localhost:4173/#/faq`.

- Dua belas pertanyaan dalam tiga topik: Layanan & paket, Biaya & pemasangan, Dukungan & demo. Navigasi topik melompat ke judul tanpa mengubah rute.
- Desktop memakai navigasi samping dan kolom baca terukur. Mobile memakai pintasan topik di atas daftar, dengan baris pertanyaan penuh yang nyaman disentuh.
- Accordion dapat dibuka bersamaan; kontrol native button mendukung Enter, Space, `aria-expanded`, `aria-controls`, fokus mint dan ikon plus/minus. Jawaban tidak dianimasikan tingginya sehingga konten panjang tidak terpotong.
- Jawaban langsung, tautan ke halaman terkait, status demo yang dipusatkan pada topik relevan, dan biaya tambahan dari katalog yang sama dengan pemesanan.
- CSS baru hanya berlaku dalam `.faq-support`. Tidak ada foto, font, atau aset baru. Referensi Starlink desktop diamati langsung; tampilan mobile referensi tidak dapat diperiksa karena framing ditolak.

Source FAQ ada di `src/FaqPage.jsx` dan `src/faq.css`. `Information.jsx` hanya mengarahkan rute FAQ ke komponen tersebut; data FAQ lama di `data.js` dihapus agar tidak ada dua sumber isi. Rincian pengujian dan keterbatasan ada di **CATATAN-REVISI.md**.

## Revisi sebelumnya: komposisi Solusi Teknologi

Buka **Tentang → Solusi Teknologi** atau rute `#/solusi`.

- Pembuka dua kolom dengan judul dua baris, foto pesisir yang lebih seimbang, dan detail sekunder yang dikurangi.
- Bagian satelit menggunakan ilustrasi perangkat SVG yang disederhanakan dan alur berlabel tanpa ikon berulang; pada mobile alur disusun vertikal.
- Wi-Fi Komunitas memakai foto lebar, penjelasan dan alur distribusi yang rapat. Diagram hybrid memakai bidang terbuka; foto energi dan teks diseimbangkan.
- Pengelolaan menjadi kolom tipografi terbuka, lalu CTA paket/kontak dalam penutup yang lebih ringkas.
- Navy `#0B1B27`, ivory `#F4F3EE`, mint `#80CDBB`, font Barlow serta footer navy `#06121B` mengikuti landing page.

Hanya `src/SolutionsTechnology.jsx`, `src/solutions.css` dan ilustrasi baru `public/assets/network-equipment.svg` yang berubah pada aplikasi. Isi teknis, foto, landing, halaman lain, navbar/footer, kategori, harga, dan pemesanan dipertahankan. Sumber/ketentuan aset ada di **ASSETS.md**, rincian pengujian serta keterbatasan ada di **CATATAN-REVISI.md**.

## Isi revisi landing sebelumnya

- Font Barlow lokal, berlisensi SIL OFL; bukan klaim penggunaan font Starlink.
- Palet terbaru sesuai pratinjau navy lebih gelap: background `#0B1B27`, footer `#06121B`, teks ivory `#F4F3EE`, teks pendukung `#B5C5CF`, dan aksen mint `#80CDBB`.
- Foto nyata untuk tiga kategori hero dan tanggap bencana; aset foto dimuat lokal.
- Hero tetap memakai preload/decode, lapisan opacity, kartu aktif melebar, dan tinggi stabil.
- Navbar tetap transparan dengan teks putih di atas hero dan menjadi floating glass navy dengan teks ivory ketika scroll melebihi 80 px.
- Profil, ringkasan solusi, keunggulan, carousel dan CTA berlatar navy gelap; tombol memakai ivory `#E7EEE9` dengan teks navy, dan footer memakai navy lebih dalam. Hero tetap memakai foto nyata dan kartu glass bertint navy.
- Susunan profil dua kolom, ringkasan solusi dengan foto lanskap, keunggulan, carousel, CTA dan footer dipertahankan dari revisi estetika sebelumnya.
- Mobile memakai kartu vertikal aktif dengan tinggi area tetap, kontrol sentuh, dan tata letak tersendiri.

## Peta source

| File | Peran |
| --- | --- |
| `src/landing.css` | Penyempurnaan visual beranda, font lokal, navbar dan footer bersama |
| `src/Home.jsx` | Urutan konten beranda yang dipertahankan; foto tambahan di bagian solusi yang sudah ada |
| `src/experience.jsx` | Hero, navbar, paket dan footer; mengekspor Order dari komponen baru |
| `src/catalog.js` | Sumber data kategori, paket, harga dan perhitungan; tidak berubah |
| `src/data.js` | Sektor, keunggulan dan data alur lama; tidak diubah pada revisi Cara Kerja |
| `src/navigation.js` | Routing dan fokus; tidak berubah |
| `src/Information.jsx` | Pengarah halaman informasi, termasuk Cara Kerja baru |
| `src/FaqPage.jsx` | Konten FAQ, navigasi topik dan accordion; harga tambahan dari katalog |
| `src/faq.css` | Gaya FAQ yang dibatasi dalam `.faq-support` |
| `src/InstallationGuide.jsx` | Panduan pemasangan terkelola dan daftar isi |
| `src/installation.css` | Gaya panduan dalam `.installation-manual` |
| `src/ContactPage.jsx` | Halaman kontak, dialog dan fungsi salin |
| `src/contactConfig.js` | Satu sumber konfigurasi kontak dan penjaga tautan operasional |
| `src/contact.css` | Gaya kontak dalam `.contact-hub` |
| `src/OrderPage.jsx` | Konfigurasi, formulir, tinjauan, konfirmasi dan ringkasan biaya bersama |
| `src/order.css` | Gaya pemesanan dalam `.booking-page` |
| `src/orderValidation.js` | Validasi bersama untuk formulir dan penjaga konfirmasi |
| `tests/order.test.mjs` | Uji otomatis harga, tambahan, rute dan validasi |
| `src/HowItWorks.jsx` | Lima tahap perjalanan layanan dan hasil setiap tahap |
| `src/how-it-works.css` | Gaya Cara Kerja dalam `.service-journey` |

## Rute

Beranda `#/`; kategori hero `#/layanan/rumah`, `#/layanan/bisnis`, `#/layanan/komunitas`; profil `#/bagian/tentang`; sektor `#/bagian/sektor`; solusi `#/solusi`; cara kerja `#/cara-kerja`; FAQ `#/faq`; panduan `#/panduan`; kontak `#/kontak`; paket `#/paket`; contoh pemesanan `#/pesan/rumah-plus`.

Semua harga dan pemesanan adalah simulasi lokal. Tidak ada pembayaran, pengiriman data, atau pesanan nyata. Kontak memakai data ilustratif yang ditentukan untuk desain; tautan komunikasi eksternal dinonaktifkan pada konfigurasi awal. Foto stok hanya ilustrasi lingkungan/sektor, bukan pelanggan, cakupan, instalasi atau mitra NusaLink.

Lihat **ASSETS.md** untuk sumber dan ketentuan foto/font; **CATATAN-REVISI.md** untuk perubahan, hasil uji, dan batas verifikasi. Catatan lama dipertahankan di `docs/RIWAYAT-REVISI-SEBELUMNYA.md` sebagai riwayat, bukan kondisi aset terbaru.
