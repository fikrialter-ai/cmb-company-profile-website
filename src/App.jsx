import React, { useEffect, useMemo, useRef, useState } from 'react';
import heroBg from '../hero_bg.png';
import platHitam from '../plat_hitam.png';
import platKapal from '../plat_kapal.png';
import platBordes from '../plat_bordes.png';
import platStrip from '../plat_strip.png';
import besiSiku from '../besi_siku.png';
import hbeamWf from '../hbeam_wf.png';
import besiKonstruksi from '../besi_konstruksi.png';
import produkAtapGalvalum from './assets/produk-atap-galvalum.webp';
import produkBesiBetonBatangan from './assets/produk-besi-beton-batangan.webp';
import produkInfrastruktur from './assets/produk-infrastruktur.webp';
import produkPipaBaja from './assets/produk-pipa-baja.webp';
import produkPlatSpesialis from './assets/produk-plat-spesialis.webp';
import produkWiremesh from './assets/produk-wiremesh.webp';

const WHATSAPP =
  'https://wa.me/6281333399362?text=Halo%20PT.%20Cahaya%20Mandiri%20Bajamas,%20saya%20ingin%20menanyakan%20informasi%20produk.';
const MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=-7.1952587,112.6517548';
const MAP_EMBED =
  'https://www.google.com/maps?q=-7.1952587,112.6517548&z=17&output=embed';

const defaultUsesByGroup = {
  plat: ['Fabrikasi industri dan manufaktur', 'Konstruksi bangunan, gudang, dan infrastruktur', 'Kebutuhan plat khusus untuk kapal, tangki, panel, atau lantai kerja'],
  profil: ['Balok, kolom, dan rangka baja struktural', 'Gudang, pabrik, jembatan, dan bangunan komersial', 'Fabrikasi berat dan dudukan mesin'],
  pipa: ['Struktur ringan, railing, tiang, dan pagar', 'Jalur utilitas air atau kebutuhan distribusi proyek', 'Kebutuhan konstruksi dan industri sesuai spesifikasi'],
  beton: ['Tulangan beton untuk bangunan dan infrastruktur', 'Machining, shaft, dan komponen teknik', 'Fabrikasi umum dan pekerjaan konstruksi lapangan'],
  wiremesh: ['Penguatan lantai beton, dak, dan jalan', 'Pengikat tulangan dan aksesoris pengecoran', 'Pagar, pembatas area, dan pendukung proyek'],
  atap: ['Atap gudang, pabrik, dan bangunan komersial', 'Rangka ringan untuk renovasi dan bangunan baru', 'Panel atap atau dinding dengan pemasangan efisien'],
  infrastruktur: ['Pengaman jalan dan proyek transportasi', 'Penahan tanah, sungai, dermaga, atau basement', 'Pekerjaan infrastruktur berat skala proyek']
};

const navItems = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang Kami' },
  { id: 'produk', label: 'Produk' },
  { id: 'logistik', label: 'Logistik' },
  { id: 'kontak', label: 'Kontak' }
];

const advantages = [
  {
    title: 'Rekam Jejak Matang',
    body: 'Melayani industri dan proyek konstruksi selama lebih dari 40 tahun dengan reputasi yang terbangun kuat.',
    icon: ClockIcon
  },
  {
    title: 'Pilihan Varian Luas',
    body: 'Menyediakan berbagai tipe, ukuran, dan ketebalan baja langsung dari gudang kami siap kirim kapan pun Anda butuhkan.',
    icon: GridIcon,
    featured: true
  },
  {
    title: 'Pengiriman Mandiri',
    body: 'Distribusi aman dengan armada transportasi operasional milik sendiri, efisien, tepat waktu, langsung ke site proyek.',
    icon: TruckIcon
  }
];

