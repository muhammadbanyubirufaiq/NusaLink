export const rupiah = value => new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(value);
export const categories = [
 {id:'rumah',name:'Rumah',description:'Koneksi untuk bekerja, belajar, dan menikmati waktu di rumah.',target:'Keluarga dan pekerja jarak jauh.',image:'/assets/hero-rumah.webp',position:'center',features:['Internet satelit terkelola','Router Wi-Fi & terminal pinjaman','Monitoring jaringan'],plans:[{id:'rumah-basic',priorityGB:null,name:'Basic',monthly:1200000,installation:1500000,speed:50,devices:10,access:1},{id:'rumah-plus',priorityGB:null,name:'Plus',monthly:1700000,installation:2000000,speed:100,devices:20,access:2}]},
 {id:'bisnis',name:'Bisnis',description:'Internet terkelola untuk usaha, resor, dan operasional lapangan.',target:'UMKM, resor, dan kantor di luar jangkauan fiber.',image:'/assets/hero-bisnis.webp',position:'center',features:['Dashboard monitoring usaha','Segmentasi Wi-Fi tamu & staf','Dukungan teknis prioritas'],plans:[{id:'bisnis-basic',priorityGB:500,name:'Basic',monthly:2800000,installation:3000000,speed:100,devices:30,access:2},{id:'bisnis-plus',priorityGB:1000,name:'Plus',monthly:4700000,installation:4500000,speed:200,devices:60,access:3}]},
 {id:'komunitas',name:'Institusi & Komunitas',description:'Internet bersama untuk sekolah, fasilitas kesehatan, dan desa.',target:'Pengelola sekolah, puskesmas, desa, serta fasilitas publik atau jaringan bersama.',image:'/assets/hero-komunitas.webp',position:'center',features:['Software voucher Wi-Fi','Pembagian bandwidth pengguna','Pelatihan operator lokal'],plans:[{id:'komunitas-basic',priorityGB:500,name:'Basic',monthly:3000000,installation:3500000,speed:75,devices:40,access:2},{id:'komunitas-plus',priorityGB:1000,name:'Plus',monthly:5000000,installation:5000000,speed:150,devices:80,access:4}]}
];
export const extras=[{id:'mesh',name:'Access point tambahan',description:'Access point dual-band kelas dasar dengan konfigurasi standar. Memperluas distribusi Wi-Fi, bukan kapasitas internet.',price:1350000},{id:'ups',name:'UPS jaringan',description:'UPS kelas sekitar 1.200 VA dengan pemasangan standar. Durasi cadangan ditentukan melalui perhitungan beban.',price:1500000}];
export const findPlan = id => {for(const category of categories){const plan=category.plans.find(p=>p.id===id);if(plan)return {category,plan};}return {category:categories[0],plan:categories[0].plans[0]};};
export function totals(plan,selected){const extra=extras.filter(e=>selected.includes(e.id)).reduce((s,e)=>s+e.price,0);return {extra,initial:plan.installation+extra+plan.monthly,monthly:plan.monthly};}
export const orderURL = id => '#/pesan/'+id;

// Shared service wording; quota assumptions and ownership are kept with the catalogue.
export const connectionLabel = plan => plan.priorityGB
 ? `Data prioritas ${plan.priorityGB === 1000 ? '1 TB' : plan.priorityGB + ' GB'}/bulan`
 : 'Layanan residensial sesuai paket';
export const serviceNotes = {
 loan: 'Terminal dan perangkat jaringan bawaan paket berstatus pinjaman selama berlangganan.',
 extrasOwnership: 'Perangkat tambahan opsional dibeli pelanggan dan menjadi milik pelanggan.',
 performance: 'Kecepatan merupakan maksimum, bukan jaminan. Jumlah perangkat adalah acuan perencanaan, bukan jaminan kecepatan maksimum bagi semua pengguna secara bersamaan.',
 priority: 'Alokasi data prioritas adalah asumsi rancangan NusaLink, bukan klaim kerja sama operator. Setelah alokasi habis, penanganannya mengikuti ketentuan layanan operator yang dipilih.',
 estimate: 'Harga merupakan estimasi simulasi untuk tugas kuliah, bukan harga operasional yang telah terverifikasi.',
};
