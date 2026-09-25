import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, PackageCheck, Search, Truck, Warehouse, X } from 'lucide-react';
import { products, productGroups, WHATSAPP } from '../data/catalog.js';
import { ExternalLink, ProductCard, SectionHeading } from './UI.jsx';

const warehouse = '/images/warehouse-1920.webp';
const warehouseMedium = '/images/warehouse-1280.webp';
const warehouseSmall = '/images/warehouse-800.webp';

function Hero() {
  return (
    <>
      <section id="beranda" className="relative isolate flex min-h-[520px] items-center bg-ink sm:min-h-[550px] lg:min-h-[580px]">
        <img src={warehouse} srcSet={`${warehouseSmall} 800w, ${warehouseMedium} 1280w, ${warehouse} 1920w`} sizes="100vw" alt="Gudang PT. Cahaya Mandiri Bajamas di Romokalisari, Surabaya" width="1920" height="1440" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_65%]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111820]/95 via-[#111820]/65 to-[#111820]/15" />
        <div className="page-container py-14 sm:py-16">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase text-white sm:text-sm"><span className="h-0.5 w-8 bg-accent" />Stockist & General Contractor</p>
          <h1 className="max-w-[720px] font-display text-[44px] font-semibold leading-[1.05] text-white sm:text-[64px] lg:text-[76px]">PT. Cahaya Mandiri<br className="hidden sm:block" /> Bajamas</h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/90 sm:text-lg sm:leading-8">Mitra pengadaan besi dan baja sejak 1986.<br />Dari Surabaya, untuk industri dan konstruksi Indonesia.</p>
          <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row">
            <a href="#produk" className="btn btn-primary">Lihat Produk Kami <ArrowRight size={18} aria-hidden="true" /></a>
            <ExternalLink href={WHATSAPP} className="btn border border-white/60 bg-white/5 text-white hover:bg-white/15">Minta Penawaran <ArrowUpRight size={18} aria-hidden="true" /></ExternalLink>
          </div>
        </div>
      </section>
      <section aria-label="Tentang CMB dalam angka" className="border-b border-line bg-white">
        <dl className="page-container grid grid-cols-2 py-7 md:grid-cols-4 md:py-9">
          {[
            ['1986', 'Awal perjalanan usaha'], ['2018', 'Resmi menjadi perseroan'], ['7', 'Kategori material baja'], ['Surabaya', 'Pusat operasional & gudang']
          ].map(([value, label]) => <div key={value} className="my-3 border-l-2 border-line pl-4 first:border-accent sm:pl-6"><dt className="text-xs text-muted sm:text-sm">{label}</dt><dd className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">{value}</dd></div>)}
        </dl>
      </section>
    </>
  );
}

function About() {
  return (
    <section id="tentang" className="section-band">
      <div className="page-container grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
        <div>
          <SectionHeading label="Tentang CMB" title="Pengalaman panjang. Pelayanan yang dekat.">Berawal dari usaha perdagangan pada 1986, CMB tumbuh bersama kebutuhan industri dan konstruksi Indonesia.</SectionHeading>
          <p className="text-sm leading-7 text-muted sm:text-base">PT. Cahaya Mandiri Bajamas resmi berdiri sebagai perseroan pada 2018. Dari Romokalisari, Benowo, Surabaya, kami menyediakan material baja untuk industri, konstruksi, bengkel, karoseri, dan toko bahan bangunan.</p>
          <p className="mt-5 text-sm leading-7 text-muted sm:text-base">Pilihan material yang lengkap dan layanan pengadaan yang terarah membantu Anda menemukan produk sesuai kebutuhan pekerjaan.</p>
          <a href="#kontak" className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-brand hover:text-brand-dark">Kenali tim dan lokasi kami <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
        <figure>
          <img src={warehouseSmall} srcSet={`${warehouseSmall} 800w, ${warehouseMedium} 1280w`} sizes="(min-width: 1024px) 550px, 100vw" alt="Tampak depan gudang CMB dengan pintu biru di Romokalisari" width="800" height="600" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-lg object-cover" />
          <figcaption className="mt-4 flex items-center gap-2 text-xs text-muted"><Warehouse size={16} aria-hidden="true" />Gudang CMB, Romokalisari, Surabaya</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Products() {
  const [query, setQuery] = useState('');
  const normalized = query.trim().toLocaleLowerCase('id');
  const results = normalized ? products.filter((product) => `${product.name} ${product.en} ${product.tag} ${product.desc}`.toLocaleLowerCase('id').includes(normalized)) : [];
  const featured = productGroups[0];

  return (
    <section id="produk" className="section-band border-y border-line bg-surface">
      <div className="page-container">
        <SectionHeading title="Material tepat untuk setiap kebutuhan.">Dari plat baja hingga material infrastruktur. Temukan kategori dan spesifikasi awal untuk kebutuhan pengadaan Anda.</SectionHeading>
        <div className="relative mb-8 max-w-xl">
          <label htmlFor="product-search" className="sr-only">Cari produk baja</label>
          <Search className="pointer-events-none absolute left-4 top-3.5 text-muted" size={20} aria-hidden="true" />
          <input id="product-search" type="search" autoComplete="off" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari produk, misalnya plat hitam atau pipa..." className="h-12 w-full rounded border border-line bg-white pl-12 pr-12 text-sm text-ink placeholder:text-muted focus:border-brand" />
          {query && <button type="button" title="Hapus pencarian" aria-label="Hapus pencarian" onClick={() => setQuery('')} className="absolute right-1 top-1 flex h-10 w-10 items-center justify-center rounded text-muted hover:text-brand"><X size={18} /></button>}
        </div>
        {normalized ? (
          <>
            <p role="status" className="mb-5 text-sm text-muted">{results.length} produk ditemukan untuk "{query.trim()}"</p>
            {results.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{results.map((item) => <ProductCard key={item.slug} item={item} href={`#/produk/${item.slug}`} />)}</div> : <div className="py-12"><h3 className="font-display text-2xl font-semibold">Produk belum ditemukan</h3><p className="mt-3 text-sm text-muted">Coba nama material lain atau konsultasikan kebutuhan Anda dengan tim CMB.</p><button className="btn btn-secondary mt-6" onClick={() => setQuery('')}>Lihat Semua Kategori</button></div>}
          </>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a href={`#/kategori/${featured.id}`} className="group grid overflow-hidden rounded-lg border border-line bg-white transition-colors hover:border-brand sm:col-span-2 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-[1fr_1.5fr]">
              <div className="flex flex-col items-start justify-center p-6 sm:p-8 lg:p-10"><p className="text-sm font-semibold text-brand">Spesialisasi utama</p><h3 className="mt-3 font-display text-4xl font-semibold text-ink">Plat Baja</h3><p className="mt-4 max-w-md text-sm leading-7 text-muted">Plat hitam, plat kapal, bordes, hingga coated dan stainless untuk fabrikasi dan proyek Anda.</p><span className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-brand">Jelajahi Plat Baja <ArrowUpRight size={18} aria-hidden="true" /></span></div>
              <img src={products[0].image} alt="Lembaran plat baja" loading="lazy" decoding="async" width="800" height="450" className="h-full max-h-[320px] min-h-[240px] w-full object-cover" />
            </a>
            {productGroups.slice(1).map((category) => {
              const categoryProducts = products.filter((product) => product.group === category.id);
              const representative = category.id === 'profil' ? categoryProducts.find((product) => product.name === 'Besi Siku') : categoryProducts[0];
              return <ProductCard key={category.id} item={{ ...category, image: representative.image }} href={`#/kategori/${category.id}`} count={categoryProducts.length} />;
            })}
          </div>
        )}
        <p className="mt-7 text-xs leading-6 text-muted">Ketersediaan stok, ukuran, dan spesifikasi dikonfirmasi oleh tim kami saat permintaan penawaran.</p>
      </div>
    </section>
  );
}

function Logistics() {
  const services = [
    { icon: Warehouse, title: 'Stockist & distribusi', text: 'Pengadaan besi dan baja dari gudang Romokalisari untuk kebutuhan industri, bengkel, dan toko material.' },
    { icon: PackageCheck, title: 'Pengadaan material proyek', text: 'Koordinasi kebutuhan jenis material, ukuran, dan jumlah berdasarkan spesifikasi pekerjaan Anda.' },
    { icon: Truck, title: 'Logistik & pengiriman', text: 'Pengaturan pengiriman melalui armada operasional CMB, dengan jadwal dan tujuan yang disepakati.' }
  ];
  return (
    <section id="logistik" className="section-band">
      <div className="page-container">
        <SectionHeading title="Dari pengadaan sampai pengiriman.">Satu alur layanan untuk membantu material tiba sesuai kebutuhan pekerjaan Anda.</SectionHeading>
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {services.map(({ icon: Icon, title, text }) => <article key={title} className="border-t border-line pt-7"><Icon size={30} strokeWidth={1.6} className="text-brand" aria-hidden="true" /><h3 className="mt-5 font-display text-2xl font-semibold text-ink">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{text}</p></article>)}
        </div>
        <div className="mt-14 grid gap-8 border-t border-line pt-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div><p className="text-sm font-semibold text-brand">Alur pemesanan</p><h3 className="mt-3 font-display text-3xl font-semibold text-ink">Kebutuhan Anda,<br />kami bantu siapkan.</h3></div>
          <ol className="grid gap-7 sm:grid-cols-3">
            {['Sampaikan kebutuhan', 'Konfirmasi penawaran', 'Atur pengiriman'].map((label, index) => <li key={label}><span className="font-display text-3xl font-medium text-brand" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><h4 className="mt-3 text-sm font-bold text-ink">{label}</h4><p className="mt-2 text-sm leading-6 text-muted">{['Kirim jenis material, ukuran, jumlah, dan lokasi tujuan.', 'Tim kami mengonfirmasi stok, spesifikasi, dan harga.', 'Sepakati jadwal serta kebutuhan bongkar di lokasi.'][index]}</p></li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section id="keunggulan" className="section-band border-y border-line bg-surface">
      <div className="page-container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div><p className="text-sm font-semibold text-brand">Mengapa CMB</p><h2 className="mt-4 font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl">Leading<br />in Service<span className="text-accent">.</span></h2><p className="mt-5 max-w-sm text-sm leading-7 text-muted">Pengalaman sejak 1986 menjadi dasar kami dalam memahami kebutuhan material dan menjaga hubungan jangka panjang.</p></div>
        <div className="divide-y divide-line">
          {[
            ['Pengalaman lintas kebutuhan', 'Melayani kebutuhan industri, konstruksi, bengkel, karoseri, dan toko bahan bangunan.'],
            ['Pilihan material yang luas', 'Tujuh kategori produk dengan pilihan jenis material untuk berbagai pekerjaan.'],
            ['Koordinasi yang terarah', 'Komunikasi pengadaan, konfirmasi spesifikasi, dan pengiriman melalui satu tim.']
          ].map(([title, text]) => <article key={title} className="flex gap-4 py-6 first:pt-0 last:pb-0"><Check size={21} className="mt-1 shrink-0 text-brand" aria-hidden="true" /><div><h3 className="font-display text-2xl font-semibold text-ink">{title}</h3><p className="mt-2 text-sm leading-7 text-muted">{text}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return <><Hero /><About /><Products /><Logistics /><Values /></>;
}
