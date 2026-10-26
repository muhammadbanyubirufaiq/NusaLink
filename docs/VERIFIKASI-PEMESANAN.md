> Catatan pengujian tahap sebelumnya. Harga, nama kategori, dan perilaku navbar aktif mengacu pada [pembaruan terbaru](VERIFIKASI-HARGA-KATEGORI-NAVBAR.md).

# Verifikasi pemesanan NusaLink

Tanggal: 26 Oktober 2026. Ruang lingkup: Rumah, Bisnis dan Komunitas, paket Basic/Plus, seluruh tahap pemesanan demo.

## Hasil implementasi

Satu komponen `OrderPage.jsx` digunakan oleh seluruh kategori. Data paket, harga, spesifikasi, tambahan dan perhitungan tetap berasal dari `catalog.js`, yang tidak diubah. `experience.jsx` menggantikan Order lama dengan ekspor komponen baru. Navbar, hero, Paket & Harga dan footer identik pada perbandingan byte dengan ZIP sebelumnya. Source/aset halaman lain juga identik.

CSS baru hanya berlaku dalam `.booking-page`: navy #0B1B27, ivory #F4F3EE, mint #80CDBB, font Barlow lokal; footer #06121B tetap. Pilihan layanan, perangkat/pemasangan dan tambahan disusun pada bidang terbuka dengan pemisah halus. Radio dan checkbox native memiliki label klik yang luas. Tidak ada foto, panel glass, formulir bertingkat tambahan, atau dependensi baru.

Ringkasan menguraikan pemasangan sekali bayar, setiap tambahan sekali bayar, layanan bulan pertama, total awal, dan layanan bulanan berikutnya. Keterangan bulan pertama berada tepat di bawah total. Biaya khusus tetap memerlukan survei/penawaran, tanpa pajak/diskon/pengiriman baru.

Sticky memakai batas tinggi aktual melalui ResizeObserver. Ringkasan hanya sticky bila seluruh tingginya muat, dan hanya pada desktop >900 px. Pada layar pendek/mobile posisi static, tanpa sticky bar, tanpa scroll internal panel. Sticky terikat batas konten sebelum footer.

Alur tetap konfigurasi → data → tinjau/konfirmasi demo. Basic/Plus dipertahankan saat kategori diganti; kedua tambahan saat ini berlaku untuk semua kategori dan tetap dipilih saat berganti paket. State pelanggan/tambahan berada di App selama halaman terbuka. App hanya melewati reset fokus/scroll untuk pergantian paket/kategori pada tahap pemesanan yang sama; perpindahan tahap/halaman tetap memakai navigasi sebelumnya.

Validasi bersama digunakan pada submit dan sebelum konfirmasi. Nama minimal dua karakter setelah trim, email lengkap, telepon 9–15 digit dengan format yang diizinkan, alamat wajib, Instansi wajib pada Bisnis/Komunitas. Isian salah memiliki pesan dan aria-invalid/aria-describedby. Ringkasan kesalahan dapat memfokuskan input. Data benar tidak dihapus. Form memakai autocomplete, type=email/tel dan inputmode yang sesuai. Tidak ada penyimpanan permanen atau pengiriman jaringan baru.

## Referensi yang benar-benar diamati

Tiga screenshot pengguna dipelajari: Service Plans, Order Residential, serta instalasi/aksesori dan ringkasan di kanan.

Starlink dibuka langsung di Chrome desktop sebelum jeda. Dari isian lokasi pada hero dipilih landmark publik Monumen Nasional Jakarta, tanpa data pribadi. Halaman yang terlihat: https://starlink.com/order?step=0. Diamati dua area konfigurasi/ringkasan, pilihan Mini/Standard, detail biaya yang dapat dibuka, biaya bulanan terpisah dari sekali bayar, dan pembaruan total setelah Router Mini dipilih/dibatalkan. Pemilihan Standard juga memperbarui perangkat dan total. Screenshot saat menuju aksesori menunjukkan bagian atas ringkasan ikut bergeser; tidak diklaim bahwa seluruh panel selalu menetap di atas layar.

