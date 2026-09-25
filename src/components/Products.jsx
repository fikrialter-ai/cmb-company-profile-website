import { useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Search, X } from 'lucide-react';
import { products, productGroups } from '../data/catalog.js';
import { ProductCard, SectionHeading } from './UI.jsx';

export default function Products() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('plat');
  const tabs = useRef([]);
  const category = productGroups.find((item) => item.id === selected);
  const categoryProducts = products.filter((item) => item.group === selected);
  const representative = selected === 'profil' ? categoryProducts.find((item) => item.name === 'Besi Siku') : categoryProducts[0];
  const normalized = query.trim().toLocaleLowerCase('id');
  const results = normalized ? products.filter((item) => `${item.name} ${item.en} ${item.tag} ${item.desc}`.toLocaleLowerCase('id').includes(normalized)) : [];

  const navigateTabs = (event, index) => {
    const last = productGroups.length - 1;
    const next = { ArrowDown: (index + 1) % productGroups.length, ArrowUp: (index + last) % productGroups.length, Home: 0, End: last }[event.key];
    if (next == null) return;
    event.preventDefault();
    setSelected(productGroups[next].id);
    tabs.current[next]?.focus();
  };

  return (
    <section id="produk" className="section-band border-y border-line bg-surface">
      <div className="page-container">
        <SectionHeading label="Produk CMB" title="Pilihan besi & baja untuk pekerjaan Anda.">Jelajahi tujuh kategori material, dari plat baja hingga kebutuhan infrastruktur.</SectionHeading>
        <div className="relative mb-8 max-w-xl">
          <label htmlFor="product-search" className="sr-only">Cari produk baja</label>
          <Search size={19} className="pointer-events-none absolute left-4 top-3.5 text-muted" aria-hidden="true" />
          <input id="product-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} autoComplete="off" placeholder="Cari nama produk atau material" className="form-field pl-12 pr-12" />
          {query && <button type="button" title="Hapus pencarian" aria-label="Hapus pencarian" onClick={() => setQuery('')} className="absolute right-1 top-1 flex h-10 w-10 items-center justify-center text-muted hover:text-brand"><X size={18} /></button>}
        </div>
        {normalized ? (
          <>
            <p role="status" className="mb-5 text-sm text-muted">{results.length} produk ditemukan untuk "{query.trim()}"</p>
            {results.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{results.map((item) => <ProductCard key={item.slug} item={item} href={`#/produk/${item.slug}`} />)}</div> : <div className="py-10"><h3 className="text-xl font-bold">Produk belum ditemukan</h3><p className="mt-3 text-sm leading-7 text-muted">Coba nama material lain atau konsultasikan kebutuhan Anda dengan tim CMB.</p><button className="btn btn-secondary mt-6" onClick={() => setQuery('')}>Lihat Semua Kategori</button></div>}
          </>
        ) : (
          <div className="grid items-start gap-7 lg:grid-cols-[290px_1fr] lg:gap-10">
            <div>
              <div className="lg:hidden"><label htmlFor="category-select" className="mb-2 block text-xs font-semibold text-muted">Kategori material</label><select id="category-select" className="form-field" value={selected} onChange={(event) => setSelected(event.target.value)}>{productGroups.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select></div>
              <div role="tablist" aria-label="Kategori material" aria-orientation="vertical" className="hidden border-y border-line lg:block">
                {productGroups.map((item, index) => <button key={item.id} type="button" role="tab" id={`category-tab-${item.id}`} aria-controls="category-panel" aria-selected={selected === item.id} tabIndex={selected === item.id ? 0 : -1} ref={(element) => { tabs.current[index] = element; }} onKeyDown={(event) => navigateTabs(event, index)} onClick={() => setSelected(item.id)} className={`flex min-h-[68px] w-full items-center justify-between gap-3 border-b border-line px-4 py-4 text-left text-sm leading-6 transition-colors last:border-b-0 ${selected === item.id ? 'border-l-2 border-l-brand bg-white font-bold text-brand' : 'font-medium text-muted hover:bg-white hover:text-ink'}`}><span>{item.title}</span><ArrowUpRight size={17} className="shrink-0" aria-hidden="true" /></button>)}
              </div>
              <p className="mt-6 hidden text-xs leading-6 text-muted lg:block">Spesifikasi dan ketersediaan stok dikonfirmasi sesuai kebutuhan pengadaan.</p>
            </div>
            <div id="category-panel" role="tabpanel" aria-labelledby={`category-tab-${selected}`} tabIndex={0} className="min-w-0">
              <img src={representative.image} alt={category.title} width="880" height="495" loading="lazy" decoding="async" className="aspect-[16/9] w-full rounded object-cover" />
              <div className="flex flex-col justify-between gap-5 pt-6 sm:flex-row sm:items-start">
                <div className="max-w-lg"><p className="mb-2 text-xs font-semibold text-brand">{categoryProducts.length} pilihan produk</p><h3 className="text-2xl font-bold leading-snug text-ink sm:text-3xl">{category.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{category.desc}</p></div>
                <a href={`#/kategori/${selected}`} className="btn btn-secondary shrink-0">Lihat Produk <ArrowRight size={17} aria-hidden="true" /></a>
              </div>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5">{categoryProducts.slice(0, 4).map((item) => <li key={item.slug}><a href={`#/produk/${item.slug}`} className="text-xs text-muted underline decoration-line underline-offset-4 hover:text-brand">{item.name}</a></li>)}</ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
