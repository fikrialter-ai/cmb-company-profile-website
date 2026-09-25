import platHitam from '../assets/optimized/plat_hitam.webp';
import platKapal from '../assets/optimized/plat_kapal.webp';
import platBordes from '../assets/optimized/plat_bordes.webp';
import besiSiku from '../assets/optimized/besi_siku.webp';
import produkPlatSpesialis from '../assets/optimized/produk-plat-spesialis.webp';
import sheetpile from '../assets/optimized/sheetpile.webp';
import guardrail from '../assets/optimized/guardrail.webp';
import wfBeam from '../assets/optimized/wf-beam.webp';
import kanalUnpCnp from '../assets/optimized/kanal-unp-cnp.webp';
import bendrat from '../assets/optimized/bendrat.webp';
import platStrip from '../assets/optimized/plat-strip.webp';
import pipaKotak from '../assets/optimized/pipa-kotak.webp';
import atapGelombang from '../assets/optimized/atap-gelombang.webp';
import spandek from '../assets/optimized/spandek.webp';
import platStainless from '../assets/optimized/plat-stainless.webp';
import platColdRolled from '../assets/optimized/plat-cold-rolled.webp';
import platGalvanis from '../assets/optimized/plat-galvanis.webp';
import squareBars from '../assets/optimized/square-bars.webp';
import toolSteel from '../assets/optimized/tool-steel.webp';
import roundBars from '../assets/optimized/round-bars.webp';
import pipaHitam from '../assets/optimized/pipa-hitam.webp';
import pipaGalvanis from '../assets/optimized/pipa-galvanis.webp';
import besiBeton from '../assets/optimized/besi-beton.webp';
import rangkaAtap from '../assets/optimized/rangka-atap.webp';
import wiremeshLembaran from '../assets/optimized/wiremesh-lembaran.webp';
import wiremeshRoll from '../assets/optimized/wiremesh-roll.webp';
import platHitamThumb from '../assets/optimized/plat_hitam-320.webp';
import platKapalThumb from '../assets/optimized/plat_kapal-320.webp';
import platBordesThumb from '../assets/optimized/plat_bordes-320.webp';
import besiSikuThumb from '../assets/optimized/besi_siku-320.webp';
import spesialisThumb from '../assets/optimized/produk-plat-spesialis-320.webp';
import sheetpileThumb from '../assets/optimized/sheetpile-320.webp';
import guardrailThumb from '../assets/optimized/guardrail-320.webp';
import wfBeamThumb from '../assets/optimized/wf-beam-320.webp';
import kanalUnpCnpThumb from '../assets/optimized/kanal-unp-cnp-320.webp';
import bendratThumb from '../assets/optimized/bendrat-320.webp';
import platStripThumb from '../assets/optimized/plat-strip-320.webp';
import pipaKotakThumb from '../assets/optimized/pipa-kotak-320.webp';
import atapGelombangThumb from '../assets/optimized/atap-gelombang-320.webp';
import spandekThumb from '../assets/optimized/spandek-320.webp';
import platStainlessThumb from '../assets/optimized/plat-stainless-320.webp';
import platColdRolledThumb from '../assets/optimized/plat-cold-rolled-320.webp';
import platGalvanisThumb from '../assets/optimized/plat-galvanis-320.webp';
import squareBarsThumb from '../assets/optimized/square-bars-320.webp';
import toolSteelThumb from '../assets/optimized/tool-steel-320.webp';
import roundBarsThumb from '../assets/optimized/round-bars-320.webp';
import pipaHitamThumb from '../assets/optimized/pipa-hitam-320.webp';
import pipaGalvanisThumb from '../assets/optimized/pipa-galvanis-320.webp';
import besiBetonThumb from '../assets/optimized/besi-beton-320.webp';
import rangkaAtapThumb from '../assets/optimized/rangka-atap-320.webp';
import wiremeshLembaranThumb from '../assets/optimized/wiremesh-lembaran-320.webp';
import wiremeshRollThumb from '../assets/optimized/wiremesh-roll-320.webp';