Tidak menekan Checkout, mengisi identitas pelanggan atau memasuki pembayaran. Nilai harga/ketentuan Starlink tidak dipakai pada NusaLink. Referensi mobile dicoba dalam bingkai 390 × 844, tetapi situs menolak framing (“refused to connect”). Versi mobile referensi tidak diamati. Sticky bersyarat dan alur mobile NusaLink adalah keputusan adaptasi, diuji pada hasil proyek sendiri.

## Pengujian browser yang selesai sebelum jeda

- CTA hero Rumah, Bisnis dan Komunitas masing-masing membuka Basic pada kategori aktif.
- Enam tombol dari Paket & Harga membuka paket yang tepat, termasuk seluruh Plus.
- Untuk setiap paket: tanpa tambahan → access point → kedua tambahan → UPS saja → tanpa tambahan. Total diperiksa pada setiap perubahan, termasuk pembatalan (30 pemeriksaan UI); biaya bulanan sesuai katalog.
- Form Rumah kosong dan berisi spasi ditolak. Nama pendek/spasi, email tidak lengkap dan telepon salah format ditolak. Isian nama yang benar tetap ada saat kolom lain salah.
- Instansi opsional untuk Rumah, wajib dan menolak spasi pada Bisnis/Komunitas. Review dan konfirmasi lokal ketiga kategori berhasil dengan data contoh.
- Data tetap ada saat Ubah data/Ubah konfigurasi. Pergantian Rumah Plus → Bisnis Plus → Komunitas Plus mempertahankan kedua tambahan dan data pelanggan. Review menampilkan nilai email/telepon contoh yang sama; pembacaan input melalui alat browser kadang disamarkan sehingga perbandingan nilai input mentah tidak dipakai sebagai bukti.
- Refresh pada konfirmasi mengosongkan draft/tambahan. Deep link konfirmasi tanpa data menampilkan arahan melengkapi data dan tidak menyediakan Konfirmasi demo. Back/forward antara data dan tinjauan kembali ke tahap yang benar.
- Enam konfigurasi pada nominal mobile 390 memiliki scrollWidth = clientWidth 375 px, radio aktif sesuai paket, dan tidak ditemukan overflow teks/kontrol yang diperiksa.

## Kelanjutan QA dan regresi akhir

Perubahan workspace diperiksa terlebih dahulu. Git status/diff tidak tersedia karena folder bukan repository Git. Hash baseline dan ZIP Cara Kerja sebelumnya mengonfirmasi hanya App.jsx/experience.jsx yang berubah pada source lama; berkas pemesanan baru tetap ada. Development server yang berhenti dijalankan kembali. Pekerjaan sebelumnya tidak diulang dari nol.

- Mobile Bisnis Plus 390: konfigurasi, tambahan dipilih dan dibatalkan, total Rp7.900.000 dengan access point, formulir kosong, fokus ke kesalahan pertama, data valid, alamat panjang, tinjauan, Ubah data, serta konfirmasi selesai diperiksa.
- Mobile Komunitas 320: Basic dan Plus dipilih; dengan access point total masing-masing Rp5.650.000 dan Rp7.900.000. Instansi kosong ditolak, data lain dipertahankan. Data valid, tinjauan dan konfirmasi selesai diperiksa.
- Mobile Rumah Plus 320: Instansi kosong tetap opsional. Email tidak lengkap dan telepon delapan digit ditolak. Setelah diperbaiki, tinjauan dan konfirmasi selesai berhasil. Fokus akhir menuju heading sukses; ringkasan static. Total tanpa tambahan Rp3.050.000.
- Screenshot mobile mencakup pilihan paket, formulir valid/tidak valid, tinjauan dan ringkasan. Paragraf, heading, tombol, tautan serta alamat panjang diperiksa; pada 390/320 scrollWidth = clientWidth 375/305 px. Tidak ditemukan overflow horizontal.
- Atribut keyboard diperiksa: email memakai type/inputmode=email, nomor memakai type/inputmode=tel, autocomplete name/email/tel/organization/street-address. Ukuran font input 16 px. Keyboard virtual/ponsel fisik tidak tersedia.
- Desktop pendek nominal 1024 × 600, lebar isi 1009: dengan dua tambahan, ringkasan konfigurasi/data sekitar 745 px dan tinjauan 774 px. Posisi static dan overflow visible; tombol serta tautan dapat dijangkau dengan scroll/keyboard. Tidak ada panel yang memotong isi atau menutupi footer.
- Desktop tinggi nominal 1920 × 1080: ringkasan dua tambahan sekitar 728 px dan sticky. Pada scrollTop 404, bagian atas ringkasan 112 px, navbar berakhir 82 px; bagian bawah 840 px sebelum footer 1194 px. Di batas akhir konten ringkasan terdorong ke atas secara normal dan tetap berakhir 65 px sebelum footer.
- Screenshot desktop aktual sekitar 1363 × 936 diperiksa untuk Rumah, Bisnis dan Komunitas. Radio dipilih memakai panah keyboard; kategori memakai ArrowDown dengan fokus tetap pada select. Space memilih/membatalkan access point, total kembali Rp2.250.000. Fokus mint solid 2 px terlihat. Total memakai aria-live=polite.
- Enter pada input telepon mengirim formulir valid ke tinjauan. Dropdown Bantuan dibuka dengan Enter dan ditutup Escape. Tidak ada pesan/pembayaran nyata.
- Tidak diperlukan perubahan responsivitas tambahan setelah pemeriksaan lanjutan; source aplikasi sebelum jeda dipertahankan. Tes otomatis dan dokumentasi ditambahkan untuk regresi.

