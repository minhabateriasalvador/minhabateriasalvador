'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { Header, Footer } from './components';
import { site, neighborhoods } from './site';

const GTM_ID = 'GTM-WVJKDH2W';

const schema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'AutoPartsStore', 'AutomotiveBusiness'],
  '@id': `${site.url}/#loja`,
  name: site.name,
  url: site.url,
  telephone: `+${site.phone}`,
  email: site.email,
  logo: `${site.url}/images/logo.webp`,
  image: `${site.url}/images/minha-bateria-loja-salvador.webp`,
  priceRange: '$$',
  currenciesAccepted: 'BRL',
  paymentAccepted: 'Pix, Cartão de Crédito, Cartão de Débito, Dinheiro',
  description: 'Disk bateria em Salvador com entrega e instalação grátis. Baterias Moura, Heliar e Zetta com teste elétrico no local.',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:30',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '07:30',
      closes: '14:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: site.ratingValue,
    reviewCount: String(site.reviewsCount),
    bestRating: '5',
    worstRating: '1',
  },
  hasMap: site.maps,
  knowsAbout: [
    'Bateria Moura Salvador',
    'Bateria Heliar Salvador',
    'Bateria Zetta Salvador',
    'Bateria Start-Stop Salvador',
    'Baterias EFB e AGM Salvador',
    'Disk Baterias Salvador',
    'Entrega e Instalação Grátis de Bateria em Salvador',
    'Socorro de Bateria Automotiva Salvador'
  ],
  address: { 
    '@type': 'PostalAddress', 
    streetAddress: 'Rua Arthur Fraga, 218, Loja 01 — STIEP', 
    addressLocality: 'Salvador', 
    addressRegion: 'BA', 
    postalCode: '41770-095', 
    addressCountry: 'BR' 
  },
  geo: { '@type': 'GeoCoordinates', latitude: -12.979917945766873, longitude: -38.448119888281624 },
  areaServed: [
    { '@type': 'City', name: 'Salvador' },
    ...neighborhoods.map((n) => ({ '@type': 'AdministrativeArea', name: `${n}, Salvador` }))
  ],
  sameAs: ['https://www.instagram.com/minha_bateria/', 'https://www.facebook.com/minhabateria', site.maps],
};

function isLandingPage(pathname: string | null): boolean {
  if (typeof window !== 'undefined' && window.location.hostname.startsWith('lp.')) {
    return true;
  }
  return pathname === '/lp' || (pathname ? pathname.startsWith('/lp') : false);
}

export function SiteHeader() {
  const pathname = usePathname();
  if (isLandingPage(pathname)) return null;
  return <Header />;
}

export function SiteFooter() {
  const pathname = usePathname();
  if (isLandingPage(pathname)) return null;
  return <Footer />;
}

export function SiteGtm() {
  const pathname = usePathname();
  if (isLandingPage(pathname)) return null;

  return (
    <>
      <Script
        id="gtm-deferred"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function loadGtm() {
  if (window.gtmLoaded) return;
  window.gtmLoaded = true;
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${GTM_ID}');
}
['scroll', 'mousemove', 'touchstart', 'keydown', 'click'].forEach(function(evt) {
  window.addEventListener(evt, loadGtm, { once: true, passive: true });
});
setTimeout(loadGtm, 3500);
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}

export function SiteSchema() {
  const pathname = usePathname();
  if (isLandingPage(pathname)) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
}
