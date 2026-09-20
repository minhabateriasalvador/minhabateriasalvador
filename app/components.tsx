import Image from 'next/image';
import { ArrowUpRight, Menu, Phone, MapPin, ChevronDown, ShieldCheck, Truck, Zap, Clock3, Wrench, Star } from 'lucide-react';
import { site, whatsapp, neighborhoods, testimonials } from './site';

export function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false" fill="currentColor"><path d="M16 3a13 13 0 0 0-11.14 19.7L3 29l6.47-1.78A13 13 0 1 0 16 3Zm0 23.7c-2.08 0-4.12-.56-5.9-1.62l-.42-.25-3.84 1.06 1.03-3.74-.28-.43A10.7 10.7 0 1 1 16 26.7Zm5.87-8.03c-.32-.16-1.9-.94-2.2-1.05-.29-.1-.5-.16-.71.16-.21.32-.81 1.05-.99 1.26-.18.21-.36.24-.68.08-1.87-.94-3.1-1.68-4.33-3.8-.33-.57.33-.53.94-1.77.11-.21.05-.4-.03-.56-.08-.16-.71-1.7-.97-2.33-.26-.62-.53-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.37 4.76.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" /></svg>;
}

export function ContactButton({ children = 'Pedir pelo WhatsApp', subject, className = '', location }: { children?: React.ReactNode; subject?: string; className?: string; location: string }) {
  return <a className={`button ${className}`} href={whatsapp(subject)} target="_blank" rel="noopener noreferrer" data-contact="whatsapp" data-location={location}><WhatsAppIcon />{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}

export function Header() {
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <div className="topbar"><div className="container"><span><MapPin size={14} aria-hidden="true" /> Da nossa loja no STIEP até você em toda Salvador</span><a href={`tel:+${site.phone}`} data-contact="phone" data-location="topbar">Salvador • {site.phoneDisplay}</a></div></div>
    <header className="header"><div className="container header-inner">
      <a href="/" className="brand" aria-label="Minha Bateria Salvador — início"><Image src="/images/logo.webp" width={541} height={265} alt="Minha Bateria" /><span>SALVADOR</span></a>
      <nav aria-label="Navegação principal" className="desktop-nav">
        <a href="/#catalogo">Baterias</a>
        <a href="/bateria-moura-salvador/">Moura</a>
        <a href="/bateria-heliar-salvador/">Heliar</a>
        <a href="/bateria-zetta-salvador/">Zetta</a>
        <a href="/bateria-start-stop-salvador/">Start-Stop</a>
        <a href="/servicos/">Serviços</a>
        <a href="/duvidas/">Dúvidas</a>
        <a href="/contato/">Contato</a>
      </nav>
      <ContactButton location="header" className="header-cta">Pedir no WhatsApp</ContactButton>
      <details className="mobile-menu"><summary aria-label="Abrir menu"><Menu aria-hidden="true" /></summary><nav aria-label="Menu móvel">
        <a href="/">Início</a>
        <a href="/bateria-moura-salvador/">Bateria Moura</a>
        <a href="/bateria-heliar-salvador/">Bateria Heliar</a>
        <a href="/bateria-zetta-salvador/">Bateria Zetta</a>
        <a href="/bateria-start-stop-salvador/">Bateria Start-Stop</a>
        <a href="/servicos/">Entrega e Instalação</a>
        <a href="/duvidas/">Central de Dúvidas</a>
        <a href="/sobre-nos/">Nossa Loja</a>
        <a href="/contato/">Contato</a>
      </nav></details>
    </div></header>
  </>;
}

export function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div>
      <a href="/" className="footer-name">Minha Bateria<span>Salvador</span></a>
      <p>Disk Bateria em Salvador com entrega e instalação gratuita. Desde 2009 atendendo com excelência.</p>
      <div className="social-links">
        <a href="https://www.instagram.com/minha_bateria/" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={14} /></a>
        <a href={site.maps} target="_blank" rel="noopener noreferrer">Google Maps <ArrowUpRight size={14} /></a>
      </div>
    </div>
    <div>
      <h2>Marcas & Categorias</h2>
      <a href="/bateria-moura-salvador/">Bateria Moura Salvador</a>
      <a href="/bateria-heliar-salvador/">Bateria Heliar Salvador</a>
      <a href="/bateria-zetta-salvador/">Bateria Zetta Salvador</a>
      <a href="/bateria-start-stop-salvador/">Bateria Start-Stop Salvador</a>
      <a href="/servicos/">Entrega e Instalação Grátis</a>
      <a href="/duvidas/">Central de Dúvidas & Diagnóstico</a>
    </div>
    <div>
      <h2>Fale com a loja</h2>
      <a href={`tel:+${site.phone}`} data-contact="phone" data-location="footer">{site.phoneDisplay}</a>
      <a href={`mailto:${site.email}`}>{site.email}</a>
      <address>{site.address}<br />CEP 41770-095</address>
      <p style={{ marginTop: '12px', fontSize: '0.8rem', color: '#8fa8cb' }}>Atendimento ágil em domicílio nos principais bairros de Salvador — BA.</p>
    </div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Minha Bateria Salvador. Operação local e loja física no STIEP.</span><a href="/politicas-de-privacidade/">Política de privacidade</a></div></footer>;
}

