import { ArrowLeft, ArrowUpRight, Check, ChevronRight, MessageCircle } from 'lucide-react';
import { catalogGroups, products, productGroups } from '../data/catalog.js';
import { ExternalLink, ProductCard } from './UI.jsx';

export function CatalogPage({ route }) {
  if (route.type === 'not-found') return <section className="page-container py-20"><h1 className="section-title">Produk tidak ditemukan</h1><p className="mt-4 text-muted">Alamat produk ini tidak tersedia. Temukan material melalui katalog CMB.</p><a href="#produk" className="btn btn-primary mt-7"><ArrowLeft size={18} aria-hidden="true" />Kembali ke Katalog</a></section>;

  const { type, item } = route;
  const category = type === 'kategori' ? item : productGroups.find((entry) => entry.id === (item.category ?? item.group));
  const group = type === 'produk-group' ? item : type === 'produk' ? catalogGroups.find((entry) => entry.productNames.includes(item.name)) : null;
  const items = type === 'kategori' ? catalogGroups.filter((entry) => entry.category === item.id) : type === 'produk-group' ? products.filter((entry) => item.productNames.includes(entry.name)) : products.filter((entry) => group?.productNames.includes(entry.name) && entry.slug !== item.slug);
  const productInquiry = `https://wa.me/6281333399362?text=${encodeURIComponent(`Halo PT. Cahaya Mandiri Bajamas, saya ingin menanyakan stok dan penawaran ${item.name ?? item.title}.`)}`;

  return (
    <section className="bg-white pb-16 pt-7 sm:pb-24 sm:pt-10">
      <div className="page-container">
        <nav aria-label="Breadcrumb" className="mb-9 flex flex-wrap items-center gap-2 text-xs leading-6 text-muted sm:mb-12 sm:text-sm">
          <a href="#produk" className="hover:text-brand">Produk</a>
          <ChevronRight size={14} aria-hidden="true" />
          {type === 'kategori' ? <span aria-current="page" className="text-ink">{item.title}</span> : <a href={`#/kategori/${category.id}`} className="hover:text-brand">{category.title}</a>}
          {group && <><ChevronRight size={14} aria-hidden="true" />{type === 'produk-group' ? <span aria-current="page" className="text-ink">{group.title}</span> : <a href={`#/produk-group/${group.id}`} className="hover:text-brand">{group.title}</a>}</>}
          {type === 'produk' && <><ChevronRight size={14} aria-hidden="true" /><span aria-current="page" className="text-ink">{item.name}</span></>}
        </nav>
        {type === 'produk' ? (
          <>
            <div className="grid gap-9 lg:grid-cols-2 lg:items-start lg:gap-16">
              <img src={item.image} alt={item.alt} width="800" height="640" fetchPriority="high" className="aspect-[5/4] w-full rounded-lg bg-surface object-cover" />
              <div><p className="text-sm font-semibold text-brand">{item.en}</p><h1 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-[40px]">{item.name}</h1><p className="mt-5 leading-7 text-muted">{item.desc}</p>
                <div className="mt-7 border-y border-line py-6"><h2 className="text-sm font-bold">Aplikasi umum</h2><ul className="mt-4 space-y-3">{item.uses.map((use) => <li key={use} className="flex gap-3 text-sm leading-6 text-muted"><Check size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" /><span>{use}</span></li>)}</ul></div>
                <p className="mt-5 text-xs leading-6 text-muted">Ketersediaan, grade, ukuran, dan harga dikonfirmasi sesuai kebutuhan. Kirim spesifikasi serta jumlah untuk penawaran.</p>
                <ExternalLink href={productInquiry} className="btn btn-primary mt-6 w-full sm:w-auto"><MessageCircle size={18} aria-hidden="true" />Tanya Ketersediaan<ArrowUpRight size={17} aria-hidden="true" /></ExternalLink>
              </div>
            </div>
            {items.length > 0 && <div className="mt-16 border-t border-line pt-10"><h2 className="section-title mb-8">Produk terkait</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map((product) => <ProductCard key={product.slug} item={product} href={`#/produk/${product.slug}`} />)}</div></div>}
          </>
        ) : (
          <>
            <div className="mb-10 max-w-3xl"><p className="text-sm font-semibold text-brand">{type === 'kategori' ? 'Kategori produk' : category.title}</p><h1 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-[40px]">{item.title}</h1><p className="mt-4 leading-7 text-muted">{item.desc}</p><p className="mt-5 text-sm text-muted">{type === 'kategori' ? `${items.length} kelompok produk` : `${items.length} produk`}</p></div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map((entry) => <ProductCard key={entry.id ?? entry.slug} item={entry} href={`#/${type === 'kategori' ? 'produk-group' : 'produk'}/${entry.id ?? entry.slug}`} count={type === 'kategori' ? entry.productNames.length : undefined} />)}</div>
          </>
        )}
        <a href={type === 'kategori' ? '#produk' : type === 'produk-group' ? `#/kategori/${category.id}` : `#/produk-group/${group.id}`} className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark"><ArrowLeft size={17} aria-hidden="true" />{type === 'kategori' ? 'Kembali ke Katalog' : 'Kembali ke Produk'}</a>
      </div>
    </section>
  );
}