const products = [
  product('Plat Hitam', 'Hot Rolled Plate & Sheet', 'Plat baja umum untuk fabrikasi standar, struktur, manufaktur, dan kebutuhan proyek konstruksi.', platHitam, 'Hot Rolled', 'plat'),
  product('Plat Kapal BKI', 'Ship Building Plate', 'Plat spesifikasi kapal untuk galangan, tangki besar, dan aplikasi industri dengan kebutuhan material lebih ketat.', platKapal, 'Marine Grade', 'plat', { special: true }),
  product('Plat Besi Putih', 'Cold Rolled Plate & Sheet', 'Plat cold rolled dengan permukaan lebih halus untuk panel, komponen presisi, dan finishing industri.', produkPlatSpesialis, 'Cold Rolled', 'plat'),
  product('Plat Bordes', 'Checkered Plate', 'Plat berpola anti-slip untuk lantai transportasi berat, tangga industri, platform, dan fasilitas umum.', platBordes, 'Anti-Slip', 'plat'),
  product('Plat Strip', 'Flat Bars', 'Material baja pipih panjang untuk komponen struktural, karoseri, bracket, dan kebutuhan fabrikasi.', platStrip, 'Flat Bar', 'plat'),
  product('Plat Galvanil', 'Galvaneal', 'Plat berlapis galvanil untuk panel, fabrikasi, dan komponen yang membutuhkan permukaan siap finishing.', produkPlatSpesialis, 'Galvaneal', 'plat'),
  product('Plat Galvanis', 'Galvanized Plate', 'Plat berlapis zinc untuk konstruksi, utilitas, panel, dan area yang membutuhkan perlindungan korosi.', produkPlatSpesialis, 'Galvanized', 'plat'),
  product('Plat Stainless 4 x 8', 'Stainless Steel Sheets', 'Lembaran stainless untuk dapur industri, tangki, interior, dan fabrikasi anti karat.', produkPlatSpesialis, 'Stainless', 'plat'),
  product('Besi Plat Coil', 'Steel Plate Coil', 'Material coil baja untuk produksi berkelanjutan, pemotongan, dan pembentukan lembaran sesuai spesifikasi.', produkPlatSpesialis, 'Coil', 'plat'),
  product('WF / Wide Flange', 'Wide Flange Steel Beams', 'Profil WF untuk balok, kolom, struktur bangunan, pabrik, gudang, dan fabrikasi berat.', hbeamWf, 'WF Beam', 'profil', { special: true, wide: true }),
  product('H-Beam, I-Beam / INP', 'Structural Steel Beams', 'Material baja struktural berkapasitas beban tinggi untuk kolom, balok, jembatan, dan konstruksi baja.', hbeamWf, 'Beam', 'profil', { special: true }),
  product('Kanal UNP & CNP', 'Steel Channels', 'Kanal baja untuk rangka, dudukan mesin, struktur ringan-menengah, dan kebutuhan fabrikasi industri.', besiKonstruksi, 'Channel', 'profil'),
  product('Besi Siku', 'Angle Bars', 'Profil baja siku untuk struktur pendukung, rangka, dan pekerjaan besi umum di konstruksi dan industri.', besiSiku, 'Angle Bar', 'profil'),
  product('Pipa Baja Hitam', 'Black Steel Pipe', 'Pipa baja hitam untuk konstruksi, struktur, jalur utilitas, railing, tiang, dan kebutuhan proyek industri.', produkPipaBaja, 'Black Pipe', 'pipa'),
  product('Pipa Galvanis / Pipa Air', 'Galvanized Water Pipe', 'Pipa galvanis berlapis zinc untuk kebutuhan air, utilitas, pagar, dan aplikasi dengan perlindungan korosi.', produkPipaBaja, 'Galvanis', 'pipa'),
  product('Pipa Seamless', 'ASTM A53 / A106 / API 5L', 'Pipa seamless untuk kebutuhan tekanan, utilitas industri, distribusi, dan aplikasi teknis sesuai standar proyek.', produkPipaBaja, 'Seamless', 'pipa'),
  product('Pipa Pancang ERW', 'ASTM A252', 'Pipa pancang ERW untuk pondasi, tiang, dan kebutuhan infrastruktur dengan spesifikasi proyek.', produkPipaBaja, 'Pancang', 'pipa'),
  product('Pipa Kotak', 'Rectangular & Square Pipes', 'Pipa kotak dan rectangular untuk rangka, konstruksi ringan, kanopi, pagar, dan fabrikasi umum.', produkPipaBaja, 'Box Pipe', 'pipa'),
  product('Besi Beton Polos & Ulir', 'Plain & Deformed Bars', 'Besi beton untuk tulangan struktur beton pada proyek bangunan, jalan, gudang, dan infrastruktur.', produkBesiBetonBatangan, 'Rebar', 'beton'),
  product('Besi AS / Round Bars', 'ST41, ST60, ST70, ST90', 'Besi as untuk machining, komponen teknik, shaft, dan kebutuhan fabrikasi presisi.', produkBesiBetonBatangan, 'Round Bar', 'beton'),
  product('Square Bars / Vierkan', 'Square Steel Bars', 'Batang baja kotak untuk komponen teknik, rangka, pekerjaan bubut, dan fabrikasi umum.', produkBesiBetonBatangan, 'Vierkan', 'beton'),
  product('Silver Steel / Tool Steel', 'Hollow Bars & Tool Steel', 'Material baja teknik untuk tool, komponen mesin, hollow bars, dan pekerjaan industri presisi.', produkBesiBetonBatangan, 'Tool Steel', 'beton'),
  product('Besi Wiremesh', 'Steel Wiremesh Sheets', 'Wiremesh lembaran untuk penguatan lantai beton, dak, jalan, gudang, dan pekerjaan pengecoran.', produkWiremesh, 'Wiremesh', 'wiremesh'),
  product('Heavy Welded Wire Mesh Roll', 'Wire Mesh Roll', 'Wiremesh roll untuk penguatan, pagar, pembatas area, dan kebutuhan pendukung proyek konstruksi.', produkWiremesh, 'Mesh Roll', 'wiremesh'),
  product('Bendrat', 'Tie Wire', 'Kawat bendrat untuk pengikat tulangan, pekerjaan beton, dan kebutuhan aksesoris lapangan.', produkWiremesh, 'Tie Wire', 'wiremesh'),
  product('Rangka Atap Baja Ringan', 'Galvalume Light Steel Frame', 'Rangka atap baja ringan galvalum untuk bangunan komersial, gudang, rumah tinggal, dan renovasi.', produkAtapGalvalum, 'Baja Ringan', 'atap'),
  product('Atap Gelombang Galvalum', 'Corrugated Galvalume Roofing', 'Atap gelombang galvalum untuk penutup atap gudang, pabrik, dan bangunan komersial.', produkAtapGalvalum, 'Roofing', 'atap'),
  product('Spandek Galvalum', 'Galvalume Spandek Panels', 'Spandek galvalum untuk atap dan dinding bangunan dengan bobot ringan dan pemasangan efisien.', produkAtapGalvalum, 'Spandek', 'atap'),
  product('Besi Sheetpile', 'Type II, III, IV', 'Sheetpile baja untuk penahan tanah, proyek dermaga, sungai, basement, dan pekerjaan infrastruktur berat.', produkInfrastruktur, 'Sheetpile', 'infrastruktur', { special: true }),
  product('Guardrail', 'Type A & B', 'Guardrail untuk pengaman jalan, proyek transportasi, pelindung tepi, dan kebutuhan keselamatan infrastruktur.', produkInfrastruktur, 'Guardrail', 'infrastruktur')
];

const productGroups = [
  {
    id: 'plat',
    eyebrow: 'Kategori 01',
    title: 'Plat Baja',
    subtitle: 'Spesialisasi Utama',
    desc: 'Fokus utama PT. CMB untuk kebutuhan industri, konstruksi, fabrikasi, manufaktur, kapal, dan proyek infrastruktur.'
  },
  {
    id: 'profil',
    eyebrow: 'Kategori 02',
    title: 'Besi Struktur & Profil',
    desc: 'Produk profil baja untuk struktur bangunan, balok, kolom, rangka baja, dan fabrikasi berat.'
  },
  {
    id: 'pipa',
    eyebrow: 'Kategori 03',
    title: 'Pipa Baja',
    desc: 'Produk pipa untuk konstruksi, utilitas, distribusi, railing, tiang, dan kebutuhan proyek industri.'
  },
  {
    id: 'beton',
    eyebrow: 'Kategori 04',
    title: 'Besi Beton & Batangan',
    desc: 'Material tulangan beton, machining, komponen teknik, dan pekerjaan konstruksi umum.'
  },
  {
    id: 'wiremesh',
    eyebrow: 'Kategori 05',
    title: 'Wiremesh & Aksesoris Pendukung',
    desc: 'Material penguatan lantai beton, pengikat tulangan, pagar, dan kebutuhan pendukung proyek.'
  },
  {
    id: 'atap',
    eyebrow: 'Kategori 06',
    title: 'Atap Galvalum',
    desc: 'Material atap dan rangka ringan untuk bangunan komersial, gudang, rumah tinggal, dan kebutuhan atap.'
  },
  {
    id: 'infrastruktur',
    eyebrow: 'Kategori 07',
    title: 'Material Infrastruktur',
    desc: 'Material untuk proyek jalan, pengaman jalan, penahan tanah, dan pekerjaan infrastruktur.'
  }
];

