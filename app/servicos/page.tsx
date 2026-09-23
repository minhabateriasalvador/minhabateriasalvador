import Image from 'next/image';
import type { Metadata } from 'next';
import { 
  ArrowUpRight, 
  BatteryCharging, 
  Check, 
  CheckCircle2, 
  Clock3, 
  CreditCard, 
  Phone, 
  RotateCcw, 
  ShieldCheck, 
  Sparkles, 
  Truck, 
  Wrench, 
  Zap 
} from 'lucide-react';
import { Breadcrumbs, ContactButton, FAQ, NeighborhoodGrid, ReviewsSection, UrgentCta } from '../components';
import { site, social, whatsapp } from '../site';

export const metadata: Metadata = {
  title: 'Disk Bateria Salvador | Troca no Local, Entrega Rápida e Instalação Grátis',
  description: 'Disk Bateria Salvador com entrega rápida em até 50 min e instalação grátis. Teste eletrônico do alternador e bateria no local. Moura, Heliar e Zetta com nota 4.9 no Google!',
  alternates: { canonical: '/servicos/' },
  openGraph: {
    ...social,
    title: 'Disk Bateria Salvador | Troca no Local, Entrega Rápida e Instalação Grátis',
    description: 'Bateria arriou em Salvador? Entrega rápida e instalação grátis em domicílio. Teste elétrico computadorizado no local.',
    url: '/servicos/',
  },
};

const serviceFaqs = [
  {
    question: 'Em quanto tempo o técnico chega com a bateria?',
    answer: 'Nosso tempo médio de chegada em Salvador varia entre 30 e 50 minutos nos principais bairros (como STIEP, Pituba, Brotas, Barra, Imbuí, Paralela e adjacências), variando conforme as condições de trânsito e rota no momento do pedido.',
  },
  {
    question: 'A entrega e a instalação são realmente gratuitas?',
    answer: 'Sim! Para os bairros atendidos dentro de Salvador, a entrega e a instalação técnica são 100% gratuitas na compra da sua bateria com a devolução da carcaça usada (base de troca).',
  },
  {
    question: 'Como é feito o teste do alternador e do sistema elétrico?',
    answer: 'O técnico conecta um analisador digital de condutância e CCA diretamente nos polos da bateria e executa o teste com o veículo em repouso e com o motor em funcionamento sob carga. Assim, comprovamos se o problema é realmente a bateria ou se o alternador está deixando de carregar.',
  },
  {
    question: 'A troca de bateria pode desconfigurar o computador de bordo do meu carro?',
    answer: 'Nossos técnicos utilizam procedimento seguro de preservação de memória elétrica durante a substituição, mantendo as configurações de som, relógio, vidros elétricos e parâmetros da central eletrônica (ECU) protegidos.',
  },
  {
    question: 'Quais são as formas de pagamento aceitas na entrega?',
    answer: 'O pagamento é realizado somente após a instalação e o teste da bateria no seu local. Aceitamos Pix, cartões de crédito (com parcelamento em até 10x sem juros, consulte condições), cartões de débito e dinheiro.',
  },
  {
    question: 'Posso comprar na loja física em vez de pedir a entrega?',
    answer: 'Com certeza! Temos loja física estruturada no bairro do STIEP (Rua Arthur Fraga, 218, Loja 01). Você pode vir até nossa loja para testar sua bateria, tomar um café e fazer a instalação na hora.',
  },
];

