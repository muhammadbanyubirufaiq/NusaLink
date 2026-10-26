# Revisi lanjutan kontak dan sektor — 25 Oktober 2026

## Kondisi terbaru (menggantikan struktur kontak/sektor pada catatan sebelumnya)

- Halaman Hubungi Kami menggunakan desain kontak perusahaan: kartu WhatsApp, email, jam layanan, dan kantor. Nomor +62 8xx-xxxx-xxxx adalah placeholder; halo@nusalink.example dan lokasi Bandung adalah data contoh. Tidak ada kontak nyata atau pengiriman pesan yang diklaim.
- Tombol Chat WhatsApp memberikan penjelasan lokal bahwa nomor contoh perlu diganti sebelum tautan operasional diaktifkan. Tautan email memiliki skema mailto ke domain contoh. FAQ dan Paket & Harga tetap dapat dibuka.
- Sektor yang Dilayani hanya berada pada carousel beranda. Menu Tentang serta footer menggulir ke #/bagian/sektor dari halaman mana pun. Halaman grid sektor dan CTA Lihat seluruh sektor dihapus. Tautan lama #/sektor tetap membuka carousel beranda.
- Profil perusahaan, hero, harga, dan logika pemesanan tetap dipertahankan.

## Verifikasi revisi lanjutan

- Build produksi npm run build berhasil.
- Chrome desktop: tampilan kontak, empat kanal/informasi kontak, pemberitahuan tombol WhatsApp dan href mailto diperiksa.
- Menu sektor dari halaman kontak mengembalikan beranda, memfokuskan bagian sektor, dan menggulir aman di bawah navbar. Tujuh kartu tetap ada, tanpa grid sektor atau CTA duplikat. Refresh #/bagian/sektor berhasil.
- Chrome dalam iframe 390 × 844 (konten 375 px): kontak memiliki empat kartu dan tidak ada overflow horizontal. Menu sektor dari kontak juga membuka carousel dengan fokus bagian sektor, sekitar 104 px di bawah navbar setinggi sekitar 74 px.
- Rute baru serta kedua alias sektor lama diperiksa dengan assertion Node. Arsip diperiksa agar package.json langsung berada di root dan node_modules tidak ikut.
- Batas: uji mobile memakai iframe, bukan perangkat fisik. Pengiriman email/WhatsApp tidak diuji karena data contoh. Pengujian menyeluruh pemesanan dari revisi sebelumnya tidak diulang pada perubahan kontak/sektor ini.

---

# Riwayat revisi sebelumnya (sebelum perubahan kontak/sektor di atas)

# Revisi struktur dan pengujian NusaLink — 25 Oktober 2026

## Perubahan selesai

- Proyek dilanjutkan dari NusaLink-updated.zip, bukan dibuat ulang.
- Beranda: hero kategori, profil perusahaan asli setelah hero, empat ringkasan solusi dengan tautan ke penjelasan lengkap, keunggulan singkat, carousel tujuh sektor dengan tautan grid sektor, CTA Paket & Harga, dan footer.
- Isi serta desain profil dipertahankan, termasuk latar siluet Indonesia dan catatan kapasitas operator satelit.
- Navbar final: NusaLink | Layanan | Tentang | Bantuan | Hubungi Kami. Paket & Harga ditempatkan setelah pemisah pada dropdown Layanan. Bantuan hanya berisi FAQ dan Panduan Pemasangan.
- Enam halaman informasi: Solusi Teknologi, Sektor yang Dilayani, Cara Kerja, FAQ, Panduan Pemasangan, dan Hubungi Kami. Setiap halaman memiliki h1, navbar glass yang terbaca, footer yang sama, dan tautan kembali ke beranda.
- Konten lengkap solusi, lima tahap layanan, FAQ, panduan pemasangan dan ketentuan biaya dipertahankan atau diperjelas. Grid sektor memuat seluruh tujuh sektor dari data yang sama dengan carousel.
- Kontak menjelaskan status perusahaan fiktif dan ketiadaan kontak resmi, serta menautkan FAQ dan Paket & Harga. Tidak ada alamat, email, WhatsApp, pesan terkirim, atau formulir konsultasi rekaan.
- Routing hash mendukung refresh pada static hosting. Tautan profil dari halaman lain membuka beranda, memfokuskan bagian profil, dan menggulir dengan ruang aman dari navbar. Rute informasi lama tetap dikenali. Rute/paket/tahap tidak valid mendapat halaman tidak ditemukan.
- Kategori navbar membuka hero yang benar dari halaman mana pun. Preload/decode gambar, lapisan opacity/crossfade, penanganan target terakhir, lebar kartu aktif, dan tinggi hero dipertahankan.
- Geometri, animasi navbar, ambang scroll 80 px, glass, klik luar, Escape, responsive, fokus keyboard, dan CSS prefers-reduced-motion dipertahankan. Dropdown juga mendukung ArrowDown/ArrowUp, Home/End dan pengembalian fokus melalui Escape.
- Harga dan perangkat tambahan tetap bersumber dari src/catalog.js. Data pelanggan serta tambahan tetap berada pada state App saat mengubah paket atau berpindah halaman tanpa refresh.
- Validasi nomor telepon diperbaiki: tanda pemisah tanpa digit tidak lagi cukup; nomor memerlukan 9–15 digit, dengan format +, spasi, kurung dan tanda hubung yang didukung.
- Entry point dan App dipisah agar pembaruan kode saat pengembangan tidak membuat root React ganda.

## Pengujian yang benar-benar dilakukan pada revisi ini

### Build dan pemeriksaan proyek

