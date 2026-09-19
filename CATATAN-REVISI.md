# Catatan revisi visual NusaLink

## Referensi dan batas observasi

Halaman https://www.starlink.com dapat dibuka melalui browser pada sesi ini.
Hero menunjukkan headline besar di kiri, foto luas dengan subjek perangkat di kanan,
CTA primer solid dan aksi sekunder lebih ringan. Galeri menggunakan gambar beradius,
teks di latar section, panah navigasi dan aksen kontur. Tombol galeri kanan sempat
Dioperasikan, tetapi sebagian gambar galeri belum tampil saat pengambilan tampilan.
Tidak dilakukan audit seluruh interaksi, breakpoint, atau animasi Starlink. Tidak ada
screenshot referensi tambahan dalam lampiran yang tersedia; hanya ZIP NusaLink.
Tidak ada aset, logo, teks, atau dependency yang diambil dari Starlink.

## Perbedaan source awal dan perubahan

- Source awal memiliki banyak deklarasi CSS bertumpuk. Stylesheet dikonsolidasikan
  menjadi aturan dasar, komponen, dan breakpoint yang lebih mudah diedit.
- Hero mempertahankan pesan dan foto semula. Headline, lebar paragraf, jarak CTA,
  overlay bertingkat dan framing foto disesuaikan; hover zoom foto dihapus.
- Satu sistem kontainer maksimum 1280px dan gutter responsif menyelaraskan hero,
  heading, foto pertama, isi section, navbar, dan footer.
- Navbar tetap transparan pada posisi atas, kemudian menjadi panel kaca mengambang
  setelah scroll 80px. Menu mobile mencakup tablet sempit; Escape mengembalikan fokus
  ke tombol, dan menu ditutup ketika berpindah ke lebar desktop.
- Solusi utama memakai komposisi foto/teks terbuka. Layanan lain menggunakan garis
  pemisah, bukan kotak bertingkat. Isi dan seluruh fakta layanan dipertahankan.
- Galeri tetap tujuh sektor, sekitar 2,5 item desktop, 1,5 tablet, dan 1,12 mobile.
  Rasio foto 4:3, radius 16px, posisi crop per aset, nomor/judul sejajar, tanpa panel.
  Panah bergerak satu item, tombol dinonaktifkan di batas, keyboard mendukung panah,
  Home/End. Native touch scroll, drag mouse dan snap tetap tersedia. Intersepsi wheel
  dihapus agar scroll vertikal tidak diambil alih; tidak ada autoplay.
- Mask kontur lama menggunakan warna gelap yang melemahkan garis. Diganti mask
  luminans putih/hitam dengan 22 kurva organik, stroke 1px, opacity 14%, tepi memudar
  dan intensitas berkurang di belakang heading. SVG dekoratif tidak menerima klik.
- Reveal sekali masuk viewport memakai perpindahan 12px / 500ms; konten terlihat
  secara default sehingga IntersectionObserver gagal pun tidak menyembunyikan teks.
  Reduced-motion berlaku pada CSS dan perintah scroll carousel. Animasi berulang dihapus.
- Timeline disederhanakan menjadi vertikal pada tablet/mobile. Form mobile satu kolom,
  input 16px, area sentuh minimal 44px, placeholder lebih terang. Validasi kontak
  diperiksa juga saat submit melalui keyboard. Form tetap demo tanpa backend.

## Verifikasi yang benar-benar dilakukan

- `pnpm install --frozen-lockfile`: berhasil memasang dependency dari lockfile asli.
- `pnpm build`: berhasil, Vite 6.4.3; 1580 modul ditransformasi.
- Bundle akhir: CSS 21,60 kB; JS 217,56 kB (68,27 kB gzip).
- Semua aset lokal, data sektor/layanan, package.json, lockfile dan konfigurasi Vite
  dibandingkan byte per byte dengan ZIP asal: tidak berubah.
