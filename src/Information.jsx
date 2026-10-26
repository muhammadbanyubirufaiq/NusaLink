import React from 'react';
import { Eyebrow, IconArrow } from './components';
import { infoPages } from './navigation';
import { SolutionsTechnology } from './SolutionsTechnology';
import { FaqPage } from './FaqPage';
import { InstallationGuide } from './InstallationGuide';
import { ContactPage } from './ContactPage';
import { HowItWorks } from './HowItWorks';
export function InformationPage({ page }) {
  if (page === 'cara-kerja') return <HowItWorks />;
  if (page === 'solusi') return <SolutionsTechnology />;
  if (page === 'faq') return <FaqPage />;
  if (page === 'panduan') return <InstallationGuide />;
  if (page === 'kontak') return <ContactPage />;
  const [eyebrow, description] = ['NAVIGASI NUSALINK', 'Tautan ini tidak mengarah ke halaman yang tersedia. Kembali ke beranda atau jelajahi Paket & Harga.'];
  return <main tabIndex={-1} id="main" className={'information-page info-' + page}>
    <header className="information-heading"><a className="text-link back-home" href="#/">← Kembali ke beranda</a><Eyebrow>{eyebrow}</Eyebrow><h1>{infoPages[page] || 'Halaman tidak ditemukan'}</h1><p>{description}</p></header>
    <div className="info-body"><a className="button primary" href="#/paket">Lihat Paket & Harga <IconArrow /></a></div>

  </main>;
}