- npm ci berhasil pada Node.js 24.22.1.
- npm run build menghasilkan build produksi Vite dengan sukses.
- Pemeriksaan rute, perhitungan biaya enam paket, aset lokal dan isi arsip dilakukan saat pengemasan. package.json berada langsung di root arsip, tanpa node_modules.

### Chrome desktop, viewport 1363 × 936

- Beranda, keenam halaman informasi, Paket & Harga, dan pemesanan dibuka di browser.
- Keenam halaman informasi serta Paket & Harga diuji refresh langsung. h1 tunggal, navbar floating, footer dan tautan beranda diperiksa. Tidak ditemukan overflow horizontal pada halaman-halaman tersebut.
- Back/forward browser diperiksa antara halaman kontak dan paket, serta kembali dari kategori ke halaman solusi.
- Profil diuji dari beranda dan halaman solusi; posisi bagian di bawah navbar dan fokus ke bagian profil diperiksa.
- 27 kombinasi kategori berhasil: Rumah/Bisnis/Komunitas dari beranda, masing-masing enam halaman informasi, halaman paket, dan konfigurasi pemesanan.
- Ketiga gambar hero termuat. Pergantian cepat enam kali berakhir pada kategori terakhir. Tinggi area kartu tetap 365 px dan hero tetap 936 px pada viewport uji. Lapisan gambar memakai transition opacity, dan gambar kategori terakhir mencapai opacity 1.
- Navbar transparan di atas hero, floating setelah scroll, serta tetap floating pada informasi/paket/pemesanan diperiksa.
- Dropdown klik, keyboard ArrowDown, End, Escape beserta fokus kembali, dan penutupan dengan klik di luar diperiksa. Pemisah Paket & Harga selebar 1 px diperiksa.
- Paket & Harga dibuka melalui dropdown Layanan. Keenam Basic/Plus membuka konfigurasi yang tepat dengan total awal tanpa tambahan: Rumah Basic Rp2.250.000; Rumah Plus Rp3.050.000; Bisnis Basic Rp4.750.000; Bisnis Plus Rp7.250.000; Komunitas Basic Rp5.000.000; Komunitas Plus Rp7.250.000.
- Rumah Plus + access point + UPS: total awal Rp4.950.000. Beralih ke Basic menghasilkan Rp4.150.000 dengan kedua tambahan tetap dipilih; kembali ke Plus memulihkan total Rp4.950.000.
- Form kosong ditolak. Nomor tanpa digit dicoba dan validasinya diperbaiki. Data contoh tetap ada setelah berpindah Basic/Plus; Instansi opsional untuk Rumah. Tinjau pesanan dan konfirmasi demo berhasil.
- Refresh konfirmasi menghapus state dan meminta kelengkapan data kembali; tombol konfirmasi tidak tersedia ketika data belum lengkap.

### Responsive dalam iframe Chrome

- Ukuran iframe 390 × 844 dan 320 × 844 diuji; lebar konten masing-masing 375 px dan 305 px karena scrollbar desktop.
- Hero, navbar, menu mobile, pemisah Paket & Harga dan kontak diperiksa secara visual.
- Semua enam halaman informasi dan Paket & Harga diperiksa pada kedua lebar; scrollWidth sama dengan clientWidth, tanpa overflow horizontal.
- Tombol Hubungi Kami di navbar 390 px serta tautan Hubungi Kami dalam menu pada 320 px berhasil membuka halaman kontak. Pada lebar di bawah 360 px tombol kanan tetap disembunyikan mengikuti desain awal; akses kontak tersedia dalam menu.
- Paket & Harga dibuka lewat dropdown Layanan mobile. Profil dari menu mobile diperiksa: bagian berada sekitar 104 px dari atas viewport, di bawah navbar sekitar 74 px.
- Sembilan kombinasi kategori mobile berhasil: tiga kategori masing-masing dari kontak, paket, dan konfigurasi pemesanan. Menu menutup dan hero yang sesuai terbuka di atas.
- Komunitas Plus + access point: total awal Rp7.900.000. Form kosong ditolak, Instansi wajib, data contoh valid berhasil ditinjau dan dikonfirmasi sebagai simulasi lokal. Konfigurasi tidak memiliki overflow horizontal.

## Keterbatasan verifikasi

- Pengujian responsive menggunakan iframe browser, bukan ponsel fisik atau emulasi perangkat lengkap. Touch gesture, virtual keyboard, Safari/iOS, Firefox dan screen reader penuh belum diuji.
- CSS reduced motion dan fallback tanpa backdrop-filter dipertahankan serta diperiksa pada sumber; pengaturan OS/browser berbeda belum disimulasikan.
- Tidak ada pengukuran FPS, simulasi jaringan lambat, atau pengujian beban. Gambar menunggu decode sebelum fade; waktu aktual tiap frame tidak diprofilkan.
- Build produksi berhasil, sedangkan pengujian UI menggunakan preview pengembangan lokal. Tidak ada deployment hosting publik dalam penyerahan ZIP ini.
- Website merupakan konsep tugas kuliah tanpa backend, pembayaran, pengiriman email, WhatsApp atau penerimaan pesanan oleh perusahaan. Dashboard monitoring dan software voucher merupakan fitur penawaran konsep, bukan aplikasi operasional terpisah.
- Data formulir hanya di memori selama sesi halaman terbuka. Refresh atau menutup tab menghapus data dan tambahan; ini disengaja dan dijelaskan pada UI.

## Aset

Tiga foto hero kategori merupakan ilustrasi fotorealistis AI 1536 × 1024 yang sudah ada di proyek terakhir, disimpan WebP. Foto sektor dan ilustrasi lainnya dipertahankan. Tidak ada aset baru yang mengklaim sebagai dokumentasi pelanggan atau instalasi nyata. Sumber visual yang tercatat pada proyek sebelumnya tetap dicantumkan di README.md.
