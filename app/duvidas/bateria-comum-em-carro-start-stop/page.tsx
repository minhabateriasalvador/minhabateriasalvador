import type { Metadata } from 'next';
import Image from 'next/image';
import { Clock, Calendar, AlertTriangle, Cpu, CheckCircle2, XCircle } from 'lucide-react';
import { Breadcrumbs, ContactButton, FAQ, NeighborhoodGrid, UrgentCta } from '../../components';
import { site, social } from '../../site';



export const metadata: Metadata = {
  title: 'Bateria Comum em Carro Start-Stop: Riscos e Cuidados',
  description: 'Descubra o que acontece ao instalar uma bateria convencional em veículo com Start-Stop. Riscos de danos elétricos, pane no alternador e vida útil reduzida.',
  alternates: { canonical: '/duvidas/bateria-comum-em-carro-start-stop/' },
  openGraph: {
    ...social,
    title: 'Posso Colocar Bateria Comum em Carro com Sistema Start-Stop?',
    description: 'Alerta técnico: colocar bateria convencional em carro Start-Stop reduz a vida útil para menos de 6 meses e pode queimar componentes.',
    url: '/duvidas/bateria-comum-em-carro-start-stop/',
  },
};

export default function StartStopDuvidaPage() {
  const breadcrumbItems = [
    { name: 'Início', url: '/' },
    { name: 'Central de Dúvidas', url: '/duvidas/' },
    { name: 'Bateria Comum em Carro Start-Stop', url: '/duvidas/bateria-comum-em-carro-start-stop/' },
  ];

  const faqs = [
    { question: 'Quanto tempo dura uma bateria comum em carro com Start-Stop?', answer: 'Em média, uma bateria convencional dura de 3 a 6 meses quando instalada em um carro com sistema Start-Stop ativo, em contraste com os 3 a 5 anos de durabilidade de uma bateria EFB ou AGM original.' },
    { question: 'Se eu desativar o botão do Start-Stop no painel, posso usar bateria comum?', answer: 'Não é seguro. Mesmo com a função desligada no botão, o alternador inteligente e o módulo IBS da bateria continuam operando com ciclos de alta carga e frenagem regenerativa que sobrecarregam a bateria convencional, podendo estufá-la ou provocar vazamento de ácido.' },
    { question: 'Como saber se meu carro precisa de bateria EFB ou AGM?', answer: 'A indicação exata consta na etiqueta da bateria original de fábrica e no manual do proprietário. Carros nacionais como Nivus, T-Cross, Renegade Flex e Toro Flex geralmente usam EFB. Veículos como Compass Diesel, BMW, Mercedes e Volvo usam AGM. Na dúvida, consulte nossa equipe técnica.' },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Posso Colocar Bateria Comum em Carro com Sistema Start-Stop?',
    description: 'Análise detalhada sobre a incompatibilidade de baterias convencionais com sistemas automotivos Start-Stop modernos.',
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
    mainEntityOfPage: `${site.url}/duvidas/bateria-comum-em-carro-start-stop/`,
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
          <span><Clock size={15} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> 3 min de leitura</span>
          <span className="badge-tag">Tecnologia Automotiva</span>
        </div>

        <h1>Posso Colocar Bateria Comum em Carro com Sistema Start-Stop?</h1>

        {/* Bloco de Resposta Direta (GEO) */}
        <div className="direct-answer-box">
          <span className="direct-answer-title">Resposta Direta:</span>
          <p>
            <strong>NÃO, você nunca deve colocar uma bateria comum em um carro com Start-Stop.</strong> Baterias convencionais SLI (chumbo-ácido tradicional) não suportam a ciclagem rápida de carga e descarga desse sistema. A bateria comum vai durar menos de 6 meses, o sistema Start-Stop deixará de funcionar e você correrá o risco de superaquecer e danificar o alternador inteligente do veículo.
          </p>
        </div>

        <figure className="article-featured-image">
          <Image
            src="/images/bateria-start-stop.webp"
            alt="Bateria Start-Stop EFB e AGM instalada em veículo moderno em Salvador"
            width={860}
            height={460}
            priority
          />
          <figcaption>
            Veículos com tecnologia Start-Stop necessitam de baterias EFB ou AGM para evitar danos ao sistema elétrico e perda de garantias.
          </figcaption>
        </figure>

        <div className="article-body">

          <p>
            Muitos proprietários de veículos modernos (como Jeep Renegade, Compass, Fiat Toro, Pulse, VW Nivus, T-Cross, Tracker e Corolla) se assustam com a diferença de preço entre uma bateria convencional e uma bateria com tecnologia EFB ou AGM. A tentação de colocar a bateria mais barata é grande — mas os prejuízos mecânicos e elétricos são certos.
          </p>

          <h2>O que acontece ao colocar uma bateria comum no Start-Stop?</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '26px 0' }}>
            <div style={{ background: '#fdf2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '18px' }}>
              <strong style={{ color: '#b91c1c', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <XCircle size={18} /> O Que Acontece com Bateria Comum
              </strong>
              <ul style={{ margin: '0 0 0 16px', color: '#7f1d1d', fontSize: '0.88rem' }}>
                <li>Durabilidade cai de 3 anos para 3 a 6 meses</li>
                <li>Perda da garantia do fabricante da bateria</li>
                <li>Desativação automática de funções do painel</li>
                <li>Risco de estufamento e vazamento sob calor intenso</li>
              </ul>
            </div>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '18px' }}>
              <strong style={{ color: '#15803d', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <CheckCircle2 size={18} /> Com a Bateria Correta (EFB / AGM)
              </strong>
              <ul style={{ margin: '0 0 0 16px', color: '#14532d', fontSize: '0.88rem' }}>
                <li>Suporta até 3x mais ciclos de partida</li>
                <li>Recarrega rapidamente entre paradas de semáforo</li>
                <li>24 meses de garantia oficial de fábrica</li>
                <li>Preserva o alternador inteligente e o sensor IBS</li>
              </ul>
            </div>
          </div>

          <h2>Entenda a Diferença entre EFB e AGM</h2>
          <ul>
            <li>
              <strong>Baterias EFB (Enhanced Flooded Battery):</strong> São baterias de eletrólito líquido com placas reforçadas por películas de poliéster. Indicadas para veículos com sistema Start-Stop padrão (sem regeneração complexa de frenagem). Presente na maioria dos carros flex nacionais.
            </li>
            <li>
              <strong>Baterias AGM (Absorbent Glass Mat):</strong> Possuem mantas de microfibra de vidro que absorvem 100% da solução ácida. Suportam correntes altíssimas e descargas mais severas. Indispensáveis para veículos premium com freios regenerativos e grande eletrônica embarcada.
            </li>
          </ul>

          <h2>Como é Feita a Troca em Salvador pela Minha Bateria?</h2>
          <p>
            A substituição da bateria em carros Start-Stop requer cuidado técnico: nossa equipe conecta um suprimento auxiliar de energia nos polos do carro antes de soltar a bateria antiga. Assim, o veículo nunca fica desenergizado, evitando a perda das calibrações de vidros, teto solar, câmbio automático e centrais multimídia.
          </p>
        </div>

        <UrgentCta
          subject="orçamento de bateria Start-Stop EFB ou AGM"
          title="Precisa trocar a bateria Start-Stop do seu carro em Salvador?"
          text="Consulte a aplicação correta com nossos especialistas no WhatsApp. Levamos até seu condomínio ou residência com instalação técnica sem custo adicional."
        />

        <NeighborhoodGrid />

        <section className="faq-section" style={{ marginTop: '48px' }}>
          <h2>Perguntas Frequentes sobre Start-Stop</h2>
          <FAQ items={faqs} />
        </section>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
    </main>
  );
}
