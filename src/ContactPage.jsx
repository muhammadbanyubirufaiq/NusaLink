import React, { useEffect, useRef, useState } from 'react';
import { Copy, X } from 'lucide-react';
import { IconArrow } from './components';
import { contactConfig, contactHref, contactValue } from './contactConfig';
import './contact.css';

async function copyText(value) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try { await navigator.clipboard.writeText(value); return; } catch { /* Try local fallback. */ }
  }
  const previousFocus = document.activeElement;
  const field = document.createElement('textarea');
  field.value = value;
  field.readOnly = true;
  field.tabIndex = -1;
  field.style.cssText = 'position:fixed;left:-9999px;top:0;';
  document.body.appendChild(field);
  field.select();
  let copied;
  try { copied = document.execCommand('copy'); }
  finally { field.remove(); previousFocus?.focus({ preventScroll: true }); }
  if (!copied) throw new Error('Clipboard unavailable');
}

export function ContactPage() {
  const [active, setActive] = useState(null);
  const [feedback, setFeedback] = useState({});
  const dialog = useRef(null);
  const closeButton = useRef(null);
  const trigger = useRef(null);

  useEffect(() => {
    if (!active) return;
    const modal = dialog.current;
    const previousOverflow = document.body.style.overflow;
    modal.showModal();
    closeButton.current?.focus({ preventScroll: true });
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
      if (modal.open) modal.close();
    };
  }, [active]);

  function openDialog(event, channel) {
    trigger.current = event.currentTarget;
    setActive(channel);
  }
  function finishClose() {
    setActive(null);
    if (trigger.current?.isConnected) trigger.current.focus({ preventScroll: true });
  }
  function trapFocus(event) {
    if (event.key !== 'Tab') return;
    const buttons = Array.from(dialog.current.querySelectorAll('button:not([disabled]), a[href]'));
    const first = buttons[0], last = buttons[buttons.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
  async function copy(channel) {
    const value = contactValue(channel);
    try {
      await copyText(value);
      setFeedback({ [channel]: channel === 'email' ? 'Email disalin' : 'Nomor disalin' });
    } catch {
      setFeedback({ [channel]: 'Pilih teks kontak untuk menyalin secara manual.' });
    }
  }
  function action(channel, primary) {
    const href = contactHref(channel);
    const className = 'button ' + (primary ? 'primary' : 'secondary');
    return href ? <a className={className} href={href} target={channel === 'whatsapp' ? '_blank' : undefined} rel={channel === 'whatsapp' ? 'noopener noreferrer' : undefined}>{contactConfig[channel].action}<IconArrow /></a> : <button id={'contact-open-' + channel} type="button" className={className} aria-haspopup="dialog" aria-controls="contact-info-dialog" onClick={event => openDialog(event, channel)}>{contactConfig[channel].action}<IconArrow /></button>;
  }

  return <main id="main" tabIndex={-1} className="contact-hub">
    <div className="contact-shell">
      <header className="contact-intro"><p className="contact-eyebrow">TERHUBUNG DENGAN NUSALINK</p><h1>Hubungi Kami</h1><p>Bahas paket, kebutuhan lokasi, atau bantuan layanan Anda.</p></header>
      <section className="contact-channels" aria-label="Kanal kontak">
        <div className="contact-channel"><h2>WhatsApp</h2><p className="contact-address">{contactValue('whatsapp')}</p><p className="contact-description">Mulai percakapan tentang paket, pemasangan, dan kebutuhan layanan.</p>{action('whatsapp', true)}<div className="contact-copy-row"><button type="button" className="contact-copy" onClick={() => copy('whatsapp')}><Copy size={15} aria-hidden="true" />Salin nomor</button><span role="status">{feedback.whatsapp}</span></div></div>
        <div className="contact-channel"><h2>Email</h2><p className="contact-address">{contactValue('email')}</p><p className="contact-description">Sampaikan rincian kebutuhan lokasi atau pertanyaan layanan Anda.</p>{action('email', false)}<div className="contact-copy-row"><button type="button" className="contact-copy" onClick={() => copy('email')}><Copy size={15} aria-hidden="true" />Salin email</button><span role="status">{feedback.email}</span></div></div>
      </section>
      <div className="contact-hours"><h2>Jam layanan</h2><p>{contactConfig.hours.days}<span aria-hidden="true"> · </span><span>{contactConfig.hours.time} {contactConfig.hours.timezone}</span></p></div>
      <div className="contact-support">
        <section aria-labelledby="contact-needs-title"><h2 id="contact-needs-title">Apa yang bisa kami bantu?</h2><p>Informasi paket dan berlangganan, kebutuhan lokasi serta pemasangan, solusi khusus seperti maritim atau tanggap bencana, dan bantuan layanan.</p></section>
        <nav aria-labelledby="contact-selfhelp-title"><h2 id="contact-selfhelp-title">Bantuan mandiri</h2><a href="#/faq">FAQ <IconArrow /></a><a href="#/panduan">Panduan Pemasangan <IconArrow /></a><a href="#/paket">Paket & Harga <IconArrow /></a></nav>
      </div>
      {contactConfig.mode === 'illustrative' && <p className="contact-note">{contactConfig.note}</p>}
    </div>
    <dialog ref={dialog} id="contact-info-dialog" className="contact-dialog" aria-modal="true" aria-labelledby="contact-dialog-title" aria-describedby="contact-dialog-description" onClose={finishClose} onCancel={event => { event.preventDefault(); dialog.current.close(); }} onKeyDown={trapFocus}>
      <button type="button" ref={closeButton} className="contact-dialog-close" aria-label="Tutup dialog" onClick={() => dialog.current.close()}><X size={21} aria-hidden="true" /></button>
      <h2 id="contact-dialog-title">{active ? contactConfig[active].name : 'Kontak'} NusaLink</h2>
      <p className="contact-dialog-value">{active ? contactValue(active) : ''}</p>
      <p id="contact-dialog-description">{active === 'whatsapp' ? 'Kanal WhatsApp ini merupakan ilustrasi untuk tugas kuliah. Tombol ini tidak membuka percakapan atau mengirim pesan.' : 'Alamat email ini merupakan ilustrasi untuk tugas kuliah dan belum terverifikasi sebagai kotak masuk NusaLink. Tidak ada email yang dikirim.'}</p>
      <button type="button" className="button primary contact-dialog-done" onClick={() => dialog.current.close()}>Mengerti</button>
    </dialog>
  </main>;
}