const catalogGroups = [
  {
    id: 'plat-lembaran',
    category: 'plat',
    eyebrow: 'Group 01',
    title: 'Plat Lembaran & Strip',
    desc: 'Material plat dasar untuk fabrikasi, struktur, manufaktur, dan kebutuhan proyek umum.',
    image: platHitam,
    productNames: ['Plat Hitam', 'Plat Strip']
  },
  {
    id: 'plat-kapal-anti-slip',
    category: 'plat',
    eyebrow: 'Group 02',
    title: 'Plat Kapal & Anti-Slip',
    desc: 'Pilihan plat untuk galangan, tangki, lantai kerja, tangga industri, dan platform proyek.',
    image: platKapal,
    productNames: ['Plat Kapal BKI', 'Plat Bordes']
  },
  {
    id: 'plat-coated-stainless',
    category: 'plat',
    eyebrow: 'Group 03',
    title: 'Plat Coated & Stainless',
    desc: 'Plat berlapis dan stainless untuk panel, finishing industri, utilitas, dan kebutuhan anti karat.',
    image: produkPlatSpesialis,
    productNames: ['Plat Besi Putih', 'Plat Galvanil', 'Plat Galvanis', 'Plat Stainless 4 x 8']
  },
  {
    id: 'plat-coil',
    category: 'plat',
    eyebrow: 'Group 04',
    title: 'Coil Baja',
    desc: 'Material coil untuk produksi berkelanjutan, pemotongan, dan pembentukan lembaran.',
    image: produkPlatSpesialis,
    productNames: ['Besi Plat Coil']
  },
  {
    id: 'beam-struktural',
    category: 'profil',
    eyebrow: 'Group 01',
    title: 'Beam Struktural',
    desc: 'Profil beam untuk balok, kolom, gudang, pabrik, jembatan, dan konstruksi baja berat.',
    image: hbeamWf,
    productNames: ['WF / Wide Flange', 'H-Beam, I-Beam / INP']
  },
  {
    id: 'kanal-dan-siku',
    category: 'profil',
    eyebrow: 'Group 02',
    title: 'Kanal & Siku',
    desc: 'Profil kanal dan siku untuk rangka, dudukan mesin, struktur pendukung, dan fabrikasi umum.',
    image: besiKonstruksi,
    productNames: ['Kanal UNP & CNP', 'Besi Siku']
  },
  {
    id: 'pipa-standar',
    category: 'pipa',
    eyebrow: 'Group 01',
    title: 'Pipa Standar Konstruksi',
    desc: 'Pipa baja untuk struktur ringan, utilitas, railing, pagar, kanopi, dan kebutuhan lapangan.',
    image: produkPipaBaja,
    productNames: ['Pipa Baja Hitam', 'Pipa Galvanis / Pipa Air', 'Pipa Kotak']
  },
  {
    id: 'pipa-proyek-industri',
    category: 'pipa',
    eyebrow: 'Group 02',
    title: 'Pipa Proyek Industri',
    desc: 'Pipa untuk kebutuhan tekanan, pondasi, distribusi, dan spesifikasi teknis proyek.',
    image: produkPipaBaja,
    productNames: ['Pipa Seamless', 'Pipa Pancang ERW']
  },
  {
    id: 'tulangan-beton',
    category: 'beton',
    eyebrow: 'Group 01',
    title: 'Tulangan Beton',
    desc: 'Material tulangan untuk bangunan, jalan, gudang, dan pekerjaan infrastruktur beton.',
    image: produkBesiBetonBatangan,
    productNames: ['Besi Beton Polos & Ulir']
  },
  {
    id: 'batangan-teknik',
    category: 'beton',
    eyebrow: 'Group 02',
    title: 'Batangan Teknik',
    desc: 'Batang baja untuk machining, shaft, tool, komponen teknik, dan fabrikasi presisi.',
    image: produkBesiBetonBatangan,
    productNames: ['Besi AS / Round Bars', 'Square Bars / Vierkan', 'Silver Steel / Tool Steel']
  },
  {
    id: 'wiremesh-lembaran-roll',
    category: 'wiremesh',
    eyebrow: 'Group 01',
    title: 'Wiremesh Lembaran & Roll',
    desc: 'Wiremesh untuk penguatan lantai beton, dak, jalan, pagar, dan pembatas area.',
    image: produkWiremesh,
    productNames: ['Besi Wiremesh', 'Heavy Welded Wire Mesh Roll']
  },
  {
    id: 'aksesoris-beton',
    category: 'wiremesh',
    eyebrow: 'Group 02',
    title: 'Aksesoris Beton',
    desc: 'Material pendukung lapangan untuk pengikatan tulangan dan pekerjaan pengecoran.',
    image: produkWiremesh,
    productNames: ['Bendrat']
  },
  {
    id: 'rangka-atap',
    category: 'atap',
    eyebrow: 'Group 01',
    title: 'Rangka Atap',
    desc: 'Rangka baja ringan galvalum untuk bangunan komersial, gudang, rumah, dan renovasi.',
    image: produkAtapGalvalum,
    productNames: ['Rangka Atap Baja Ringan']
  },
  {
    id: 'panel-atap-galvalum',
    category: 'atap',
    eyebrow: 'Group 02',
    title: 'Panel Atap Galvalum',
    desc: 'Material penutup atap dan dinding dengan bobot ringan serta pemasangan efisien.',
    image: produkAtapGalvalum,
    productNames: ['Atap Gelombang Galvalum', 'Spandek Galvalum']
  },
  {
    id: 'penahan-tanah',
    category: 'infrastruktur',
    eyebrow: 'Group 01',
    title: 'Penahan Tanah',
    desc: 'Material untuk proyek dermaga, sungai, basement, dan pekerjaan infrastruktur berat.',
    image: produkInfrastruktur,
    productNames: ['Besi Sheetpile']
  },
  {
    id: 'pengaman-jalan',
    category: 'infrastruktur',
    eyebrow: 'Group 02',
    title: 'Pengaman Jalan',
    desc: 'Material keselamatan jalan dan proyek transportasi untuk pelindung tepi jalan.',
    image: produkInfrastruktur,
    productNames: ['Guardrail']
  }
];

