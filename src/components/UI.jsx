import { ArrowUpRight } from 'lucide-react';
import { getThumbnail } from '../data/catalog.js';

export function ExternalLink({ children, ...props }) {
  return <a target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
}

export function SectionHeading({ title, children, label }) {
  return (
    <div className="mb-9 max-w-2xl sm:mb-12">
      {label && <p className="mb-3 text-sm font-bold text-brand">{label}</p>}
      <h2 className="section-title">{title}</h2>
      {children && <p className="mt-4 leading-7 text-muted">{children}</p>}
    </div>
  );
}

export function ProductCard({ item, href, count }) {
  return (
    <a href={href} className="group grid h-full grid-cols-[104px_1fr] overflow-hidden rounded-lg border border-line bg-white transition-colors hover:border-brand sm:flex sm:flex-col">
      <div className="h-full overflow-hidden bg-surface sm:aspect-[16/10] sm:h-auto">
        <picture className="block h-full"><source media="(max-width: 639px)" srcSet={getThumbnail(item.image)} /><img src={item.image} alt={item.name ?? item.title} loading="lazy" decoding="async" width="640" height="400" className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]" /></picture>
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-6">
        <h2 className="font-display text-xl font-semibold leading-tight text-ink sm:text-2xl">{item.name ?? item.title}</h2>
        <p className="mt-3 hidden flex-1 text-sm leading-6 text-muted sm:block">{item.desc}</p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-3 text-xs sm:mt-6 sm:pt-4 sm:text-sm">
          <span className="text-muted">{count == null ? item.en : `${count} produk`}</span>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
        </div>
      </div>
    </a>
  );
}
