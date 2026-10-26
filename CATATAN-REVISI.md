# Pemesanan NusaLink — 26 Oktober 2026

Revisi terbaru menyempurnakan seluruh pemesanan Rumah, Bisnis dan Komunitas tanpa mengganti kategori, harga, spesifikasi atau desain halaman lain. Catatan di bawah pemisah adalah riwayat.

Konfigurasi dan ringkasan memakai dua area terbuka, pilihan paket native radio, rincian sekali bayar/bulan pertama/bulanan berikutnya, validasi per kolom, tinjauan yang dapat diedit dan konfirmasi lokal. Sticky diperiksa pada desktop tinggi dan layar pendek. Mobile 390/320 diperiksa sampai konfirmasi ketiga kategori. Tidak ada foto/aset baru.

Rincian perubahan, temuan referensi, hasil uji, matriks biaya enam paket, build dan keterbatasan tersedia dalam **docs/VERIFIKASI-PEMESANAN.md**. Sebanyak 22 pengujian otomatis lulus; jalankan `node --test tests/order.test.mjs`. Produksi dibangun dengan `npm run build` (Vite 6.4.3, 1.603 modul).

Proyek adalah hasil ekstraksi ZIP dan tidak memiliki `.git`. Perintah git status/diff telah dicoba; perbandingan SHA-256 dengan baseline dan ZIP sebelumnya dipakai sebagai pengganti. Perubahan sebelum jeda tetap tersimpan. Kelanjutan hanya menyelesaikan QA, menambahkan tes regresi dan memperbarui dokumentasi; tidak membangun ulang atau mengembalikan perubahan.

---

# Cara Kerja lebih clean — 26 Oktober 2026

Revisi terbaru menanggapi komposisi yang masih terasa padat dan kurang rapi. Catatan setelah pemisah merupakan riwayat.

## Perubahan

Pembuka kini satu kolom. Heading lebih tegas dan judul tahap lebih singkat. Tiga kolom nomor–judul–isi disederhanakan menjadi dua kolom: nomor kecil menyatu dengan heading di kiri, paragraf di kanan. Label “Hasil tahap ini” dihapus; hasil/keputusan tetap dijelaskan dalam paragraf. Pada mobile, paragraf menggunakan seluruh lebar konten, dengan nomor hanya berada di samping judul. Tingkat tipografi dikurangi dan spacing antarbaris tahap dibuat lebih konsisten. Penutup memiliki satu tombol Paket & Harga dan tautan Hubungi Kami.

Lima tahap, peran pelanggan dan tim, hasil survei, kesepakatan solusi, pemasangan/pengujian/serah terima, pengelolaan serta dukungan tetap dijelaskan. Cakupan paket dan biaya khusus tetap dibatasi. Catatan demo lokal dipertahankan. Tidak ada perubahan harga, alur pemesanan, navbar, footer, shared CSS atau halaman lain. Tidak ada aset baru atau generation.

## Pemeriksaan baru pada revisi ini

- Screenshot Chrome desktop sekitar 1363 × 936 serta mobile iframe 390/320 diperiksa pada pembuka, tahap 1–5, penutup dan awal footer.
- DOM pada nominal 1920/1440/1024/390/320 menunjukkan scrollWidth = clientWidth: 1905/1425/1009/375/305. Lima tahap tetap urut. Tidak ditemukan overflow paragraf, heading atau tautan yang diperiksa.
- Empat tautan utama diuji kembali dengan Enter: Solusi Teknologi, Panduan Pemasangan, Paket & Harga, Hubungi Kami. Heading halaman tujuan diperiksa, lalu Back kembali ke Cara Kerja. Refresh deep link berhasil.
- Tab menuju tautan pertama memperlihatkan outline mint 2 px. Tidak ada kontrol/animasi baru. Navbar/footer dan aturan reduced-motion tidak diubah.
- Build produksi npm run build berhasil (Vite 6.4.3, 1.600 modules). Browser menggunakan preview pengembangan; bundle produksi tidak disajikan pada server terpisah.
- Perbandingan byte dengan ZIP Cara Kerja sebelumnya memastikan hanya HowItWorks.jsx dan how-it-works.css berubah pada source/aset aplikasi.

Tidak ada pemeriksaan Starlink baru pada penyederhanaan ini; screenshot dan pengamatan langsung dari revisi sebelumnya menjadi acuan. Mobile referensi sebelumnya menolak framing. Ponsel fisik, Safari/iOS, Firefox, screen reader penuh dan emulasi reduced-motion belum diuji. Pengujian navbar, dropdown dan back/forward yang lebih lengkap pada revisi sebelumnya tercatat di bawah, bukan dianggap uji baru.

ZIP lengkap mencakup source, build dist, aset, font/lisensi dan dokumentasi tanpa node_modules atau halaman QA sementara. Jalankan npm ci, npm run dev, lalu buka http://localhost:4173/#/cara-kerja.

---

# Cara Kerja — 26 Oktober 2026

Revisi terbaru hanya Tentang → Cara Kerja (`#/cara-kerja`). Bagian di bawah pemisah adalah riwayat revisi sebelumnya.

## Tampilan dan isi

Lima kolom sempit diganti rangkaian vertikal terbuka. Nomor berada pada kolom kecil, judul pada kolom tersendiri, dan isi dibatasi lebarnya di kanan. Pembuka memakai alignment yang sama dengan kolom isi. Garis halus memisahkan tahap tanpa kartu, glass atau garis penghubung dekoratif. Di mobile judul berada di atas isi; pada lebar 320 nomor berada di atas judul agar paragraf tetap cukup lebar.

Tahapnya: memahami kebutuhan dan survei; menentukan solusi dan penawaran; pemasangan dan pengujian; monitoring dan pengelolaan; dukungan dan penyesuaian. Setiap tahap menyebut kontribusi pelanggan, pekerjaan tim dan hasil/keputusan yang diteruskan. Survei dan instalasi khusus tidak dijanjikan gratis atau memiliki jadwal tetap. Perangkat, kapasitas, pengelolaan, pelatihan serta dukungan mengikuti paket atau penawaran. Tidak ada SLA, respons, pemantauan 24 jam, atau janji performa baru.

Tautan Solusi Teknologi dan Panduan Pemasangan membatasi pengulangan isi. Penutup mengutamakan Paket & Harga, dengan Hubungi Kami sebagai pilihan pendamping. Satu catatan menjelaskan status konsep dan demo lokal, tanpa pesanan, survei atau penjadwalan teknisi nyata. Semua tahap langsung terbuka. Daftar HTML berurutan memiliki nama aksesibel; setiap heading menyertakan nomor tahap untuk teknologi bantu. Nomor visual tidak menjadi kontrol palsu. Tidak ada navigasi antartahap atau animasi baru.

Palet #0B1B27, ivory #F4F3EE, mint #80CDBB, isi #B5C5CF, footer #06121B serta font Barlow lokal mengikuti proyek. Tidak ada aset baru. Source baru HowItWorks.jsx dan how-it-works.css; CSS hanya dalam .service-journey. Information.jsx mengganti komponen Process lama dengan pengarah Cara Kerja. Data alur lama di data.js tidak diubah.

## Referensi yang benar-benar diperiksa

Delapan screenshot pengguna dipelajari: pembuka Satellite Technology, komposisi gambar–teks bergantian, perangkat tiga kolom, mini lasers, How Starlink works, sustainability, demisability dan night sky. Temuan komposisi meliputi batas kiri/kanan yang konsisten, paragraf terbatas, heading kuat, ruang antarblok dan sedikit dekorasi. Gambar statis tidak dijadikan bukti animasi.

Starlink dibuka langsung di Chrome desktop. Learn dibuka dengan Enter, lalu Video Guides dan Quick Start for Starlink V5 dipilih melalui navigasi. Diamati judul/pengantar ringkas, video utama besar, daftar panduan di kanan, caption dan pemisahan visual sederhana. Video tidak diputar; tidak mengklaim memeriksa prosedur perangkat atau seluruh animasinya. URL yang terlihat: https://starlink.com/videos dan https://starlink.com/videos/16.

Referensi mobile dicoba dalam bingkai 390 × 844 tetapi Starlink menolak framing (“refused to connect”). Tidak mengklaim telah mengamati versi mobile referensi. Rangkaian bernomor terbuka tanpa foto dan layout responsif NusaLink merupakan keputusan adaptasi sesuai konten layanan terkelola, bukan penyalinan proses operasional Starlink.

## Pengujian yang dilakukan pada revisi ini

- Browser Chrome desktop aktual sekitar 1363 × 936 dan harness responsif nominal 1920 × 1080, 1440 × 900, 1024 × 768, 390 × 844 dan 320 × 844. Screenshot pembuka, semua kelompok tahap, penutup dan footer digunakan untuk evaluasi. Pengantar dipersingkat dan kolom pembuka disejajarkan dengan isi setelah pemeriksaan.
- DOM menghasilkan scrollWidth sama dengan clientWidth: 1905/1425/1009/375/305 px. Tidak ditemukan overflow pada paragraf, heading atau tautan halaman. Lima tahap tetap ada dan urut. Pada layar kecil teks penawaran panjang, tahap pemasangan dan penutup dibaca langsung.
- Tautan Solusi Teknologi, Panduan Pemasangan, Paket & Harga, serta Hubungi Kami diklik dan halaman tujuan diperiksa. CTA Paket diuji dengan Enter. Back/forward serta refresh deep link kembali ke halaman yang benar.
- Tab dari main menuju tautan pertama menunjukkan outline mint solid 2 px dengan offset 5 px. Dropdown Tentang desktop dibuka dengan Enter dan ditutup Escape, fokus kembali ke pemicu. Navbar tetap floating sejak halaman dibuka dan saat isi di-scroll (scrollTop HTML terukur 1337 px). Footer Cara Kerja diuji kembali ke awal halaman.
- Mobile: menu dibuka, Tentang dengan Enter, Cara Kerja dipilih. Menu tertutup, fokus main dan scroll akhirnya kembali 0. Tautan dalam isi minimal 44 px dan CTA 50 px. Footer serta nomor/tulisan panjang diperiksa pada screenshot.
- Tidak ada elemen proses yang bergantung pada animasi (computed animation-name none). Aturan prefers-reduced-motion global dan halaman diperiksa pada source; preferensi OS/browser belum diemulasikan secara runtime.
- Kontras warna solid dihitung terhadap navy: ivory 15,75:1; isi 9,87:1; label 8,93:1; mint 9,47:1. Ini bukan audit seluruh piksel navbar glass atau sertifikasi aksesibilitas.
- Perbandingan SHA-256 sebelum/sesudah memastikan seluruh source/aset lama identik kecuali Information.jsx. Source baru hanya HowItWorks.jsx dan how-it-works.css. Landing, Solusi, FAQ, Panduan, Kontak, shared CSS/navbar/footer, katalog, rute, harga dan pemesanan tidak diubah.

