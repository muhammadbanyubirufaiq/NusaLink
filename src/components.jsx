import React, { useEffect, useState } from 'react';
// Once-only reveal. CSS keeps content visible even if observation fails.
function useReveal(threshold = 0.06) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setShown(true);
          io.unobserve(e.target);
        }
      });
    }, {
      threshold,
      rootMargin: '0px 0px 8% 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, shown];
}
export function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  children,
  ...rest
}) {
  const [ref, shown] = useReveal();
  return <Tag ref={ref} className={'reveal ' + (shown ? 'is-in ' : '') + className.trim()} style={delay ? {
    '--reveal-delay': delay + 'ms'
  } : undefined} {...rest}>{children}</Tag>;
}
import { ArrowUpRight, ArrowRight, Menu, X, MapPin, Check } from 'lucide-react';
import { nav, sectors } from './data';
export const IconArrow = () => <ArrowUpRight size={17} aria-hidden="true" />;
export function Photo({
  name,
  alt,
  className = '',
  eager = false
}) {
  return <div className={'photo ' + className}><img src={'/assets/' + name + '.webp'} alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} onError={e => {
      e.currentTarget.style.display = 'none';
      e.currentTarget.parentElement.classList.add('photo-fallback');
    }} /></div>;
}
export function Logo() {
  return <a href="#beranda" className="logo" aria-label="NusaLink, beranda">NusaLink<span className="logo-mark" aria-hidden="true">⌁</span></a>;
}
export function Navbar() {
  const menuRef = React.useRef(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    fn();
    window.addEventListener('scroll', fn, {
      passive: true
    });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => {
    const fn = e => {
      if (e.key === 'Escape' && open) { setOpen(false); menuRef.current?.focus(); }
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [open]);
  useEffect(() => {
    const query = window.matchMedia('(min-width: 861px)');
    const close = () => { if (query.matches) setOpen(false); };
    query.addEventListener('change', close);
    return () => query.removeEventListener('change', close);
  }, []);
  const floating = scrolled || open;
  return <header className={'navbar' + (floating ? ' floating' : '')} data-floating={floating ? '1' : '0'}><div className="nav-pill"><div className="nav-inner"><Logo /><nav className="desktop-nav" aria-label="Navigasi utama">{nav.map(([label, id]) => <a href={'#' + id} key={id}>{label}</a>)}</nav><a className="nav-cta" href="#kontak" onClick={() => setOpen(false)}>Konsultasi <IconArrow /></a><button ref={menuRef} className="menu-button" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Navigasi mobile">{nav.map(([label, id]) => <a key={id} href={'#' + id} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={18} /></a>)}</nav>}</div></header>;
}
export function Eyebrow({
  children
}) {
  return <p className="eyebrow"><span /> {children}</p>;
}
export function Consultation() {
  const [sent, setSent] = useState(false);
  return <section id="kontak" className="section consultation"><Reveal><Eyebrow>MULAI DARI LOKASI ANDA</Eyebrow><h2>Setiap Lokasi<br />Punya Tantangan.<br /><span>Mari Temukan<br />Solusinya.</span></h2><p>Ceritakan kondisi lokasi dan kebutuhan Anda. Kami bantu memetakan solusi konektivitas yang sesuai.</p><div className="consult-note"><MapPin size={22} /><span>Dari pesisir hingga pedalaman.<br />Solusi dimulai dengan memahami lokasi.</span></div></Reveal><Reveal as="form" onSubmit={e => {
      e.preventDefault();
      const contact = e.currentTarget.elements.kontak;
      const value = contact.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^\+?[\d\s()-]{9,18}$/.test(value);
      contact.setCustomValidity(valid ? '' : 'Masukkan email atau nomor WhatsApp yang valid.');
      if (!e.currentTarget.reportValidity()) return;
      setSent(true);
    }} onChange={() => setSent(false)}><div className="form-grid"><label>Nama<input name="nama" autoComplete="name" required placeholder="Nama lengkap" /></label><label>Instansi/perusahaan<input name="instansi" autoComplete="organization" required placeholder="Nama instansi" /></label><label>Sektor<select name="sektor" required defaultValue=""><option value="" disabled>Pilih sektor Anda</option>{sectors.map(s => <option key={s[0]}>{s[0]}</option>)}<option>Lainnya</option></select></label><label>Email atau nomor WhatsApp<input name="kontak" required placeholder="nama@instansi.id / +62…" onInput={e => e.target.setCustomValidity('')} onBlur={e => {
            const v = e.target.value.trim();
            e.target.setCustomValidity(!v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || /^\+?[\d\s()-]{9,18}$/.test(v) ? '' : 'Masukkan email atau nomor WhatsApp yang valid.');
          }} /></label><label className="full">Lokasi proyek<input name="lokasi" required placeholder="Desa, kecamatan, kabupaten, provinsi" /></label><label className="full">Kebutuhan singkat<textarea name="kebutuhan" required rows="3" placeholder="Contoh: Wi-Fi untuk sekolah dengan 80 siswa, listrik tersedia 12 jam sehari." /></label></div><p className="form-caption">Formulir demo — data tidak dikirim atau disimpan. Jangan masukkan data sensitif.</p><button className="button primary submit" type="submit">Simulasikan Permintaan Konsultasi <IconArrow /></button>{sent && <p className="success" role="status"><Check size={20} /> Ini adalah formulir demo. Data Anda tidak dikirim atau disimpan.</p>}</Reveal></section>;
}
export function SectorsCarousel() {
  const trackRef = React.useRef(null);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);
  const updateBounds = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  };
  useEffect(() => {
    updateBounds();
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = 0;
    el.addEventListener('scroll', updateBounds, {
      passive: true
    });
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateBounds) : null;
    ro?.observe(el);
    window.addEventListener('resize', updateBounds);
    return () => {
      el.removeEventListener('scroll', updateBounds);
      ro?.disconnect();
      window.removeEventListener('resize', updateBounds);
    };
  }, []);
  const step = () => {
    const el = trackRef.current;
    if (!el) return 800;
    const card = el.querySelector('.sector-card');
    return (card?.getBoundingClientRect().width || el.clientWidth) + parseFloat(getComputedStyle(el).gap || 0);
  };
  const scrollBy = dir => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * step(),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
  };
  const onKey = e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollBy(e.key === 'ArrowRight' ? 1 : -1);
    }
    if (e.key === 'Home' || e.key === 'End') {
      e.preventDefault();
      trackRef.current?.scrollTo({
        left: e.key === 'Home' ? 0 : trackRef.current.scrollWidth,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    }
  };
  const dragRef = React.useRef({
    down: false,
    startX: 0,
    startScroll: 0
  });
  const onPointerDown = e => {
    const el = trackRef.current;
    if (!el || e.pointerType !== 'mouse' || e.button !== 0) return;
    el.classList.add('is-dragging');
    dragRef.current = {
      down: true,
      startX: e.clientX,
      startScroll: el.scrollLeft
    };
    el.setPointerCapture && el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = e => {
    const d = dragRef.current;
    const el = trackRef.current;
    if (!d.down || !el) return;
    el.scrollLeft = d.startScroll - (e.clientX - d.startX);
  };
  const onPointerUp = () => {
    dragRef.current.down = false;
    trackRef.current?.classList.remove('is-dragging');
  };
  return <section id="sektor" className="section sectors"><div className="sectors-contour" aria-hidden="true"><svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice"><defs><radialGradient id="contour-fade"><stop offset="0" stopColor="white"/><stop offset=".72" stopColor="white"/><stop offset="1" stopColor="black"/></radialGradient><mask id="contour-mask"><rect width="1600" height="1000" fill="url(#contour-fade)"/><ellipse cx="430" cy="160" rx="470" ry="190" fill="black" opacity=".7"/></mask></defs><g mask="url(#contour-mask)" fill="none" stroke="#9acbbf" strokeWidth="1" strokeOpacity=".14">{Array.from({length:22}, (_, i) => <path key={i} vectorEffect="non-scaling-stroke" d={`M ${-240+i*13} ${130+i*24} C ${130+i*6} ${-220+i*20}, ${400+i*12} ${420+i*12}, ${780+i*9} ${160+i*27} S ${1540-i*5} ${280+i*24}, ${1570+i*18} ${650+i*22} S ${1020-i*11} ${1100-i*10}, ${790-i*8} ${700+i*10} S ${150+i*3} ${710+i*22}, ${-200+i*7} ${880+i*18}`}/>)}</g></svg></div><div className="sectors-content"><Reveal className="section-head"><div><Eyebrow>UNTUK MEREKA YANG TERUS BERGERAK</Eyebrow><h2>Beragam kebutuhan.<br /><span>Satu tujuan: terhubung.</span></h2></div><p>Dari ruang kelas hingga laut lepas, setiap lingkungan membutuhkan pendekatan yang berbeda.</p></Reveal><div className="sectors-controls"><button className="sector-nav prev" aria-label="Sektor sebelumnya" aria-disabled={atStart} disabled={atStart} onClick={() => scrollBy(-1)}><ArrowRight size={18} style={{
            transform: 'rotate(180deg)'
          }} /></button><button className="sector-nav next" aria-label="Sektor berikutnya" aria-disabled={atEnd} disabled={atEnd} onClick={() => scrollBy(1)}><ArrowRight size={18} /></button></div><div className="sector-track" ref={trackRef} tabIndex={0} role="region" aria-label="Sektor yang dilayani NusaLink" onKeyDown={onKey} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp} onLostPointerCapture={onPointerUp} onDragStart={e => e.preventDefault()}>{sectors.map(([title, desc, img], i) => <Reveal as="article" className="sector-card" key={title}><div className={'sector-photo sector-photo--' + img}><Photo name={img} alt={'Visual ilustratif sektor ' + title} eager={i < 2} /></div><div className="sector-text"><span className="sector-num">0{i + 1}</span><h3>{title}</h3><p>{desc}</p></div></Reveal>)}</div></div></section>;
}
