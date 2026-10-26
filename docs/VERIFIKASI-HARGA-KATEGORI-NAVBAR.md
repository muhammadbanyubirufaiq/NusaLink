# Pembaruan harga, kategori, dan navbar

## Implementasi

`src/catalog.js` tetap menjadi sumber kategori, paket, harga, spesifikasi, dan tambahan. Data baru juga mencakup alokasi prioritas serta keterangan bersama untuk koneksi, status perangkat, batas perencanaan, dan estimasi simulasi.

| Paket | Bulanan | Pemasangan | Total awal tanpa tambahan | Koneksi |
| --- | ---: | ---: | ---: | --- |
| Rumah Basic | Rp1.200.000 | Rp1.500.000 | Rp2.700.000 | Residensial sesuai paket |
| Rumah Plus | Rp1.700.000 | Rp2.000.000 | Rp3.700.000 | Residensial sesuai paket |
| Bisnis Basic | Rp2.800.000 | Rp3.000.000 | Rp5.800.000 | Prioritas 500 GB/bulan |
| Bisnis Plus | Rp4.700.000 | Rp4.500.000 | Rp9.200.000 | Prioritas 1 TB/bulan |
| Institusi & Komunitas Basic | Rp3.000.000 | Rp3.500.000 | Rp6.500.000 | Prioritas 500 GB/bulan |
| Institusi & Komunitas Plus | Rp5.000.000 | Rp5.000.000 | Rp10.000.000 | Prioritas 1 TB/bulan |

- AP tambahan Rp1.350.000/unit: dual-band kelas dasar, konfigurasi standar, memperluas distribusi Wi-Fi.
- UPS jaringan Rp1.500.000/unit: kelas sekitar 1.200 VA, pemasangan standar; durasi bergantung pada perhitungan beban.
- Perangkat bawaan paket dipinjamkan. Tambahan opsional dibeli dan menjadi milik pelanggan. Antarmuka checkbox tetap memilih satu unit per jenis; tidak ada fitur jumlah baru.
- Total awal = pemasangan + bulan pertama + tambahan. Bulan berikutnya hanya biaya layanan bulanan.
- Kecepatan, acuan jumlah perangkat, dan titik Wi-Fi tidak diubah. Keterangan menegaskan maksimum bukan jaminan dan jumlah perangkat hanya acuan perencanaan.
- Alokasi prioritas adalah asumsi rancangan NusaLink. Penanganan setelah alokasi habis mengikuti ketentuan operator yang dipilih; tidak ada kecepatan lanjutan, biaya kelebihan, atau kebijakan baru yang diciptakan.
- Klaim semua paket tanpa kuota di Paket & Harga dan FAQ diganti. Rincian harga/alokasi diperbarui pada hero, paket, konfigurasi, ringkasan, tinjau/konfirmasi, dan FAQ.
- ID `komunitas`, ID paket, dan seluruh URL lama dipertahankan. Nama tampilan menjadi Institusi & Komunitas. Istilah teknologi Wi-Fi komunitas tetap dipakai.
- `src/navbar-modes.css` membedakan header attached untuk halaman dalam dari floating landing. Satu komponen navbar bersama tetap dipakai; `App` meneruskan rute untuk menyinkronkan state saat berpindah halaman.
- Landing tetap memakai ambang >80 px, geometry pill, blur, dan transisi semula. Halaman dalam memakai fixed top 0, selebar viewport, radius luar 0, tanpa perubahan ukuran berdasarkan scroll.
- Ruang konten dan offset anchor yang sudah ada masih cukup. Ringkasan pemesanan tetap menggunakan top 112 px, dengan pengukuran tinggi yang menonaktifkan sticky saat ruang vertikal tidak cukup.
- Penyesuaian terbatas pada nama panjang: kartu hero Institusi & Komunitas nonaktif diberi ruang yang cukup di mobile; judul kategori dapat membungkus dan perbandingan tetap sejajar.
- Latar #071019, footer #050C13, foto, ilustrasi, pola dekorasi, data formulir, dan alur demo dipertahankan.

## Pengujian yang dilakukan

### Data dan perhitungan

- `node --test tests/order.test.mjs`: 24 lulus, 0 gagal. Enam paket diuji dengan tanpa tambahan, AP, UPS, dan keduanya; pembatalan tambahan mengembalikan total semula. Rute lama, validasi, alokasi data, nama kategori, dan contoh Rumah Plus turut diuji.
- Browser desktop membaca seluruh enam harga bulanan, pemasangan, spesifikasi, dan alokasi pada Paket & Harga; semuanya cocok dengan sumber data.
- Hero Rumah/Bisnis/Institusi & Komunitas menampilkan Basic Rp1.200.000/Rp2.800.000/Rp3.000.000 dan CTA ke ID Basic yang sesuai.
- Keenam tombol Paket & Harga benar-benar diklik di desktop dan mobile. Radio aktif dan ringkasan menampilkan kategori/tingkat yang sesuai, termasuk seluruh Plus.