## Build, penyerahan dan keterbatasan

Build produksi `npm run build` berhasil dengan Vite 6.4.3 (1.600 modules). Browser memakai server pengembangan Vite; bundle produksi tidak disajikan melalui server terpisah. ZIP menyertakan dist hasil build, source lengkap, aset, font/lisensi dan dokumentasi, tanpa node_modules, halaman QA/referensi sementara, screenshot internal atau helper.

Mobile memakai iframe Chrome, bukan ponsel fisik. Safari/iOS, Firefox, screen reader penuh, keyboard virtual dan emulasi reduced-motion belum diuji. Tidak ada uji ulang seluruh kombinasi pemesanan, pengiriman kontak nyata atau deployment. Tidak ada foto atau ilustrasi baru yang memerlukan atribusi tambahan; kredit aset proyek yang dipertahankan ada di ASSETS.md.

Jalankan `npm ci` lalu `npm run dev`; buka http://localhost:4173/#/cara-kerja.

---

# Hubungi Kami — 26 Oktober 2026

Revisi terbaru khusus #/kontak. Catatan di bawah pemisah adalah riwayat.

## Perubahan tampilan dan fungsi

Pembuka dipersingkat menjadi judul Hubungi Kami dan satu kalimat pengantar. Dua kanal disajikan pada bidang terbuka, tanpa kartu besar berulang. WhatsApp memakai tombol ivory utama; email memakai tombol outline. Nomor/email berukuran jelas, satu baris, dapat dipilih dan disalin. Mobile menyusun WhatsApp dahulu, kemudian email. Jam layanan berada dekat kanal; kebutuhan paket, pemasangan, solusi maritim/tanggap bencana dan bantuan layanan dijelaskan dalam satu paragraf. FAQ, Panduan Pemasangan serta Paket & Harga menjadi tautan pendukung. Kantor/alamat lama dihapus; tidak ditambahkan peta, formulir atau visual dekoratif.

Palet mengikuti proyek: navy #0B1B27, footer #06121B, ivory #F4F3EE, mint #80CDBB, teks pendukung #B5C5CF dan Barlow lokal. CSS baru hanya berada dalam .contact-hub. Kontak ilustratif ditampilkan profesional dengan satu catatan bawah yang ditentukan pengguna.

Chat WhatsApp dan Kirim Email membuka native dialog. Latar dibuat inert, scroll halaman dikunci selama dialog terbuka, Tab/Shift+Tab dibatasi, Escape/tombol tutup/Mengerti menutup, dan fokus kembali ke pemicu. Penutupan/navigasi keluar memulihkan scroll. Tidak ada klaim pesan terkirim atau tautan komunikasi aktif dalam mode awal.

Tombol salin memakai Clipboard API saat tersedia dalam secure context, dengan fallback salin lokal untuk preview HTTP. Umpan balik memakai role=status dan tidak mengirim data. Kegagalan salin memiliki petunjuk memilih teks manual.

## Konfigurasi

Satu sumber ada di src/contactConfig.js: nomor, email, tombol, jam dan catatan. Default mode illustrative / verified false. Fungsi contactHref mengembalikan null kecuali mode operational DAN verified true. Verifikasi adalah keputusan pengelola setelah memeriksa kepemilikan/operasional kanal, bukan sesuatu yang dilakukan aplikasi. Email/nomor saat ini hanya data desain yang diberikan pengguna. README menjelaskan cara mengganti konfigurasi. Tidak ada penerusan konteks tambahan karena CTA proyek saat ini hanya menuju rute kontak yang sama.

## Referensi yang diamati langsung

Starlink dibuka di Chrome desktop, lalu Business → Contact Sales diikuti ke https://form.starlink.com/sales?form_source=business_nav. Tahap awal yang terlihat memakai satu kolom Company Email, satu tindakan Next, lebar area yang dibatasi, dan tombol kembali. Versi awal ini juga berhasil ditampilkan dalam iframe 390 × 844; pada mobile kolom dan teks mengikuti satu kolom, dengan tombol Next terpisah jelas. Tidak ada data yang diisi atau formulir yang dikirim; tahap setelah Next tidak diperiksa. Tidak ada screenshot kontak baru dari pengguna pada revisi ini.

NusaLink mengadaptasi disiplin hierarki dan satu tindakan utama. Penyajian dua kanal tanpa formulir adalah keputusan adaptasi sesuai brief, bukan peniruan alur atau klaim bahwa Starlink memakai dialog ilustratif.

## Pemeriksaan yang dilakukan

- Build produksi npm run build berhasil: Vite 6.4.3 / 1.598 modules; CSS index-0ukAIEQ4.css, JS index-BFTP1Zqv.js. Tampilan browser diperiksa melalui preview pengembangan Vite; bundle produksi tidak disajikan pada server terpisah.
- Screenshot desktop aktual sekitar 1363 × 936, iframe mobile 390/320, kanal, dialog WhatsApp/email, bantuan dan footer diperiksa. Intro diperpendek setelah ditemukan satu kata tersisa pada baris kedua desktop.
- DOM pada nominal 1920/1440/1024/390/320 menghasilkan scrollWidth = clientWidth (1905/1425/1009/375/305). Tidak ada overflow internal teks/kontrol yang diperiksa. Nomor/email tetap nowrap dan satu baris. Kontrol salin/tautan minimal 44 px; tombol utama 50 px.
- WhatsApp dibuka dengan Enter dan klik; email dibuka dengan Space, Enter dan klik. Fokus awal menuju Tutup dialog. Tab/Shift+Tab diuji dua arah, tetap di dialog. Escape mengembalikan fokus ke pemicu. Tombol X dan Mengerti diuji pada dialog email, dengan fokus kembali ke Kirim Email.
- Dialog email 320 terukur lebar 290 px / tinggi sekitar 378 px; scrollHeight sama dengan clientHeight, tanpa overflow horizontal. Nomor/email dialog tetap terbaca. Body overflow kembali ke nilai semula setelah ditutup.
- Status Nomor disalin / Email disalin muncul di desktop, dan Email disalin juga diuji pada mobile. Verifikasi isi clipboard melalui tempel ulang belum berhasil: clipboard virtual alat browser tidak menangkap salin dari halaman dan melaporkan tidak ada data ketika Ctrl+V maupun Shift+Insert dicoba di input QA lokal. Tidak ada klaim bahwa isi clipboard lintas aplikasi telah diverifikasi. API salin lokal melaporkan berhasil, tetapi pengujian tempel tetap terbatas.
- Tautan FAQ, Panduan Pemasangan dan Paket & Harga dibuka. CTA dari FAQ, Panduan, Solusi Teknologi dan navbar diuji kembali ke kontak. Back saat dialog terbuka menutup halaman kontak serta memulihkan body overflow; forward dan refresh kembali ke kontak tanpa dialog terbuka.
- Navbar tetap floating (data-floating=1) pada kontak, termasuk saat scroll sekitar 553 px. Dropdown Bantuan dibuka dengan Enter dan ditutup Escape. Menu mobile Hubungi Kami menutup menu serta memfokuskan main. Fokus tombol salin terukur outline mint solid 2 px.
- DOM kontak berisi nol tautan wa.me/mailto/tel dalam mode awal. Uji fungsi konfigurasi dengan Node memastikan mode ilustratif maupun konfigurasi belum terverifikasi tidak menghasilkan URL. Salinan konfigurasi mode operasional/verified diuji hanya sebagai pembentuk string URL, tanpa membuka atau mengirim apa pun; ini bukan verifikasi kontak.
- Kontras warna solid dihitung: ivory/navy 15,75:1; isi/navy 9,87:1; label/navy 8,93:1; mint/navy 9,47:1; teks tombol navy/ivory 14,83:1. Bukan audit kontras glass per piksel.
- Perbandingan byte dengan ZIP panduan clean memastikan seluruh source/aset sebelumnya identik kecuali Information.jsx (komponen kontak lama diganti dan rute diarahkan). Fungsi Process identik. Landing, Solusi Teknologi, FAQ, Panduan, routing, shared CSS/navbar/footer, katalog/order, package/lockfile dan metadata HTML tidak berubah. Source baru hanya ContactPage.jsx, contact.css, contactConfig.js.

## Batas dan hasil penyerahan

Mobile memakai iframe Chrome, bukan ponsel fisik. Safari/iOS, Firefox, screen reader penuh, keyboard virtual dan emulasi reduced-motion belum diuji. CSS reduced-motion tetap disediakan dan tidak ada animasi baru yang diperlukan dialog. Tidak ada uji ulang konfirmasi pemesanan, deployment atau pengiriman pesan/email nyata. Tidak ada aset baru atau pencarian foto. ZIP lengkap tanpa node_modules, harness QA, halaman referensi sementara, screenshot internal atau helper.