## Matriks biaya yang diverifikasi

Bulan pertama sudah termasuk dalam semua total awal berikut. Tambahan tidak mengubah biaya bulanan.

| Paket | Awal tanpa tambahan | + Access point | + UPS | + Keduanya | Bulan berikutnya |
| --- | ---: | ---: | ---: | ---: | ---: |
| Rumah Basic | Rp2.250.000 | Rp2.900.000 | Rp3.500.000 | Rp4.150.000 | Rp750.000 |
| Rumah Plus | Rp3.050.000 | Rp3.700.000 | Rp4.300.000 | Rp4.950.000 | Rp1.050.000 |
| Bisnis Basic | Rp4.750.000 | Rp5.400.000 | Rp6.000.000 | Rp6.650.000 | Rp1.750.000 |
| Bisnis Plus | Rp7.250.000 | Rp7.900.000 | Rp8.500.000 | Rp9.150.000 | Rp2.750.000 |
| Komunitas Basic | Rp5.000.000 | Rp5.650.000 | Rp6.250.000 | Rp6.900.000 | Rp1.500.000 |
| Komunitas Plus | Rp7.250.000 | Rp7.900.000 | Rp8.500.000 | Rp9.150.000 | Rp2.250.000 |

Contoh Rumah Plus dengan kedua tambahan: pemasangan Rp2.000.000 + access point Rp650.000 + UPS Rp1.250.000 + bulan pertama Rp1.050.000 = **Rp4.950.000**. Bulan berikutnya **Rp1.050.000**.

## Tes otomatis dan build

`node --test tests/order.test.mjs`: **22 lulus, 0 gagal**. Mencakup harga enam paket, kombinasi tambahan/pembatalan, rute fase, isian spasi, Instansi per kategori, batas 8/9/15/16 digit telepon, format email/nomor, input panjang, serta data masukan yang tidak dimutasi.

`npm run build`: berhasil, Vite 6.4.3, 1.603 modul. Output tersedia di `dist/`; nama bundel aktual tercatat dalam `dist/index.html`. Browser QA memakai preview pengembangan Vite; bundle produksi tidak disajikan melalui server terpisah.

## Keterbatasan

Mobile memakai iframe Chrome, bukan perangkat fisik. Safari/iOS, Firefox, keyboard virtual, safe area dan screen reader penuh belum diuji. Prefers-reduced-motion tersedia di CSS global dan pemesanan, tetapi preferensi OS/browser belum diemulasikan. Tidak ada audit aksesibilitas menyeluruh, uji jaringan lambat, pengukuran performa, deployment, transaksi, pengiriman pesanan, email atau pesan nyata.

Tidak ada foto, ilustrasi generation, font atau aset eksternal baru. Sumber aset proyek yang dipertahankan berada di ASSETS.md. ZIP final mencakup source, dist, aset lokal, font/lisensi, tes dan dokumentasi tanpa node_modules, harness QA atau halaman referensi sementara.
