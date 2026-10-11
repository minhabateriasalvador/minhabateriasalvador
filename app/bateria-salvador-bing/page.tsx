import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next';
import {
  ArrowDown,
  ArrowUpRight,
  BatteryCharging,
  Check,
  Clock3,
  CreditCard,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
} from 'lucide-react';
import { FAQ, WhatsAppIcon } from '../components';
import { categories, site } from '../site';
import { LpReviewsCarousel } from '../lp/lp-reviews-carousel';

export const metadata: Metadata = {
  title: 'Disk Bateria Salvador | Entrega e Instalação Grátis no Local',
  description: 'Seu carro não liga? Disk Bateria em Salvador com entrega rápida e instalação grátis. Moura, Heliar e Zetta com teste elétrico no local. Peça pelo WhatsApp!',
  robots: {
    index: false, // Página exclusiva para campanhas de tráfego pago (Bing Ads)
    follow: false,
  },
  alternates: { canonical: '/bateria-salvador-bing/' },
};

// URL padrão para conversão no Bing Ads via GTM (api.whatsapp.com) e identificação para o atendente
const lpWhatsapp = (subject?: string) => {
  const text = subject
    ? `Encontrei vocês no *Bing*, gostaria de um orçamento de ${subject}`
    : `Encontrei vocês no *Bing*, gostaria de um orçamento de bateria`;
  return `https://api.whatsapp.com/send?phone=${site.phone}&text=${encodeURIComponent(text)}`;
};

