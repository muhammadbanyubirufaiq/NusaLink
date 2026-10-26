> Catatan pengujian tahap sebelumnya. Harga, nama kategori, dan perilaku navbar aktif mengacu pada [pembaruan terbaru](VERIFIKASI-HARGA-KATEGORI-NAVBAR.md).

# Paket & Harga — hasil penyempurnaan

## Perubahan

- Halaman dipisahkan ke `src/PlansPage.jsx` dan `src/plans.css`. Export `Plans` pada `experience.jsx` tetap digunakan oleh App; rute tidak berubah.
- Tiga kelompok kategori tetap ditampilkan bersama pada desktop, dengan header, fitur utama, Basic, dan Plus dalam urutan yang sama.
- Harga bulanan, kecepatan maksimum, jumlah perangkat, titik Wi-Fi, pemasangan sekali bayar, dan tombol pilihan memiliki posisi yang sejajar antarkategori.
- Spesifikasi disajikan dalam tiga kolom berlabel: kecepatan maksimum, perangkat, dan titik Wi-Fi, mengikuti screenshot pilihan pengguna. Biaya pemasangan tidak disajikan sebagai seluruh total awal; catatan menjelaskan bahwa layanan bulan pertama dan tambahan terpilih ikut dihitung di pemesanan.
- Fasilitas bersama, status perangkat pinjaman, tambahan opsional, serta kebutuhan survei disajikan sekali setelah perbandingan.
- Tautan kebutuhan maritim/tanggap bencana menuju rute kontak yang sudah ada, tanpa harga atau paket baru.
- Mobile menggunakan kelompok vertikal dengan Basic dan Plus tetap berdekatan. Pada 320 px, ukuran harga disesuaikan agar nama paket dan harga tetap sejajar; kolom spesifikasi tetap sejajar dan label yang membungkus memiliki tinggi yang sama.
- Tidak ada tab/filter, foto, ilustrasi, dependensi, badge penjualan, atau klaim layanan baru.
- Latar #071019, footer #050C13, dan variabel tema terbaru dipertahankan. CSS baru dibatasi dengan `.pricing-page`.

## Referensi yang benar-benar diperiksa

Screenshot `image(20261026-111141).png` diperiksa langsung. Website Starlink dibuka pada desktop, menu Personal menampilkan tautan Service Plans. Tautan dituju pada `https://starlink.com/service-plans` setelah menu tidak bertahan saat klik. Halaman yang dimuat memperlihatkan dua kelompok kategori, teks fitur sederhana, baris paket dengan harga di kanan, keterangan kecil, dan tombol outline di bagian bawah.

Percobaan menampilkan referensi dalam iframe mobile 390 × 844 ditolak dengan “refused to connect”. Tidak ada klaim bahwa tampilan atau interaksi mobile Starlink telah diamati. Susunan mobile NusaLink merupakan keputusan adaptasi yang diuji pada hasil proyek.

## Revisi clean

Label FITUR UTAMA dan PILIH PAKET BULANAN dihilangkan dari tampilan; daftar fitur tetap memiliki nama aksesibel. Pembuka dipersingkat, ukuran judul ditenangkan, spesifikasi tiga kolom dikembalikan sesuai screenshot, dan jarak antarblok diperketat. Tidak ada harga, spesifikasi, fasilitas, rute, maupun aset yang diubah.

## Sumber data

Harga, kategori, fitur, spesifikasi, tambahan, dan URL pemesanan semuanya diambil dari `src/catalog.js`, yang tetap identik dengan versi sebelumnya. Tidak ada salinan harga di komponen baru.

| Paket | Bulanan | Pemasangan | Maks. Mbps | Perangkat | Titik Wi-Fi |
| --- | ---: | ---: | ---: | ---: | ---: |
| Rumah Basic | Rp750.000 | Rp1.500.000 | 50 | 10 | 1 |
| Rumah Plus | Rp1.050.000 | Rp2.000.000 | 100 | 20 | 2 |
| Bisnis Basic | Rp1.750.000 | Rp3.000.000 | 100 | 30 | 2 |
| Bisnis Plus | Rp2.750.000 | Rp4.500.000 | 200 | 60 | 3 |
| Komunitas Basic | Rp1.500.000 | Rp3.500.000 | 75 | 40 | 2 |
| Komunitas Plus | Rp2.250.000 | Rp5.000.000 | 150 | 80 | 4 |

AP tambahan Rp650.000 dan UPS Rp1.250.000, sekali bayar, tetap berasal dari array `extras`.

## Pengujian

- Pembacaan DOM browser terhadap keenam paket: semua harga, biaya pemasangan, kecepatan, jumlah perangkat, titik Wi-Fi, dan URL cocok dengan sumber data.
- Keenam tombol dipakai pada desktop dan mobile 320 px. Setiap tombol membuka kategori/paket yang sesuai; ringkasan dan radio Basic/Plus menunjukkan pilihan yang benar. Tidak hanya mengandalkan atribut href.
- Desktop: back dari setiap konfigurasi kembali ke Paket & Harga; forward kembali membuka Komunitas Plus. Refresh Paket & Harga tetap memuat enam pilihan.
- Tab dari konten utama memfokuskan “Pilih Rumah Basic” dengan outline mint; Enter membuka konfigurasi Rumah Basic.
- Dropdown Layanan dibuka dan ditutup dengan Escape. Navbar glass saat scroll tetap memakai blur 22 px dan tint tema.
- Tautan Hubungi Kami pada bagian kebutuhan khusus membuka `#/kontak`.
- Browser diperiksa pada lebar desktop native sekitar 1363 px, iframe desktop 1024 × 768 dan 1920 × 1080, serta mobile 390 × 844 dan 320 × 844.
- Pada desktop 1024 dan 1920, posisi awal Basic, Plus, dan tombolnya sama antarkategori. Tidak ada overflow horizontal pada halaman maupun enam baris paket.
- Mobile: tiap tombol memiliki tinggi 48 px. Pada revisi terbaru, tiga kolom spesifikasi dipertahankan; tinggi label pada 320 px diselaraskan agar angka tetap sejajar. Harga dan nama paket tetap berdampingan tanpa overflow.
- Screenshot digunakan untuk memeriksa pembuka, perbandingan, cakupan layanan, tambahan, CTA, dan footer. Warna menggunakan token tema yang sebelumnya telah diuji kontrasnya; tidak ada warna baru.
- `node --test tests/order.test.mjs`: 22 lulus, 0 gagal.
- `npm run build`: berhasil.
- Perbandingan checksum sumber/aset memastikan kode pemesanan, data katalog, tema, halaman lain, serta seluruh aset tidak berubah. Navbar, hero, dan footer dalam berkas bersama tetap sama; hanya export Plans dan import yang tidak lagi diperlukan disesuaikan.
- ZIP diperiksa integritasnya, tanpa node_modules dan file QA/referensi internal.

## Batas verifikasi

Mobile menggunakan iframe Chrome, bukan perangkat fisik. Safari/iOS, Firefox, screen reader, dan emulasi prefers-reduced-motion tidak diuji pada tahap ini; stylesheet halaman menyertakan aturan reduced motion. Pengujian visual dilakukan pada development server, sedangkan hasil build produksi tidak dijalankan pada server terpisah. Tidak ada transaksi atau pengiriman pesan nyata.

## Menjalankan

```sh
npm ci
npm run dev
```

Buka alamat Vite dengan rute `/#/paket`. Build produksi: `npm run build`.
