import type { Metadata } from 'next';
import Script from 'next/script';
import { Header, Footer, MobileContact } from './components';
import { ContactEvents } from './contact-events';
import { ScrollReveal } from './scroll-reveal';
import { indexable, site, social, neighborhoods } from './site';
import './globals.css';

const GTM_ID = 'GTM-WVJKDH2W';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Bateria Salvador | Disk Bateria Moura, Heliar e Zetta', template: '%s' },
  description: 'Disk Bateria Salvador com entrega rápida e instalação grátis. Bateria Moura, Heliar e Zetta com teste elétrico no local. Peça seu orçamento pelo WhatsApp!',
  robots: { index: indexable, follow: true },
  openGraph: social,
  twitter: { card: 'summary_large_image', images: ['/images/compartilhar.webp'] },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/images/icon.png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
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

  return (
    <html lang="pt-BR">
      <head>
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
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        {children}
        <Footer />
        <MobileContact />
        <ContactEvents />
        <ScrollReveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />
      </body>
    </html>
  );
}