Jalankan npm ci lalu npm run dev; buka http://localhost:4173/#/kontak.

---

# Panduan lebih clean — 26 Oktober 2026

Komposisi disederhanakan: pembuka tanpa ilustrasi; daftar isi horizontal; satu pola judul/pengantar di kiri dan isi di kanan. Mobile satu kolom. Label peran, panah, nomor dekoratif 01–06 dan garis per item dilepas. Garis hanya memisahkan kelompok informasi; isi dibatasi 66ch. Catatan cakupan instalasi tetap terbuka.

Perbandingan byte dengan ZIP sebelumnya memastikan hanya InstallationGuide.jsx serta installation.css berubah pada source aplikasi. Semua array persiapan, enam langkah dan serah terima identik. Paragraf utama dipertahankan; label peran dan judul visual daftar isi dihapus, nama aksesibel navigasinya tetap ada. Source/aset lain, harga, order, navbar/footer, landing, solusi dan FAQ identik. Tidak ada aset baru; SVG pembuka dilepas.

Build produksi berhasil (Vite 6.4.3, 1.595 modules): CSS index-B2qbTqZe.css, JS index-cCY2DxYL.js. Browser memakai preview pengembangan Vite; bundle produksi tidak disajikan pada server terpisah. Screenshot desktop sekitar 1363 × 936, iframe 1440, mobile 390/320 diperiksa pada pembuka, langkah, serah terima, bantuan dan penutup. DOM pada nominal 1920/1440/1024/390/320 memiliki scrollWidth = clientWidth (1905/1425/1009/375/305), tanpa overflow internal teks yang diperiksa. Kontrol daftar isi/CTA minimal 44 px.

Tab pada daftar isi menunjukkan outline mint 2 px; klik/Enter menuju bagian diuji. Rute tetap #/panduan, fokus menuju heading; target desktop sekitar 124 px dari atas dengan navbar berakhir 82 px. Tautan FAQ, Paket & Harga, CTA Hubungi Kami, refresh, back/forward dan dropdown Bantuan desktop diuji ulang. Tidak ada accordion/checklist baru.

Batas: mobile memakai iframe Chrome, bukan ponsel fisik. Safari/iOS, Firefox, screen reader penuh dan emulasi reduced-motion belum diuji; aturan reduced-motion dan logika daftar isi dipertahankan. Tidak ada kunjungan Starlink baru pada revisi ini, uji pemesanan akhir, atau deployment. Jalankan npm ci lalu npm run dev; buka http://localhost:4173/#/panduan.

---

Riwayat sebelumnya (ilustrasi/sidebar yang dijelaskan berikut tidak lagi berlaku pada versi terbaru):

# Penyempurnaan Panduan Pemasangan — 26 Oktober 2026

Revisi terbaru khusus Bantuan → Panduan Pemasangan (`#/panduan`). Bagian di bawah pemisah merupakan riwayat pengerjaan sebelumnya.

## Hasil dan alasan

- Pembuka dua kolom menghubungkan judul singkat, tujuan panduan, dan ilustrasi umum penempatan terminal–router–Wi-Fi. Mobile mengikuti urutan judul → ilustrasi → navigasi → isi.
- Empat bagian memisahkan persiapan pelanggan, pekerjaan teknisi, pemeriksaan bersama saat serah terima, serta bantuan. Navigasi samping sticky pada desktop menjadi pintasan ringkas di atas isi pada mobile.
- Lima hal yang perlu disiapkan menggunakan daftar definisi, dengan label dan penjelasan sejajar. Enam tahap teknisi menggunakan satu kolom bernomor 01–06 agar urutannya mudah diikuti. Pemeriksaan serah terima memakai dua kolom terbuka pada desktop, lalu satu kolom pada mobile.
- Batas kiri/kanan, lebar baca, ukuran subjudul dan ritme spacing diselaraskan dengan FAQ terbaru. Tidak ada kartu besar berulang, foto dekoratif, glow, shadow berat atau glass pada isi.
- Navy #0B1B27, ivory #F4F3EE, teks pendukung #B5C5CF, mint #80CDBB dan Barlow lokal mengikuti proyek terakhir; footer tetap #06121B.
- Ilustrasi dibuat langsung dengan SVG di InstallationGuide.jsx, dilengkapi title/desc dan caption “Ilustrasi penempatan umum”. Bukan foto, image generation, produk bermerek atau rancangan pemasangan final. Label diperbesar pada mobile setelah evaluasi screenshot.
- Panduan menegaskan layanan terkelola. Tidak ada instruksi pelanggan memasang terminal, memanjat atap, membongkar perangkat atau mengubah listrik. Pemeriksaan awal terbatas pada sumber daya, kabel yang aman dijangkau dan jaringan Wi-Fi. Factory reset diarahkan ke teknisi, bukan langkah awal.
- Cakupan standar tetap terminal/router pinjaman, kabel hingga 20 meter dan konfigurasi. Titik Wi-Fi mengikuti paket; tiang khusus, pekerjaan sipil, kabel ekstra dan transportasi terpencil memerlukan survei/penawaran terpisah. UPS tetap tambahan opsional, panel surya/rancangan energi khusus bergantung penilaian lokasi. Tidak ditambahkan model perangkat, sudut, lampu, password, janji kecepatan, cakupan atau waktu pemasangan.
- Informasi inti selalu terbuka. Tidak ada accordion atau checklist interaktif. Tautan FAQ dan Paket & Harga bersifat kontekstual, penutup hanya satu CTA utama Hubungi Kami.

Source aplikasi yang berubah: Information.jsx, data.js, serta file baru InstallationGuide.jsx dan installation.css. Empat ringkasan installationSteps lama dihapus setelah digantikan panduan lengkap. CSS baru hanya berlaku dalam `.installation-manual`; nama ini menghindari aturan legacy `.install-guide`. Landing, Solusi Teknologi, FAQ, kategori, harga, order, navbar/footer dan routing tidak diubah.

## Referensi yang benar-benar diamati

Starlink dibuka di Chrome desktop melalui Support → Help Center → Setup & Install → Setup Guides & Manuals → Starlink Kits → Setup Guides → Starlink Standard 4 Setup Guide. Artikel yang diamati: https://starlink.com/support/article/d3ffa343-9e3f-e1b8-fb1c-4b40d5de2df4.

Yang diamati langsung: sidebar kategori yang dapat dibuka, kolom artikel yang dibatasi, heading dan langkah bernomor, pemisah tipis, daftar isi “On this page”, serta bagian bantuan lanjutan. Tautan daftar isi “Connect to Wi-Fi” diklik dan perpindahan bagian dilihat. Tautan PDF dibuka, tetapi isi PDF tidak menjadi dasar klaim pengamatan visual. Artikel web yang diamati terutama memakai teks/daftar/tabel; SVG NusaLink merupakan keputusan adaptasi.

Prosedur perangkat Starlink tidak disalin. NusaLink tidak menetapkan model terminal/router sehingga panduan tetap pada layanan terkelola dan hasil survei. Tidak ada screenshot panduan baru yang dilampirkan pada revisi ini. Percobaan mobile melalui iframe 390 × 844 ditolak (“refused to connect”); API browser tidak menyediakan resize viewport top-level. Tampilan mobile Starlink dan animasi lain yang tidak diperiksa tidak diklaim telah diamati.

## Pemeriksaan yang benar-benar dilakukan

- Build produksi `npm run build` berhasil: Vite 6.4.3, 1.595 modules, CSS `index-D9K8xjJg.css`, JS `index-CMWA95Of.js`. Browser terkonfirmasi memakai JS final tersebut dari preview produksi.
- Screenshot desktop aktual sekitar 1363 × 936 dan iframe 1440 × 900 diperiksa. Persiapan termasuk batas instalasi, seluruh enam tahap, serah terima, bantuan serta penutup diperiksa. Screenshot mobile iframe 390 dan 320 diperiksa untuk pembuka, ilustrasi/label, teks panjang, langkah, serah terima, bantuan, CTA dan footer.
- DOM diperiksa pada viewport nominal 1920, 1440, 1024, 390 dan 320. ScrollWidth sama dengan clientWidth (1905, 1425, 1009, 375, 305 akibat scrollbar 15 px). Tidak ditemukan overflow internal pada p/h1/h2/h3/dt/dd/li/tautan yang diperiksa. Kontrol daftar isi dan CTA minimal 44 px pada mobile, 46–50 px pada desktop.
- Daftar isi diuji lewat klik dan Enter. Rute tetap `#/panduan`, fokus berpindah ke heading tujuan. Target desktop terukur sekitar 124 px dari atas dengan navbar berakhir pada 82 px; target mobile sekitar 107 px, navbar berakhir 74 px. Offset diperbaiki setelah menemukan scroll-padding global ikut ditambahkan.
- Tab dari Persiapan menuju Proses pemasangan menunjukkan outline mint solid 2 px. Tab berikutnya dari daftar isi menuju tautan Paket & Harga juga menampilkan outline. Tautan Paket & Harga diaktifkan dengan Enter; FAQ diklik; CTA Hubungi Kami diklik pada desktop dan mobile. Rute serta judul tujuan diperiksa. Tautan footer Panduan dipakai untuk navigasi.
- Refresh mempertahankan rute/judul panduan. Back/forward diuji antara panduan dan kontak. Navbar floating bernilai 1 saat halaman dibuka dan saat scroll. Dropdown Bantuan dibuka dengan Enter, ArrowDown memfokuskan FAQ, Escape menutup dan mengembalikan fokus. Menu mobile Bantuan → Panduan Pemasangan menutup menu serta memfokuskan main.
- FAQ desktop, pembuka Solusi Teknologi mobile, serta hero landing mobile dilihat sebagai pemeriksaan dampak. FAQ tetap navy tanpa overflow; navbar landing di atas hero tetap transparan (data-floating=0).
- Perbandingan byte dengan ZIP FAQ memastikan source bersama, FAQ, Solusi Teknologi, landing, katalog/order, routing, seluruh public/assets, package/lockfile, konfigurasi dan index HTML identik. Fungsi Process serta Contact identik; data.js hanya kehilangan blok panduan lama yang sudah digantikan.
- Kontras solid dihitung: ivory/navy 15,75:1; isi/navy 9,87:1; label/navy 8,93:1; mint/navy 9,47:1; teks tombol navy/ivory 14,83:1. Ini bukan audit kontras glass per piksel.
- Runtime normal melaporkan reduced-motion false dan tidak ada animasi CSS pada elemen panduan. Aturan reduced-motion dan cabang scroll tanpa gerakan diperiksa pada source; preferensi reduce belum diemulasikan.

