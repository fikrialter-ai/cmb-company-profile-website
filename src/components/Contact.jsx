import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP, MAPS_URL, MAP_EMBED } from '../data/catalog.js';
import { ExternalLink, SectionHeading } from './UI.jsx';
import InquiryForm from './InquiryForm.jsx';

export function Contact() {
  const [showMap, setShowMap] = useState(false);
  return (
    <section id="kontak" className="section-band bg-white">
      <div className="page-container">
        <SectionHeading title="Hubungi tim CMB.">Konsultasikan kebutuhan material, spesifikasi, dan pengiriman. Tim kami siap membantu menyiapkan penawaran Anda.</SectionHeading>
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <div>
            <ContactRow icon={MessageCircle} title="WhatsApp penjualan">
              <ExternalLink href={WHATSAPP} className="inline-flex items-center gap-3 text-xl font-bold text-brand hover:text-brand-dark sm:text-2xl">0813-3339-9362 <ArrowUpRight size={19} aria-hidden="true" /></ExternalLink>
            </ContactRow>
            <ContactRow icon={Phone} title="Telepon kantor"><div className="flex flex-wrap gap-x-5 gap-y-1"><a href="tel:+623199001409" className="contact-link">(031) 9900-1409</a><a href="tel:+623199001593" className="contact-link">(031) 9900-1593</a></div></ContactRow>
            <ContactRow icon={Mail} title="Email"><a href="mailto:ptcahayamandiri_bajamas89@yahoo.com" className="break-all text-brand hover:underline">ptcahayamandiri_bajamas89@yahoo.com</a></ContactRow>
            <div className="mt-7 border-t border-line pt-7">
              <h3 className="text-sm font-bold text-ink">Kantor & gudang</h3>
              <address className="mt-3 text-sm not-italic leading-7 text-muted">Jl. Romokalisari No. 80 Blok E No. 01,<br />Romokalisari, Benowo, Surabaya, Jawa Timur.</address>
              <div className="mt-5 overflow-hidden rounded border border-line">
                {showMap ? <iframe src={MAP_EMBED} title="Peta lokasi PT. Cahaya Mandiri Bajamas, Romokalisari, Surabaya" width="600" height="250" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="h-[250px] w-full bg-surface" /> : <img src="/images/warehouse-800.webp" alt="Kantor dan gudang CMB di Romokalisari, Surabaya" width="800" height="600" loading="lazy" decoding="async" className="h-[250px] w-full object-cover" />}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
                <ExternalLink href={MAPS_URL} className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark">Rute ke Gudang <ArrowUpRight size={16} aria-hidden="true" /></ExternalLink>
                <button type="button" aria-expanded={showMap} onClick={() => setShowMap(!showMap)} className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-brand"><MapPin size={16} aria-hidden="true" />{showMap ? 'Lihat Foto Gudang' : 'Tampilkan Peta'}</button>
              </div>
            </div>
          </div>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, title, children }) {
  return <div className="flex gap-4 pb-6"><Icon className="mt-0.5 shrink-0 text-brand" size={20} strokeWidth={1.6} aria-hidden="true" /><div className="min-w-0"><h3 className="mb-2 text-xs font-semibold text-muted">{title}</h3><div className="text-sm leading-7 text-ink">{children}</div></div></div>;
}