| Rumah Plus, contoh browser | Total awal | Bulan berikutnya |
| --- | ---: | ---: |
| Tanpa tambahan | Rp3.700.000 | Rp1.700.000 |
| Dengan AP | Rp5.050.000 | Rp1.700.000 |
| Dengan AP + UPS | Rp6.550.000 | Rp1.700.000 |

Pembatalan UPS lalu AP mengembalikan total ke Rp3.700.000. Institusi & Komunitas Plus dengan AP + UPS pada mobile menghasilkan Rp12.850.000 dan Rp5.000.000/bulan.

### Alur dan informasi

- Data contoh Rumah dapat ditinjau dengan instansi kosong. Setelah kembali mengedit dan mengganti ke Bisnis Plus, isian dan AP bertahan; hanya instansi kosong yang memunculkan error. Hal yang sama diperiksa pada Institusi & Komunitas Plus.
- Instansi diisi, lalu tinjau serta konfirmasi demo diuji di desktop dan mobile. Ringkasan prioritas, pembelian tambahan, dan biaya baru tampil benar. Tidak ada transaksi nyata.
- FAQ alokasi dibuka: Basic organisasi 500 GB, Plus 1 TB, dengan keterangan ketentuan operator. FAQ tambahan menampilkan kedua harga/deskripsi terbaru.
- Refresh rute tinjau menghilangkan draft sesuai perilaku semula dan tidak menyediakan tombol konfirmasi sebelum data dilengkapi. Back/forward browser serta pemilihan ulang paket diperiksa.

### Navbar dan responsive

- Desktop landing: transparan di atas, floating setelah scroll, lalu transparan kembali. Rute kategori `#/layanan/komunitas` mengaktifkan kartu yang benar; tautan Profil Perusahaan menuju bagian profil dengan mode floating.
- Desktop FAQ, Panduan, Solusi, Cara Kerja, Kontak, Paket, dan tiga tahap pemesanan: sebelum/sesudah scroll top 0, left 0, radius pill 0, tinggi 89 px termasuk garis bawah. Tidak ada perubahan menjadi floating.
- Mobile: halaman dalam dan pemesanan mempunyai top 0, left 0, radius 0, tinggi 77 px termasuk garis bawah, sebelum/sesudah scroll. Landing 390 px berubah floating 0 → 1 → 0; setelah kembali ke atas background transparan. Floating mobile memakai top 12 px/radius 6 px sesuai desain sebelumnya.
- Dropdown desktop: ArrowDown memfokuskan tautan, Escape menutup dan mengembalikan fokus; klik di luar menutup dropdown. Menu mobile dan dropdown diuji dari landing ke FAQ. Escape menutup dropdown, lalu menu, dan fokus kembali ke tombol menu.
- Nama panjang pada hero 320 px tidak terpotong: kartu nonaktif 140 px memuat deskripsi; kartu aktif setelah transisi 320 px, tanpa tumpang tindih deskripsi/offer. Tinggi hero dan lapisan gambar tetap stabil.
- Pemeriksaan lebar 320/390 px tidak menemukan overflow horizontal. Keenam tombol paket pada 390 px memiliki area sentuh setinggi 48 px dan nama lengkap terbaca.
- Anchor Panduan: heading proses berada sekitar 124 px dari atas, di bawah navbar 89 px. Anchor FAQ dukungan berada sekitar 236 px, juga bebas navbar.
- Ringkasan Institusi & Komunitas Plus dengan tambahan pada 1920 × 1080: sticky top 112 px, navbar berakhir 89 px, footer masih jauh di bawah. Pada 1024 × 600 ringkasan menjadi static, overflow visible, dan tombol tetap dapat dicapai dengan scroll.
- Screenshot dipakai untuk evaluasi internal. Browser yang digunakan Chrome; viewport mobile melalui iframe, bukan perangkat fisik.

## Pemeriksaan akhir dan batas verifikasi

- `npm run build` berhasil.
- Checksum memastikan seluruh aset dan variabel warna tema tidak berubah. Kode validasi, rumus total, rute internal, serta fungsi pemesanan tetap memakai implementasi semula.
- ZIP diuji integritasnya; tidak berisi node_modules, QA harness, atau halaman referensi internal.
- Browser diuji pada development server; build produksi tidak dijalankan pada server terpisah. Safari/iOS, Firefox, keyboard virtual, dan screen reader tidak diuji. Prefers-reduced-motion tidak diemulasikan ulang; aturan sebelumnya tetap dipertahankan.
- Tidak ada pengiriman pesan, pembayaran, atau pemesanan sungguhan. Harga berasal dari keputusan simulasi pengguna, bukan verifikasi tarif operasional operator.

## Menjalankan

```sh
npm ci
npm run dev
```

Buka alamat Vite. Halaman paket: `/#/paket`; contoh rute lama: `/#/pesan/komunitas-plus`. Produksi: `npm run build`.