## Batas verifikasi dan penyerahan

Mobile memakai iframe Chrome, bukan ponsel fisik. Safari/iOS, Firefox, screen reader penuh, keyboard virtual dan safe area belum diuji. Tidak ada uji ulang konfirmasi pemesanan, deployment publik, transaksi atau pengiriman data. Panduan merupakan isi konsep proyek, bukan validasi teknis instalasi perangkat tertentu.

Tidak ada foto baru, pencarian stok, aset Starlink atau image generation. Ilustrasi SVG buatan kode dicatat dalam ASSETS.md. ZIP lengkap berisi source, public, build dan dokumentasi, tanpa node_modules, harness QA, halaman referensi sementara atau helper. Jalankan `npm ci` dan `npm run dev`; buka http://localhost:4173/#/panduan.

---

# Penyempurnaan FAQ — 26 Oktober 2026

Riwayat revisi khusus Bantuan → FAQ (`#/faq`).

## Hasil dan alasan

- Pembuka lebih ringkas: label kecil, judul proporsional dan satu kalimat pengantar. Tidak ada foto besar atau pencarian dekoratif.
- Tiga topik membantu memindai 12 pertanyaan. Desktop memakai navigasi samping yang sticky dan daftar pertanyaan terbuka; mobile menempatkan pintasan topik sebelum daftar. Lompatan topik mempertahankan `#/faq`, memfokuskan judul tujuan, dan memperhitungkan navbar.
- Kartu FAQ lama diganti garis pemisah halus, ukuran pertanyaan yang konsisten, serta ikon plus/minus yang sejajar. Jawaban dibatasi sekitar 69 karakter per baris pada layar lebar.
- Accordion mengizinkan beberapa jawaban terbuka. Seluruh baris merupakan button, Enter/Space berfungsi, `aria-expanded` dan `aria-controls` terhubung ke jawaban, serta fokus mint terlihat. Panel tersembunyi memakai `hidden`; tidak ada animasi tinggi yang berisiko memotong jawaban panjang. Transisi warna/ikon dan smooth scroll dimatikan saat reduced motion.
- Isi mengikuti katalog, panduan pemasangan, kontak dan pemesanan yang sudah ada: terminal/router pinjaman, kabel standar 20 meter, penawaran terpisah setelah survei untuk kebutuhan khusus, jam dukungan yang tersedia, dan batas kecepatan ilustratif. Nilai harga perangkat tambahan menggunakan `extras` dan `rupiah` dari katalog; harga paket tidak disalin ke FAQ.
- Status tugas/demo dijelaskan pada topik relevan, termasuk tidak adanya pembayaran/pengiriman pesanan serta data formulir yang hanya bertahan selama sesi halaman. Tautan kontekstual mengarah ke Paket & Harga, Solusi Teknologi, Panduan Pemasangan, Cara Kerja dan kontak.
- Penutup memakai satu CTA utama Hubungi Kami. Palet navy #0B1B27, ivory #F4F3EE, mint #80CDBB, font Barlow lokal dan footer #06121B mengikuti proyek terakhir.

Source aplikasi yang berubah hanya `Information.jsx`, `data.js`, serta dua file baru `FaqPage.jsx` dan `faq.css`. FAQ lama dihapus untuk menghindari sumber isi ganda. CSS dibatasi pada `.faq-support`; navbar, footer, landing, Solusi Teknologi, paket/harga dan alur pemesanan tidak diubah. Tidak ada aset visual atau foto baru, image generation, hotlink maupun aset milik Starlink. Kredit aset yang dipertahankan ada di ASSETS.md.

## Referensi yang benar-benar diperiksa

Starlink dibuka di Chrome desktop, lalu navigasi Support → Help Center diikuti. Pusat bantuan menggunakan sidebar topik, judul dan pencarian, daftar FAQ berupa tautan artikel, pemisah halus dan area baca terukur. Artikel “What comes in my Starlink Kit?” dibuka; kategori Hardware Specifications juga dibuka pada sidebar. Referensi yang diperiksa: https://starlink.com/support dan https://starlink.com/support/article/67db861f-7c98-cc54-30ad-a55eb6625b93.

NusaLink mengadaptasi alignment, hierarki dan disiplin lebar baca. Tiga topik dengan accordion adalah keputusan adaptasi untuk skala konten NusaLink; bukan klaim bahwa FAQ Starlink memakai accordion. Pencarian Starlink tidak diuji. Tidak ada screenshot FAQ baru dari pengguna pada revisi ini. Percobaan referensi mobile melalui iframe 390 × 844 ditolak (“refused to connect”); API browser tidak menyediakan resize viewport top-level. Karena itu, tampilan dan interaksi mobile Starlink belum terverifikasi.

## Pemeriksaan yang dilakukan

- Build produksi `npm run build` berhasil, Vite 6.4.3 / 1.593 modules. Final CSS `index-4YLWIst7.css`, JS `index-Bn9xQK8_.js`. Build diperiksa melalui preview produksi.
- Screenshot desktop aktual sekitar 1363 × 936 dan iframe 1440 diperiksa pada pembuka, daftar, jawaban terbuka dan penutup; iframe 390 serta 320 diperiksa pada teks panjang, kategori, penutup dan footer.
- DOM pada viewport nominal 1920, 1440, 1024, 390, 320 menghasilkan clientWidth/scrollWidth yang sama: 1905, 1425, 1009, 375, 305 (scrollbar 15 px). Tidak ditemukan overflow internal pada teks/kontrol yang diperiksa. Semua 12 jawaban dibuka bersamaan dan tidak ada jawaban yang scrollHeight/scrollWidth-nya melebihi area panel. Baris pertanyaan minimal 72–74 px.
- Enter dan Space membuka/menutup pertanyaan. Beberapa jawaban terbuka bersamaan. Tab dari pertanyaan menuju tautan dalam jawaban; outline mint 2 px terverifikasi. Ikon terbuka menyembunyikan garis vertikal dan `aria-expanded` sesuai keadaan panel. Jawaban pendek dibuka/ditutup kembali lewat klik mobile.
- Lompatan kategori mempertahankan rute FAQ dan memfokuskan judul tujuan. Tautan Paket & Harga, Solusi Teknologi, Cara Kerja, Panduan Pemasangan serta CTA Hubungi Kami dibuka dan rute/judulnya diperiksa. Tautan panduan juga diaktifkan dengan Enter pada mobile; footer FAQ dan CTA kontak mobile diklik. Tidak ada pencarian/filter yang perlu diuji karena tidak ditambahkan.
- Refresh mempertahankan halaman FAQ dengan semua jawaban tertutup. Back/forward mengembalikan rute FAQ/kontak dengan benar. Navbar floating tetap terbaca saat FAQ dibuka dan saat scroll. Dropdown Bantuan dibuka dengan Enter, ditutup Escape dan fokus kembali ke pemicu. Menu mobile Bantuan → FAQ menutup menu dan memfokuskan `main`.
- Kontras warna solid dihitung: ivory/navy 15,75:1; isi/navy 9,87:1; label/navy 8,93:1; mint/navy 9,47:1; teks navy/tombol ivory 14,83:1. Ini bukan audit kontras tiap piksel glass.
- Runtime normal melaporkan reduced-motion false dan tidak ada animasi CSS pada elemen FAQ. Aturan reduced-motion dan cabang scroll tanpa gerakan diperiksa di source; preferensi reduce belum diemulasikan secara runtime.
- Perbandingan byte dengan ZIP sebelumnya memastikan seluruh source bersama, landing, Solusi Teknologi, katalog, pemesanan, routing, foto/font, package, lockfile, konfigurasi dan index HTML identik. Blok FAQ adalah satu-satunya isi yang dihapus dari data.js. Fungsi Process, Installation dan Contact tetap identik.

## Batas verifikasi

Mobile menggunakan iframe Chrome, bukan ponsel fisik. Safari/iOS, Firefox, screen reader penuh, keyboard virtual, safe area dan emulasi reduced-motion belum diuji. Tidak ada uji ulang pemesanan sampai konfirmasi akhir karena logikanya tidak berubah. Tidak ada deployment publik, transaksi atau pengiriman data nyata.

ZIP berisi source, public, build dan dokumentasi lengkap tanpa node_modules, harness QA, halaman referensi sementara, screenshot internal atau helper. Jalankan `npm ci`, lalu `npm run dev`; buka http://localhost:4173/#/faq.

---

# Revisi lebih clean — 26 Oktober 2026

Penyempurnaan ini menanggapi kesan halaman masih terlalu ramai.