function product(name, en, desc, image, tag, group, options = {}) {
  return {
    name,
    en,
    desc,
    image,
    alt: name,
    tag,
    slug: slugify(name),
    category: group,
    group,
    uses: defaultUsesByGroup[group] ?? ['Kebutuhan konstruksi dan fabrikasi', 'Pengadaan material proyek industri', 'Permintaan ukuran atau spesifikasi sesuai kebutuhan'],
    waText: `Halo,%20saya%20ingin%20menanyakan%20harga%20${encodeURIComponent(name)}.`,
    ...options
  };
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, ' dan ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getProductRoute() {
  if (typeof window === 'undefined') return null;
  const hash = window.location.hash;
  const productMatch = hash.match(/^#\/produk\/([^/]+)$/);
  const categoryMatch = hash.match(/^#\/kategori\/([^/]+)$/);
  const groupMatch = hash.match(/^#\/produk-group\/([^/]+)$/);

  if (productMatch) return { type: 'product', slug: decodeURIComponent(productMatch[1]) };
  if (categoryMatch) return { type: 'category', slug: decodeURIComponent(categoryMatch[1]) };
  if (groupMatch) return { type: 'catalogGroup', slug: decodeURIComponent(groupMatch[1]) };
  return null;
}

function getProductsByCatalogGroup(groupId) {
  const group = catalogGroups.find((item) => item.id === groupId);
  if (!group) return [];
  return products.filter((product) => group.productNames.includes(product.name));
}

function getCatalogGroupForProduct(product) {
  return catalogGroups.find((group) => group.productNames.includes(product.name));
}

const logistics = [
  {
    title: 'Kapasitas Gudang',
    desc: 'Operasional penyimpanan material terpusat di kawasan industri Romokalisari, Surabaya. Material terlindungi dari pengaruh cuaca dan tersimpan dengan aman sebelum pengiriman.',
    detail: 'Kawasan Industri Romokalisari, Surabaya',
    icon: WarehouseIcon
  },
  {
    title: 'Armada Pengiriman',
    desc: 'Pengiriman material berat dilakukan secara terjadwal menggunakan unit armada truk mandiri. Efisiensi biaya lebih terjaga dan ketepatan waktu sampai di site proyek lebih terjamin.',
    detail: 'Armada truk operasional milik sendiri',
    icon: TruckIcon,
    featured: true
  },
  {
    title: 'Jangkauan Nasional',
    desc: 'Melayani pengiriman ke berbagai wilayah di Indonesia untuk mendukung kebutuhan proyek konstruksi dan manufaktur skala besar maupun menengah.',
    detail: 'Distribusi ke seluruh Indonesia',
    icon: GlobeIcon
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const [productRoute, setProductRoute] = useState(getProductRoute);

  useRevealOnScroll(`${productRoute?.type ?? 'home'}-${productRoute?.slug ?? ''}`);

  const selectedProduct = productRoute?.type === 'product' ? products.find((product) => product.slug === productRoute.slug) : null;
  const selectedCategory = productRoute?.type === 'category' ? productGroups.find((group) => group.id === productRoute.slug) : null;
  const selectedCatalogGroup = productRoute?.type === 'catalogGroup' ? catalogGroups.find((group) => group.id === productRoute.slug) : null;
  const hasCatalogRoute = Boolean(selectedProduct || selectedCategory || selectedCatalogGroup);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const current = navItems.findLast((item) => {
        const element = document.getElementById(item.id);
        return element ? window.scrollY + 120 >= element.offsetTop : false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => setProductRoute(getProductRoute());

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        bottom: `${Math.random() * 40}%`,
        size: `${Math.random() * 3 + 1}px`,
        duration: `${4 + Math.random() * 8}s`,
        delay: `${Math.random() * 6}s`
      })),
    []
  );

  const goToSection = (id) => {
    const scrollToTarget = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (hasCatalogRoute) {
      window.history.pushState('', document.title, `${window.location.pathname}${window.location.search}`);
      setProductRoute(null);
      window.setTimeout(scrollToTarget, 60);
    } else {
      scrollToTarget();
    }

    setIsMenuOpen(false);
  };

  const openCategory = (category) => {
    setProductRoute({ type: 'category', slug: category.id });
    window.location.hash = `#/kategori/${category.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCatalogGroup = (group) => {
    setProductRoute({ type: 'catalogGroup', slug: group.id });
    window.location.hash = `#/produk-group/${group.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProduct = (product) => {
    setProductRoute({ type: 'product', slug: product.slug });
    window.location.hash = `#/produk/${product.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-800">
      <Header
        activeSection={activeSection}
        goToSection={goToSection}
        isMenuOpen={isMenuOpen}
        isScrolled={isScrolled || hasCatalogRoute}
        setIsMenuOpen={setIsMenuOpen}
      />
      {selectedProduct ? (
        <ProductDetailPage product={selectedProduct} goToSection={goToSection} openCatalogGroup={openCatalogGroup} openProduct={openProduct} />
      ) : selectedCatalogGroup ? (
        <CatalogGroupPage catalogGroup={selectedCatalogGroup} goToSection={goToSection} openCategory={openCategory} openProduct={openProduct} />
      ) : selectedCategory ? (
        <CategoryPage category={selectedCategory} goToSection={goToSection} openCatalogGroup={openCatalogGroup} />
      ) : (
        <>
          <Hero particles={particles} goToSection={goToSection} />
          <Advantages />
          <About goToSection={goToSection} />
          <Products openCategory={openCategory} />
          <Logistics />
          <CtaBanner />
          <Contact />
          <Footer goToSection={goToSection} />
        </>
      )}
      <FloatingWhatsapp />
      <ScrollProgress />
    </main>
  );
}

function Header({ activeSection, goToSection, isMenuOpen, isScrolled, setIsMenuOpen }) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 shadow-2xl backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="page-container flex h-[68px] items-center justify-between gap-4 md:h-[76px] md:gap-6">
        <button className="flex shrink-0 items-center gap-3 text-left" onClick={() => goToSection('beranda')}>
          <LogoMark />
          <LogoText />
        </button>

        <nav
          className={`fixed inset-x-0 top-[68px] z-40 flex max-h-[calc(100svh-68px)] flex-col gap-1 overflow-y-auto border-b border-gold/20 bg-navy/95 p-4 backdrop-blur-xl transition-all duration-300 md:static md:z-auto md:flex md:max-h-none md:translate-y-0 md:flex-row md:items-center md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:opacity-100 md:pointer-events-auto ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-[110%] opacity-0 pointer-events-none'
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
              onClick={() => goToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          className={`hamburger md:hidden ${isMenuOpen ? 'hamburger-open' : ''}`}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function Hero({ particles, goToSection }) {
  return (
    <section id="beranda" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img className="absolute inset-0 h-full w-full animate-hero-zoom object-cover" src={heroBg} alt="Gudang baja PT. Cahaya Mandiri Bajamas" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-navy/55" />
      <div className="pointer-events-none absolute inset-0 z-[1]">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              bottom: particle.bottom,
              width: particle.size,
              height: particle.size,
              animationDuration: particle.duration,
              animationDelay: particle.delay
            }}
          />
        ))}
      </div>

      <div className="page-container relative z-10 w-full max-w-[948px] pb-12 pt-28 sm:pb-16 sm:pt-32 md:py-36">
        <div className="hero-badge" data-reveal="fade-down">
          <span className="h-2 w-2 animate-dot-pulse rounded-full bg-whatsapp" />
          Stockist Baja Terpercaya Sejak 1986
        </div>
        <h1 className="mt-5 max-w-[12ch] font-display text-[2.35rem] font-black leading-[1.03] text-white min-[390px]:text-[2.7rem] sm:mt-6 sm:max-w-none sm:text-6xl lg:text-7xl" data-reveal="fade-up">
          Penyedia Besi & Plat Baja
          <br />
          <span className="relative text-gold after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:bg-gradient-to-r after:from-gold after:to-transparent">
            Komprehensif
          </span>
          <br />
          untuk Industri Anda
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8" data-reveal="fade-up">
          Berpengalaman dalam memenuhi kebutuhan material konstruksi dan manufaktur skala nasional sejak 1986. Sebagai stockist utama, kami memastikan
          ketersediaan barang yang stabil dan pengiriman yang presisi.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4" data-reveal="fade-up">
          <button className="btn btn-primary w-full sm:w-auto" onClick={() => goToSection('produk')}>
            Lihat Produk Kami
          </button>
        </div>

        <div className="mt-10 grid w-full max-w-xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl sm:mt-14 md:flex md:w-fit md:max-w-3xl md:items-stretch" data-reveal="fade-up">
          <Stat target={40} suffix="+" label="Tahun Pengalaman" />
          <Stat target={1986} label="Tahun Berdiri" />
          <Stat target={7} suffix="+" label="Kategori Produk" />
          <div className="stat-block">
            <CheckIcon className="h-7 w-7 text-gold sm:h-8 sm:w-8" />
            <span className="stat-label">Armada Sendiri</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-9 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-60 md:flex">
        <span className="text-xs uppercase tracking-[0.2em] text-white">Scroll</span>
        <span className="h-10 w-px animate-scroll-line bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section id="keunggulan" className="section-band bg-slate-50">
      <div className="page-container">
        <SectionHeader tag="Mengapa Kami?" title="Keunggulan Utama Kami" desc="Dipercaya oleh ratusan kontraktor dan pabrik di seluruh Indonesia selama lebih dari empat dekade." />
        <div className="grid gap-6 lg:grid-cols-3">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={`feature-card ${item.featured ? 'feature-card-dark' : ''}`} data-reveal="fade-up">
                <div className="icon-box">
                  <Icon className="h-7 w-7 sm:h-9 sm:w-9" />
                </div>
                <h3 className="font-display text-xl font-extrabold sm:text-2xl">{item.title}</h3>
                <p className={`mt-3 text-sm leading-7 ${item.featured ? 'text-white/75' : 'text-slate-600'}`}>{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About({ goToSection }) {
  const values = ['Produk Berstandar Industri', 'Ketersediaan Stok yang Stabil', 'Logistik Mandiri & Terpercaya', 'Layanan Skala Nasional'];

  return (
    <section id="tentang" className="section-band relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(13,27,42,.05),transparent_45%)]" />
      <div className="page-container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative pb-8 sm:pb-6" data-reveal="fade-right">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-deep sm:rounded-[2rem]">
            <img className="h-full w-full object-cover" src={heroBg} alt="Gudang PT. Cahaya Mandiri Bajamas" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/65" />
            <div className="absolute right-4 top-4 rounded-xl bg-gold px-4 py-2.5 text-center text-navy shadow-gold sm:right-6 sm:top-6 sm:rounded-2xl sm:px-5 sm:py-3">
              <span className="block font-display text-2xl font-black leading-none sm:text-3xl">1986</span>
              <span className="text-[0.62rem] font-bold uppercase tracking-wider sm:text-xs">Tahun Berdiri</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-3 flex items-center gap-3 rounded-2xl border border-gold/25 bg-navy px-4 py-4 text-white shadow-deep sm:-bottom-5 sm:-left-2 sm:gap-4 sm:px-6 sm:py-5 md:-left-6">
            <span className="font-display text-4xl font-black leading-none text-gold sm:text-5xl">40+</span>
            <span className="text-xs leading-5 text-white/75 sm:text-sm">Tahun Melayani<br />Industri Indonesia</span>
          </div>
        </div>

        <div data-reveal="fade-left">
          <span className="section-tag">Tentang Kami</span>
          <h2 className="section-title mt-4 text-left">
            Mitra Baja Terpercaya
            <br />
            Sejak Generasi Pertama
          </h2>
          <p className="body-copy">
            PT. Cahaya Mandiri Bajamas berakar dari dedikasi panjang di industri perdagangan besi dan baja yang dimulai sejak tahun 1986. Berpusat
            di Surabaya, kami terus berevolusi hingga menjadi salah satu stockist baja dan kontraktor umum terpercaya di Indonesia.
          </p>
          <p className="body-copy">
            Kami berkomitmen penuh menjadi mitra strategis bagi kontraktor, pabrik, dan pengembang infrastruktur dengan menyediakan produk baja
            standar industri yang andal dari gudang kami langsung ke proyek Anda.
          </p>
          <div className="my-8 grid gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="flex items-center gap-3 rounded-lg bg-slate-100 px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-gold-pale hover:text-gold-dark">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                {value}
              </div>
            ))}
          </div>
          <button className="btn btn-primary w-full sm:w-auto" onClick={() => goToSection('kontak')}>
            Hubungi Kami Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}

function Products({ openCategory }) {
  return (
    <section id="produk" className="section-band bg-slate-50">
      <div className="page-container">
        <SectionHeader
          tag="Katalog Produk"
          title="Produk Baja & Besi Kami"
          desc="PT. Cahaya Mandiri Bajamas menyediakan material baja konstruksi dengan fokus utama Plat Baja, didukung Besi Struktur, Pipa Baja, Besi Beton, Wiremesh, Atap Galvalum, dan Material Infrastruktur."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" data-reveal="fade-up">
          {productGroups.map((group) => {
            const count = products.filter((product) => product.group === group.id).length;
            const groupCount = catalogGroups.filter((item) => item.category === group.id).length;

            return (
              <a key={group.id} className="category-tile group" href={`#/kategori/${group.id}`} onClick={(event) => {
                event.preventDefault();
                openCategory(group);
              }}>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-gold">{group.eyebrow}</span>
                <span className="mt-2 block font-display text-xl font-extrabold leading-tight">{group.title}</span>
                <span className="mt-2 block text-xs text-slate-500">{groupCount} group, {count} produk tersedia</span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold-dark transition group-hover:gap-3">
                  Lihat Product Group
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CategoryPage({ category, goToSection, openCatalogGroup }) {
  const groups = catalogGroups.filter((group) => group.category === category.id);
  const productCount = products.filter((product) => product.group === category.id).length;

  return (
    <>
      <section className="bg-slate-50 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-28">
        <div className="page-container">
          <button className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-gold-dark transition hover:gap-3 hover:text-gold" onClick={() => goToSection('produk')}>
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            Kembali ke Kategori
          </button>

          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
            <span className="section-tag">{category.eyebrow}</span>
            <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h1 className="font-display text-3xl font-black leading-tight text-navy sm:text-4xl lg:text-5xl">
                  {category.title} {category.subtitle && <span className="text-gold-dark">({category.subtitle})</span>}
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{category.desc}</p>
              </div>
              <div className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-600">
                {groups.length} group, {productCount} produk
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {groups.map((group) => (
              <CatalogGroupCard key={group.id} group={group} openCatalogGroup={openCatalogGroup} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Contact />
      <Footer goToSection={goToSection} />
    </>
  );
}

function CatalogGroupPage({ catalogGroup, goToSection, openCategory, openProduct }) {
  const category = productGroups.find((group) => group.id === catalogGroup.category);
  const groupProducts = getProductsByCatalogGroup(catalogGroup.id);

  return (
    <>
      <section className="bg-slate-50 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-28">
        <div className="page-container">
          <button className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-gold-dark transition hover:gap-3 hover:text-gold" onClick={() => openCategory(category)}>
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            Kembali ke Product Group
          </button>

          <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr] lg:gap-8">
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[16/10] lg:aspect-[4/3]">
                <img className="h-full w-full object-cover" src={catalogGroup.image} alt={catalogGroup.title} />
              </div>
            </figure>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
              <span className="section-tag">{category?.title ?? 'Produk CMB'}</span>
              <h1 className="mt-4 font-display text-3xl font-black leading-tight text-navy sm:text-4xl lg:text-5xl">{catalogGroup.title}</h1>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{catalogGroup.desc}</p>
              <div className="mt-6 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-600">
                {groupProducts.length} produk dalam group ini
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="rounded-full bg-gold-pale px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-gold-dark">Daftar Produk</span>
                <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-navy sm:text-3xl">Pilih Produk</h2>
              </div>
              <p className="text-sm font-semibold text-slate-500">Klik detail untuk melihat spesifikasi singkat</p>
            </div>

            <div className="grid gap-3">
              {groupProducts.map((product) => (
                <ProductListRow key={product.name} openProduct={openProduct} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Contact />
      <Footer goToSection={goToSection} />
    </>
  );
}

function CatalogGroupCard({ group, openCatalogGroup }) {
  const groupProducts = getProductsByCatalogGroup(group.id);
  const handleOpen = (event) => {
    event.preventDefault();
    openCatalogGroup(group);
  };

  return (
    <article className="catalog-group-card" data-reveal="fade-up">
      <a href={`#/produk-group/${group.id}`} onClick={handleOpen}>
        <span className="block aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
          <img className="h-full w-full object-cover transition duration-700 hover:scale-105" src={group.image} alt={group.title} loading="lazy" />
        </span>
        <span className="mt-5 block text-[0.65rem] font-bold uppercase tracking-[0.12em] text-gold-dark">{group.eyebrow}</span>
        <span className="mt-2 block font-display text-xl font-extrabold leading-tight text-navy sm:text-2xl">{group.title}</span>
        <span className="mt-3 block text-sm leading-6 text-slate-600">{group.desc}</span>
        <span className="mt-5 flex items-center justify-between gap-3 border-t border-slate-200 pt-4">
          <span className="text-sm font-semibold text-slate-500">{groupProducts.length} produk</span>
          <span className="inline-flex items-center gap-2 text-sm font-bold text-gold-dark">
            Lihat Produk
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        </span>
      </a>
    </article>
  );
}

function ProductListRow({ openProduct, product }) {
  const productHref = `#/produk/${product.slug}`;
  const handleOpen = (event) => {
    event.preventDefault();
    openProduct(product);
  };

  return (
    <article className="product-list-row" data-reveal="fade-up">
      <a className="flex min-w-0 flex-1 items-center gap-4 text-left" href={productHref} onClick={handleOpen}>
        <span className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-20 sm:w-24">
          <img className="h-full w-full object-cover" src={product.image} alt={product.alt} loading="lazy" />
        </span>
        <span className="min-w-0">
          <span className="inline-flex rounded-full bg-gold-pale px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-gold-dark">
            {product.tag}
          </span>
          <span className="mt-2 block font-display text-lg font-extrabold leading-tight text-navy sm:text-xl">{product.name}</span>
          <span className="mt-1 block truncate text-xs font-semibold uppercase tracking-wider text-slate-400">{product.en}</span>
        </span>
      </a>
      <a className="btn w-full border-2 border-slate-200 text-navy hover:border-gold hover:text-gold sm:w-auto" href={productHref} onClick={handleOpen}>
        Detail Produk
        <ArrowRightIcon className="h-4 w-4" />
      </a>
    </article>
  );
}

function ProductDetailPage({ goToSection, openCatalogGroup, openProduct, product }) {
  const group = productGroups.find((item) => item.id === product.group);
  const catalogGroup = getCatalogGroupForProduct(product);
  const relatedProducts = getProductsByCatalogGroup(catalogGroup?.id).filter((item) => item.slug !== product.slug).slice(0, 3);
  const href = `https://wa.me/6281333399362?text=${product.waText}`;

  return (
    <>
      <section className="bg-slate-50 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-28">
        <div className="page-container">
          <button className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-gold-dark transition hover:gap-3 hover:text-gold" onClick={() => (catalogGroup ? openCatalogGroup(catalogGroup) : goToSection('produk'))}>
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            Kembali ke Produk
          </button>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4]">
                <img className="h-full w-full object-cover" src={product.image} alt={product.alt} />
                <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white ${product.special ? 'bg-gradient-to-r from-gold to-gold-dark' : 'bg-navy'}`}>
                  {product.tag}
                </span>
              </div>
            </div>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
              <span className="section-tag">{catalogGroup?.title ?? group?.title ?? 'Produk Baja'}</span>
              <h1 className="mt-4 font-display text-3xl font-black leading-tight text-navy sm:text-4xl lg:text-5xl">{product.name}</h1>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">{product.en}</p>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{product.desc}</p>

              <div className="mt-7 rounded-2xl bg-slate-50 p-4 sm:p-5">
                <h2 className="font-display text-lg font-extrabold text-navy">Aplikasi Umum</h2>
                <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                  {product.uses.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ExternalLink href={href} className="btn btn-wa w-full sm:w-auto">
                  <WhatsappIcon className="h-5 w-5" />
                  Tanya Ketersediaan
                </ExternalLink>
                <button className="btn w-full border-2 border-slate-200 text-navy hover:border-gold hover:text-gold sm:w-auto" onClick={() => goToSection('kontak')}>
                  Hubungi Kantor
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-band bg-white">
        <div className="page-container">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-tag">Produk Terkait</span>
              <h2 className="section-title mt-4">Masih dalam Group {catalogGroup?.title ?? group?.title ?? 'Produk'}</h2>
            </div>
            <button className="btn border-2 border-slate-200 text-navy hover:border-gold hover:text-gold" onClick={() => (catalogGroup ? openCatalogGroup(catalogGroup) : goToSection('produk'))}>
              Lihat Produk Group
            </button>
          </div>

          <div className="grid gap-3">
            {relatedProducts.map((item) => (
              <ProductListRow key={item.name} openProduct={openProduct} product={item} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Contact />
      <Footer goToSection={goToSection} />
    </>
  );
}

function Logistics() {
  return (
    <section id="logistik" className="section-band relative overflow-hidden bg-gradient-to-br from-navy via-navy-mid to-navy-light">
      <div className="absolute inset-0 opacity-40 pattern-grid" />
      <div className="page-container relative">
        <SectionHeader
          light
          tag="Armada & Fasilitas"
          title="Logistik Mandiri & Terintegrasi"
          desc="Dari gudang Romokalisari langsung ke lokasi proyek Anda aman, terjadwal, dan efisien."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {logistics.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={`logistic-card ${item.featured ? 'border-gold/35 bg-gold/10' : ''}`} data-reveal="fade-up">
                <div className="icon-box bg-gold/15 text-gold">
                  <Icon className="h-7 w-7 sm:h-10 sm:w-10" />
                </div>
                <h3 className="mt-5 font-display text-xl font-extrabold text-white sm:mt-6 sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.desc}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-white/45">{item.detail}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2" data-reveal="fade-up">
          <LogisticPhoto image={heroBg} alt="Armada Truk PT. Cahaya Mandiri Bajamas" caption="Armada Operasional PT. CMB" />
          <LogisticPhoto image={platHitam} alt="Gudang Romokalisari PT. Cahaya Mandiri Bajamas" caption="Gudang Romokalisari, Surabaya" />
        </div>
      </div>
    </section>
  );
}

function LogisticPhoto({ image, alt, caption }) {
  return (
    <figure className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-deep">
      <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={image} alt={alt} />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-5 text-sm font-semibold text-white">{caption}</figcaption>
    </figure>
  );
}

function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gold-dark via-gold to-gold-light py-14 sm:py-20">
      <div className="absolute inset-0 opacity-30 pattern-dots" />
      <div className="page-container relative flex flex-col items-stretch justify-between gap-7 text-center sm:items-center lg:flex-row lg:text-left" data-reveal="zoom-in">
        <div>
          <h2 className="font-display text-3xl font-black leading-tight text-navy sm:text-4xl">Siap Memenuhi Kebutuhan Baja Proyek Anda?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-navy/75 sm:text-base">Hubungi tim kami sekarang untuk konsultasi ketersediaan stok, spesifikasi teknis, dan penawaran harga terbaik.</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ExternalLink href="https://wa.me/6281333399362?text=Halo%20PT.%20Cahaya%20Mandiri%20Bajamas,%20saya%20ingin%20menanyakan%20penawaran%20produk%20baja." className="btn btn-wa justify-center">
            <WhatsappIcon className="h-5 w-5" />
            Chat WhatsApp Sekarang
          </ExternalLink>
          <a href="tel:+62319900149" className="btn justify-center border-2 border-white/45 text-white hover:bg-white/10">
            <PhoneIcon className="h-5 w-5" />
            Telepon Kantor
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontak" className="section-band bg-white">
      <div className="page-container">
        <SectionHeader tag="Hubungi Kami" title="Informasi Kontak & Lokasi" desc="Kami siap melayani pertanyaan dan kebutuhan material baja Anda setiap hari kerja." />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
          <div className="flex flex-col gap-4 sm:gap-6" data-reveal="fade-right">
            <ContactCard icon={MapPinIcon} title="Alamat Kantor & Gudang">
              <p className="text-sm leading-7 text-slate-800">
                <strong>PT. Cahaya Mandiri Bajamas</strong>
                <br />
                Jl. Romokalisari No. 80 Blok E No. 01, Romokalisari, Benowo, Surabaya, Jawa Timur
              </p>
              <ExternalLink href={MAPS_URL} className="mt-3 block text-sm font-semibold text-gold-dark hover:text-gold">
                Buka di Google Maps {'->'}
              </ExternalLink>
            </ContactCard>
            <ContactCard icon={WhatsappIcon} title="WhatsApp" accent>
              <ExternalLink href="https://wa.me/6281333399362" className="text-lg font-bold text-navy hover:text-gold-dark sm:text-xl">
                0813-3339-9362
              </ExternalLink>
            </ContactCard>
            <ContactCard icon={PhoneIcon} title="Telepon Kantor">
              <a className="block text-sm font-semibold text-gold-dark hover:text-gold" href="tel:+62319900149">
                (+62-31) 9900-1409
              </a>
              <a className="block text-sm font-semibold text-gold-dark hover:text-gold" href="tel:+62319900159">
                (+62-31) 9900-1593
              </a>
            </ContactCard>
            <ContactCard icon={MailIcon} title="Email Resmi">
              <a className="break-all text-sm font-semibold text-gold-dark hover:text-gold" href="mailto:ptcahayamandiri_bajamas89@yahoo.com">
                ptcahayamandiri_bajamas89@yahoo.com
              </a>
            </ContactCard>
          </div>

          <div data-reveal="fade-left">
            <div className="overflow-hidden rounded-2xl border-2 border-slate-200 shadow-deep">
              <iframe
                src={MAP_EMBED}
                className="h-[300px] w-full lg:h-[420px]"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi PT. Cahaya Mandiri Bajamas - Jl. Romokalisari No. 80, Surabaya"
              />
            </div>
            <ExternalLink href={MAPS_URL} className="btn mt-4 w-full justify-center border-2 border-slate-200 text-center text-navy hover:border-gold hover:text-gold">
              <MapPinIcon className="h-4 w-4" />
              Klik untuk Rute ke Gudang PT. CMB
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ accent = false, children, icon: Icon, title }) {
  return (
    <article className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-100 p-4 transition hover:-translate-y-1 hover:border-gold/40 hover:bg-gold-pale sm:gap-4 sm:p-6">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 sm:h-12 sm:w-12 ${accent ? 'border-transparent bg-gradient-to-br from-whatsapp to-whatsapp-dark text-white' : 'border-gold/25 bg-gold-pale text-gold-dark'}`}>
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <div className="min-w-0">
        <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">{title}</h4>
        {children}
      </div>
    </article>
  );
}

function Footer({ goToSection }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="border-b border-white/10 py-12 sm:py-16">
        <div className="page-container grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
          <div>
            <button className="mb-5 flex items-center gap-3 text-left" onClick={() => goToSection('beranda')}>
              <LogoMark />
              <LogoText />
            </button>
            <p className="text-sm leading-7 text-white/55">Stockist baja & besi terpercaya di Indonesia.<br />Melayani industri konstruksi sejak 1986.</p>
          </div>
          <FooterLinks title="Navigasi" items={navItems.map((item) => ({ label: item.label, onClick: () => goToSection(item.id) }))} />
          <FooterLinks title="Produk" items={['Plat Hitam', 'Plat Kapal', 'Plat Bordes', 'H-Beam & WF', 'Besi Siku'].map((label) => ({ label, onClick: () => goToSection('produk') }))} />
          <div>
            <h5 className="footer-title">Kontak</h5>
            <ExternalLink href="https://wa.me/6281333399362" className="footer-link">WA: 0813-3339-9362</ExternalLink>
            <a href="tel:+62319900149" className="footer-link">Telp: (+62-31) 9900-1409</a>
            <a href="mailto:ptcahayamandiri_bajamas89@yahoo.com" className="footer-link break-all">ptcahayamandiri_bajamas89@yahoo.com</a>
            <ExternalLink href="https://wa.me/6281333399362" className="btn-whatsapp mt-3">
              <WhatsappIcon className="h-4 w-4" />
              Chat WhatsApp
            </ExternalLink>
          </div>
        </div>
      </div>
      <div className="page-container flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-white/35 md:flex-row md:text-left">
        <p>&copy; {year} PT. Cahaya Mandiri Bajamas. Seluruh hak cipta dilindungi.</p>
        <p>Jl. Romokalisari No. 80, Surabaya - Indonesia</p>
      </div>
    </footer>
  );
}

function FooterLinks({ items, title }) {
  return (
    <div>
      <h5 className="footer-title">{title}</h5>
      {items.map((item) => (
        <button key={item.label} className="footer-link block text-left" onClick={item.onClick}>
          {item.label}
        </button>
      ))}
    </div>
  );
}

function FloatingWhatsapp() {
  return (
    <ExternalLink href={WHATSAPP} className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-whatsapp to-whatsapp-dark text-white shadow-[0_8px_24px_rgba(37,211,102,.40)] transition hover:-translate-y-1 hover:scale-110 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16" aria-label="Chat WhatsApp">
      <WhatsappIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      <span className="absolute -inset-1.5 rounded-full border-2 border-whatsapp animate-pulse-ring" />
    </ExternalLink>
  );
}

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="fixed left-0 top-0 z-[60] h-[3px] rounded-r bg-gradient-to-r from-gold to-gold-light transition-[width]" style={{ width: `${width}%` }} />;
}

function SectionHeader({ desc, light = false, tag, title }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center" data-reveal="fade-up">
      <span className={`section-tag ${light ? 'border-gold/35 bg-gold/15 text-gold-light' : ''}`}>{tag}</span>
      <h2 className={`section-title mt-4 ${light ? 'text-white' : ''}`}>{title}</h2>
      <p className={`mx-auto mt-4 max-w-2xl text-base leading-7 ${light ? 'text-steel-light' : 'text-slate-600'}`}>{desc}</p>
    </div>
  );
}

function Stat({ label, suffix = '', target }) {
  const { ref, value } = useCountUp(target);

  return (
    <div className="stat-block">
      <span className="font-display text-3xl font-black leading-none text-gold" ref={ref}>
        {value.toLocaleString('id-ID')}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function ExternalLink({ children, className = '', href, ...props }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function useCountUp(target) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const duration = 1800;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.floor(target * progress));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.unobserve(element);
      },
      { threshold: 0.6 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);

  return { ref, value };
}

function useRevealOnScroll(dependency) {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [dependency]);
}

function LogoText() {
  return (
    <span className="flex flex-col leading-none">
      <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-gold">PT.</span>
      <span className="text-base font-bold text-white">Cahaya Mandiri</span>
      <span className="font-display text-sm font-black uppercase tracking-[0.15em] text-gold">Bajamas</span>
    </span>
  );
}

function LogoMark() {
  return (
    <svg className="h-9 w-[96px] shrink-0 sm:h-10 sm:w-[106px]" viewBox="0 0 168 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 20.2C6 14.2 10.4 9.2 16.3 8.3L55 2.5C61 1.6 66.4 6.2 66.4 12.2V23.9H49.6L48.1 17.8L23.1 21.6V38.4L48.1 42.2L49.6 36.1H66.4V47.8C66.4 53.8 61 58.4 55 57.5L16.3 51.7C10.4 50.8 6 45.8 6 39.8V20.2ZM23.1 27.1H46.2V32.9H23.1V27.1Z"
        fill="url(#cmbSide)"
      />
      <path d="M75 7C71.1 7 68 10.1 68 14V46C68 49.9 71.1 53 75 53H79V7H75Z" fill="url(#cmbSide)" />
      <path d="M113 7H117C120.9 7 124 10.1 124 14V46C124 49.9 120.9 53 117 53H113V7Z" fill="url(#cmbSide)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.3 7.5H109.7C114.2 7.5 117.8 11.1 117.8 15.6V53.5H104.1V22.3H98.7V39.8C98.7 44.1 95.2 47.6 90.9 47.6C86.6 47.6 83.1 44.1 83.1 39.8V22.3H77.7V53.5H64V15.6C64 11.1 67.6 7.5 72.1 7.5H82.3Z"
        fill="url(#cmbCenter)"
      />
      <path d="M77.7 22.3H64V53.5H77.7V22.3Z" fill="#FFFFFF" fillOpacity=".9" />
      <path d="M117.8 22.3H104.1V53.5H117.8V22.3Z" fill="#FFFFFF" fillOpacity=".9" />
      <path d="M82.3 7.5H109.7C114.2 7.5 117.8 11.1 117.8 15.6V22.3H64V15.6C64 11.1 67.6 7.5 72.1 7.5H82.3Z" fill="url(#cmbCenter)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M126.5 2.5L148.5 5.8C158.1 7.2 163.6 12.1 163.6 19.4C163.6 24.1 161.1 27.7 156.8 29.5C162 31.2 164.9 35.2 164.9 40.6C164.9 49.2 158.1 54.5 146.8 56.2L126.5 59.2V2.5ZM142.2 18.2V25H151C154.6 25 156.6 23.8 156.6 21.6C156.6 19.4 154.6 18.2 151 18.2H142.2ZM142.2 36V42.9H152.9C156.5 42.9 158.5 41.7 158.5 39.5C158.5 37.3 156.5 36 152.9 36H142.2Z"
        fill="url(#cmbSide)"
      />
      <defs>
        <linearGradient id="cmbSide" x1="6" y1="2" x2="165" y2="59" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F5C55A" />
          <stop offset="0.45" stopColor="#E8A020" />
          <stop offset="1" stopColor="#C47A15" />
        </linearGradient>
        <linearGradient id="cmbCenter" x1="64" y1="7.5" x2="118" y2="53.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.58" stopColor="#F5C55A" />
          <stop offset="1" stopColor="#E8A020" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ArrowRightIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ClockIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function GridIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="7" height="7" />
      <rect x="15" y="3" width="7" height="7" />
      <rect x="15" y="14" width="7" height="7" />
      <rect x="2" y="14" width="7" height="7" />
    </svg>
  );
}

function TruckIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function WarehouseIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function GlobeIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function MapPinIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.63a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.02z" />
    </svg>
  );
}

function MailIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function WhatsappIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default App;
