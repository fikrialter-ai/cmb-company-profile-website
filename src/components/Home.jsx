import { ArrowRight, ArrowUpRight, Building2, Check, Factory, PackageCheck, Store, Truck, Warehouse, Wrench } from 'lucide-react';
import { SectionHeading } from './UI.jsx';
import Products from './Products.jsx';

const warehouse = '/images/warehouse-redacted-1920.webp';
const warehouseMedium = '/images/warehouse-redacted-1280.webp';
const warehouseSmall = '/images/warehouse-redacted-800.webp';

function Hero() {
  return (
    <>
      <section id="beranda" className="relative isolate flex min-h-[530px] items-center bg-ink sm:min-h-[550px] lg:min-h-[590px]">
        <img src={warehouse} srcSet={`${warehouseSmall} 800w, ${warehouseMedium} 1280w, ${warehouse} 1920w`} sizes="100vw" alt="Gudang PT. Cahaya Mandiri Bajamas di Romokalisari, Surabaya" width="1920" height="1440" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_60%]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#141C24]/95 via-[#141C24]/65 to-[#141C24]/10" />
        <div className="page-container py-14 sm:py-16">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase text-white/90 sm:text-sm"><span className="h-0.5 w-7 bg-accent" />Stockist & General Contractor</p>
          <h1 className="max-w-[780px] text-[38px] font-bold leading-[1.12] text-white sm:text-[52px] lg:text-[62px]">PT. Cahaya Mandiri<br className="hidden sm:block" /> Bajamas</h1>
          <p className="mt-6 max-w-[530px] text-base leading-7 text-white/85 sm:text-lg sm:leading-8">Pengadaan besi dan baja untuk industri dan konstruksi. Berpengalaman sejak 1986, berpusat di Surabaya.</p>
          <div className="mt-9 flex flex-col gap-3 min-[400px]:flex-row">
            <a href="#produk" className="btn btn-primary">Jelajahi Produk <ArrowRight size={18} aria-hidden="true" /></a>
            <a href="#kontak" className="btn border border-white/60 text-white hover:bg-white/10">Diskusikan Kebutuhan <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
      <section aria-label="Layanan CMB" className="border-b border-line bg-white">
        <div className="page-container grid grid-cols-2 gap-x-5 gap-y-7 py-7 lg:grid-cols-4 lg:py-8">
          {[
            [PackageCheck, 'Pilihan material lengkap', '7 kategori besi dan baja'],
            [Factory, 'Pengalaman sejak 1986', 'Industri & konstruksi'],
            [Truck, 'Koordinasi pengiriman', 'Sesuai kebutuhan proyek'],
            [Warehouse, 'Gudang Romokalisari', 'Surabaya, Jawa Timur']
          ].map(([Icon, title, text]) => <div key={title} className="flex items-start gap-3"><Icon size={24} strokeWidth={1.5} className="mt-0.5 hidden shrink-0 text-brand sm:block" aria-hidden="true" /><div><p className="text-xs font-bold leading-5 text-ink sm:text-sm">{title}</p><p className="mt-1 text-xs leading-5 text-muted">{text}</p></div></div>)}
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <section id="tentang" className="section-band">
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
          <div>
            <SectionHeading label="Tentang perusahaan" title="Mitra material untuk industri dan konstruksi." />
            <p className="max-w-2xl text-base leading-8 text-muted">PT. Cahaya Mandiri Bajamas menyediakan besi dan baja untuk kebutuhan pengadaan sehari-hari hingga material proyek. Kami melayani industri, konstruksi, bengkel, karoseri, dan toko bahan bangunan.</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">Berpusat di Romokalisari, Surabaya, kami membantu menghubungkan kebutuhan spesifikasi dengan pilihan material dan pengiriman yang sesuai.</p>
            <a href="#kontak" className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-brand hover:text-brand-dark">Hubungi tim CMB <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <dl className="grid grid-cols-2 gap-6 border-t border-line pt-8 lg:block lg:space-y-9 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div><dt className="text-xs font-semibold text-muted">Awal perjalanan usaha</dt><dd><span className="mt-2 block text-4xl font-semibold text-ink sm:text-5xl">1986</span><p className="mt-3 text-sm leading-6 text-muted">Dimulai sebagai usaha perdagangan besi dan baja.</p></dd></div>
            <div><dt className="text-xs font-semibold text-muted">Resmi menjadi perseroan</dt><dd><span className="mt-2 block text-4xl font-semibold text-ink sm:text-5xl">2018</span><p className="mt-3 text-sm leading-6 text-muted">Beroperasi sebagai PT. Cahaya Mandiri Bajamas.</p></dd></div>
          </dl>
        </div>
        <div className="mt-12 border-t border-line pt-7 sm:mt-16">
          <p className="mb-5 text-xs font-semibold text-muted">Melayani berbagai kebutuhan usaha</p>
          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {[[Factory, 'Industri'], [Building2, 'Konstruksi'], [Wrench, 'Bengkel'], [Truck, 'Karoseri'], [Store, 'Toko bahan bangunan']].map(([Icon, label]) => <li key={label} className="flex items-center gap-3 text-sm font-semibold text-ink"><Icon size={21} strokeWidth={1.5} className="shrink-0 text-muted" aria-hidden="true" />{label}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Logistics() {
  const services = [
    { icon: Warehouse, title: 'Stockist & distribusi', text: 'Pengadaan besi dan baja dari gudang Romokalisari untuk industri, bengkel, dan toko material.' },
    { icon: PackageCheck, title: 'Pengadaan proyek', text: 'Koordinasi jenis material, ukuran, grade, dan jumlah berdasarkan spesifikasi pekerjaan.' },
    { icon: Truck, title: 'Logistik & pengiriman', text: 'Pengaturan armada, jadwal pengiriman, dan lokasi tujuan yang disepakati bersama.' }
  ];
  return (
    <section id="logistik" className="section-band">
      <div className="page-container">
        <SectionHeading title="Pengadaan yang terkoordinasi.">Kami membantu setiap tahap kebutuhan material, mulai dari pemilihan produk sampai pengiriman.</SectionHeading>
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {services.map(({ icon: Icon, title, text }) => <article key={title} className="border-t-2 border-line pt-6"><Icon size={30} strokeWidth={1.5} className="text-brand" aria-hidden="true" /><h3 className="mt-5 text-xl font-bold text-ink">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{text}</p></article>)}
        </div>
        <div className="mt-14 grid gap-7 border-t border-line pt-9 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
          <h3 className="max-w-xs text-2xl font-semibold leading-snug text-ink">Dari kebutuhan Anda ke penawaran yang jelas.</h3>
          <ol className="grid gap-6 sm:grid-cols-3">
            {[
              ['Kebutuhan material', 'Jenis, ukuran, jumlah, dan lokasi pengiriman.'],
              ['Konfirmasi penawaran', 'Ketersediaan stok, spesifikasi, dan harga.'],
              ['Jadwal pengiriman', 'Koordinasi armada dan penerimaan di lokasi.']
            ].map(([title, text]) => <li key={title} className="border-l-2 border-brand pl-4"><h4 className="text-sm font-bold text-ink">{title}</h4><p className="mt-2 text-sm leading-6 text-muted">{text}</p></li>)}
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
        <div><p className="text-sm font-semibold text-brand">Komitmen pelayanan</p><h2 className="mt-4 text-4xl font-bold leading-tight text-ink sm:text-5xl">Leading<br />in Service<span className="text-accent">.</span></h2><p className="mt-5 max-w-sm text-sm leading-7 text-muted">Pengalaman panjang berarti memahami kebutuhan yang berbeda dan menjaga komunikasi dalam setiap pengadaan.</p></div>
        <div className="divide-y divide-line">
          {[
            ['Pengalaman lintas kebutuhan', 'Melayani kebutuhan industri, konstruksi, bengkel, karoseri, dan toko bahan bangunan.'],
            ['Pilihan material yang luas', 'Tujuh kategori produk dengan pilihan jenis material untuk berbagai pekerjaan.'],
            ['Koordinasi melalui satu tim', 'Komunikasi pengadaan, konfirmasi spesifikasi, dan pengiriman yang terarah.']
          ].map(([title, text]) => <article key={title} className="flex gap-4 py-6 first:pt-0 last:pb-0"><Check size={20} className="mt-1 shrink-0 text-brand" aria-hidden="true" /><div><h3 className="text-lg font-bold text-ink">{title}</h3><p className="mt-2 text-sm leading-7 text-muted">{text}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return <><Hero /><About /><Products /><Logistics /><Values /></>;
}