- Judul pembuka menjadi dua baris: “Koneksi sesuai kondisi lokasi.” Ukuran judul serta foto diperkecil agar lebih seimbang.
- Label bab, angka berulang, kontur dekoratif, garis pada ringkasan, serta ikon ganda di alur satelit dihapus. Diagram tetap menyampaikan hubungan teknis yang sama.
- Detail kecil pada ilustrasi perangkat dikurangi; ilustrasi sekarang tetap berada dalam batas kolom. Foto komunitas dipendekkan proporsinya sehingga teks lebih cepat terlihat.
- Caption dan keterangan diagram diringkas. Konteks foto stok dipusatkan pada pengantar; kredit lengkap tetap di ASSETS.md.
- Kolom pengelolaan memakai ukuran yang sama, dengan dua item terakhir terpusat. Spacing dan skala judul diseragamkan.
- Paragraf penjelasan empat solusi identik dengan versi sebelumnya. Data, harga, landing, navbar/footer, routing, pemesanan, foto dan font identik. Perubahan source hanya SolutionsTechnology.jsx serta solutions.css, ditambah penyederhanaan SVG yang sudah ada.

## Pemeriksaan revisi ini

Build produksi berhasil: CSS index-Ct0NyrY0.css dan JS index-CRG1twE8.js, Vite 6.4.3. Browser terkonfirmasi memuat JS final tersebut.

Screenshot desktop aktual sekitar 1363 × 936 dan iframe 1440 diperiksa untuk pembuka, satelit, Wi-Fi, hybrid, energi dan pengelolaan. Mobile 390 diperiksa untuk pembuka dan CTA; alur satelit diperiksa pada 320. Pemeriksaan DOM pada viewport nominal 1920, 1440, 1024, 390, 320 menghasilkan scrollWidth sama dengan clientWidth (1905, 1425, 1009, 375, 305 karena scrollbar). Tidak ditemukan overflow internal pada teks yang diperiksa.

Tab dari tautan kembali mencapai CTA Paket & Harga dengan outline solid; Enter membuka Paket & Harga. CTA Hubungi Kami diklik dan membuka halaman Kontak. Perbandingan byte memastikan source bersama, data, foto, font, package serta lockfile tetap sama.

Belum diuji pada ponsel fisik, Safari/iOS, Firefox atau screen reader penuh. Reduced motion tetap pada CSS, belum diemulasikan pada revisi ini. Tidak ada pengujian ulang pemesanan hingga konfirmasi akhir. Tidak ada foto baru atau image generation. Cara menjalankan: npm ci lalu npm run dev, buka http://localhost:4173.

---

# Riwayat: Penyempurnaan visual Solusi Teknologi — 26 Oktober 2026

Catatan riwayat untuk halaman Tentang → Solusi Teknologi, rute `#/solusi`.

## Temuan dan perubahan visual

1. Pembuka sebelumnya mengulang foto hero gelap dengan teks di atasnya. Pembuka kini memakai foto Mandalika di sebelah teks, judul tiga baris yang disengaja, dan deskripsi lebih sempit. Foto tetap tajam; teks memperoleh kontras solid tanpa overlay foto.
2. Panel diagram satelit yang besar dan seragam dilepas. Ilustrasi perangkat skematis SVG menempati bidang terbuka di kanan; alur berlabel tetap menjelaskan operator ↔ terminal ↔ router ↔ perangkat. Bentuknya merupakan ilustrasi generik, bukan produk tertentu. Pada layar kecil, alur disusun vertikal agar tidak terlihat seperti dua pasangan yang terpisah.
3. Foto Wi-Fi Komunitas kini membentang selebar konten. Teks dan alur distribusi ditempatkan di bawahnya; jarak alur dengan catatan kapasitas dirapatkan setelah evaluasi screenshot. Mobile mengikuti urutan penjelasan → foto → distribusi.
4. Diagram hybrid dilepas dari bingkai luar dan label diperbesar. Kotak router dipertahankan hanya untuk memperjelas fungsi simpul pengelola jalur.
5. Foto energi memakai crop lebih lebar dengan wajah teknisi dan panel tetap terlihat. Urutan DOM penjelasan mendahului foto; desktop memakai foto di kiri melalui grid, mobile kembali mengikuti urutan baca.
6. Kolom kosong di kiri daftar pengelolaan diatasi dengan susunan tipografi tiga kolom lalu dua kolom, tanpa kartu baru. Mobile memakai daftar vertikal.
7. CTA akhir menggunakan teks di kiri dan dua tombol di kanan pada desktop, lalu tombol selebar isi pada mobile. Spacing, lebar paragraf, garis dan alignment diselaraskan; tidak ada dekorasi atau animasi baru yang menjadi fokus.

Palet tetap navy `#0B1B27`, footer `#06121B`, ivory `#F4F3EE`, mint `#80CDBB`, serta Barlow lokal. Tidak ada foto baru, hotlink, aset Starlink atau gambar foto sintetis. Aset baru hanya `network-equipment.svg` yang dibuat dengan kode. Kredit ada di **ASSETS.md**.

## Referensi yang benar-benar diamati

- Keenam screenshot pengguna diperiksa: foto lebar/carousel dengan caption rapat, kelompok kolom tipografi, pasangan perangkat–teks, pembagian foto–teks, hero fotografis, dan penutup terpusat. Kartu harga pada referensi tidak dipindahkan ke halaman teknologi.
- `https://starlink.com/` dan `https://starlink.com/business/mobility` dibuka di Chrome desktop. Bagian perangkat Performance, Advanced power supply dan carousel penggunaan dilihat saat scroll; tombol carousel berikutnya juga diklik. Heading perangkat terukur 48 px / line-height 50,4 px pada viewport browser saat pemeriksaan.
- Viewport mobile referensi dicoba dengan iframe 390 × 844, tetapi Starlink menolak framing (refused to connect). Browser ini tidak menyediakan pengaturan viewport top-level melalui API yang tersedia. Karena itu, tidak ada klaim telah memeriksa Starlink mobile atau animasi referensi. Adaptasi mobile didasarkan pada screenshot, isi NusaLink dan pemeriksaan responsif lokal.

## Verifikasi yang dilakukan

- Build produksi final `npm run build` berhasil: Vite 6.4.3, CSS `index-DmD33tKR.css`, JS `index-DedTLdl2.js`. Preview produksi dibuka ulang; browser terkonfirmasi memuat JS final tersebut.
- Screenshot seluruh rangkaian halaman diperiksa pada desktop aktual sekitar 1363 × 936, iframe desktop 1440 × 900, serta iframe mobile 390 × 844. Diagram juga diperiksa pada 1024 dan 320; foto lebar serta ukuran halaman diperiksa pada 1920.
- DOM diperiksa pada viewport nominal 1920, 1440, 1024, 390 dan 320. ClientWidth masing-masing 1905, 1425, 1009, 375 dan 305 karena scrollbar 15 px; scrollWidth sama. Tidak ditemukan paragraf, judul, strong, small atau tautan dengan overflow horizontal internal melebihi 1 px.
- Foto terkonfirmasi termuat pada naturalWidth 2400, 2400 dan 1800. SVG termuat sebagai vektor. Crop foto diperiksa pada desktop dan mobile.
- Keyboard Tab dari tautan kembali mencapai CTA Paket & Harga; outline solid mint 2 px terlihat. Enter pada kedua CTA menghasilkan halaman Paket & Harga dan Hubungi Kami. Tab dari CTA pertama mencapai CTA kontak.
- Dropdown Tentang: ArrowDown memfokuskan Profil Perusahaan; Escape menutup dan mengembalikan fokus ke Tentang. Menu mobile Tentang → Solusi Teknologi menutup menu serta memfokuskan `main`.
- Navbar landing diperiksa: transparan di atas hero (`data-floating=0`), floating saat profil terlihat (`1`), kembali transparan setelah scroll ke atas selesai (`0`). Navbar halaman informasi tetap floating. FAQ mobile dibuka dan tidak mengalami overflow. Paket dan Kontak juga terverifikasi melalui CTA.
- Runtime normal: preferensi reduced motion browser bernilai false dan tidak ada elemen halaman teknologi dengan animationName selain none. Source CSS reduced-motion diperiksa: transition/animation dimatikan dalam scope halaman; aturan bersama tidak berubah. Mode reduce belum disimulasikan secara runtime.
- Kontras pasangan warna solid dihitung dengan luminansi sRGB: ivory/navy 15,75:1; teks pendukung/navy 9,87:1; caption/navy 8,93:1; mint/navy 9,47:1; teks tombol navy/ivory tombol 14,83:1. Ini bukan audit aksesibilitas penuh atau pengukuran kontras glass di setiap piksel foto.
- Perbandingan byte dengan ZIP Solusi Teknologi sebelumnya memastikan seluruh source selain SolutionsTechnology.jsx dan solutions.css identik. Semua foto, font, data, harga, pemesanan, landing, navbar/footer, routing, package, lockfile serta metadata HTML dipertahankan. Paragraf penjelasan utama keempat solusi dibandingkan dan identik.

## Batas verifikasi

Mobile menggunakan iframe Chrome, bukan perangkat fisik. Safari/iOS, Firefox, screen reader penuh, safe area dan keyboard virtual belum diuji. Reduced-motion diperiksa pada source dan runtime normal, belum emulasi preferensi reduce. Interaksi pemesanan hingga konfirmasi akhir tidak diuji ulang karena logikanya tidak berubah. Tidak ada deployment publik, transaksi atau pengiriman data nyata.

ZIP lengkap mencakup source, build, aset dan dokumentasi; tanpa node_modules, harness QA, screenshot internal atau dependensi terpasang. Jalankan `npm ci`, lalu `npm run dev`; buka http://localhost:4173 dan Tentang → Solusi Teknologi.

