import React,{useState,useEffect,useRef} from 'react';
import {Menu,X,ChevronDown,ArrowUpRight} from 'lucide-react';
import {Logo} from './components';
import {repeatNavigation, resolveRoute} from './navigation';
import {categories,rupiah,orderURL} from './catalog';
const groups = [
 ['Layanan', [...categories.map(c => [c.name, '#/layanan/' + c.id]), ['Paket & Harga', '#/paket']]],
 ['Tentang', [['Profil Perusahaan', '#/bagian/tentang'], ['Solusi Teknologi', '#/solusi'], ['Sektor yang Dilayani', '#/bagian/sektor'], ['Cara Kerja', '#/cara-kerja']]],
 ['Bantuan', [['FAQ', '#/faq'], ['Panduan Pemasangan', '#/panduan']]],
];
export function Navbar({ route, page, active, setActive }) {
 const [open, setOpen] = useState(false), [dropdown, setDropdown] = useState(null), [scrollState, setScrollState] = useState(() => ({ route, scrolled: window.scrollY > 80 }));
 const ref = useRef(null), triggers = useRef({}), menuRef = useRef(null), lastTrigger = useRef(null);
 useEffect(() => {
   const fn = () => { const scrolled = window.scrollY > 80; setScrollState(previous => previous.route === route && previous.scrolled === scrolled ? previous : { route, scrolled }); };
   fn(); window.addEventListener('scroll', fn, { passive: true });
   return () => window.removeEventListener('scroll', fn);
 }, [route]);
 useEffect(() => {
   const outside = e => { if (!ref.current?.contains(e.target)) { setDropdown(null); setOpen(false); } };
   const key = e => {
     if (e.key === 'Escape') {
       if (dropdown) { lastTrigger.current?.focus(); setDropdown(null); }
       else if (open) { setOpen(false); menuRef.current?.focus(); }
     }
   };
   document.addEventListener('pointerdown', outside); document.addEventListener('keydown', key);
   return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', key); };
 }, [dropdown, open]);
 useEffect(() => {
   const q = matchMedia('(min-width:861px)');
   const close = () => { setOpen(false); setDropdown(null); };
   q.addEventListener('change', close); window.addEventListener('hashchange', close);
   return () => { q.removeEventListener('change', close); window.removeEventListener('hashchange', close); };
 }, []);
 const close = (event, href) => {
   setDropdown(null); setOpen(false);
   if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && href.startsWith('#/layanan/')) setActive(href.split('/')[2]);
   repeatNavigation(event);
 };
 const links = (mobile = false) => groups.map(([name, items]) => {
   const id = (mobile ? 'mobile-' : 'desktop-') + name;
   const focusLink = last => requestAnimationFrame(() => {
     const links = document.getElementById(id)?.querySelectorAll('a');
     links?.[last ? links.length - 1 : 0]?.focus();
   });
   return <div className="nav-group" key={name}>
     <button ref={el => { triggers.current[id] = el; }} className="nav-trigger" aria-expanded={dropdown === name} aria-controls={dropdown === name ? id : undefined} onClick={e => { lastTrigger.current = e.currentTarget; setDropdown(dropdown === name ? null : name); }} onKeyDown={e => {
       if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); lastTrigger.current = e.currentTarget; setDropdown(name); focusLink(e.key === 'ArrowUp'); }
     }}>{name}<ChevronDown size={14} aria-hidden="true" /></button>
     {dropdown === name && <div id={id} className="nav-dropdown" onKeyDown={e => {
       const links = Array.from(e.currentTarget.querySelectorAll('a')), index = links.indexOf(document.activeElement);
       let next;
       if (e.key === 'ArrowDown') next = (index + 1) % links.length;
       if (e.key === 'ArrowUp') next = (index - 1 + links.length) % links.length;
       if (e.key === 'Home') next = 0;
       if (e.key === 'End') next = links.length - 1;
       if (next !== undefined) { e.preventDefault(); links[next]?.focus(); }
     }}>{items.map(([label, href]) => <a key={href} className={href === '#/paket' ? 'nav-separated' : undefined} href={href} aria-current={href.startsWith('#/layanan/') ? (page === 'home' && href.endsWith('/' + active) ? 'true' : undefined) : resolveRoute(href).page === page && !resolveRoute(href).section ? 'page' : undefined} onClick={e => close(e, href)}>{label}<ArrowUpRight size={15} aria-hidden="true" /></a>)}</div>}
   </div>;
 });
 const isLanding = page === 'home';
 const scrolled = scrollState.route === route ? scrollState.scrolled : !!resolveRoute(route).section;
 const floating = isLanding && (scrolled || open);
 return <header ref={ref} className={'navbar' + (isLanding ? ' navbar--landing' : ' navbar--inner') + (floating ? ' floating' : '')} data-mode={isLanding ? 'landing' : 'attached'} data-floating={floating ? '1' : '0'}><div className="nav-pill"><div className="nav-inner"><Logo /><nav className="desktop-nav" aria-label="Navigasi utama">{links()}</nav><a className="nav-cta" href="#/kontak" onClick={e => close(e, '#/kontak')}>Hubungi Kami</a><button ref={menuRef} className="menu-button" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} aria-controls={open ? 'mobile-nav' : undefined} onClick={() => { setOpen(!open); setDropdown(null); }}>{open ? <X /> : <Menu />}</button></div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Navigasi mobile">{links(true)}<a className="mobile-contact" href="#/kontak" onClick={e => close(e, '#/kontak')}>Hubungi Kami<ArrowUpRight size={15} aria-hidden="true" /></a></nav>}</div></header>;
}
export function Hero({active,setActive}){
 const [ready,setReady]=useState({}),[visible,setVisible]=useState(active);const refs=useRef([]);
 useEffect(()=>{let alive=true;categories.forEach(c=>{const img=new Image();img.src=c.image;img.decode().then(()=>{if(alive)setReady(r=>({...r,[c.id]:true}))}).catch(()=>{});});return()=>{alive=false}},[]);
 useEffect(()=>{if(ready[active])setVisible(active)},[active,ready]);
 const chosen=categories.some(c=>c.id===active)?active:'rumah';
 return <section className={"cinema-hero cinema-hero--"+chosen} id="beranda"><div className="hero-images" aria-hidden="true"><img className="hero-base" src="/assets/hero.webp" alt=""/>{categories.map(c=><img key={c.id} className={'hero-layer'+(visible===c.id&&ready[c.id]?' shown':'')} src={c.image} alt="" style={{objectPosition:c.position}} fetchPriority={c.id==='rumah'?'high':'auto'}/>)}</div><div className="cinema-shade"/><div className="cinema-content"><h1>Internet andal,<br/>untuk setiap kebutuhan.</h1><div className="service-cards">{categories.map((c,i)=>{const isActive=chosen===c.id;return <article key={c.id} data-category={c.id} className={'service-card'+(isActive?' active':'')} onClick={()=>setActive(c.id)}><h2><button ref={el=>refs.current[i]=el} className="category-button" aria-pressed={isActive} aria-controls={'offer-'+c.id} onClick={()=>setActive(c.id)} onKeyDown={e=>{let next;if(e.key==='ArrowRight')next=(i+1)%3;if(e.key==='ArrowLeft')next=(i+2)%3;if(e.key==='Home')next=0;if(e.key==='End')next=2;if(next!==undefined){e.preventDefault();setActive(categories[next].id);refs.current[next]?.focus()}}}>{c.name}</button></h2><p className="category-description">{c.description}</p><div id={'offer-'+c.id} className="offer" aria-hidden={!isActive} inert={!isActive?true:undefined}><span className="small-label">MULAI DARI</span><div className="hero-price">{rupiah(c.plans[0].monthly)}<span>/bulan</span></div><p className="installation-note">Pemasangan {rupiah(c.plans[0].installation)} sekali bayar.</p><a className="button primary" href={orderURL(c.plans[0].id)} tabIndex={isActive?0:-1}>Mulai Berlangganan<ArrowUpRight size={17}/></a></div></article>})}</div><div className="hero-assurances"><span>✓ Instalasi terkelola</span><span>✓ Monitoring jaringan</span><span>✓ Dukungan lokal</span><a href="#/paket">Bandingkan paket ↗</a></div></div></section>;
}
export { Plans } from './PlansPage';
export { Order } from './OrderPage';
export function Footer() {
 const explore = [['Paket & Harga', '#/paket'], ['Profil Perusahaan', '#/bagian/tentang'], ['Solusi Teknologi', '#/solusi'], ['Sektor yang Dilayani', '#/bagian/sektor'], ['Cara Kerja', '#/cara-kerja']];
 const help = [['FAQ', '#/faq'], ['Panduan Pemasangan', '#/panduan'], ['Hubungi Kami', '#/kontak']];
 return <footer className="footer"><div className="footer-top"><div><Logo /><p>Internet satelit terkelola dan Wi-Fi komunitas untuk wilayah terpencil Indonesia.</p></div>{[['Jelajahi', explore], ['Bantuan', help]].map(([title, links]) => <div key={title}><h3>{title}</h3>{links.map(([label, href]) => <a key={href} href={href} onClick={repeatNavigation}>{label}</a>)}</div>)}</div><div className="footer-bottom"><span>© {new Date().getFullYear()} NusaLink.</span><span>Konsep perusahaan untuk tugas kuliah. Visual bersifat ilustratif.</span><a href="#/" onClick={repeatNavigation}>Kembali ke beranda ↑</a></div></footer>;
}