export { MobileContact } from './mobile-contact';

export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return <div className="faq-list">{items.map(item => <details key={item.question}><summary>{item.question}<ChevronDown size={20} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>;
}

export function Breadcrumbs({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.url}`,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumbs" className="breadcrumbs-nav">
        <div className="container">
          <ol className="breadcrumbs-list">
            {items.map((item, index) => (
              <li key={item.url} className="breadcrumbs-item">
                {index > 0 && <span className="breadcrumbs-sep">/</span>}
                {index === items.length - 1 ? (
                  <span aria-current="page">{item.name}</span>
                ) : (
                  <a href={item.url}>{item.name}</a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    </>
  );
}

export function SpecTable({ models, brandName }: { models: { code: string; capacity: string; cca: string; application: string; warranty: string }[]; brandName: string }) {
  return (
    <div className="table-wrapper">
      <table className="spec-table">
        <caption>Modelos de {brandName} disponíveis com entrega e instalação em Salvador</caption>
        <thead>
          <tr>
            <th scope="col">Modelo / Linha</th>
            <th scope="col">Capacidade (Ah)</th>
            <th scope="col">Poder de Partida (CCA)</th>
            <th scope="col">Aplicações Comuns</th>
            <th scope="col">Garantia</th>
            <th scope="col">Orçamento</th>
          </tr>
        </thead>
        <tbody>
          {models.map((m) => (
            <tr key={m.code}>
              <td><strong>{m.code}</strong></td>
              <td><span className="badge-ah">{m.capacity}</span></td>
              <td>{m.cca}</td>
              <td className="app-cell">{m.application}</td>
              <td>{m.warranty}</td>
              <td>
                <a
                  href={whatsapp(`${brandName} ${m.code}`)}
                  className="table-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-contact="whatsapp"
                  data-location="spec-table"
                >
                  Consultar Preço <ArrowUpRight size={14} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function UrgentCta({ subject = 'bateria com urgência', title = 'Seu carro parou em Salvador?', text = 'Nossa equipe leva a bateria certa até o seu local com teste gratuito do sistema elétrico e instalação imediata.' }: { subject?: string; title?: string; text?: string }) {
  return (
    <div className="urgent-banner">
      <div className="urgent-content">
        <span className="urgent-badge"><Zap size={15} fill="currentColor" /> ATENDIMENTO IMEDIATO EM SALVADOR</span>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="urgent-benefits">
          <span><Truck size={16} /> Entrega e instalação grátis</span>
          <span><Clock3 size={16} /> Envio ágil no seu bairro</span>
          <span><Wrench size={16} /> Teste elétrico antes da troca</span>
        </div>
      </div>
      <div className="urgent-action">
        <ContactButton location="urgent-banner" subject={subject}>
          Chamar socorro no WhatsApp
        </ContactButton>
        <a className="urgent-phone" href={`tel:+${site.phone}`}>Prefere ligar? {site.phoneDisplay}</a>
      </div>
    </div>
  );
}

export function NeighborhoodGrid() {
  return (
    <div className="neighborhood-section">
      <h3>Atendimento e Entrega Rápida nos Bairros de Salvador:</h3>
      <p>Cobrimos as principais regiões com instalação no seu domicílio, condomínio, trabalho ou na rua:</p>
      <div className="neighborhood-chips">
        {neighborhoods.map((n) => (
          <span key={n} className="neighborhood-chip">
            <MapPin size={13} /> {n}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="reviews-section" id="avaliacoes">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow blue">REPUTAÇÃO COMPROVADA</p>
            <h2>Quem precisou de bateria em Salvador, recomenda.</h2>
          </div>
          <p>Desde 2009 com atendimento transparente em Salvador, teste elétrico com equipamento de precisão antes de trocar e garantia oficial de fábrica.</p>
        </div>

        <div className="reviews-summary-bar">
          <div className="reviews-score-box">
            <span className="reviews-big-number">{site.ratingValue}</span>
            <div className="reviews-score-info">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <strong>Classificação Excelente</strong>
              <span>Com base em {site.reviewsCount} avaliações reais no Google Maps</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={site.googleSearch}
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-google-badge"
              title="Visualizar o perfil da Minha Bateria e todas as avaliações no Google"
            >
              <span>Visualizar avaliações no Google</span>
              <ArrowUpRight size={18} />
            </a>
            <a
              href={site.reviews}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.85rem', color: 'var(--blue)', fontWeight: 700, textDecoration: 'underline' }}
              title="Deixar sua avaliação no Google"
            >
              Avaliar no Google
            </a>
          </div>
        </div>

        <div className="reviews-cards-grid">
          {testimonials.map((t, idx) => (
            <article className="review-card-item" key={idx}>
              <div>
                <div className="review-card-top">
                  <div className="stars-row">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span className="review-badge-verified">Verificada</span>
                </div>
                <p className="review-card-text">"{t.text}"</p>
              </div>
              <div className="review-card-author">
                <strong>{t.name}</strong>
                <span>{t.neighborhood}</span>
                <span className="review-vehicle-tag">{t.vehicle}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