---

# Riwayat: Solusi Teknologi — 26 Oktober 2026

Bagian ini merekam versi sebelum penyempurnaan komposisi di atas.

## Perubahan dan alasan

- Halaman `#/solusi` mendapat pembuka foto lingkungan Cisoka, label SOLUSI TEKNOLOGI, judul singkat dan deskripsi layanan. Foto besar dan overlay membantu mengisi komposisi sekaligus menjaga keterbacaan.
- Empat solusi dijelaskan bergantian lewat teks, foto dan diagram, bukan deretan kartu yang identik. Font Barlow, navy `#0B1B27`, ivory dan aksen mint mengikuti landing page terbaru.
- Diagram satelit menjelaskan jaringan operator → terminal → router → perangkat. Diagram Wi-Fi membedakan sumber internet dari jaringan distribusi. Diagram hybrid menjelaskan dua jalur menuju router lokal, tanpa klaim otomatis menggabungkan kecepatan.
- Setiap solusi menjelaskan kondisi pemakaian. Penjelasan mencakup pengelolaan akses/voucher, dampak perpindahan jalur, dan penentuan kapasitas energi berdasarkan penilaian lokasi.
- Ringkasan pengelolaan mencakup monitoring, akses pengguna, pemeliharaan, dukungan dan pelatihan lokal. Fasilitas mengikuti paket/hasil survei; tidak semua selalu termasuk.
- CTA akhir memakai rute `#/paket` dan `#/kontak`. Halaman membahas bentuk layanan/teknologi; tidak menyalin daftar harga.
- Foto pemasangan panel surya nyata oleh Kindel Media / Pexels, 1800 × 1350, disimpan lokal sebagai WebP sekitar 228 KB. Foto lingkungan Tom Fisk dan Evgenia Basyrova dipakai ulang dari aset lokal 2400 px. Caption menjelaskan konteks ilustratif; tidak menyajikan stok sebagai instalasi atau pelanggan NusaLink. Berkas sintetis lama `solusi-satelit.png` dihapus dari aset aktif.
- Diagram menggunakan teks HTML, CSS dan ikon SVG Lucide agar tetap tajam dan dapat disusun ulang pada mobile. Tidak ada image generation.

## Referensi yang diperiksa

Keempat screenshot pengguna diperiksa seluruhnya: pembuka foto lebar dengan teks kiri, kolom tipografi tanpa panel berlebihan, pasangan visual/teks, serta proporsi foto landscape dan tombol sederhana. Website `https://starlink.com/technology` dibuka di Chrome desktop, termasuk pembuka dan bagian setelah scroll. Komposisi visual dan teks diadaptasi; tidak ada klaim telah memeriksa animasi referensi atau versi mobile website referensi. Tidak ada aset maupun klaim performa Starlink yang dipindahkan ke NusaLink.

Google Images pada sesi browser masih meminta reCAPTCHA. Pencarian foto energi beralih langsung ke Pexels; sumber asli serta halaman lisensi dibuka. Kredit dan ketentuannya ada di **ASSETS.md**.

## Pengujian yang dilakukan

- `npm run build` berhasil pada Vite 6.4.3: CSS `index-C3ggAini.css`, JS `index-DiCFeX1X.js`. Browser produksi dibuka ulang dan terkonfirmasi memuat JS tersebut.
- Screenshot dari atas sampai bawah diperiksa pada desktop aktual sekitar 1363 × 936, iframe desktop 1440 dan mobile 390: pembuka, satelit, Wi-Fi, hybrid, energi, pengelolaan, CTA serta footer. Screenshot tambahan diagram diperiksa pada 1920, 1024 dan 320.
- Pemeriksaan DOM pada viewport nominal 1920 × 1080, 1440 × 900, 1024 × 768, 390 × 844 dan 320 × 844: scrollWidth sama dengan clientWidth; tidak ditemukan elemen isi utama dengan overflow internal melebihi 2 px. Scrollbar iframe Chrome mengurangi lebar konten 15 px.
- Foto pada halaman terkonfirmasi complete dengan naturalWidth 2400, 2400 dan 1800. Foto energi dan crop mobile diperiksa secara visual.
- Diagram satelit direvisi setelah screenshot menunjukkan garis dapat terbaca menuju router. Posisi garis sekarang sejajar dengan terminal; pada desktop 1920 keduanya terukur di x=455,05, dan di mobile pusat ikon terminal serta garis berbeda kurang dari 1 px.
- CTA Lihat Paket & Harga diklik dan menghasilkan h1 Paket & Harga; CTA Hubungi Kami diklik dan menghasilkan h1 Hubungi Kami.
- Dropdown Tentang: ArrowDown membuka dan memfokuskan Profil Perusahaan; Escape menutup dan mengembalikan fokus ke Tentang. Menu mobile Tentang → Solusi Teknologi menutup menu serta memfokuskan main.
- Navbar halaman informasi tetap floating. Landing page dibuka ulang: navbar transparan di atas hero (`data-floating=0`), floating pada profil (`1`), lalu kembali transparan setelah scroll kembali ke atas selesai (`0`). Latar landing tetap `rgb(11,27,39)`.
- FAQ, Panduan Pemasangan, Paket & Harga, serta konfigurasi Komunitas Plus diperiksa pada 320 dan 1440 melalui DOM: heading sesuai, navbar floating, tanpa overflow horizontal.
- Perbandingan byte dengan ZIP Navy Gelap memastikan Home, landing.css, CSS bersama, Navbar/Footer, komponen shared, routing, data kategori, harga, order, package, lockfile dan metadata HTML tetap identik. Fungsi Process, FAQ, Installation dan Contact juga identik. Perubahan source hanya Information.jsx, SolutionsTechnology.jsx dan solutions.css; aset energi ditambah, gambar sintetis solusi lama dilepas, dan dokumentasi diperbarui.

## Batas verifikasi

Mobile diuji memakai iframe Chrome, belum ponsel fisik, Safari/iOS atau Firefox. Reduced motion dipertahankan di CSS bersama dan ditambahkan pada scope halaman, tetapi pengaturan tersebut belum disimulasikan secara runtime. Fokus keyboard diperiksa; belum audit screen reader/aksesibilitas penuh atau pengukuran kontras setiap piksel foto/glass. Pemesanan hingga konfirmasi akhir tidak diuji ulang karena logika tidak berubah. Tidak ada deployment publik, pembayaran, atau pengiriman data nyata.

ZIP lengkap mencakup source, build produksi, aset dan dokumentasi tanpa node_modules atau harness/screenshot internal. Jalankan `npm ci`, lalu `npm run dev`; buka http://localhost:4173 dan menu Tentang → Solusi Teknologi.

---

# Riwayat palet: Navy Gelap — 25 Oktober 2026

Palet ini merupakan kondisi terbaru, sesuai pratinjau navy yang diperdalam.

## Perubahan

- Latar landing `#0B1B27`, footer `#06121B`, teks ivory `#F4F3EE`, teks pendukung `#B5C5CF`, aksen mint `#80CDBB`.
- Navbar floating menggunakan glass navy `rgba(11,27,39,.90)`; dropdown serta tint kartu hero diselaraskan. Tombol ivory `#E7EEE9` memakai teks navy.
- Navy lebih dalam menjaga kesan tenang dan sinematik; perbedaan footer tetap halus dan teks utama tetap jelas.
- Tata letak, spacing, font, foto, kategori, harga dan alur pemesanan dipertahankan. Dibanding ZIP Hijau Pinus, perubahan aplikasi hanya `src/landing.css` dan theme color di `index.html`; dokumentasi diperbarui.

## Verifikasi revisi ini

- `npm run build` berhasil pada Node.js 24.22.1 / Vite 6.4.3. CSS `index-B3GCGORe.css`, JS `index-Bs06_yT7.js`; browser produksi memuat JS tersebut.
- Screenshot diperiksa untuk profil/solusi desktop, sektor, CTA/footer, dropdown keyboard, hero Bisnis dan Komunitas, profil serta menu mobile.
- Desktop browser sekitar 1363 × 936; iframe 1920 × 1080, 1440 × 900, 1024 × 768, 390 × 844 serta 320 × 844 digunakan. Tidak ditemukan overflow horizontal pada view yang diperiksa. Scrollbar iframe mengurangi lebar konten 15 px.
- Tinggi hero tetap 936 px di desktop aktual, 1080 px pada 1920, 790 px pada 1024, dan 965 px pada 320. Tinggi desktop aktual sama pada Rumah dan Bisnis.
- Ketiga foto hero berhasil dimuat pada sisi panjang 2400 px. State akhir lapisan opacity sesuai kategori: Rumah `[1,0,0]`, Bisnis `[0,1,0]`, Komunitas `[0,0,1]`.
- ArrowDown pada dropdown desktop memfokuskan Rumah; Escape menutup dan mengembalikan fokus ke Layanan. Menu mobile Layanan → Komunitas memilih kategori, menutup menu dan mengembalikan navbar transparan (`data-floating=0`). Saat bagian profil terlihat, navbar floating tampil dengan glass navy.
- Kontak, Paket & Harga dan konfigurasi Komunitas Plus diperiksa melalui DOM pada 320 dan 1440: tidak ada overflow horizontal, navbar floating tetap aktif, footer navy `rgb(6,18,27)`.
- Seluruh JS/JSX, data, aset foto, font, package dan lockfile identik dengan ZIP Hijau Pinus.

## Batas verifikasi

Mobile diperiksa melalui iframe Chrome, belum perangkat fisik, Safari/iOS atau Firefox. Reduced motion dan fallback tanpa blur tetap pada source, belum disimulasikan secara runtime. Formulir hingga konfirmasi akhir tidak diuji ulang pada revisi warna; logikanya tidak berubah. Belum ada audit aksesibilitas penuh atau pengukuran kontras setiap piksel glass di atas foto. Tidak ada deployment publik atau pengiriman data nyata.