const thumbnails = new Map([
  [platHitam, platHitamThumb], [platKapal, platKapalThumb], [platBordes, platBordesThumb],
  [platStrip, platStripThumb], [besiSiku, besiSikuThumb], [wfBeam, wfBeamThumb],
  [kanalUnpCnp, kanalUnpCnpThumb], [produkPlatSpesialis, spesialisThumb],
  [sheetpile, sheetpileThumb], [guardrail, guardrailThumb], [bendrat, bendratThumb],
  [pipaKotak, pipaKotakThumb], [atapGelombang, atapGelombangThumb],
  [spandek, spandekThumb], [platStainless, platStainlessThumb],
  [platColdRolled, platColdRolledThumb], [platGalvanis, platGalvanisThumb],
  [squareBars, squareBarsThumb], [toolSteel, toolSteelThumb],
  [roundBars, roundBarsThumb], [pipaHitam, pipaHitamThumb],
  [pipaGalvanis, pipaGalvanisThumb], [besiBeton, besiBetonThumb],
  [rangkaAtap, rangkaAtapThumb], [wiremeshLembaran, wiremeshLembaranThumb],
  [wiremeshRoll, wiremeshRollThumb]
]);

export function getThumbnail(image) {
  return thumbnails.get(image) ?? image;
}

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