function LpContactButton({
  children = 'Pedir pelo WhatsApp',
  subject,
  className = '',
  location,
}: {
  children?: React.ReactNode;
  subject?: string;
  className?: string;
  location: string;
}) {
  return (
    <a
      className={`button ${className}`}
      href={lpWhatsapp(subject)}
      target="_blank"
      rel="noopener noreferrer"
      data-contact="whatsapp"
      data-location={location}
    >
      <WhatsAppIcon />
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

const products = [
  { name: 'Moura convencional', image: 'moura-convencional.webp', tag: 'CARROS E SUVs', text: 'A partida mais confiável para seu dia a dia. Aplicações para veículos nacionais e importados.' },
  { name: 'Moura EFB', image: 'moura-efb.webp', tag: 'START-STOP', text: 'Tecnologia reforçada para veículos com sistema Start-Stop de fábrica.' },
  { name: 'Moura AGM', image: 'moura-agm.webp', tag: 'START-STOP PREMIUM', text: 'Alta absorção e desempenho elétrico máximo para SUVs e sedans modernos.' },
  { name: 'Moura para moto', image: 'moura-moto.webp', tag: 'MOTOS E SCOOTERS', text: 'Partida instantânea e resistência máxima a vibrações para sua motocicleta.' },
];

export default function BingLandingPage() {
  const lpFaqs = [
    {
      question: 'Quanto tempo demora para a bateria chegar?',
      answer: 'Temos entregadores e técnicos circulando estrategicamente por Salvador. Assim que você informa seu veículo pelo WhatsApp, nossa equipe confirma o tempo estimado de chegada para o seu atendimento.',
    },
    {
      question: 'A entrega e a instalação têm taxa extra?',
      answer: 'Não! A entrega e a instalação da sua bateria são 100% gratuitas em Salvador. Você só paga o valor da bateria combinada.',
    },
    {
      question: 'E se o defeito do carro não for a bateria?',
      answer: 'Antes de realizar qualquer instalação, nosso técnico utiliza equipamentos profissionais para testar a bateria antiga e o alternador do seu veículo no local. Você só troca se a bateria estiver realmente esgotada.',
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'O pagamento é feito diretamente ao técnico após a instalação da bateria. Aceitamos Pix, Cartão de Crédito (com parcelamento facilitado), Cartão de Débito e Dinheiro.',
    },
    {
      question: 'As baterias possuem garantia de fábrica?',
      answer: 'Sim! Todas as nossas baterias (Moura, Heliar, Zetta e outras) são 100% novas, lacradas e acompanham certificado de garantia oficial de fábrica de até 24 meses, válido em todo o Brasil.',
    },
  ];

  return (
    <div className="landing-page">
      {/* Google Tag Manager exclusivo da Landing Page (Bing Ads + Cloudflare Gateway) */}
      <Script
        id="gtm-lp"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
var host = (w.location.hostname === 'localhost' || w.location.hostname === '127.0.0.1') ? 'https://www.googletagmanager.com' : '/metrik';
j.src = host + '/gtm.js?id='+i+dl;
j.onerror = function() {
  var fb = d.createElement(s);
  fb.async = true;
  fb.src = 'https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(fb, f);
};
f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MT4ZG7NW');
          `,
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MT4ZG7NW"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {/* Header Exclusivo de Alta Conversão (Sem links de fuga) */}
      <header className="lp-header">
        <div className="container lp-header-inner">
          <div className="lp-brand">
            <Image src="/images/logo.webp" width={180} height={88} priority alt="Minha Bateria Salvador" />
            <div className="lp-status-badge">
              <span className="lp-status-dot" />
              <span>Plantão Aberto • Entrega Rápida</span>
            </div>
          </div>
          <div className="lp-header-actions">
            <LpContactButton location="lp-header" className="lp-header-cta">
              Pedir no WhatsApp
            </LpContactButton>
          </div>
        </div>
      </header>

      <main id="conteudo">
        {/* HERO SECTION DE ALTA CONVERSÃO */}
        <section className="hero lp-hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="tiny-bolt"><Zap size={14} fill="currentColor" /></span>
                DISK BATERIA EM SALVADOR • SOCORRO RÁPIDO
              </p>
              <h1 className="lp-hero-title">
                Seu carro não liga?<br />
                Bateria em Salvador<br className="mobile-break" /> com<br className="desktop-break" />{' '}
                <span className="lp-yellow">entrega e<br className="mobile-break" /> instalação grátis.</span>
              </h1>
              <p className="hero-description">
                Não fique parado na rua ou na garagem. Levamos a bateria certa até você onde estiver, testamos seu sistema elétrico sem custo e instalamos na hora.
              </p>
              <div className="hero-actions">
                <LpContactButton location="lp-hero" className="lp-hero-btn">
                  Pedir bateria no WhatsApp
                </LpContactButton>
              </div>
              <p className="hero-note">
                <Check size={16} aria-hidden="true" />
                <strong>Nota {site.ratingValue} no Google</strong> com mais de {site.reviewsCount} avaliações reais • Atendimento ágil em Salvador
              </p>
            </div>

            <div className="hero-visual">
              <Image
                className="hero-image"
                src="/images/bateria-moura-salvador-herov2.webp"
                width={547}
                height={407}
                sizes="(max-width: 760px) 95vw, 52vw"
                priority
                alt="Disk Bateria Salvador - Bateria Moura com entrega e instalação grátis"
              />
              <div className="hero-service">
                <span className="icon-box"><ShieldCheck size={24} /></span>
                <div>
                  <strong>Técnicos em trânsito em Salvador</strong>
                  <span>Entrega rápida no seu local</span>
                </div>
                <ArrowUpRight size={22} />
              </div>
            </div>
          </div>

          <div className="container hero-bottom">
            <span>
              MOURA <i>•</i> ZETTA <i>•</i> HELIAR <i>•</i> START-STOP EFB & AGM
            </span>
            <a href="#catalogo">Ver baterias disponíveis <ArrowDown size={16} /></a>
          </div>
        </section>

        {/* 4 BENEFÍCIOS ESSENCIAIS PARA DECISÃO RÁPIDA */}
        <section className="benefits" aria-label="Vantagens do atendimento">
          <div className="container benefits-grid">
            {[
              { icon: Truck, title: 'Entrega e instalação grátis', text: 'Sem taxa surpresa no seu local em Salvador' },
              { icon: BatteryCharging, title: 'Teste elétrico no local', text: 'Testamos a bateria antiga e o alternador' },
              { icon: ShieldCheck, title: 'Garantia de fábrica até 24m', text: 'Certificado oficial válido em todo o Brasil' },
              { icon: CreditCard, title: 'Pagamento facilitado', text: 'Pix ou Cartão em até 10x na entrega' },
            ].map((item) => (
              <div className="benefit" key={item.title}>
                <item.icon size={26} aria-hidden="true" />
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CATÁLOGO DE APLICAÇÕES COM BOTÃO DE COTAÇÃO DIRETA */}
        <section id="catalogo" className="catalog section">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">CATÁLOGO DE BATERIAS</p>
              <h2>Qual é o seu veículo?<br className="mobile-break" /> Temos a bateria certa a pronta-entrega.</h2>
              <p>Trabalhamos com as melhores marcas do mercado nacional para carros, motos, SUVs e veículos comerciais.</p>
            </div>

            <div className="catalog-grid">
              {categories.map((category, i) => (
                <article className="catalog-card" key={category.name}>
                  <div className="catalog-media">
                    <Image
                      src={`/images/${category.image}`}
                      alt={category.alt}
                      width={296}
                      height={222}
                      sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 24vw"
                    />
                    <span className="card-number">0{i + 1}</span>
                  </div>
                  <div className="catalog-copy">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <div className="capacity-group">
                      <span className="label">CAPACIDADES MAIS PEDIDAS</span>
                      <div className="chips">
                        {category.capacities.map((cap) => (
                          <span key={cap}>{cap}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="label">MARCAS DISPONÍVEIS</span>
                      <div className="brand-chips">
                        {category.brands.map((brand) => (
                          <span key={brand}>{brand}</span>
                        ))}
                      </div>
                    </div>
                    <a
                      className="card-link"
                      href={lpWhatsapp(category.subject)}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-contact="whatsapp"
                      data-location={`lp-catalog-${i}`}
                      aria-label={`Solicitar orçamento de ${category.name.toLowerCase()} no WhatsApp`}
                    >
                      Pedir orçamento <ArrowUpRight size={18} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="catalog-action">
              <LpContactButton location="lp-catalog-bottom">
                Solicitar Orçamento
              </LpContactButton>
              <p>Informe o modelo e ano do seu carro para nossa equipe indicar a amperagem exata.</p>
            </div>

            <div className="other-batteries">
              <div>
                <BatteryCharging size={23} aria-hidden="true" />
                <p>
                  <strong>Precisa de bateria náutica ou estacionária?</strong>
                  <span>Também atendemos embarcações, lanchas, nobreaks e geradores.</span>
                </p>
              </div>
              <a
                href={lpWhatsapp('bateria náutica ou estacionária')}
                target="_blank"
                rel="noopener noreferrer"
                data-contact="whatsapp"
                data-location="lp-other-batteries"
              >
                Falar com a equipe no WhatsApp <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* PASSO A PASSO: SIMPLES E SEM ATRITO */}
        <section id="como-funciona" className="how section">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow blue">COMO FUNCIONA O ATENDIMENTO</p>
                <h2>Em 3 passos rápidos seu carro<br className="desktop-break" /> está funcionando novamente.</h2>
              </div>
              <p>Nossos técnicos vão até onde você estiver em Salvador. Veja como é simples e sem dor de cabeça:</p>
            </div>

            <div className="steps">
              {[
                {
                  icon: MessageCircle,
                  title: '1. Chame no WhatsApp',
                  text: 'Diga o modelo/ano do seu veículo. Nós passamos as melhores opções e o valor exato na hora.',
                },
                {
                  icon: Truck,
                  title: '2. Entrega no seu local',
                  text: 'O técnico vai até sua casa, trabalho ou onde o carro parou com a bateria certa a pronta-entrega.',
                },
                {
                  icon: Wrench,
                  title: '3. Teste e instalação grátis',
                  text: 'Testamos seu veículo no local e realizamos a instalação profissional. Você só paga após tudo pronto!',
                },
              ].map((step) => (
                <article key={step.title} className="step">
                  <div className="step-top">
                    <span>{step.title.slice(0, 2)}</span>
                    <step.icon size={29} aria-hidden="true" />
                  </div>
                  <h3>{step.title.slice(3)}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>

            <p className="section-footnote">
              <Clock3 size={16} aria-hidden="true" /> Atendimento ágil e com técnicos preparados para qualquer emergência elétrica.
            </p>
          </div>
        </section>

        {/* PRODUTOS MOURA COM CTA DIRETO */}
        <section id="moura" className="moura section">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow blue">LINHA MOURA EM SALVADOR</p>
                <h2>Baterias Moura com até 24 meses de garantia oficial.</h2>
              </div>
              <p>A marca líder do Brasil instalada no seu veículo com o melhor custo-benefício de Salvador.</p>
            </div>

            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.name}>
                  <span className="label">{product.tag}</span>
                  <Image
                    src={`/images/${product.image}`}
                    alt={product.name}
                    width={500}
                    height={500}
                    sizes="(max-width: 600px) 85vw, (max-width: 1000px) 40vw, 22vw"
                  />
                  <h3>{product.name}</h3>
                  <p>{product.text}</p>
                  <a
                    href={lpWhatsapp(`Bateria Moura ${product.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-contact="whatsapp"
                    data-location="lp-moura"
                  >
                    Consultar preço no WhatsApp <ArrowUpRight size={18} />
                  </a>
                </article>
              ))}
            </div>

            <div className="lp-moura-cta-box">
              <div>
                <strong>Não sabe qual a amperagem correta para o seu veículo?</strong>
                <p>Nossa equipe confere a tabela oficial de montadora para você não errar na compra.</p>
              </div>
              <LpContactButton location="lp-moura-box">Falar com atendente</LpContactButton>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS EM CARROSSEL RESPONSIVO (1 por vez no mobile, sem pontos de fuga) */}
        <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <LpReviewsCarousel />
          </div>
        </section>

        {/* SEÇÃO DE COBERTURA EM SALVADOR */}
        <section className="local section lp-coverage-section">
          <div className="container">
            <div className="lp-coverage-content">
              <p className="eyebrow"><MapPin size={16} /> ATENDIMENTO EM TODA SALVADOR</p>
              <h2>Entregadores estrategicamente posicionados pela cidade.</h2>
              <p className="lp-coverage-lead">
                Não importa se você está em casa, no trabalho, na garagem do condomínio ou parado na rua: temos equipes com rotas ativas prontas para chegar rapidamente até você com a bateria certa no porta-malas.
              </p>
              <div className="lp-coverage-highlights">
                <div>
                  <Zap size={22} />
                  <strong>Deslocamento Rápido</strong>
                  <span>Técnicos distribuídos para atender todas as regiões de Salvador com rapidez.</span>
                </div>
                <div>
                  <ShieldCheck size={22} />
                  <strong>Instalação no Local</strong>
                  <span>Você não precisa rebocar o carro nem procurar autoelétrica.</span>
                </div>
                <div>
                  <CreditCard size={22} />
                  <strong>Pague na Entrega</strong>
                  <span>Máquina de cartão levada pelo próprio técnico até seu veículo.</span>
                </div>
              </div>

              <div style={{ marginTop: '36px' }}>
                <LpContactButton location="lp-coverage">
                  Pedir bateria no WhatsApp com entrega grátis
                </LpContactButton>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ OBJETIVO PARA QUEBRAR DÚVIDAS */}
        <section className="faq section">
          <div className="container faq-grid">
            <div className="section-heading">
              <p className="eyebrow blue">TIRE SUAS DÚVIDAS</p>
              <h2>Perguntas frequentes antes de pedir.</h2>
              <p>Confira as dúvidas mais comuns dos motoristas antes de solicitar o atendimento.</p>
              <a
                className="text-link"
                href={lpWhatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                data-contact="whatsapp"
                data-location="lp-faq"
              >
                Falar com a equipe no WhatsApp <ArrowUpRight size={18} />
              </a>
            </div>
            <FAQ items={lpFaqs} />
          </div>
        </section>

        {/* CTA FINAL DE FECHAMENTO */}
        <section className="closing">
          <div className="container closing-inner">
            <div>
              <p className="eyebrow">DISK BATERIA SALVADOR</p>
              <h2>Seu carro funcionando de novo hoje.</h2>
              <p>Envie o modelo do seu carro e onde você está. Nossa equipe resolve sua partida em minutos.</p>
            </div>
            <div className="closing-actions">
              <LpContactButton location="lp-closing">
                Solicitar Orçamento!
              </LpContactButton>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Minimalista de Alta Conversão (Sem redes sociais e sem links de fuga) */}
      <footer className="lp-footer">
        <div className="container lp-footer-inner">
          <div className="lp-footer-brand">
            <strong>Minha Bateria Salvador</strong>
            <span>Disk Bateria com entrega rápida e teste no local</span>
            <p>Atendimento de Segunda a Sexta das 07:30 às 18:00 • Sábado das 07:30 às 14:00</p>
          </div>
          <div className="lp-footer-bottom">
            <span>© {new Date().getFullYear()} Minha Bateria Salvador. Todos os direitos reservados.</span>
            <a href="/politicas-de-privacidade/">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
