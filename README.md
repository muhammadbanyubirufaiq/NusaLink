# NusaLink

Landing page company profile fiktif berbahasa Indonesia. React + Vite + Tailwind CSS, dengan ikon Lucide. Seluruh pengiriman formulir berupa demo frontend, tanpa penyimpanan atau pengiriman jaringan.

## Menjalankan

Node.js 20.19+ atau 22.12+ dan pnpm. Deklarasi versi package manager bawaan proyek dipertahankan.

```sh
pnpm install
pnpm dev
```

Buka alamat yang ditampilkan Vite. Build produksi: `pnpm build`. Pratinjau hasil build: `pnpm preview`.

## File utama

- `src/main.jsx`: komposisi halaman: Hero → Tentang → Solusi & keunggulan → Sektor → Cara Kerja → Konsultasi → Footer.
- `src/components.jsx`: navbar responsif, gambar dengan fallback, logo, label bagian, formulir tervalidasi.
- `src/data.js`: konten navigasi, sektor, tahapan layanan dan keunggulan.
- `src/styles.css`: tema, tata letak, breakpoint mobile/tablet, focus dan reduced-motion.
- `public/assets/`: gambar WebP lokal yang dioptimalkan.
- `index.html`: metadata, bahasa, favicon dan titik masuk.
- `vite.config.js`: konfigurasi React, Tailwind dan server.

## Demo dan sumber visual

NusaLink adalah perusahaan fiktif. Tidak ada pelanggan, mitra, sertifikasi, cakupan geografis, maupun statistik keberhasilan yang diklaim. Kontak diarahkan ke formulir demo tanpa alamat email, nomor telepon, atau akun sosial rekaan. Form menampilkan: “Ini adalah formulir demo. Data Anda tidak dikirim atau disimpan.”

Hero menggunakan foto pesisir Mandalika oleh Afif Ramdhasuma (Unsplash), sebagai ilustrasi lokasi dan bukan dokumentasi instalasi atau cakupan NusaLink. Visual komunikasi tanggap bencana menggunakan ilustrasi fotorealistis AI, bukan dokumentasi instalasi. Gambar sektor lainnya merupakan foto stok ilustratif, bukan pelanggan NusaLink. Aset impact.webp tetap disimpan, meskipun section Dampak telah dihapus.

Foto stok dari Unsplash (Unsplash License):
- Afif Ramdhasuma — hero Mandalika: https://unsplash.com/photos/an-aerial-view-of-an-island-in-the-middle-of-the-ocean-VLZWdtcTyNk
- Husniati Salma — pendidikan dan dampak: https://unsplash.com/photos/CdSNG04vclA
- Hobi Industri — kegiatan masyarakat: https://unsplash.com/photos/7tXqXcVcLDM
- Paolo Nicolello — resor: https://unsplash.com/photos/2gOxKj594nM
- Venti Views — maritim: https://unsplash.com/photos/FPKnAO-CF6M
- Luthfi Raihan Mahdi — pertanian: https://unsplash.com/photos/_wacE0Z3_q4
- Online Marketing — kesehatan: https://unsplash.com/photos/hIgeoQjS_iE

Untuk operasional, tambahkan kontak yang benar dan hubungkan formulir ke backend sesuai kebutuhan.

## Revisi visual terbaru

Baca `CATATAN-REVISI.md` untuk perubahan dan batas verifikasi.

## Jika pnpm dev menampilkan Command "dev" not found

Terminal harus berada di folder yang berisi `package.json` proyek NusaLink.
ZIP revisi ini menempatkan package.json langsung di akar ZIP, sehingga tidak
perlu masuk ke folder NusaLink kedua setelah mengekstrak arsip.

Di PowerShell, jalankan `dir package.json` untuk memastikan lokasinya.
Jika file tidak ditemukan, pindah ke folder hasil ekstraksi dengan `cd`.
