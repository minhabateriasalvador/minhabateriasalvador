import type { Metadata } from 'next';
import { MobileContact } from './mobile-contact';
import { SiteHeader, SiteFooter, SiteGtm, SiteSchema } from './site-shell';
import { ContactEvents } from './contact-events';
import { ScrollReveal } from './scroll-reveal';
import { indexable, site, social, neighborhoods } from './site';
import './globals.css';

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
  return (
    <html lang="pt-BR">
      <head>
        <SiteGtm />
      </head>
      <body suppressHydrationWarning>
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileContact />
        <ContactEvents />
        <ScrollReveal />
        <SiteSchema />
      </body>
    </html>
  );
}