Sumber foto dan lisensi tetap dalam **ASSETS.md**. ZIP mencakup source, build produksi, aset, font dan dokumentasi; tanpa node_modules, harness QA atau screenshot internal.

---

# Riwayat: Hijau Pinus — 26 Oktober 2026

Bagian ini merupakan riwayat sebelum palet Navy Gelap.

## Perubahan

- Landing page menggunakan hijau pinus `#132D29`, teks ivory `#F4F3EE`, teks pendukung `#B7C7C0`, dan aksen mint `#80CDBB`.
- Hero tetap memakai foto nyata. Overlay, tint kartu glass, navbar floating dan dropdown diselaraskan ke hijau pinus. Navbar tetap transparan di atas hero dan floating setelah ambang scroll 80 px.
- Tombol menggunakan ivory kehijauan `#DCEAE0` dengan teks hijau `#17362D`; footer memakai pinus lebih dalam `#0D211D`.
- Tata letak, font, spacing, urutan bagian, foto, kategori, harga serta alur pemesanan dipertahankan. Perbandingan byte dengan ZIP Ivory memastikan perubahan aplikasi hanya pada `src/landing.css` dan theme color di `index.html`. README/catatan diperbarui.
- Isi halaman informasi dan pemesanan tetap seperti sebelumnya; navbar dan footer bersama mengikuti palet baru.

## Verifikasi revisi ini

- `npm run build` berhasil pada Node.js 24.22.1 / Vite 6.4.3, menghasilkan CSS `index-BNJFXtiN.css` dan JS `index-DqytUSjh.js`.
- Build produksi dibuka ulang di Chrome; HTML terkonfirmasi memuat JS build tersebut.
- Screenshot internal diperiksa untuk profil/solusi desktop, sektor, CTA/footer, profil mobile dan menu mobile.
- Desktop asli sekitar 1363 × 936, serta iframe 1920 × 1080, 1440 × 900, 1024 × 768, 390 × 844 dan 320 × 844 diperiksa. Tidak ditemukan overflow horizontal pada view yang diperiksa. Scrollbar iframe desktop mengurangi lebar konten 15 px.
- Warna terhitung: landing `rgb(19,45,41)`, teks utama `rgb(244,243,238)`, navbar floating `rgba(19,45,41,.87)`, dropdown `rgba(22,55,47,.94)`, footer `rgb(13,33,29)`.
- Dropdown keyboard: ArrowDown membuka dan memfokuskan Rumah setelah frame terjadwal; Escape menutup serta mengembalikan fokus ke Layanan.
- Menu mobile Layanan → Komunitas memilih kategori benar, menutup menu dan mengembalikan navbar transparan. Ketiga foto terkonfirmasi termuat; state akhir opacity `[0,0,1]` sesuai Komunitas.
- Tinggi hero tetap 1080 px pada 1920, minimum 790 px pada 1024 dan 965 px pada 320.
- Kontak, Paket & Harga dan konfigurasi Komunitas Plus diperiksa melalui DOM browser pada 320 serta 1440: tidak ada overflow horizontal, navbar floating tetap aktif dan footer memakai pinus gelap.
- Rasio kontras warna solid utama dihitung menggunakan luminansi sRGB: teks ivory di atas pinus **13,17:1**, teks pendukung di atas pinus **8,32:1**, teks tombol di atas ivory kehijauan **10,54:1**. Ini bukan audit aksesibilitas penuh atau pengukuran setiap piksel glass di atas foto.

## Batas verifikasi

Mobile menggunakan iframe Chrome, belum ponsel fisik, Safari/iOS, Firefox, safe area, keyboard virtual atau screen reader penuh. Reduced motion dan fallback tanpa blur dipertahankan pada source, belum disimulasikan secara runtime. Formulir hingga konfirmasi akhir tidak diuji ulang pada perubahan warna; JS/JSX dan datanya identik. Tidak ada deployment publik atau pengiriman data nyata.

Sumber serta lisensi foto tetap ada di **ASSETS.md**. ZIP lengkap menyertakan source, build, aset, font dan dokumentasi; tanpa node_modules, harness QA atau screenshot internal.

---

## Riwayat palet sebelumnya

# Palet terbaru: Putih gading + Navy — 26 Oktober 2026

Bagian ini merupakan kondisi terbaru dan menggantikan keterangan warna gelap pada catatan estetika sebelumnya di bawah.

## Penerapan

- Beranda memakai putih gading `#F4F3EE`, judul navy `#152B38`, dan teks pendukung `#627078`. Mint `#80CDBB` tetap digunakan sebagai identitas; mint yang lebih gelap dipakai pada ikon/fokus di bidang terang agar terbaca.
- Profil, ringkasan solusi, keunggulan, sektor dan CTA menggunakan bidang ivory. Garis, siluet Indonesia dan kontur dekoratif disesuaikan untuk bidang terang.
- Tombol CTA utama dan footer memakai navy; teks pada bidang navy memakai ivory. Tombol pada foto hero tetap ivory agar terbaca terhadap glass gelap.
- Hero mempertahankan foto nyata dan teks putih, dengan tint serta overlay navy. Batas bawah hero memakai perpindahan bidang yang bersih ke ivory.
- Navbar tetap transparan di atas hero. Saat floating, glass berubah menjadi putih susu, teks navy dan tombol kontak navy. Dropdown, menu mobile, separator, hover dan fokus disesuaikan; ambang scroll tetap 80 px.
- Theme color browser diperbarui ke ivory. Barlow dan seluruh foto/atribusi tetap sama.

Lingkup tetap estetika landing page serta navbar/footer bersama. Bagian isi halaman informasi, paket dan pemesanan mempertahankan tampilan serta fungsi sebelumnya. Tidak ada kategori, harga, data, struktur halaman atau logika pemesanan yang diubah.

## Verifikasi revisi palet ini

- `npm run build` berhasil pada Node.js 24.22.1 / Vite 6.4.3. Build final menghasilkan CSS `index-Lxup4bHM.css` dan JS `index-BVEDeyWF.js`.
- Hasil produksi dibuka di Chrome; dokumen memuat JS build tersebut, bukan source dev. Font Barlow dan ketiga foto hero termuat.
- Screenshot desktop dan mobile diperiksa untuk hero, profil, keunggulan, sektor, CTA, footer, serta dropdown/menu mobile.
- Desktop asli sekitar 1363 × 936 dan iframe 1920 × 1080, 1440 × 900, 1024 × 768, 390 × 844, serta 320 × 844 diperiksa. Tidak ditemukan overflow horizontal; lebar konten iframe termasuk scrollbar desktop masing-masing berkurang 15 px.
- Tinggi hero tetap 1080 px pada viewport 1920, minimum 790 px pada 1024, serta 965 px pada 320. Komunitas pada 320 mempertahankan jarak sekitar 62 px antara deskripsi dan area penawaran setelah transisi selesai. Lapisan foto aktif akhir mencapai opacity `[0,0,1]`.
- Navbar floating menggunakan background `rgba(244,243,238,.91)` dan teks `rgb(21,43,56)`. Tombol CTA serta footer terkonfirmasi navy. Menu mobile membuka kategori Bisnis, menutup menu dan mengembalikan navbar ke transparan di atas hero.
- Keyboard dropdown: ArrowDown membuka serta memfokuskan Rumah; Escape menutup dan mengembalikan fokus ke Layanan. Dropdown desktop dan mobile diperiksa secara visual pada latar terang.
- Carousel berikutnya tetap bergeser satu kartu, sekitar 384 px pada viewport 1440.
- Solusi, Cara Kerja, FAQ, Panduan, Kontak, Paket dan konfigurasi Komunitas Plus diperiksa melalui DOM browser pada 1440 dan 320. Seluruhnya tetap memiliki navbar floating dan footer navy, tanpa overflow horizontal. Kontak dan konfigurasi pemesanan desktop juga diperiksa melalui screenshot.
- Perbandingan byte terhadap ZIP revisi sebelumnya memastikan seluruh JS/JSX, data, aset, font dan lockfile identik. Perubahan aplikasi hanya pada `src/landing.css` dan metadata `index.html`; README/catatan diperbarui.
- Perhitungan luminansi sRGB warna solid: navy di atas ivory **13,18:1**, abu pendukung di atas ivory **4,60:1**, ivory di atas navy **13,18:1**. Angka ini hanya untuk pasangan warna solid utama, bukan audit aksesibilitas seluruh website atau pengukuran glass di setiap piksel foto.

## Batas verifikasi

Mobile menggunakan iframe Chrome, bukan perangkat fisik. Safari/iOS, Firefox, keyboard virtual, safe area, dan screen reader penuh belum diuji. Reduced motion dan fallback tanpa blur dipertahankan pada source, belum diuji sebagai pengaturan runtime. Formulir hingga konfirmasi akhir tidak diuji ulang pada revisi warna; logikanya identik dengan ZIP sebelumnya. Tidak ada deployment publik, transaksi atau pengiriman data nyata.

Sumber foto dan lisensi tetap tercantum dalam **ASSETS.md**. ZIP mencakup source, aset, font, build produksi dan dokumentasi; tanpa node_modules, harness QA atau screenshot internal.

---

## Catatan estetika sebelumnya (riwayat)

# Penyempurnaan estetika NusaLink — 26 Oktober 2026

## Hasil dan lingkup

