import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Home } from './Home';
import { Navbar, Plans, Order, Footer } from './experience';
import { InformationPage } from './Information';
import { infoPages, resolveRoute, scrollToRoute } from './navigation';
export default function App() {
  const [route, setRoute] = useState(location.hash || '#/');
  const [active, setActive] = useState(() => resolveRoute(location.hash).category || 'rumah');
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '', organization: '', address: '' });
  const [selected, setSelected] = useState([]);
  const { page } = resolveRoute(route);
  const previousRoute = useRef(null);
  useEffect(() => {
    const onRoute = () => {
      const hash = location.hash || '#/';
      const next = resolveRoute(hash);
      if (next.category) setActive(next.category);
      setRoute(hash);
    };
    const previous = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    window.addEventListener('hashchange', onRoute);
    return () => { window.removeEventListener('hashchange', onRoute); history.scrollRestoration = previous; };
  }, []);
  useLayoutEffect(() => {
    // Keep focus and scroll while changing a package/category in the same order step.
    const previous = previousRoute.current;
    const sameOrderStep = previous && resolveRoute(previous).page === 'order' && page === 'order'
      && (previous.split('/')[3] || 'konfigurasi') === (route.split('/')[3] || 'konfigurasi');
    if (!sameOrderStep) scrollToRoute(route);
    previousRoute.current = route;
    document.title = page === 'home' ? 'NusaLink — Internet andal' : `${page === 'plans' ? 'Paket & Harga' : page === 'order' ? 'Pemesanan Demo' : infoPages[page] || 'Halaman tidak ditemukan'} — NusaLink`;
  }, [route, page]);
  return <>
    <a className="skip-link" href="#main" onClick={e => { e.preventDefault(); document.getElementById('main')?.focus(); document.getElementById('main')?.scrollIntoView(); }}>Lewati ke konten</a>
    <Navbar route={route} page={page} active={active} setActive={setActive} />
    {page === 'home' ? <Home active={active} setActive={setActive} /> : page === 'plans' ? <Plans /> : page === 'order' ? <Order route={route} customer={customer} setCustomer={setCustomer} selected={selected} setSelected={setSelected} /> : <InformationPage page={page} />}
    <Footer />
  </>;
}