- Tujuh sektor dan tujuan anchor literal diperiksa: lengkap dan sesuai.
- Tidak menambah package, font, backend, API, atau gambar eksternal.
- `pnpm dev` dengan host 0.0.0.0 menemui keterbatasan runtime
  `uv_interface_addresses`. Percobaan host 127.0.0.1 menampilkan status Vite ready,
  namun koneksi HTTP lanjutan tidak berhasil. Ini bukan klaim preview interaktif lulus.
- Browser terhubung menolak alamat loopback dan tidak dapat mengakses server lokal.
  Pemeriksaan visual proyek 1440px, 768px, 390px belum dapat dilakukan. Kontras,
  cropping, overflow, navbar sebelum/sesudah scroll, menu, interaksi carousel sampai
  item terakhir, swipe/drag, fokus keyboard dan form diperiksa dari source saja;
  hasil render dan perilaku aktual belum diverifikasi melalui browser.

## Pemeriksaan lanjutan saat dibuka lokal

Pada lebar 1440, 768 dan 390px: periksa framing hero, heading tidak tertutup navbar,
foto pertama sejajar heading, lanjutkan carousel sampai Tanggap bencana dan kembali
ke awal, uji drag/touch dan Home/End, serta pastikan halaman tidak bergeser horizontal.
Coba Tab, Escape pada menu mobile, validasi form kosong/kontak tidak valid, lalu
submit menggunakan data contoh dan pastikan hanya status demo yang muncul.

ZIP berisi proyek lengkap; node_modules, dist dan .git tidak disertakan. package.json
berada langsung di akar ZIP agar folder kerja setelah ekstraksi tidak membingungkan.

## Tambahan siluet Indonesia

Siluet SVG dekoratif buatan khusus ditambahkan sebagai aset lokal
`public/assets/indonesia-silhouette.svg`. Bentuk kepulauan disederhanakan;
bukan peta batas administratif atau cakupan layanan. Diletakkan di belakang
teks kanan section Tentang, lebar maksimal 650px, teal dengan opacity 7,5%,
tepi memudar. Tidak menerima klik dan tidak masuk pohon aksesibilitas karena
berupa background CSS. Disembunyikan pada lebar hingga 600px agar teks mobile
tetap bersih. Tidak ada package tambahan. Build ulang berhasil; pemeriksaan
visual browser tetap belum tersedia sebagaimana batas verifikasi di atas.

## Revisi animasi terbaru

Reveal diganti menjadi fade-in 0–100% dan geser 20px selama 550ms, sekali
saat masuk viewport. Hero memiliki urutan masuk teks dengan jeda 40–180ms.
Solusi, layanan pendukung, langkah proses, kartu sektor dan form diamati
secara terpisah sehingga blok bagian bawah tidak selesai beranimasi sebelum
pengguna melihatnya. Animasi seluruh section panjang dihapus.
Konten terlihat secara default bila observer gagal. Reduced-motion mematikan
animasi; fokus keyboard pada blok menghentikan animasi dekoratif.
Peta tetap statis. Build ulang berhasil; preview browser belum terverifikasi.

## Penggantian hero Mandalika (revisi terbaru)

Sesuai pilihan pengguna, hero.webp diganti foto Afif Ramdhasuma, Unsplash
VLZWdtcTyNk. Gambar diunduh sebagai WebP lebar 2400px dan disimpan lokal;
tidak menggunakan hotlink. Foto asli sudah diperiksa secara visual.
Crop desktop 60% 55%, mobile 60% center; overlay navy diperkuat di area
teks agar laut/bukit tetap terbaca di kanan. Alt text dan kredit diperbarui.
Ini menggantikan keterangan sebelumnya mengenai foto hero yang dipertahankan.
Animasi hasil revisi terakhir tetap ada. Build ulang berhasil; render halaman
desktop/mobile belum diverifikasi melalui browser.