Pengerjaan dilanjutkan langsung dari ZIP yang dilampirkan. Beranda masih berurutan: hero Rumah/Bisnis/Komunitas, profil, ringkasan solusi, keunggulan, tujuh sektor, CTA paket, footer. Tidak ada perubahan kategori layanan, harga, isi paket, kalkulasi, formulir atau alur pemesanan. Tidak ada section baru atau pemisahan/penggabungan halaman.

Perbandingan byte dengan ZIP awal memastikan `src/catalog.js`, `src/data.js`, `src/navigation.js`, dan `src/Information.jsx` tidak berubah. Di `src/experience.jsx`, satu-satunya perubahan adalah kelas presentasi kategori pada elemen hero; semua logika navbar, hero, paket dan pemesanan dipertahankan.

## Keputusan visual

1. Barlow Regular/SemiBold lokal memberikan hierarki sans-serif yang tegas dan lebih rapat. Heading lebih kuat, letter-spacing tidak terlalu ketat, lebar paragraf dibatasi, serta ukuran body dinaikkan pada bagian editorial. Font tidak diklaim sebagai font Starlink.
2. Beranda menjadi hitam netral, dengan mint hanya untuk identitas dan interaksi. Bidang navy, garis dekoratif, serta kartu berlebihan dikurangi. Teks kedua pada heading tidak lagi dibuat jauh lebih redup.
3. Hero memakai foto nyata 2400 px. Framing foto, ukuran kartu dan area kosong di kanan diselaraskan. Tinggi kartu desktop 365 px, 385 px pada desktop lebar; kartu aktif melebar. Tint glass diperdalam setelah pemeriksaan foto pasir/awan yang terang.
4. Profil memakai dua kolom dengan whitespace yang cukup. Bagian solusi yang sudah ada memperoleh satu foto lanskap Mandalika di samping teks; empat ringkasan tetap berada di bawahnya. Keunggulan menjadi tiga kolom teks tanpa panel dekoratif.
5. Carousel menggunakan foto landscape dengan caption judul/deskripsi berdekatan dan kontrol di bawah. Garis dekoratif vektor dibuat sendiri, redup, tanpa menyalin aset Starlink. Heading mobile diperkecil setelah pemeriksaan panjang judul.
6. CTA paket menjadi terpusat dan lapang. Footer, tombol, border, ikon, dropdown dan kedua keadaan navbar dirapikan. Logo asli dipertahankan.
7. Mobile tetap memakai kartu aktif vertikal dengan area tetap; bukan salinan tiga kolom desktop. Ringkasan solusi dua kolom pada ponsel umum, satu kolom pada lebar sangat kecil. Area sentuh dan tautan footer diperbesar.

Aturan presentasi utama berada dalam `src/landing.css`. Bagian beranda memakai scope `.landing`; navbar, footer dan keluarga font merupakan perubahan bersama yang turut diperiksa pada halaman lain. Tidak ada dependensi runtime baru.

## Referensi: pengamatan dan adaptasi

**Diamati langsung di browser desktop Starlink:** hero foto lebar, kartu aktif/nonaktif dengan proporsi berbeda, pergantian pilihan At Home / On the Go yang mengubah foto dan penawaran, dropdown klik dengan alignment kolom, serta navbar ringkas floating setelah scroll. Bagian bawah menunjukkan hitam yang lapang, judul besar, caption foto dan kontur tipis. Tidak ada pengukuran durasi animasi atau FPS Starlink, sehingga durasi transisi NusaLink adalah keputusan adaptasi.

**Empat screenshot lampiran dipelajari seluruhnya:** carousel tiga foto dengan caption langsung, panel harga sederhana, komposisi teks dan perangkat, serta teks/foto dua kolom dengan navbar floating. Screenshot digunakan untuk menilai tipografi, ruang, border dan rasio gambar; bukan sebagai bukti perilaku animasi.

**Adaptasi NusaLink:** tiga kategori yang sudah ada, logo/bahasa/konten asli, mint seperlunya, foto suasana Indonesia, garis vektor orisinal, dan navbar ambang 80 px yang tetap menampilkan menu NusaLink. Struktur menu tidak disederhanakan menjadi logo + CTA seperti sebagian keadaan Starlink karena fungsi asli perlu dipertahankan.

**Batas akses:** Starlink desktop dapat dibuka. API browser tidak menyediakan pengubahan viewport langsung; percobaan inspeksi referensi 390 × 844 melalui iframe ditolak dengan “refused to connect”. Karena itu perilaku mobile Starlink tidak diklaim telah diamati. Mobile NusaLink benar-benar diuji dengan viewport iframe, sedangkan rancangan mobile merupakan adaptasi. Google Images meminta reCAPTCHA; pencarian foto diteruskan langsung pada Pexels/Unsplash.

## Pengujian yang dilakukan pada revisi ini

### Build dan aset

- `npm ci --no-audit --no-fund` berhasil pada Node.js 24.22.1.
- `npm run build` berhasil: Vite 6.4.3, 1589 modul; CSS 58.29 kB dan JS 273.32 kB sebelum gzip.
- Build produksi juga dijalankan dengan Vite preview dan dibuka ulang di Chrome. HTML memuat `/assets/index-BSTyRTkS.js`, bukan source dev; font Barlow dan ketiga foto hero lokal termuat pada ukuran asli 2400 px.
- Pada build produksi: beranda, pergantian Rumah → Bisnis, tautan pemesanan Bisnis Basic dan kembali ke beranda diperiksa. Tidak ada overflow pada view tersebut.
- Dimensi gambar diperiksa dengan Pillow. Tidak ada thumbnail yang diperbesar menjadi hero. Seluruh gambar website dan font adalah aset lokal.

### Browser desktop dan responsive

- Chrome desktop asli sekitar 1363 × 936, ditambah harness iframe 1920 × 1080, 1440 × 900, 1024 × 768, 390 × 844 dan 320 × 844. Iframe desktop memakai scrollbar 15 px, sehingga lebar konten aktual antara lain 1905, 1425, 375 dan 305 px.
- Screenshot internal dipakai untuk menilai hero, profil, solusi, keunggulan, sektor, CTA dan footer. Revisi kontras glass dan ukuran heading sektor mobile dilakukan berdasarkan hasil yang terlihat.
- Ketiga kategori hero, foto yang dipilih, harga yang tampil, dan tujuan tautan diperiksa. Pada viewport 1440, tinggi hero tetap 900 px dan tinggi kartu 365 px; kartu aktif melebar menjadi sekitar 446 px. Pada 1920, hero 1080 px dan kartu 385 px.
- Pada mobile kecil (320, konten 305), ketiga pilihan mempertahankan tinggi hero 965 px dan tinggi kartu aktif 320 px setelah transisi selesai. Deskripsi berakhir sekitar 62 px sebelum area penawaran. Tidak ada overflow horizontal.
- Preload/decode foto dan lapisan transisi opacity dipertahankan. State foto akhir Bisnis mencapai opacity `[0,1,0]`; semua foto telah termuat. Tidak ada penggantian `src` tunggal atau animasi skala foto.
- Navbar transparan di atas hero, floating setelah scroll, dan kembali transparan setelah navigasi kategori/beranda diuji. Ambang `scrollY > 80` dipertahankan pada source.
- Dropdown desktop: ArrowDown memfokuskan Rumah, End memfokuskan Paket & Harga, Escape menutup dan mengembalikan fokus ke Layanan. Dropdown klik dan menu mobile diuji; tautan Komunitas menutup menu, memilih kategori benar, dan mengembalikan hero ke atas.
- Carousel: klik berikutnya menggeser sekitar satu kartu (384 px pada 1440); End mencapai scrollLeft 1535 dan menonaktifkan tombol berikutnya. Tujuh gambar termuat, termasuk foto tanggap bencana baru.
- Halaman Solusi, Cara Kerja, FAQ, Panduan, Kontak, Paket dan konfigurasi Komunitas Plus diperiksa melalui DOM browser pada 1440 dan 320. Seluruhnya memiliki satu h1, footer dan navbar floating; scrollWidth sama dengan clientWidth. Tampilan pemesanan mobile juga diperiksa melalui screenshot.

## Hal yang belum diverifikasi

- Bukan pengujian pada ponsel fisik, Safari/iOS, Firefox atau screen reader penuh. Iframe menguji layout responsif, bukan sentuhan, keyboard virtual, safe area atau performa perangkat nyata.
- `prefers-reduced-motion` serta fallback tanpa backdrop-filter dipertahankan dan diperiksa pada source; pengaturan OS/browser tersebut belum disimulasikan secara runtime.
- Tidak ada profiling frame, uji FPS, simulasi jaringan lambat, pengukuran Core Web Vitals atau audit kontras otomatis. Kontras diperiksa secara visual, bukan sertifikasi WCAG.
- Formulir hingga konfirmasi akhir dan seluruh kombinasi tambahan tidak diuji ulang pada revisi estetika; logika pemesanan tidak diubah. Hasil uji lama tercatat terpisah dan tidak dianggap sebagai uji baru.
- Tidak ada pengiriman email/WhatsApp, pesanan nyata, pembayaran atau deployment hosting publik. Kontak tetap data contoh proyek awal.

## Aset dan penyerahan

Tiga hero AI dan foto tanggap bencana AI yang tercatat pada ZIP awal telah diganti foto nyata. Sektor Desa juga diganti crop foto lanskap agar tidak bergantung pada portrait yang terpotong sempit. Daftar sumber, fotografer, lisensi, dimensi dan batas verifikasi kredit lama berada di **ASSETS.md**. Foto stok bukan klaim pelanggan/cakupan NusaLink.

ZIP berisi source, aset lokal, font beserta lisensi, build `dist`, lockfile dan dokumentasi. Tidak menyertakan `node_modules`, harness QA, screenshot internal, unduhan kandidat, atau metadata sesi. Instruksi menjalankan berada dalam README.
