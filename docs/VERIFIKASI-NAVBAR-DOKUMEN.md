# Navbar halaman dalam mengikuti scroll dokumen

- `.navbar--inner` kini `position: relative`, bukan fixed/sticky. Pembeda halaman dan komponen bersama tetap digunakan.
- Padding atas pembungkus halaman dikurangi sebesar tinggi navbar sebelumnya (89 px desktop, 77 px mobile), sehingga jarak awal konten tetap rapi.
- CSS landing dan logika navbar tidak diubah. Harga, konten, aset, dan fitur lain tetap sama.
- Browser desktop: navbar FAQ serta Paket & Harga mulai pada top 0; setelah scroll 562 px, top navbar -562 px dan bottom -473 px, sehingga sepenuhnya keluar layar.
- Beranda tetap fixed; setelah scroll, floating aktif pada top 16 px dengan radius pill 7 px. Perpindahan kembali ke halaman dalam menggunakan mode normal dokumen.
- Dropdown desktop diuji: ArrowDown memilih tautan, Escape menutup dropdown. Menu serta dropdown Bantuan mobile dibuka; Escape menutupnya kembali. Navbar mobile memakai posisi relative dan padding atas FAQ 34 px.
- Build produksi dijalankan satu kali setelah perubahan, berhasil.
- Pemeriksaan dibatasi pada navbar, CSS terkait, serta ruang atas pembungkus halaman. Alur pemesanan dan fitur yang tidak terdampak tidak diuji ulang.
- Mobile menggunakan iframe Chrome, bukan perangkat fisik. Tidak ada pengujian lintas browser pada perubahan ini.

Menjalankan: `npm ci`, lalu `npm run dev`. Build: `npm run build`.
