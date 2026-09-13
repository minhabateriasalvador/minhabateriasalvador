import type { Metadata } from 'next';
import Image from 'next/image';
import { Clock, Calendar, Check, Award, ShieldCheck, Zap } from 'lucide-react';
import { Breadcrumbs, ContactButton, FAQ, NeighborhoodGrid, UrgentCta } from '../../components';
import { site, social } from '../../site';



export const metadata: Metadata = {
  title: 'Bateria Moura ou Heliar: Qual a Melhor para Salvador?',
  description: 'Comparativo definitivo entre bateria Moura e bateria Heliar: resistência ao calor de Salvador, tecnologia PowerFrame, garantia e valor de revenda.',
  alternates: { canonical: '/duvidas/bateria-moura-ou-heliar-qual-a-melhor/' },
  openGraph: {
    ...social,
    title: 'Bateria Moura ou Heliar: Qual a Melhor Escolha para Salvador?',
    description: 'Análise técnica de especialistas para o motorista baiano: compare tecnologias, garantias e custo-benefício de Moura vs Heliar.',
    url: '/duvidas/bateria-moura-ou-heliar-qual-a-melhor/',
  },
};

export default function MouraVsHeliarPage() {
  const breadcrumbItems = [
    { name: 'Início', url: '/' },
    { name: 'Central de Dúvidas', url: '/duvidas/' },
    { name: 'Moura vs Heliar: Qual a Melhor?', url: '/duvidas/bateria-moura-ou-heliar-qual-a-melhor/' },
  ];

  const faqs = [
    { question: 'Qual bateria dura mais em Salvador: Moura ou Heliar?', answer: 'Ambas oferecem durabilidade excelente e muito semelhante (média de 2,5 a 4 anos). A Moura se destaca pela liga de chumbo-prata resistente ao calor tropical, enquanto a Heliar se destaca pela tecnologia patenteada de grade PowerFrame, altamente eficaz contra a corrosão por maresia.' },
    { question: 'Qual a diferença de garantia entre Moura e Heliar?', answer: 'Ambas as marcas oferecem até 24 meses de garantia oficial de fábrica na linha automotiva. O diferencial da Heliar é oferecer serviço complementar de socorro 24 horas para panes elétricas durante o período da garantia.' },
    { question: 'Qual das duas tem melhor valor na base de troca?', answer: 'Tanto a sucata da Moura quanto a da Heliar possuem excelente valor de recompra por possuírem alto teor de chumbo virgem em sua composição estrutural.' },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bateria Moura ou Heliar: Qual a Melhor Escolha para Salvador?',
    description: 'Comparativo técnico aprofundado entre baterias Moura e Heliar considerando as condições climáticas e viárias de Salvador.',
    author: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: {
        '@type': 'ImageObject',
        url: `${site.url}/images/logo.webp`,
      },
    },
    datePublished: '2026-03-08',
    dateModified: '2026-03-08',
    mainEntityOfPage: `${site.url}/duvidas/bateria-moura-ou-heliar-qual-a-melhor/`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <main id="conteudo">
      <Breadcrumbs items={breadcrumbItems} />

      <article className="container inner-content">
        <div className="article-meta-bar">
          <span><Calendar size={15} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> 08 de Março de 2026</span>
          <span><Clock size={15} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> 4 min de leitura</span>
          <span className="badge-tag">Comparativo de Marcas</span>
        </div>

        <h1>Bateria Moura ou Heliar: Qual a Melhor Escolha para Salvador?</h1>

        {/* Bloco de Resposta Direta (GEO) */}
        <div className="direct-answer-box">
          <span className="direct-answer-title">Veredito do Especialista:</span>
          <p>
            Tanto a <strong>Moura</strong> quanto a <strong>Heliar</strong> são as líderes do mercado brasileiro com qualidade equivalente de primeira linha (ambas com até 24 meses de garantia). Para o clima de Salvador: se você valoriza a <strong>maior rede de assistência e preferência nacional</strong>, escolha a <strong>Moura</strong>. Se você busca <strong>assistência de socorro 24h inclusa e grade PowerFrame com proteção extra contra maresia</strong>, escolha a <strong>Heliar</strong>. Ambas são escolhas seguras e duradouras.
          </p>
        </div>

        <figure className="article-featured-image">
          <Image
            src="/images/bateria-carro.webp"
            alt="Comparativo entre bateria Moura e bateria Heliar em Salvador"
            width={860}
            height={460}
            priority
          />
          <figcaption>
            Moura e Heliar: as duas marcas mais recomendadas e instaladas com entrega grátis em Salvador.
          </figcaption>
        </figure>

        <div className="article-body">

          <p>
            Quando chega o momento inevitável de trocar a bateria do carro, a disputa entre as duas gigantes automotivas é a principal dúvida dos motoristas baianos. Para te ajudar a decidir, analisamos os aspectos técnicos e práticos de cada fabricante.
          </p>

          <h2>1. Tecnologia e Engenharia de Cada Marca</h2>

          <h3>Bateria Moura: Tradição e Robustez Tropical</h3>
          <p>
            Desenvolvida no Brasil pensando exatamente nas condições severas do nosso clima e estradas, a Moura utiliza liga com aditivos de prata e placas laminadas que suportam o calor sob o capô sem acelerar a evaporação da água do eletrólito interno.
          </p>
          <ul>
            <li><strong>Líder de mercado:</strong> Cerca de 1 a cada 2 carros no Brasil utilizam baterias Moura.</li>
            <li><strong>Excelente retenção de carga:</strong> Mantém a energia estável mesmo em veículos que rodam pouco durante a semana.</li>
          </ul>

          <h3>Bateria Heliar: Precisão Global e Tecnologia PowerFrame</h3>
          <p>
            A Heliar pertence ao grupo Clarios, maior fabricante global de acumuladores elétricos automotivos. Seu grande destaque é o processo patenteado de fabricação de grades estampadas chamado <strong>PowerFrame®</strong>.
          </p>
          <ul>
            <li><strong>Proteção contra maresia:</strong> O design das grades reforçadas nos pontos de maior estresse elétrico reduz em até 66% a chance de quebra prematura causada por corrosão.</li>
            <li><strong>Socorro 24 Horas:</strong> Na compra de linhas originais, o cliente conta com socorro emergencial gratuito para panes elétricas.</li>
          </ul>

          <h2>2. Tabela Comparativa: Moura vs Heliar</h2>

          <div className="table-wrapper">
            <table className="spec-table">
              <caption>Comparativo técnico direto entre Moura e Heliar</caption>
              <thead>
                <tr>
                  <th scope="col">Critério de Avaliação</th>
                  <th scope="col">Bateria Moura</th>
                  <th scope="col">Bateria Heliar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Garantia de Fábrica</strong></td>
                  <td>Até 24 meses (linhas convencionais e EFB/AGM)</td>
                  <td>Até 24 meses (linhas convencionais e EFB/AGM)</td>
                </tr>
                <tr>
                  <td><strong>Tecnologia de Placas</strong></td>
                  <td>Liga especial com chumbo virgem e prata</td>
                  <td>PowerFrame estampada de alta precisão</td>
                </tr>
                <tr>
                  <td><strong>Serviço Adicional</strong></td>
                  <td>Maior rede de revendedores e assistência</td>
                  <td>Assistência com Socorro 24 Horas em todo o Brasil</td>
                </tr>
                <tr>
                  <td><strong>Linha Start-Stop</strong></td>
                  <td>Moura EFB e Moura AGM certificadas</td>
                  <td>Heliar EFB e Heliar AGM de montadora</td>
                </tr>
                <tr>
                  <td><strong>Comportamento em Salvador</strong></td>
                  <td>Excelente resistência a altas temperaturas</td>
                  <td>Excelente proteção contra oxidação e maresia</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>3. Onde Comprar Moura e Heliar com o Melhor Preço em Salvador?</h2>
          <p>
            Na <strong>Minha Bateria Salvador</strong>, mantemos estoque rotativo e sempre novo tanto da Moura quanto da Heliar. Você não corre o risco de comprar uma bateria que ficou parada meses em prateleiras perdendo a vida útil.
          </p>
          <p>
            Levamos ambas as opções até você, com entrega e instalação gratuita em Salvador e pagamento facilitado no cartão ou Pix à base de troca.
          </p>
        </div>

        <UrgentCta
          subject="orçamento comparativo Moura e Heliar"
          title="Quer saber o preço da Moura e da Heliar para o seu carro?"
          text="Mande uma mensagem com o modelo e o ano do seu veículo no nosso WhatsApp. Passamos os valores das duas marcas na hora com desconto de troca."
        />

        <NeighborhoodGrid />

        <section className="faq-section" style={{ marginTop: '48px' }}>
          <h2>Perguntas Frequentes sobre Moura e Heliar</h2>
          <FAQ items={faqs} />
        </section>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
    </main>
  );
}
