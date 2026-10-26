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
import { sectors } from './data';
import { repeatNavigation } from './navigation';
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
  return <a href="#/" onClick={repeatNavigation} className="logo" aria-label="NusaLink, beranda">NusaLink<span className="logo-mark" aria-hidden="true">⌁</span></a>;
}
export function Eyebrow({
  children
}) {
  return <p className="eyebrow"><span /> {children}</p>;
}
export function SectorsCarousel() {
  const trackRef = React.useRef(null);
  const boundsFrameRef = React.useRef(0);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);
  const updateBounds = () => {
    if (boundsFrameRef.current) return;
    boundsFrameRef.current = requestAnimationFrame(() => {
      boundsFrameRef.current = 0;
      const el = trackRef.current;
      if (!el) return;
      const nextAtStart = el.scrollLeft <= 2;
      const nextAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
      setAtStart(current => current === nextAtStart ? current : nextAtStart);
      setAtEnd(current => current === nextAtEnd ? current : nextAtEnd);
    });
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
      if (boundsFrameRef.current) cancelAnimationFrame(boundsFrameRef.current);
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
  const dragFrameRef = React.useRef(0);
  const pendingScrollRef = React.useRef(0);
  const onPointerDown = e => {
    const el = trackRef.current;
    if (!el || e.pointerType !== 'mouse' || e.button !== 0) return;
    el.classList.add('is-dragging');
    pendingScrollRef.current = el.scrollLeft;
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
    pendingScrollRef.current = d.startScroll - (e.clientX - d.startX);
    if (dragFrameRef.current) return;
    dragFrameRef.current = requestAnimationFrame(() => {
      el.scrollLeft = pendingScrollRef.current;
      dragFrameRef.current = 0;
    });
  };
  const onPointerUp = () => {
    const el = trackRef.current;
    if (dragFrameRef.current && el) {
      cancelAnimationFrame(dragFrameRef.current);
      el.scrollLeft = pendingScrollRef.current;
      dragFrameRef.current = 0;
    }
    dragRef.current.down = false;
    el?.classList.remove('is-dragging');
  };
  return <section id="sektor" tabIndex={-1} aria-label="Sektor yang Dilayani" className="section sectors"><div className="sectors-contour" aria-hidden="true" /><div className="sectors-content"><Reveal className="section-head"><div><Eyebrow>UNTUK MEREKA YANG TERUS BERGERAK</Eyebrow><h2>Beragam kebutuhan.<br /><span>Satu tujuan: terhubung.</span></h2></div><p>Dari ruang kelas hingga laut lepas, setiap lingkungan membutuhkan pendekatan yang berbeda.</p></Reveal><div className="sectors-controls"><button className="sector-nav prev" aria-label="Sektor sebelumnya" aria-disabled={atStart} disabled={atStart} onClick={() => scrollBy(-1)}><ArrowRight size={18} style={{
            transform: 'rotate(180deg)'
          }} /></button><button className="sector-nav next" aria-label="Sektor berikutnya" aria-disabled={atEnd} disabled={atEnd} onClick={() => scrollBy(1)}><ArrowRight size={18} /></button></div><div className="sector-track" ref={trackRef} tabIndex={0} role="region" aria-label="Sektor yang dilayani NusaLink" onKeyDown={onKey} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp} onLostPointerCapture={onPointerUp} onDragStart={e => e.preventDefault()}>{sectors.map(([title, desc, img], i) => <Reveal as="article" className="sector-card" key={title}><div className={'sector-photo sector-photo--' + img}><Photo name={img} alt={'Visual ilustratif sektor ' + title} eager={i < 2} /></div><div className="sector-text"><span className="sector-num">0{i + 1}</span><h3>{title}</h3><p>{desc}</p></div></Reveal>)}</div></div></section>;
}
