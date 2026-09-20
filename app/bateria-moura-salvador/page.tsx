import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, Truck, Clock3, CheckCircle2, Award } from 'lucide-react';

import { Breadcrumbs, ContactButton, FAQ, NeighborhoodGrid, SpecTable, UrgentCta } from '../components';
import { brandPages, site, social } from '../site';

const pageData = brandPages.moura;

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

export default function MouraPage() {
  const breadcrumbItems = [
    { name: 'Início', url: '/' },
    { name: 'Baterias', url: '/#catalogo' },
    { name: 'Bateria Moura Salvador', url: `/${pageData.slug}/` },
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
    name: 'Bateria Moura Automotiva em Salvador',
    image: `${site.url}/images/moura-convencional.webp`,
    description: pageData.description,
    brand: {
      '@type': 'Brand',
      name: 'Moura',
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
      lowPrice: 389,
      highPrice: 980,
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
            <p className="eyebrow"><Award size={14} /> {pageData.badge}</p>
            <h1>{pageData.heroTitle}</h1>
            <p>{pageData.heroSummary}</p>
            <div className="hero-actions" style={{ marginTop: '28px' }}>
              <ContactButton location="moura-hero" subject="Bateria Moura">
                Pedir Moura no WhatsApp
              </ContactButton>
              <a className="phone-link" href={`tel:+${site.phone}`} data-contact="phone" data-location="moura-hero">
                <ShieldCheck size={20} />
                <span><small>Garantia oficial</small>Até 24 meses Moura</span>
              </a>
            </div>
          </div>
          <div className="inner-hero-image">
            <Image
              src="/images/moura-convencional.webp"
              alt="Bateria Moura Automotiva com entrega e instalação em Salvador"
              width={340}
              height={340}
              priority
            />
          </div>
        </div>
      </section>

      <div className="container inner-content">
        {/* Bloco de Resposta Direta (GEO - Generative Engine Optimization) */}
        <div className="direct-answer-box">
          <span className="direct-answer-title">Onde Comprar Bateria Moura em Salvador com Entrega Rápida?</span>
          <p>
            A <strong>Minha Bateria Salvador</strong> fornece a linha completa de baterias Moura (48Ah, 60Ah, 70Ah, 75Ah, EFB e AGM) com entrega e instalação gratuitas no seu endereço, com envio ágil para os principais bairros de Salvador a partir da loja no STIEP. Pagamento facilitado à base de troca com teste prévio do sistema elétrico.
          </p>
        </div>

        <section>
          <h2>Linhas e Tecnologias Moura Disponíveis</h2>
          <p>Trabalhamos com as três principais tecnologias fabricadas pela Moura para atender desde veículos de passeio populares até SUVs importados:</p>

          <div className="visual-showcase">
            <div className="visual-card">
              <Image src="/images/moura-convencional.webp" alt="Bateria Moura Linha Convencional" width={160} height={160} />
              <h4>Moura Convencional</h4>
              <p>Para carros de passeio e SUVs de uso diário. 48Ah a 75Ah com até 24 meses de garantia.</p>
            </div>
            <div className="visual-card">
              <Image src="/images/moura-efb.webp" alt="Bateria Moura EFB Start-Stop" width={160} height={160} />
              <h4>Moura EFB (Start-Stop)</h4>
              <p>Projetada para veículos com sistema Start-Stop padrão. Alta ciclagem e recarga dinâmica.</p>
            </div>
            <div className="visual-card">
              <Image src="/images/moura-agm2.webp" alt="Bateria Moura AGM Alta Performance" width={160} height={160} />
              <h4>Moura AGM</h4>
              <p>Eletrólito absorvido em manta de vidro para veículos premium e frenagem regenerativa.</p>
            </div>
          </div>
        </section>


        <section>
          <h2>Por que escolher a Bateria Moura?</h2>
          <p>
            A Moura é líder absoluta de mercado no Brasil e equipamento original das principais montadoras. Sua tecnologia de liga de chumbo-prata oferece maior resistência à corrosão sob o calor intenso de Salvador, garantindo vida útil prolongada e partidas seguras mesmo após paradas longas.
          </p>
          <div className="benefits-grid" style={{ margin: '25px 0', border: 'none', background: 'transparent' }}>
            <div className="benefit">
              <ShieldCheck size={26} color="var(--blue)" />

              <div><strong>Garantia de 24 meses</strong><span>Assistência técnica em todo o Brasil</span></div>
            </div>
            <div className="benefit">
              <Truck size={26} color="var(--blue)" />
              <div><strong>Entrega e Instalação Grátis</strong><span>Técnicos especializados no seu bairro</span></div>
            </div>
            <div className="benefit">
              <CheckCircle2 size={26} color="var(--blue)" />
              <div><strong>100% Original de Fábrica</strong><span>Baterias novas com selo do Inmetro</span></div>
            </div>
            <div className="benefit">
              <Clock3 size={26} color="var(--blue)" />
              <div><strong>Atendimento Ágil</strong><span>Envio rápido para você não ficar a pé</span></div>
            </div>
          </div>
        </section>

        <section>
          <h2>Tabela de Modelos e Amperagens Moura</h2>
          <p>
            Confira as especificações das baterias Moura disponíveis para pronta-entrega. Se tiver dúvida sobre o modelo ideal para o seu veículo, nossa equipe confirma a aplicação exata via WhatsApp:
          </p>
          <SpecTable models={pageData.models} brandName={pageData.brandName} />
        </section>

        <UrgentCta
          subject="Bateria Moura com entrega urgente em Salvador"
          title="Seu carro com bateria Moura parou agora em Salvador?"
          text="Não fique parado! Levamos uma Moura nova lacrada até seu carro, realizamos o teste do alternador e motor de partida e instalamos no local sem custo adicional de entrega."
        />

        <NeighborhoodGrid />

        <section className="faq-section" style={{ marginTop: '48px' }}>
          <h2>Dúvidas Frequentes sobre Bateria Moura em Salvador</h2>
          <FAQ items={pageData.faqs} />
        </section>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, '\\u003c') }} />
    </main>
  );
}
