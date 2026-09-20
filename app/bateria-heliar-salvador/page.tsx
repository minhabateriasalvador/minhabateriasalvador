import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, Truck, Clock3, CheckCircle2, Zap } from 'lucide-react';

import { Breadcrumbs, ContactButton, FAQ, NeighborhoodGrid, SpecTable, UrgentCta } from '../components';
import { brandPages, site, social } from '../site';

const pageData = brandPages.heliar;

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

export default function HeliarPage() {
  const breadcrumbItems = [
    { name: 'Início', url: '/' },
    { name: 'Baterias', url: '/#catalogo' },
    { name: 'Bateria Heliar Salvador', url: `/${pageData.slug}/` },
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
    name: 'Bateria Heliar com Tecnologia PowerFrame em Salvador',
    image: `${site.url}/images/bateria-carro.webp`,
    description: pageData.description,
    brand: {
      '@type': 'Brand',
      name: 'Heliar',
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
      lowPrice: 379,
      highPrice: 950,
      offerCount: 6,
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'AutomotiveBusiness',
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
            <p className="eyebrow"><Zap size={14} /> {pageData.badge}</p>
            <h1>{pageData.heroTitle}</h1>
            <p>{pageData.heroSummary}</p>
            <div className="hero-actions" style={{ marginTop: '28px' }}>
              <ContactButton location="heliar-hero" subject="Bateria Heliar">
                Pedir Heliar no WhatsApp
              </ContactButton>
              <a className="phone-link" href={`tel:+${site.phone}`} data-contact="phone" data-location="heliar-hero">
                <ShieldCheck size={20} />
                <span><small>Proteção Total</small>24 Meses + Socorro 24h</span>
              </a>
            </div>
          </div>
          <div className="inner-hero-image">
            <Image
              src="/images/bateria-heliar.webp"
              alt="Bateria Heliar com tecnologia PowerFrame em Salvador"
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
          <span className="direct-answer-title">Onde Encontrar Bateria Heliar em Salvador com Instalação Gratuita?</span>
          <p>
            A <strong>Minha Bateria Salvador</strong> entrega e instala baterias Heliar com tecnologia PowerFrame nos principais bairros de Salvador, com atendimento ágil a partir da loja no STIEP. Modelos convencionais (50Ah, 60Ah, 75Ah) e linhas especiais EFB/AGM com 24 meses de garantia e assistência de socorro 24 horas.
          </p>
        </div>

        <section>
          <h2>Linhas e Tecnologias Heliar Disponíveis</h2>
          <p>A Heliar é equipada com a exclusiva tecnologia de grade patenteada PowerFrame®, desenvolvida para suportar as condições mais exigentes:</p>

          <div className="visual-showcase">
            <div className="visual-card">
              <Image src="/images/bateria-heliar.webp" alt="Bateria Heliar Original PowerFrame" width={160} height={160} />
              <h4>Heliar Original PowerFrame</h4>
              <p>A linha mais usada pelas montadoras. Grade estampada com até 66% mais durabilidade e Socorro 24 Horas.</p>
            </div>
            <div className="visual-card">
              <Image src="/images/heliar-efb.webp" alt="Bateria Heliar EFB Start-Stop" width={160} height={160} />
              <h4>Heliar EFB (Start-Stop)</h4>
              <p>Ideal para veículos com sistema Start-Stop e alta demanda elétrica. Ciclagem acelerada e recarga dinâmica.</p>
            </div>
            <div className="visual-card">
              <Image src="/images/heliar-agm.webp" alt="Bateria Heliar AGM Alta Performance" width={160} height={160} />
              <h4>Heliar AGM</h4>
              <p>Tecnologia avançada para veículos premium, frotas exigentes e sistemas elétricos de alta complexidade.</p>
            </div>
          </div>
        </section>


        <section>
          <h2>Vantagens Exclusivas da Tecnologia PowerFrame Heliar</h2>

          <p>

            Salvador combina temperaturas médias elevadas e forte maresia litorânea, condições que aceleram a corrosão das grades internas de baterias comuns. A tecnologia patenteada <strong>PowerFrame</strong> da Heliar estampa grades estruturadas que garantem fluxo elétrico até 70% superior e proteção avançada contra corrosão química.
          </p>
          <div className="benefits-grid" style={{ margin: '25px 0', border: 'none', background: 'transparent' }}>
            <div className="benefit">
              <ShieldCheck size={26} color="var(--blue)" />
              <div><strong>Garantia de 24 meses</strong><span>A maior segurança para seu investimento</span></div>
            </div>
            <div className="benefit">
              <Zap size={26} color="var(--blue)" />
              <div><strong>Socorro 24 Horas</strong><span>Assistência emergencial em todo o Brasil</span></div>
            </div>
            <div className="benefit">
              <CheckCircle2 size={26} color="var(--blue)" />
              <div><strong>Fornecedora Original</strong><span>Presente nos veículos zero km das montadoras</span></div>
            </div>
            <div className="benefit">
              <Clock3 size={26} color="var(--blue)" />
              <div><strong>Entrega Expressa</strong><span>Instalação grátis no seu domicílio ou trabalho</span></div>
            </div>
          </div>
        </section>

        <section>
          <h2>Tabela de Modelos e Amperagens Heliar</h2>
          <p>
            Confira as capacidades e aplicações das baterias Heliar. Nossa equipe técnica está pronta para confirmar a aplicação ideal para o seu veículo:
          </p>
          <SpecTable models={pageData.models} brandName={pageData.brandName} />
        </section>

        <UrgentCta
          subject="Bateria Heliar com entrega urgente em Salvador"
          title="Precisa de uma bateria Heliar para seu carro hoje?"
          text="Chame nossa central pelo WhatsApp. Confirmamos o modelo correto e enviamos um técnico ao seu endereço com teste gratuito do sistema elétrico."
        />

        <NeighborhoodGrid />

        <section className="faq-section" style={{ marginTop: '48px' }}>
          <h2>Dúvidas Frequentes sobre Bateria Heliar em Salvador</h2>
          <FAQ items={pageData.faqs} />
        </section>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, '\\u003c') }} />
    </main>
  );
}
