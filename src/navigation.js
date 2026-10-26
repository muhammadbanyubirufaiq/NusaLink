// Hash routes keep all pages refreshable on ordinary static hosting.
export const infoPages = {
  solusi: 'Solusi Teknologi',
  'cara-kerja': 'Cara Kerja',
  faq: 'FAQ',
  panduan: 'Panduan Pemasangan',
  kontak: 'Hubungi Kami',
};
const categoryIDs = ['rumah', 'bisnis', 'komunitas'];
const planIDs = categoryIDs.flatMap(id => [`${id}-basic`, `${id}-plus`]);
export function resolveRoute(hash) {
  const path = (hash || '#/').replace(/\/$/, '');
  if (path === '#' || path === '#/bagian/tentang') return { page: 'home', section: path.endsWith('tentang') ? 'tentang' : null };
  if (path === '#/bagian/sektor' || path === '#/sektor') return { page: 'home', section: 'sektor' };
  const parts = path.slice(2).split('/');
  if (parts[0] === 'layanan' && parts.length === 2 && categoryIDs.includes(parts[1])) return { page: 'home', category: parts[1] };
  if (path === '#/paket') return { page: 'plans' };
  if (parts[0] === 'pesan' && planIDs.includes(parts[1]) && parts.length <= 3 && (!parts[2] || ['konfigurasi', 'data', 'konfirmasi'].includes(parts[2]))) return { page: 'order' };
  // Retain links shared before the information pages were separated.
  const info = parts[0] === 'bagian' && parts.length === 2 ? parts[1] : parts.length === 1 ? parts[0] : null;
  if (infoPages[info]) return { page: info };
  return { page: 'not-found' };
}
export function scrollToRoute(hash, behavior = 'instant') {
  const { section } = resolveRoute(hash);
  const target = document.getElementById(section || 'main');
  target?.focus({ preventScroll: true });
  if (section) target?.scrollIntoView({ block: 'start', behavior });
  else window.scrollTo({ top: 0, behavior });
}
export function repeatNavigation(event) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const hash = event.currentTarget.hash;
  if (hash === (location.hash || '#/')) {
    event.preventDefault();
    scrollToRoute(hash, matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth');
  }
}
