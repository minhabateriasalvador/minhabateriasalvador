import type { Metadata } from 'next';
import Image from 'next/image';
import { Clock, Calendar, ShieldAlert, CheckCircle, Wrench } from 'lucide-react';
import { Breadcrumbs, ContactButton, FAQ, NeighborhoodGrid, UrgentCta } from '../../components';
import { site, social } from '../../site';



export const metadata: Metadata = {
  title: 'Carro Não Pega e Faz Barulho de Estalo: É Bateria ou Motor de Arranque?',
  description: 'Ouviu barulho de "tec tec" ao dar a partida no carro? Saiba a diferença entre bateria fraca e defeito no motor de arranque. Atendimento ágil em Salvador.',
  alternates: { canonical: '/duvidas/carro-nao-pega-estalos-bateria-ou-arranque/' },
  openGraph: {
    ...social,
    title: 'Carro Não Pega e Faz Barulho de Estalo: É Bateria ou Motor de Arranque?',
    description: 'Diagnóstico rápido para motoristas: estalos rápidos na partida costumam indicar bateria arriada. Veja o que fazer em Salvador.',
    url: '/duvidas/carro-nao-pega-estalos-bateria-ou-arranque/',
  },
};

export default function EstaloPartidaPage() {
  const breadcrumbItems = [
    { name: 'Início', url: '/' },
    { name: 'Central de Dúvidas', url: '/duvidas/' },
    { name: 'Carro Não Pega: Estalo na Partida', url: '/duvidas/carro-nao-pega-estalos-bateria-ou-arranque/' },
  ];

  const faqs = [
    { question: 'Por que o carro faz barulho de "tec tec" contínuo ao virar a chave?', answer: 'O barulho rápido e contínuo de "tec tec tec" ocorre quando o relé e o automático do motor de arranque tentam engrenar o volante do motor, mas a bateria não tem corrente (CCA) suficiente para mantê-lo acionado, desarmando e armando em fração de segundo. É 90% de chance de bateria descarregada.' },
    { question: 'Quando o barulho é apenas um único "clique" seco, o que pode ser?', answer: 'Um único estalo metálico seco e forte pode indicar desgaste nas escovas ou defeito mecânico no motor de arranque ou solenoide. Ainda assim, o teste com voltímetro/amperímetro no local tira a dúvida com 100% de precisão.' },
    { question: 'Fazer "chupeta" (cabos de transferência) pode queimar a central eletrônica?', answer: 'Sim, se não for feita corretamente. Veículos modernos com muita eletrônica embarcada podem sofrer picos de tensão transitória que danificam centrais e módulos de injeção. O mais seguro é testar com equipamento profissional e substituir a bateria com backup de energia.' },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Carro Não Pega e Faz Barulho de Estalo: É Bateria ou Motor de Arranque?',
    description: 'Guia de diagnóstico veicular para identificar falhas na partida: bateria fraca vs motor de arranque.',
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
    mainEntityOfPage: `${site.url}/duvidas/carro-nao-pega-estalos-bateria-ou-arranque/`,
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
          <span className="badge-tag">Diagnóstico Automotivo</span>
        </div>

        <h1>Carro Não Pega e Faz Barulho de Estalo: É Bateria ou Motor de Arranque?</h1>

        {/* Bloco de Resposta Direta (GEO) */}
        <div className="direct-answer-box">
          <span className="direct-answer-title">Resposta Rápida de Diagnóstico:</span>
          <p>
            Na grande maioria das vezes (mais de 85% dos casos), <strong>o barulho repetido de estalos ("tec-tec-tec") ao girar a chave indica que a bateria está sem carga suficiente (baixa amperagem de CCA)</strong>. O relé do motor de arranque tenta engatar, mas a tensão cai abruptamente e o sistema desarma. Se as luzes do painel piscarem ou enfraquecerem juntas com os estalos, o defeito é na bateria.
          </p>
        </div>

        <figure className="article-featured-image">
          <Image
            src="/images/bateria-moura-salvador-herov2.webp"
            alt="Teste de bateria e sistema elétrico veicular em Salvador"
            width={860}
            height={460}
            priority
          />
          <figcaption>
            Dificuldade na partida com barulho de estalo contínuo é o sintoma clássico de bateria com baixa tensão ou fim de vida útil.
          </figcaption>
        </figure>

        <div className="article-body">

          <p>
            Você entra no carro, gira a chave (ou aperta o botão Start), ouve uma sequência de cliques rápidos e o motor não gira. A primeira dúvida que surge na cabeça de todo motorista é: <em>"Preciso chamar um guincho, um auto-elétrico ou apenas pedir uma bateria nova?"</em>
          </p>

          <h2>1. Como diferenciar o sintoma da bateria vs motor de arranque</h2>

          <h3>Sintomas Clássicos de Bateria Descarregada ou Vencida:</h3>
          <ul>
            <li><strong>Estalos múltiplos e rápidos ("tec-tec-tec-tec"):</strong> Ocorre quando você tenta dar a partida. O automático do motor de partida aciona, a tensão cai para menos de 9 volts e ele desengata repetidamente.</li>
            <li><strong>Luzes do painel fraquejam ou apagam:</strong> Se as lâmpadas do painel ou faróis perderem a intensidade no momento da tentativa de partida, é prova de que a bateria não suporta a demanda de corrente.</li>
            <li><strong>Relógio ou computador de bordo desconfigura:</strong> Zera as horas e a quilometragem parcial da viagem após a tentativa falha.</li>
            <li><strong>Alarme dispara ou vidros sobem lentos:</strong> Sintoma comum de baixa voltagem no circuito elétrico do carro.</li>
          </ul>

          <h3>Sintomas Quando o Problema Realmente É no Motor de Arranque:</h3>
          <ul>
            <li><strong>Um único estalo seco ("TOC!") e silêncio absoluto:</strong> O painel continua bem aceso e forte, mas o motor não vira de jeito nenhum.</li>
            <li><strong>Silêncio total sem nenhum ruído:</strong> Ao girar a chave, nada acontece, mesmo com a buzina e faróis funcionando com potência normal.</li>
            <li><strong>Cheiro de queimado ou fumaça:</strong> Pode indicar solenoide em curto ou escovas presas.</li>
          </ul>

          <h2>2. O que NÃO fazer ao se deparar com esse problema</h2>
          <p>
            Evite dar tranco no carro (empurrar o veículo em 2ª marcha). Em carros modernos, o tranco pode fazer a correia dentada pular dentes, descalibrar os sensores de fase e enviar combustível cru para o catalisador, causando prejuízos que passam de milhares de reais.
          </p>
          <p>
            Fazer "chupeta" sem cuidado com outro veículo também pode provocar picos elétricos capazes de queimar centrais eletrônicas sensíveis.
          </p>

          <h2>3. O Que Fazer em Salvador: Teste Grátis no Local</h2>
          <p>
            A melhor solução é solicitar uma avaliação técnica profissional. A equipe da <strong>Minha Bateria Salvador</strong> vai até onde seu veículo está parado — seja na sua garagem, no estacionamento do trabalho ou na rua.
          </p>
          <p>
            Utilizamos analisador computadorizado para testar a vida útil da sua bateria atual, a saúde do alternador (para saber se ele está gerando energia) e a fuga de corrente. Se a bateria estiver realmente esgotada, realizamos a troca imediata por uma <strong>Moura, Heliar ou Zetta</strong> com garantia oficial de até 24 meses.
          </p>
        </div>

        <UrgentCta
          subject="socorro para carro que não pega com estalos"
          title="Seu carro está estalando e não pega agora em Salvador?"
          text="Chame nosso disk bateria no WhatsApp. Enviamos um técnico com bateria nova e equipamento de teste em até 40 minutos para o seu bairro."
        />

        <NeighborhoodGrid />

        <section className="faq-section" style={{ marginTop: '48px' }}>
          <h2>Perguntas Frequentes sobre Estalos na Partida</h2>
          <FAQ items={faqs} />
        </section>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
    </main>
  );
}