export default function ServicesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${site.url}/servicos/#service`,
    name: 'Disk Bateria Salvador - Entrega e Instalação Grátis',
    serviceType: 'Disk Bateria Automotiva e Socorro Elétrico em Domicílio',
    provider: {
      '@type': ['LocalBusiness', 'AutoPartsStore'],
      name: site.name,
      url: site.url,
      telephone: `+${site.phone}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Arthur Fraga, 218, Loja 01 — STIEP',
        addressLocality: 'Salvador',
        addressRegion: 'BA',
        postalCode: '41770-095',
        addressCountry: 'BR',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Salvador',
    },
    description: 'Serviço de socorro, entrega expressa e instalação técnica de baterias automotivas em domicílio em Salvador com teste elétrico computadorizado do alternador.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      price: '0.00',
      description: 'Entrega e instalação gratuitas na compra da bateria automotiva com base de troca em Salvador.',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: serviceFaqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <main id="conteudo" className="inner-page">
      <Breadcrumbs
        items={[
          { name: 'Início', url: '/' },
          { name: 'Serviços de Entrega e Instalação', url: '/servicos/' },
        ]}
      />

      {/* Hero Section */}
      <div className="inner-hero">
        <div className="container inner-hero-split">
          <div>
            <p className="eyebrow">
              <span className="tiny-bolt"><Zap size={14} fill="currentColor" /></span> DISK BATERIA & SOCORRO EM SALVADOR
            </p>
            <h1>Disk Bateria Salvador:<br />Troca no local com entrega e instalação grátis.</h1>
            <p>
              Seu carro parou em casa, no condomínio ou no trabalho? A <strong>Minha Bateria Salvador</strong> leva a bateria certa até você, realiza o diagnóstico elétrico computadorizado no local e instala sem dor de cabeça.
            </p>
            <div className="hero-actions">
              <ContactButton location="services-hero">Pedir Bateria no Local</ContactButton>
              <a className="phone-link" href={`tel:+${site.phone}`} data-contact="phone" data-location="services-hero">
                <Phone size={20} aria-hidden="true" />
                <span><small>Atendimento imediato</small>{site.phoneDisplay}</span>
              </a>
            </div>
            <p className="hero-note">
              <Check size={15} aria-hidden="true" /> Nota {site.ratingValue} no Google ({site.reviewsCount}+ avaliações) • Técnicos especializados em Salvador
            </p>
          </div>

          <div className="service-hero-photo">
            <Image
              src="/images/entrega-bateria-salvador.webp"
              width={540}
              height={405}
              priority
              alt="Técnico da Minha Bateria Salvador entregando bateria Moura no domicílio do cliente com atendimento cordial"
            />
          </div>
        </div>
      </div>

      <div className="container">
        {/* Banner de Urgência */}
        <UrgentCta
          subject="socorro de bateria imediato"
          title="Bateria arriou agora em Salvador?"
          text="Nosso Disk Bateria vai até você com entrega rápida, teste do sistema elétrico e instalação imediata para você não perder seu compromisso."
        />

        {/* 4 Pilares do Atendimento */}
        <section className="service-pillars-section">
          <div className="section-heading centered">
            <p className="eyebrow blue">COMO FUNCIONA O ATENDIMENTO</p>
            <h2>Do pedido à partida:<br />Cuidamos de tudo para você</h2>
            <p>
              Mais do que apenas vender baterias, entregamos uma solução completa de assistência automotiva com segurança, honestidade e tecnologia.
            </p>
          </div>

          <div className="service-pillars-grid">
            <div className="service-pillar-card">
              <div className="service-pillar-icon">
                <Truck size={28} />
              </div>
              <h3>1. Entrega Expressa no Local</h3>
              <p>
                Informou o endereço e o modelo do veículo? Nossa equipe de prontidão sai da nossa central no STIEP direto para o seu ponto em Salvador em até 50 minutos.
              </p>
            </div>

            <div className="service-pillar-card">
              <div className="service-pillar-icon">
                <BatteryCharging size={28} />
              </div>
              <h3>2. Teste de Bateria e Alternador</h3>
              <p>
                Antes de desparafusar qualquer peça, conectamos o analisador digital. Se a bateria ainda estiver boa e o defeito for no alternador, nós avisamos com total transparência.
              </p>
            </div>

            <div className="service-pillar-card">
              <div className="service-pillar-icon">
                <Wrench size={28} />
              </div>
              <h3>3. Instalação com Memória Segura</h3>
              <p>
                Substituição profissional preservando a alimentação elétrica dos módulos, sem desprogramar injeção eletrônica, rádio multimídia, relógio ou sistema Start-Stop.
              </p>
            </div>

            <div className="service-pillar-card">
              <div className="service-pillar-icon">
                <RotateCcw size={28} />
              </div>
              <h3>4. Descarte Ecológico & Desconto</h3>
              <p>
                Coletamos sua bateria inservível e concedemos desconto na troca. Toda sucata é destinada para reciclagem de chumbo e ácido segundo as normas ambientais do CONAMA.
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive 1: Teste Computadorizado com Foto */}
        <section className="service-feature-split">
          <div className="service-feature-copy">
            <p className="eyebrow blue">DIAGNÓSTICO TÉCNICO COMPLETO</p>
            <h2>Teste Computadorizado:<br />Troque somente se for necessário.</h2>
            <p>
              Muitos motoristas trocam a bateria sem necessidade quando o verdadeiro problema é uma falha no alternador, correia frouxa ou fuga de corrente no chicote elétrico.
            </p>
            <p>
              Ao chamar a <strong>Minha Bateria Salvador</strong>, nosso técnico realiza na sua frente a aferição completa dos parâmetros elétricos essenciais:
            </p>
            <ul className="service-checklist">
              <li>
                <CheckCircle2 size={18} />
                <span><strong>Capacidade Real de Partida (CCA):</strong> Medição instantânea da amperagem entregue sob esforço.</span>
              </li>
              <li>
                <CheckCircle2 size={18} />
                <span><strong>Voltagem em Repouso e Carga:</strong> Diagnóstico de placas em curto ou sulfatação interna.</span>
              </li>
              <li>
                <CheckCircle2 size={18} />
                <span><strong>Teste de Carga do Alternador:</strong> Conferência se o alternador está gerando a tensão correta (13.5V a 14.5V).</span>
              </li>
              <li>
                <CheckCircle2 size={18} />
                <span><strong>Certificado de Garantia Preenchido:</strong> Com registro da tensão e amperagem no ato da entrega.</span>
              </li>
            </ul>
            <ContactButton location="services-diagnostico" subject="teste de bateria e alternador">
              Solicitar Teste e Orçamento
            </ContactButton>
          </div>

          <div className="service-feature-image">
            <Image
              src="/images/teste-bateria-salvador.webp"
              width={600}
              height={450}
              alt="Técnico especialista da Minha Bateria Salvador realizando teste computadorizado com analisador digital no sistema elétrico do veículo"
            />
          </div>
        </section>

        {/* Authority Transfer Box: Links Estratégicos para a Home e Marcas */}
        <div className="authority-transfer-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <Sparkles size={20} style={{ color: 'var(--yellow)' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--yellow)' }}>CATÁLOGO & MARCAS EM SALVADOR</span>
          </div>
          <h3>Procurando uma marca ou modelo específico?</h3>
          <p>
            Além do serviço de socorro e Disk Bateria em domicílio, contamos com loja física no STIEP e estoque permanente das marcas líderes mundiais em baterias automotivas, náuticas e estacionárias. Conheça nossas linhas com entrega imediata em Salvador:
          </p>
          <div className="authority-links-grid">
            <a href="/" className="authority-link-card">
              <div>
                <strong>Catálogo Completo de Baterias</strong>
                <span>Visite nossa página inicial para consultar baterias de 40Ah a 220Ah para carros, motos, caminhões e barcos.</span>
              </div>
              <span className="link-arrow">Ver Catálogo Geral <ArrowUpRight size={15} /></span>
            </a>

            <a href="/bateria-moura-salvador/" className="authority-link-card">
              <div>
                <strong>Bateria Moura Salvador</strong>
                <span>A marca preferida dos brasileiros com até 24 meses de garantia, máxima durabilidade e tecnologia original de montadora.</span>
              </div>
              <span className="link-arrow">Ver Modelos Moura <ArrowUpRight size={15} /></span>
            </a>

            <a href="/bateria-heliar-salvador/" className="authority-link-card">
              <div>
                <strong>Bateria Heliar Salvador</strong>
                <span>Grade patenteada PowerFrame com partida imbatível e garantia estendida de até 24 meses.</span>
              </div>
              <span className="link-arrow">Ver Linha Heliar <ArrowUpRight size={15} /></span>
            </a>

            <a href="/bateria-zetta-salvador/" className="authority-link-card">
              <div>
                <strong>Bateria Zetta Salvador</strong>
                <span>Fabricada pela Moura, une qualidade industrial com o melhor preço e custo-benefício de Salvador.</span>
              </div>
              <span className="link-arrow">Ver Bateria Zetta <ArrowUpRight size={15} /></span>
            </a>
          </div>
        </div>

        {/* Bairros de Atendimento */}
        <NeighborhoodGrid />
      </div>

      {/* Prova Social: Carrossel de Avaliações Reais */}
      <ReviewsSection />

      {/* FAQ dos Serviços */}
      <section className="faq section">
        <div className="container faq-grid">
          <div className="section-heading">
            <p className="eyebrow blue">DÚVIDAS FREQUENTES</p>
            <h2>Perguntas sobre o Disk Bateria</h2>
            <p>
              Tudo o que você precisa saber sobre prazos de entrega, garantias, testes no local e formas de pagamento em Salvador.
            </p>
            <a
              className="text-link"
              href={whatsapp('dúvidas sobre entrega e instalação')}
              target="_blank"
              rel="noopener noreferrer"
              data-contact="whatsapp"
              data-location="faq-services"
            >
              Falar com o atendente agora <ArrowUpRight size={18} />
            </a>
          </div>
          <FAQ items={serviceFaqs} />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing">
        <div className="container closing-inner">
          <div>
            <p className="eyebrow">DISK BATERIA SALVADOR</p>
            <h2>Seu carro parou?<br />Chegamos até você agora.</h2>
            <p>Envie o modelo do seu carro e seu bairro no WhatsApp para receber o orçamento imediato com entrega e instalação grátis.</p>
          </div>
          <div className="closing-actions">
            <ContactButton location="closing-services">Chamar Técnico no WhatsApp</ContactButton>
            <a href={`tel:+${site.phone}`} data-contact="phone" data-location="closing-services">
              <Phone size={18} /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Schemas Estruturados */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
    </main>
  );
}