const products = [
  product('Plat Hitam', 'Hot Rolled Plate & Sheet', 'Plat baja umum untuk fabrikasi standar, struktur, manufaktur, dan kebutuhan proyek konstruksi.', platHitam, 'Hot Rolled', 'plat'),
  product('Plat Kapal BKI', 'Ship Building Plate', 'Plat spesifikasi kapal untuk galangan, tangki besar, dan aplikasi industri dengan kebutuhan material lebih ketat.', platKapal, 'Marine Grade', 'plat', { special: true }),
  product('Plat Besi Putih', 'Cold Rolled Plate & Sheet', 'Plat cold rolled dengan permukaan lebih halus untuk panel, komponen presisi, dan finishing industri.', platColdRolled, 'Cold Rolled', 'plat'),
  product('Plat Bordes', 'Checkered Plate', 'Plat berpola anti-slip untuk lantai transportasi berat, tangga industri, platform, dan fasilitas umum.', platBordes, 'Anti-Slip', 'plat'),
  product('Plat Strip', 'Flat Bars', 'Material baja pipih panjang untuk komponen struktural, karoseri, bracket, dan kebutuhan fabrikasi.', platStrip, 'Flat Bar', 'plat'),
  product('Plat Galvanil', 'Galvaneal', 'Plat berlapis galvanil untuk panel, fabrikasi, dan komponen yang membutuhkan permukaan siap finishing.', platColdRolled, 'Galvaneal', 'plat'),
  product('Plat Galvanis', 'Galvanized Plate', 'Plat berlapis zinc untuk konstruksi, utilitas, panel, dan area yang membutuhkan perlindungan korosi.', platGalvanis, 'Galvanized', 'plat'),
  product('Plat Stainless 4 x 8', 'Stainless Steel Sheets', 'Lembaran stainless untuk dapur industri, tangki, interior, dan fabrikasi anti karat.', platStainless, 'Stainless', 'plat'),
  product('Besi Plat Coil', 'Steel Plate Coil', 'Material coil baja untuk produksi berkelanjutan, pemotongan, dan pembentukan lembaran sesuai spesifikasi.', produkPlatSpesialis, 'Coil', 'plat'),
  product('WF / Wide Flange', 'Wide Flange Steel Beams', 'Profil WF untuk balok, kolom, struktur bangunan, pabrik, gudang, dan fabrikasi berat.', wfBeam, 'WF Beam', 'profil', { special: true, wide: true }),
  product('H-Beam, I-Beam / INP', 'Structural Steel Beams', 'Material baja struktural berkapasitas beban tinggi untuk kolom, balok, jembatan, dan konstruksi baja.', wfBeam, 'Beam', 'profil', { special: true }),
  product('Kanal UNP & CNP', 'Steel Channels', 'Kanal baja untuk rangka, dudukan mesin, struktur ringan-menengah, dan kebutuhan fabrikasi industri.', kanalUnpCnp, 'Channel', 'profil'),
  product('Besi Siku', 'Angle Bars', 'Profil baja siku untuk struktur pendukung, rangka, dan pekerjaan besi umum di konstruksi dan industri.', besiSiku, 'Angle Bar', 'profil'),
  product('Pipa Baja Hitam', 'Black Steel Pipe', 'Pipa baja hitam untuk konstruksi, struktur, jalur utilitas, railing, tiang, dan kebutuhan proyek industri.', pipaHitam, 'Black Pipe', 'pipa'),
  product('Pipa Galvanis / Pipa Air', 'Galvanized Water Pipe', 'Pipa galvanis berlapis zinc untuk kebutuhan air, utilitas, pagar, dan aplikasi dengan perlindungan korosi.', pipaGalvanis, 'Galvanis', 'pipa'),
  product('Pipa Seamless', 'ASTM A53 / A106 / API 5L', 'Pipa seamless untuk kebutuhan tekanan, utilitas industri, distribusi, dan aplikasi teknis sesuai standar proyek.', pipaHitam, 'Seamless', 'pipa'),
  product('Pipa Pancang ERW', 'ASTM A252', 'Pipa pancang ERW untuk pondasi, tiang, dan kebutuhan infrastruktur dengan spesifikasi proyek.', pipaHitam, 'Pancang', 'pipa'),
  product('Pipa Kotak', 'Rectangular & Square Pipes', 'Pipa kotak dan rectangular untuk rangka, konstruksi ringan, kanopi, pagar, dan fabrikasi umum.', pipaKotak, 'Box Pipe', 'pipa'),
  product('Besi Beton Polos & Ulir', 'Plain & Deformed Bars', 'Besi beton untuk tulangan struktur beton pada proyek bangunan, jalan, gudang, dan infrastruktur.', besiBeton, 'Rebar', 'beton'),
  product('Besi AS / Round Bars', 'ST41, ST60, ST70, ST90', 'Besi as untuk machining, komponen teknik, shaft, dan kebutuhan fabrikasi presisi.', roundBars, 'Round Bar', 'beton'),
  product('Square Bars / Vierkan', 'Square Steel Bars', 'Batang baja kotak untuk komponen teknik, rangka, pekerjaan bubut, dan fabrikasi umum.', squareBars, 'Vierkan', 'beton'),
  product('Silver Steel / Tool Steel', 'Precision Steel Bars', 'Material baja teknik untuk tool, komponen mesin, shaft, dan pekerjaan industri presisi.', toolSteel, 'Tool Steel', 'beton'),
  product('Besi Wiremesh', 'Steel Wiremesh Sheets', 'Wiremesh lembaran untuk penguatan lantai beton, dak, jalan, gudang, dan pekerjaan pengecoran.', wiremeshLembaran, 'Wiremesh', 'wiremesh'),
  product('Heavy Welded Wire Mesh Roll', 'Wire Mesh Roll', 'Wiremesh roll untuk penguatan, pagar, pembatas area, dan kebutuhan pendukung proyek konstruksi.', wiremeshRoll, 'Mesh Roll', 'wiremesh'),
  product('Bendrat', 'Tie Wire', 'Kawat bendrat untuk pengikat tulangan, pekerjaan beton, dan kebutuhan aksesoris lapangan.', bendrat, 'Tie Wire', 'wiremesh'),
  product('Rangka Atap Baja Ringan', 'Galvalume Light Steel Frame', 'Rangka atap baja ringan galvalum untuk bangunan komersial, gudang, rumah tinggal, dan renovasi.', rangkaAtap, 'Baja Ringan', 'atap'),
  product('Atap Gelombang Galvalum', 'Corrugated Galvalume Roofing', 'Atap gelombang galvalum untuk penutup atap gudang, pabrik, dan bangunan komersial.', atapGelombang, 'Roofing', 'atap'),
  product('Spandek Galvalum', 'Galvalume Spandek Panels', 'Spandek galvalum untuk atap dan dinding bangunan dengan bobot ringan dan pemasangan efisien.', spandek, 'Spandek', 'atap'),
  product('Besi Sheetpile', 'Type II, III, IV', 'Sheetpile baja untuk penahan tanah, proyek dermaga, sungai, basement, dan pekerjaan infrastruktur berat.', sheetpile, 'Sheetpile', 'infrastruktur', { special: true }),
  product('Guardrail', 'Type A & B', 'Guardrail untuk pengaman jalan, proyek transportasi, pelindung tepi, dan kebutuhan keselamatan infrastruktur.', guardrail, 'Guardrail', 'infrastruktur')
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
    image: platGalvanis,
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
    image: wfBeam,
    productNames: ['WF / Wide Flange', 'H-Beam, I-Beam / INP']
  },
  {
    id: 'kanal-dan-siku',
    category: 'profil',
    eyebrow: 'Group 02',
    title: 'Kanal & Siku',
    desc: 'Profil kanal dan siku untuk rangka, dudukan mesin, struktur pendukung, dan fabrikasi umum.',
    image: kanalUnpCnp,
    productNames: ['Kanal UNP & CNP', 'Besi Siku']
  },
  {
    id: 'pipa-standar',
    category: 'pipa',
    eyebrow: 'Group 01',
    title: 'Pipa Standar Konstruksi',
    desc: 'Pipa baja untuk struktur ringan, utilitas, railing, pagar, kanopi, dan kebutuhan lapangan.',
    image: pipaHitam,
    productNames: ['Pipa Baja Hitam', 'Pipa Galvanis / Pipa Air', 'Pipa Kotak']
  },
  {
    id: 'pipa-proyek-industri',
    category: 'pipa',
    eyebrow: 'Group 02',
    title: 'Pipa Proyek Industri',
    desc: 'Pipa untuk kebutuhan tekanan, pondasi, distribusi, dan spesifikasi teknis proyek.',
    image: pipaHitam,
    productNames: ['Pipa Seamless', 'Pipa Pancang ERW']
  },
  {
    id: 'tulangan-beton',
    category: 'beton',
    eyebrow: 'Group 01',
    title: 'Tulangan Beton',
    desc: 'Material tulangan untuk bangunan, jalan, gudang, dan pekerjaan infrastruktur beton.',
    image: besiBeton,
    productNames: ['Besi Beton Polos & Ulir']
  },
  {
    id: 'batangan-teknik',
    category: 'beton',
    eyebrow: 'Group 02',
    title: 'Batangan Teknik',
    desc: 'Batang baja untuk machining, shaft, tool, komponen teknik, dan fabrikasi presisi.',
    image: squareBars,
    productNames: ['Besi AS / Round Bars', 'Square Bars / Vierkan', 'Silver Steel / Tool Steel']
  },
  {
    id: 'wiremesh-lembaran-roll',
    category: 'wiremesh',
    eyebrow: 'Group 01',
    title: 'Wiremesh Lembaran & Roll',
    desc: 'Wiremesh untuk penguatan lantai beton, dak, jalan, pagar, dan pembatas area.',
    image: wiremeshLembaran,
    productNames: ['Besi Wiremesh', 'Heavy Welded Wire Mesh Roll']
  },
  {
    id: 'aksesoris-beton',
    category: 'wiremesh',
    eyebrow: 'Group 02',
    title: 'Aksesoris Beton',
    desc: 'Material pendukung lapangan untuk pengikatan tulangan dan pekerjaan pengecoran.',
    image: bendrat,
    productNames: ['Bendrat']
  },
  {
    id: 'rangka-atap',
    category: 'atap',
    eyebrow: 'Group 01',
    title: 'Rangka Atap',
    desc: 'Rangka baja ringan galvalum untuk bangunan komersial, gudang, rumah, dan renovasi.',
    image: rangkaAtap,
    productNames: ['Rangka Atap Baja Ringan']
  },
  {
    id: 'panel-atap-galvalum',
    category: 'atap',
    eyebrow: 'Group 02',
    title: 'Panel Atap Galvalum',
    desc: 'Material penutup atap dan dinding dengan bobot ringan serta pemasangan efisien.',
    image: atapGelombang,
    productNames: ['Atap Gelombang Galvalum', 'Spandek Galvalum']
  },
  {
    id: 'penahan-tanah',
    category: 'infrastruktur',
    eyebrow: 'Group 01',
    title: 'Penahan Tanah',
    desc: 'Material untuk proyek dermaga, sungai, basement, dan pekerjaan infrastruktur berat.',
    image: sheetpile,
    productNames: ['Besi Sheetpile']
  },
  {
    id: 'pengaman-jalan',
    category: 'infrastruktur',
    eyebrow: 'Group 02',
    title: 'Pengaman Jalan',
    desc: 'Material keselamatan jalan dan proyek transportasi untuk pelindung tepi jalan.',
    image: guardrail,
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


export { products, productGroups, catalogGroups, navItems, WHATSAPP, MAPS_URL, MAP_EMBED };
