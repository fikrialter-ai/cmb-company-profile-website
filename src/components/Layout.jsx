import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react';
import Brand from './Brand.jsx';
import { ExternalLink } from './UI.jsx';
import { navItems, WHATSAPP } from '../data/catalog.js';

export function Header({ catalogActive }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('beranda');
  const menuButton = useRef(null);

  useEffect(() => {
    const close = () => setOpen(false);
    const escape = (event) => {
      if (open && event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const media = window.matchMedia('(min-width: 1024px)');
    window.addEventListener('hashchange', close);
    window.addEventListener('keydown', escape);
    media.addEventListener('change', close);
    return () => {
      window.removeEventListener('hashchange', close);
      window.removeEventListener('keydown', escape);
      media.removeEventListener('change', close);
    };
  }, [open]);

  useEffect(() => {
    if (catalogActive) { setActive('produk'); return; }
    setActive('beranda');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [catalogActive]);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white">
      <div className="page-container flex h-[76px] items-center justify-between gap-4">
        <Brand />
        <nav id="primary-navigation" aria-label="Navigasi utama" className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col border-b border-line bg-white px-5 py-4 shadow-lg lg:static lg:flex lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:p-0 lg:shadow-none`}>
          {navItems.map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)} className={`border-b-2 px-1 py-3 text-sm font-semibold transition-colors lg:py-[27px] ${active === id ? 'border-brand text-brand' : 'border-transparent text-muted hover:text-brand'}`}>{label}</a>
          ))}
          <ExternalLink href={WHATSAPP} className="btn btn-primary mt-4 lg:ml-2 lg:mt-0">Minta Penawaran <ArrowUpRight size={17} aria-hidden="true" /></ExternalLink>
        </nav>
        <button ref={menuButton} type="button" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded border border-line text-ink lg:hidden">{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="page-container grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div><Brand compact /><p className="mt-5 max-w-xs text-sm leading-7 text-muted">Stockist & General Contractor.<br />Mitra kebutuhan besi dan baja sejak 1986.</p></div>
        <div><h2 className="mb-4 text-sm font-bold text-ink">Jelajahi CMB</h2><div className="grid grid-cols-2 gap-3">{navItems.map(({ id, label }) => <a key={id} href={`#${id}`} className="text-sm text-muted hover:text-brand">{label}</a>)}</div></div>
        <div><h2 className="mb-4 text-sm font-bold text-ink">Terhubung dengan kami</h2><ExternalLink href={WHATSAPP} className="block text-sm text-muted hover:text-brand">WhatsApp: 0813-3339-9362</ExternalLink><a href="tel:+623199001409" className="mt-3 block text-sm text-muted hover:text-brand">Telepon: (031) 9900-1409</a><p className="mt-5 font-display text-xl font-semibold text-brand">Leading in Service.</p></div>
      </div>
      <div className="page-container flex flex-col justify-between gap-3 border-t border-line py-6 pb-24 text-xs text-muted sm:flex-row sm:pb-6"><p>&copy; {new Date().getFullYear()} PT. Cahaya Mandiri Bajamas.</p><p>Romokalisari, Surabaya, Indonesia</p></div>
    </footer>
  );
}

export function FloatingContact() {
  return <ExternalLink href={WHATSAPP} aria-label="Hubungi CMB melalui WhatsApp" title="Hubungi CMB melalui WhatsApp" className="fixed bottom-5 right-5 z-20 hidden h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-brand-dark md:flex"><MessageCircle size={23} aria-hidden="true" /></ExternalLink>;
}
