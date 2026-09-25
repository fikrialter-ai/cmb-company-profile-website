import { useEffect, useState } from 'react';
import { Header, Footer, FloatingContact } from './components/Layout.jsx';
import { Home } from './components/Home.jsx';
import { CatalogPage } from './components/Catalog.jsx';
import { Contact } from './components/Contact.jsx';
import { products, productGroups, catalogGroups } from './data/catalog.js';

const homeTitle = 'PT. Cahaya Mandiri Bajamas | Stockist Baja & Besi Terpercaya Sejak 1986';

function readRoute() {
  const match = window.location.hash.match(/^#\/(produk|kategori|produk-group)\/([^/]+)$/);
  if (!match) return null;
  try {
    const slug = decodeURIComponent(match[2]);
    const items = match[1] === 'produk' ? products : match[1] === 'kategori' ? productGroups : catalogGroups;
    const item = items.find((entry) => (entry.slug ?? entry.id) === slug);
    return item ? { type: match[1], item } : { type: 'not-found' };
  } catch {
    return { type: 'not-found' };
  }
}

export default function App() {
  const [route, setRoute] = useState(readRoute);
  const [locationKey, setLocationKey] = useState(window.location.hash);

  useEffect(() => {
    const update = () => {
      setRoute(readRoute());
      setLocationKey(window.location.hash);
    };
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  useEffect(() => {
    document.title = route?.item ? `${route.item.name ?? route.item.title} | PT. Cahaya Mandiri Bajamas` : homeTitle;
    if (route) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.getElementById('main-content')?.focus({ preventScroll: true });
    } else if (locationKey && !locationKey.startsWith('#/')) {
      document.getElementById(locationKey.slice(1))?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
      });
    }
  }, [route, locationKey]);

  return (
    <>
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-4" href="#main-content">Lewati ke konten utama</a>
      <Header catalogActive={Boolean(route)} />
      <main id="main-content" tabIndex={-1} className="outline-none">
        {route ? <CatalogPage route={route} /> : <Home />}
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
