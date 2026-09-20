import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, Truck, Clock3, CheckCircle2, Cpu, AlertTriangle } from 'lucide-react';

import { Breadcrumbs, ContactButton, FAQ, NeighborhoodGrid, SpecTable, UrgentCta } from '../components';
import { brandPages, site, social } from '../site';

const pageData = brandPages.startStop;

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: { canonical: `/${pageData.slug}/` },
  openGraph: {
    ...social,
    title: pageData.title,
    description: pageData.description,
    url: `/${pageData.slug}/`,
  },
};

export default function StartStopPage() {
  const breadcrumbItems = [
    { name: 'Início', url: '/' },
    { name: 'Baterias', url: '/#catalogo' },
    { name: 'Bateria Start-Stop Salvador', url: `/${pageData.slug}/` },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pageData.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Bateria Start-Stop EFB e AGM em Salvador',
    image: `${site.url}/images/bateria-start-stop.webp`,
    description: pageData.description,
    brand: {
      '@type': 'Brand',
      name: 'Moura / Heliar EFB AGM',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.ratingValue,
      reviewCount: String(site.reviewsCount),
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'BRL',
      lowPrice: 690,
      highPrice: 1590,
      offerCount: 6,
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': ['LocalBusiness', 'AutoPartsStore', 'AutomotiveBusiness'],
        name: site.name,
        telephone: `+${site.phone}`,
        address: site.address,
      },
    },
  };

  return (
    <main id="conteudo">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="inner-hero">
        <div className="container inner-hero-split">
          <div>
            <p className="eyebrow"><Cpu size={14} /> {pageData.badge}</p>
            <h1>{pageData.heroTitle}</h1>
            <p>{pageData.heroSummary}</p>
            <div className="hero-actions" style={{ marginTop: '28px' }}>
              <ContactButton location="startstop-hero" subject="Bateria Start-Stop EFB AGM">
                Orçamento Start-Stop no WhatsApp
              </ContactButton>
              <a className="phone-link" href={`tel:+${site.phone}`} data-contact="phone" data-location="startstop-hero">
                <ShieldCheck size={20} />
                <span><small>Troca técnica segura</small>Preservamos a memória</span>
              </a>
            </div>
          </div>
          <div className="inner-hero-image">
            <Image
              src="/images/bateria-start-stop.webp"
              alt="Baterias Start-Stop EFB e AGM em Salvador"
              width={320}
              height={320}
              priority
            />
          </div>
        </div>
      </section>

      <div className="container inner-content">
        {/* Bloco de Resposta Direta (GEO - Generative Engine Optimization) */}
        <div className="direct-answer-box">
          <span className="direct-answer-title">Onde Trocar Bateria Start-Stop (EFB / AGM) em Salvador com Segurança?</span>
          <p>
            A <strong>Minha Bateria Salvador</strong> é especializada em troca técnica de baterias Start-Stop <strong>EFB e AGM</strong> das marcas Moura e Heliar. Realizamos o procedimento com equipamento auxiliar de alimentação para evitar desconfiguração do computador de bordo, rádio e sensores dos veículos mais modernos em Salvador.
          </p>
        </div>

        <section>
          <h2>Tecnologias EFB vs AGM para Veículos Modernos</h2>
          <div className="visual-showcase" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="visual-card">
              <Image src="/images/moura-efb.webp" alt="Bateria EFB Start-Stop" width={160} height={160} />
              <h4>Tecnologia EFB (Enhanced Flooded)</h4>
              <p>Ideal para carros nacionais flex com Start-Stop convencional (Nivus, T-Cross, Renegade Flex, Toro, Pulse, Tracker). Alta ciclagem e recarga rápida.</p>
            </div>
            <div className="visual-card">
              <Image src="/images/moura-agm2.webp" alt="Bateria AGM Start-Stop" width={160} height={160} />
              <h4>Tecnologia AGM (Absorbent Glass Mat)</h4>
              <p>Obrigatória para veículos diesel, importados e híbridos leves com frenagem regenerativa (Compass Diesel, Commander, BMW, Mercedes, Audi, Volvo).</p>
            </div>
          </div>
        </section>


        <section>
          <h2>Por que Veículos Start-Stop Exigem Baterias EFB ou AGM?</h2>
          <p>

            Em veículos equipados com o sistema Start-Stop (que desliga o motor em semáforos para economizar combustível), a bateria pode realizar de <strong>30 a 50 partidas adicionais por dia</strong>. Baterias comuns de chumbo-ácido não possuem capacidade de aceitação de carga rápida e entram em pane prematura quando instaladas nesses carros.
          </p>
          
          <div style={{ background: '#fff9e6', border: '1px solid #ffe380', borderRadius: '12px', padding: '20px', margin: '24px 0', display: 'flex', gap: '14px', alignItems: 'start' }}>
            <AlertTriangle size={24} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: '#92400e', display: 'block', marginBottom: '4px' }}>Atenção: Nunca substitua uma bateria AGM por uma EFB ou convencional!</strong>
              <span style={{ color: '#78350f', fontSize: '0.92rem', lineHeight: '1.5' }}>
                Se o seu carro saiu de fábrica com tecnologia AGM (como Jeep Compass Diesel, BMW, Mercedes, Audi ou Volvo), a substituição deve obrigatoriamente manter o padrão AGM para evitar danos ao alternador inteligente e falhas nos módulos eletrônicos.
              </span>
            </div>
          </div>

          <div className="benefits-grid" style={{ margin: '25px 0', border: 'none', background: 'transparent' }}>
            <div className="benefit">
              <Cpu size={26} color="var(--blue)" />
              <div><strong>EFB ou AGM Correta</strong><span>Respeitamos o manual do fabricante</span></div>
            </div>
            <div className="benefit">
              <CheckCircle2 size={26} color="var(--blue)" />
              <div><strong>Troca com Backup de Memória</strong><span>Sem panes no painel ou multimídia</span></div>
            </div>
            <div className="benefit">
              <Truck size={26} color="var(--blue)" />
              <div><strong>Instalação Grátis em Domicílio</strong><span>Salvador e região metropolitana</span></div>
            </div>
            <div className="benefit">
              <ShieldCheck size={26} color="var(--blue)" />
              <div><strong>24 Meses de Garantia</strong><span>Garantia total de fábrica Moura e Heliar</span></div>
            </div>
          </div>
        </section>

        <section>
          <h2>Tabela de Aplicações Start-Stop (EFB e AGM)</h2>
          <p>
            Consulte a linha de baterias especiais disponíveis para entrega expressa em Salvador:
          </p>
          <SpecTable models={pageData.models} brandName={pageData.brandName} />
        </section>

        <UrgentCta
          subject="Bateria Start-Stop com instalação técnica urgente"
          title="O Start-Stop do seu carro parou de funcionar?"
          text="Quando o sistema Start-Stop desativa sozinho, geralmente é o primeiro aviso de que a bateria está perdendo a capacidade útil de carga. Faça o teste gratuito do sistema com nossa equipe."
        />

        <NeighborhoodGrid />

        <section className="faq-section" style={{ marginTop: '48px' }}>
          <h2>Perguntas Frequentes sobre Bateria Start-Stop em Salvador</h2>
          <FAQ items={pageData.faqs} />
        </section>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, '\\u003c') }} />
    </main>
  );
}
