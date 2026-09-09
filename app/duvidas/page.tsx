import type { Metadata } from 'next';
import { HelpCircle, ArrowUpRight, Clock, Tag } from 'lucide-react';
import { Breadcrumbs, ContactButton, UrgentCta } from '../components';
import { articles, site, social } from '../site';

export const metadata: Metadata = {
  title: 'Central de Dúvidas & Diagnóstico Automotivo em Salvador',
  description: 'Dicas técnicas, comparativos de baterias e diagnóstico de falhas na partida. Saiba como resolver panes elétricas com a Minha Bateria Salvador.',
  alternates: { canonical: '/duvidas/' },
  openGraph: {
    ...social,
    title: 'Central de Dúvidas & Diagnóstico Automotivo em Salvador',
    description: 'Dicas práticas para o motorista de Salvador: baterias, alternador, Start-Stop e testes.',
    url: '/duvidas/',
  },
};

export default function DuvidasHub() {
  const breadcrumbItems = [
    { name: 'Início', url: '/' },
    { name: 'Central de Dúvidas', url: '/duvidas/' },
  ];

  return (
    <main id="conteudo">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow"><HelpCircle size={14} /> DIAGNÓSTICO & ORIENTAÇÃO TÉCNICA</p>
          <h1>Central de Dúvidas:<br />Entenda a Bateria do Seu Carro</h1>
          <p>
            Guias práticos elaborados por quem entende de socorro veicular e elétrica automotiva em Salvador. Descubra como diagnosticar problemas e escolher a melhor bateria.
          </p>
        </div>
      </section>

      <div className="container inner-content">
        <div className="direct-answer-box">
          <span className="direct-answer-title">Está com dúvida sobre o estado da sua bateria em Salvador?</span>
          <p>
            Não gaste dinheiro trocando peças desnecessárias. A <strong>Minha Bateria Salvador</strong> envia um técnico até o seu endereço para realizar o teste gratuito da bateria, do alternador e do motor de partida antes de qualquer troca.
          </p>
        </div>


        <section>
          <h2>Artigos & Diagnósticos em Destaque</h2>
          <p>Selecione um tema abaixo para ler a orientação técnica completa:</p>

          <div className="articles-grid">
            {articles.map((art) => (
              <article key={art.slug} className="article-card">
                <div className="article-card-header">
                  <span className="badge-tag">{art.category}</span>
                  <span className="article-time"><Clock size={12} style={{ verticalAlign: 'middle', marginRight: '4px' }} />{art.readTime}</span>
                </div>
                <h3>{art.title}</h3>
                <p>{art.description}</p>
                <a href={`/duvidas/${art.slug}/`} className="article-link">
                  Ler guia completo <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <UrgentCta
          subject="dúvida sobre falha elétrica no veículo"
          title="Prefere tirar a dúvida diretamente com um técnico?"
          text="Mande uma mensagem no nosso WhatsApp relatando o sintoma do seu carro. Nossa equipe técnica responde na hora e orienta a melhor solução."
        />
      </div>
    </main>
  );
}
