import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP, MAPS_URL, MAP_EMBED } from '../data/catalog.js';
import { ExternalLink, SectionHeading } from './UI.jsx';

export function ContactBanner() {
  return (
    <section className="border-b border-line bg-white py-12 sm:py-16">
      <div className="page-container flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
        <div className="max-w-2xl border-l-4 border-accent pl-5 sm:pl-7"><h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">Ada kebutuhan baja untuk proyek Anda?</h2><p className="mt-3 text-sm leading-7 text-muted">Diskusikan spesifikasi, ketersediaan stok, dan kebutuhan pengiriman bersama tim CMB.</p></div>
        <ExternalLink href={WHATSAPP} className="btn btn-primary shrink-0"><MessageCircle size={18} aria-hidden="true" />Minta Penawaran<ArrowUpRight size={17} aria-hidden="true" /></ExternalLink>
      </div>
    </section>
  );
}

export function Contact() {
  const [showMap, setShowMap] = useState(false);
  return (
    <section id="kontak" className="section-band bg-surface">
      <div className="page-container">
        <SectionHeading title="Mari terhubung.">Kunjungi kantor dan gudang kami atau hubungi tim CMB untuk kebutuhan pengadaan material Anda.</SectionHeading>
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div className="divide-y divide-line">
            <ContactRow icon={MapPin} title="Kantor & gudang"><address className="not-italic">Jl. Romokalisari No. 80 Blok E No. 01,<br />Romokalisari, Benowo, Surabaya, Jawa Timur.</address></ContactRow>
            <ContactRow icon={MessageCircle} title="WhatsApp"><ExternalLink href={WHATSAPP} className="contact-link">0813-3339-9362 <ArrowUpRight size={16} aria-hidden="true" /></ExternalLink></ContactRow>
            <ContactRow icon={Phone} title="Telepon kantor"><a href="tel:+623199001409" className="contact-link">(031) 9900-1409</a><a href="tel:+623199001593" className="contact-link mt-1">(031) 9900-1593</a></ContactRow>
            <ContactRow icon={Mail} title="Email"><a href="mailto:ptcahayamandiri_bajamas89@yahoo.com" className="break-all text-brand hover:underline">ptcahayamandiri_bajamas89@yahoo.com</a></ContactRow>
          </div>
          <div>
            {showMap ? <iframe src={MAP_EMBED} title="Peta lokasi PT. Cahaya Mandiri Bajamas, Romokalisari, Surabaya" width="600" height="410" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="h-[320px] w-full rounded-lg border border-line bg-white sm:h-[410px]" /> : <div className="flex h-[320px] flex-col items-center justify-center rounded-lg border border-line bg-brand-pale p-6 text-center sm:h-[410px]"><MapPin size={36} strokeWidth={1.5} className="text-brand" aria-hidden="true" /><h3 className="mt-5 font-display text-2xl font-semibold text-ink">Romokalisari, Surabaya</h3><p className="mt-2 text-sm text-muted">Kantor & Gudang PT. CMB</p><button type="button" onClick={() => setShowMap(true)} className="btn btn-secondary mt-6">Tampilkan Peta</button></div>}
            <ExternalLink href={MAPS_URL} className="btn btn-secondary mt-4 w-full"><MapPin size={18} aria-hidden="true" />Rute ke Gudang CMB<ArrowUpRight size={17} aria-hidden="true" /></ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, title, children }) {
  return <div className="flex gap-4 py-5 first:pt-0"><Icon className="mt-0.5 shrink-0 text-brand" size={20} aria-hidden="true" /><div className="min-w-0"><h3 className="mb-2 text-sm font-bold text-ink">{title}</h3><div className="text-sm leading-7 text-muted">{children}</div></div></div>;
}
