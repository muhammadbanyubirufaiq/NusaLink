> Catatan pengujian tahap sebelumnya. Harga, nama kategori, dan perilaku navbar aktif mengacu pada [pembaruan terbaru](VERIFIKASI-HARGA-KATEGORI-NAVBAR.md).

# Penyelarasan warna NusaLink

## Hasil

- Latar #071019 dan footer #050C13 menjadi acuan tema seluruh halaman.
- `src/theme.css` berisi warna permukaan, teks, mint, border, glass, tombol, fokus, error, dan sukses. Alias variabel komponen menggunakan sumber ini.
- Seluruh literal hex dan rgb pada CSS komponen diganti dengan variabel tema atau campuran transparan dari variabel tersebut, termasuk pseudo-element, fallback blur, gradien, dan aturan mobile.
- Permukaan kartu dan input menggunakan #101C26. Teks utama #F4F3EE, teks sekunder #B5C5CF, keterangan #A9BCC8, dan aksen #80CDBB.
- Alpha warna glass dan overlay dipertahankan. Navbar tetap transparan ketika menu tertutup di atas hero, menjadi glass saat scroll, dan kembali transparan di atas. Menu mobile terbuka diberi tint gelap untuk keterbacaan.
- Error tetap peach (#FFC7B8 / border #E6A291); status sukses mint. Tidak ada perubahan validasi atau alur pemesanan.
- SVG dekorasi dan favicon hanya disesuaikan hue-nya. Bentuk, path, ukuran, mask, dan opacity tidak berubah. SVG eksternal tidak mewarisi variabel CSS halaman: konstanta aksen di aset mengikuti nilai tema, sedangkan shade material ilustrasi perangkat dipertahankan.
- Tidak ada aset baru. Seluruh foto tetap identik dengan versi sebelumnya.

## Pemeriksaan yang dilakukan

- Perbandingan AST CSS sebelum/sesudah: 344 deklarasi warna diperbarui; struktur aturan, layout, spacing, tipografi, animasi, backdrop-filter, dan deklarasi nonwarna tetap sama. `theme.css` menambahkan variabel serta keadaan warna saja.
- Berkas JS/JSX sama, kecuali satu import stylesheet tema pada `src/main.jsx`.
- Perbandingan aset dengan ZIP sebelumnya: semua raster identik; perubahan SVG hanya pada nilai warna.
- Browser Chrome desktop: hero dan pilihan aktif, dropdown Tentang terbuka, Escape, navbar sebelum/sesudah scroll dan kembali ke atas, kartu Paket & Harga, konfigurasi Rumah Basic/Plus, tambahan AP/UPS, formulir kosong, fokus input, perbaikan data, tinjau, dan konfirmasi demo.
- Rumah Plus + AP + UPS menghasilkan total awal Rp4.950.000 dan biaya bulanan Rp1.050.000.
- Chrome pada iframe mobile 390 × 844: menu dan dropdown Bantuan, Basic/Plus, formulir error dan fokus, FAQ terbuka, dialog WhatsApp ilustratif dan tombol tutup, footer, serta pemeriksaan latar/overflow pada Cara Kerja, Solusi Teknologi, FAQ, Panduan Pemasangan, Kontak, Paket & Harga, Rumah, Bisnis, dan Komunitas. Tidak ditemukan overflow horizontal (lebar area baca 375 px setelah scrollbar).
- Tampilan dievaluasi melalui screenshot internal. Keadaan `:active` dan disabled diperiksa pada CSS; tidak seluruh varian tombol ditahan secara fisik saat aktif. Tombol carousel disabled tetap memakai perilaku sebelumnya.
- Perhitungan kontras warna solid: teks utama/latar 17,23:1; teks sekunder/latar 10,80:1; placeholder/input 8,81:1; pesan error/input 11,61:1; mint/latar 10,36:1; keterangan/footer 10,03:1. Angka ini bukan pengukuran kontras di seluruh pixel foto atau glass.
- `node --test tests/order.test.mjs`: 22 lulus, 0 gagal.
- `npm run build`: berhasil, Vite 6.4.3.
- ZIP diperiksa integritasnya dan tidak menyertakan node_modules maupun harness QA.

## Batas verifikasi

- Pemeriksaan browser menggunakan development server; build produksi berhasil tetapi tidak dijalankan sebagai server terpisah.
- Mobile menggunakan iframe Chrome, bukan perangkat fisik. Safari/iOS, Firefox, keyboard virtual, serta screen reader tidak diuji pada tahap warna ini.
- Preferensi reduced motion tidak diemulasikan ulang. Aturan motion dan fungsi sebelumnya tidak diubah.
- Tidak ada pengiriman pesan, email, pesanan, atau pembayaran nyata.

## Menjalankan

```sh
npm ci
npm run dev
```

Buka alamat yang dicetak Vite. Build produksi: `npm run build`.
