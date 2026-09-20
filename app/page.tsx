import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowDown, ArrowUpRight, BatteryCharging, Check, Clock3, CreditCard, MapPin, MessageCircle, Phone, ShieldCheck, Truck, Wrench, Zap } from 'lucide-react';
import { ContactButton, FAQ, NeighborhoodGrid, ReviewsSection } from './components';
import { GoogleMapLazy } from './google-map-lazy';
import { categories, faqs, site, social, whatsapp } from './site';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { ...social, title: 'Bateria Salvador com entrega rápida e instalação grátis', description: 'Moura, Zetta e Heliar. Disk Bateria Salvador com entrega rápida e teste no local.', url: '/' },
};

const products = [
  { name: 'Moura convencional', image: 'moura-convencional.webp', tag: 'CARROS E SUVs', text: 'A partida que acompanha sua rotina. Consulte a capacidade indicada para seu carro.' },
  { name: 'Moura EFB', image: 'moura-efb.webp', tag: 'START-STOP', text: 'Para aplicações Start-Stop que exigem tecnologia EFB. Confirme a compatibilidade.' },
  { name: 'Moura AGM', image: 'moura-agm.webp', tag: 'START-STOP', text: 'Tecnologia AGM para aplicações específicas e sistemas elétricos mais exigentes.' },
  { name: 'Moura para moto', image: 'moura-moto.webp', tag: 'MOTOS E SCOOTERS', text: 'Energia para seguir sobre duas rodas. Encontre a aplicação para sua motocicleta.' },
];

export default function Home() {
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

  return <main id="conteudo">
    <section className="hero"><div className="container hero-grid"><div className="hero-copy">
      <p className="eyebrow"><span className="tiny-bolt"><Zap size={14} fill="currentColor" /></span> DISK BATERIA SALVADOR</p>
      <h1>Bateria Salvador:<br />entrega rápida e<br /><span>instalação grátis.</span></h1>
      <p className="hero-description">Seu carro não liga? O Disk Bateria Salvador leva a bateria certa até você, com teste elétrico no local e garantia oficial de fábrica.</p>
      <div className="hero-actions"><ContactButton location="hero">Pedir minha bateria</ContactButton><a className="phone-link" href={`tel:+${site.phone}`} data-contact="phone" data-location="hero"><Phone size={20} aria-hidden="true" /><span><small>Prefere ligar?</small>{site.phoneDisplay}</span></a></div>
      <p className="hero-note"><Check size={15} aria-hidden="true" /> Nota {site.ratingValue} no Google ({site.reviewsCount}+ avaliações) • Atendimento ágil em Salvador</p>
    </div><div className="hero-visual"><Image className="hero-image" src="/images/bateria-moura-salvador-herov2.webp" width={547} height={407} sizes="(max-width: 760px) 95vw, 52vw" priority alt="Disk Bateria Salvador - Bateria Moura com entrega e instalação grátis em Salvador" /><div className="hero-service"><span className="icon-box"><ShieldCheck size={24} /></span><div><strong>Da nossa loja até você.</strong><span>Atendimento local em Salvador</span></div><ArrowUpRight size={22} /></div></div></div>
      <div className="container hero-bottom">
        <span>
          <a href="/bateria-moura-salvador/" style={{ color: 'inherit' }}>MOURA</a> <i>•</i> 
          <a href="/bateria-zetta-salvador/" style={{ color: 'inherit' }}>ZETTA</a> <i>•</i> 
          <a href="/bateria-heliar-salvador/" style={{ color: 'inherit' }}>HELIAR</a> <i>•</i>
          <a href="/bateria-start-stop-salvador/" style={{ color: 'inherit' }}>START-STOP</a>
        </span>
        <a href="#catalogo">Encontre sua bateria <ArrowDown size={16} /></a>
      </div>
    </section>

    <section className="benefits" aria-label="Vantagens do atendimento"><div className="container benefits-grid">{[{icon:Truck,title:'Entrega e instalação grátis',text:'Consulte a cobertura no seu bairro'},{icon:BatteryCharging,title:'Teste antes de trocar',text:'Bateria e sistema elétrico'},{icon:ShieldCheck,title:'Garantia de fábrica',text:'Conforme a marca e o modelo'},{icon:CreditCard,title:'Pagamento facilitado',text:'Consulte as condições no orçamento'}].map(item=><div className="benefit" key={item.title}><item.icon size={26} aria-hidden="true" /><div><strong>{item.title}</strong><span>{item.text}</span></div></div>)}</div></section>

    <section id="catalogo" className="catalog section"><div className="container"><div className="section-heading centered"><p className="eyebrow">CATÁLOGO DE BATERIAS</p><h2>Encontre a bateria certa<br className="mobile-break" /> para seu veículo.</h2><p>Moura, Zetta, Heliar e outras marcas. A escolha começa pelo que você dirige.</p></div>
      <div className="catalog-grid">{categories.map((category,i)=><article className="catalog-card" key={category.name}><div className="catalog-media"><Image src={`/images/${category.image}`} alt={category.alt} width={296} height={222} sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 24vw" /><span className="card-number">0{i+1}</span></div><div className="catalog-copy"><h3>{category.name}</h3><p>{category.description}</p><div className="capacity-group"><span className="label">CAPACIDADES</span><div className="chips">{category.capacities.map(cap=><span key={cap}>{cap}</span>)}</div></div><div><span className="label">MARCAS</span><div className="brand-chips">{category.brands.map(brand=><span key={brand}>{brand}</span>)}</div></div><a className="card-link" href={whatsapp(category.subject)} target="_blank" rel="noopener noreferrer" data-contact="whatsapp" data-location={`catalog-${i}`} aria-label={`Consultar ${category.name.toLowerCase()} no WhatsApp`}>Consultar opções <ArrowUpRight size={18} /></a></div></article>)}</div>
      <div className="catalog-action"><ContactButton location="catalog-bottom">Encontrar minha bateria</ContactButton><p>Modelos, capacidades e marcas sujeitos à disponibilidade e à aplicação do veículo.</p></div>
      <div className="other-batteries"><div><BatteryCharging size={23} aria-hidden="true" /><p><strong>Precisa de bateria náutica ou estacionária?</strong><span>Também atendemos embarcações, nobreaks e outras aplicações.</span></p></div><a href={whatsapp('bateria náutica ou estacionária')} target="_blank" rel="noopener noreferrer" data-contact="whatsapp" data-location="other-batteries">Fale com a equipe <ArrowUpRight size={18} /></a></div>
    </div></section>

    <section id="como-funciona" className="how section"><div className="container"><div className="section-heading split-heading"><div><p className="eyebrow blue">SIMPLIFIQUE SUA TROCA</p><h2>Seu dia não precisa parar<br />por causa da bateria.</h2></div><p>Nosso Disk Bateria Salvador atende você em casa, no trabalho ou onde o veículo parou. Veja como é simples.</p></div><div className="steps">{[{icon:MessageCircle,title:'Conte o que você precisa',text:'Envie o modelo, o ano do veículo e seu bairro. Se puder, mande uma foto da bateria atual.'},{icon:Truck,title:'Receba no local combinado',text:'Confirmamos o modelo, o orçamento e a previsão de entrega antes de sair para o atendimento.'},{icon:Wrench,title:'Teste, instale e siga',text:'A equipe testa o sistema elétrico e, confirmada a necessidade, instala a bateria adequada.'}].map((step,i)=><article key={step.title} className="step"><div className="step-top"><span>0{i+1}</span><step.icon size={29} aria-hidden="true" /></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div><p className="section-footnote"><Clock3 size={16} aria-hidden="true" /> A previsão de chegada é confirmada no atendimento, conforme endereço, trânsito e disponibilidade.</p></div></section>

    <section id="moura" className="moura section"><div className="container"><div className="section-heading split-heading"><div><p className="eyebrow blue">ENERGIA PARA CADA CAMINHO</p><h2>Bateria Moura Salvador: entrega e instalação grátis.</h2></div><p>Do carro do dia a dia ao veículo Start-Stop: conte com nossa equipe para escolher a aplicação correta.</p></div><div className="product-grid">{products.map(product=><article className="product-card" key={product.name}><span className="label">{product.tag}</span><Image src={`/images/${product.image}`} alt={product.name} width={500} height={500} sizes="(max-width: 600px) 85vw, (max-width: 1000px) 40vw, 22vw" /><h3>{product.name}</h3><p>{product.text}</p><a href={whatsapp(product.name)} target="_blank" rel="noopener noreferrer" data-contact="whatsapp" data-location="moura">Consultar preço <ArrowUpRight size={18} /></a></article>)}</div>
      <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/bateria-moura-salvador/" className="text-link">Conheça a linha completa de Bateria Moura em Salvador <ArrowUpRight size={16} /></a>
        <a href="/bateria-heliar-salvador/" className="text-link">Ver Baterias Heliar com PowerFrame <ArrowUpRight size={16} /></a>
        <a href="/bateria-zetta-salvador/" className="text-link">Ver Bateria Zetta (Moura Econômica) <ArrowUpRight size={16} /></a>
      </div>
    </div></section>

    <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow blue">ORIENTAÇÃO & DIAGNÓSTICO</p>
            <h2>Central de Dúvidas do Motorista</h2>
          </div>
          <p>Dicas técnicas para você não gastar dinheiro à toa antes de trocar a bateria do seu veículo em Salvador.</p>
        </div>
        <div className="articles-grid">
          <article className="article-card">
            <div className="article-card-header"><span className="badge-tag">Diagnóstico</span><span className="article-time">3 min</span></div>
            <h3>Carro Não Pega e Faz Barulho de Estalo?</h3>
            <p>Descubra se o barulho de "tec-tec" contínuo é bateria descarregada ou defeito no motor de arranque.</p>
            <a href="/duvidas/carro-nao-pega-estalos-bateria-ou-arranque/" className="article-link">Ler diagnóstico <ArrowUpRight size={16} /></a>
          </article>
          <article className="article-card">
            <div className="article-card-header"><span className="badge-tag">Comparativo</span><span className="article-time">4 min</span></div>
            <h3>Moura ou Heliar: Qual a Melhor em Salvador?</h3>
            <p>Comparativo técnico: durabilidade sob altas temperaturas, maresia, tecnologia PowerFrame e garantia.</p>
            <a href="/duvidas/bateria-moura-ou-heliar-qual-a-melhor/" className="article-link">Ver comparativo <ArrowUpRight size={16} /></a>
          </article>
          <article className="article-card">
            <div className="article-card-header"><span className="badge-tag">Tecnologia</span><span className="article-time">3 min</span></div>
            <h3>Bateria Comum em Carro com Start-Stop?</h3>
            <p>Entenda os riscos elétricos graves e por que carros modernos exigem baterias com tecnologia EFB ou AGM.</p>
            <a href="/duvidas/bateria-comum-em-carro-start-stop/" className="article-link">Entender riscos <ArrowUpRight size={16} /></a>
          </article>
        </div>
      </div>
    </section>

    <ReviewsSection />

    <section className="local section" id="loja">
      <div className="container">
        <div className="local-grid">
          <div className="local-photo">
            <Image src="/images/minha-bateria-loja-salvador.webp" width={576} height={489} sizes="(max-width: 760px) 90vw, 45vw" alt="Loja Minha Bateria no STIEP em Salvador - Revenda Moura, Heliar e Zetta" />
            <a href={site.maps} className="photo-caption" target="_blank" rel="noopener noreferrer">
              <MapPin size={20} />
              <span>Nossa loja no STIEP<strong>Salvador, Bahia</strong></span>
              <ArrowUpRight size={20} />
            </a>
          </div>
          <div className="local-copy">
            <p className="eyebrow">DAQUI DE SALVADOR</p>
            <h2>Uma loja perto.<br />Uma equipe do seu lado.</h2>
            <p>Desde 2009, a Minha Bateria atende motoristas e empresas de Salvador. A gente orienta a escolha, confere a necessidade da troca e ajuda você a voltar à rotina.</p>
            <p>Atendemos STIEP, Pituba, Brotas, Barra, Rio Vermelho, Itapuã, Paralela e outras regiões. Informe seu bairro para confirmar a cobertura.</p>
            <div className="local-address">
              <MapPin size={22} aria-hidden="true" />
              <address>{site.address}<br />CEP 41770-095</address>
            </div>
            <ContactButton location="local">Consultar meu bairro</ContactButton>
            <a className="review-link" href={site.maps} target="_blank" rel="noopener noreferrer">Conheça as avaliações no Google <ArrowUpRight size={16} /></a>
          </div>
        </div>

        <div className="local-map-section">
          <div className="local-map-header">
            <div>
              <p className="eyebrow" style={{ color: 'var(--yellow)', marginBottom: '8px' }}>LOCALIZAÇÃO NO MAPA</p>
              <h3 style={{ color: '#fff', fontSize: '1.4rem' }}>Venha conhecer nossa loja física no STIEP</h3>
            </div>
            <a href={site.maps} target="_blank" rel="noopener noreferrer" className="map-route-btn">
              <MapPin size={17} /> Abrir Rota no Google Maps <ArrowUpRight size={15} />
            </a>
          </div>
          <GoogleMapLazy height={380} theme="dark" title="Mapa da Loja Minha Bateria no STIEP Salvador" />
        </div>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--surface)', paddingTop: '40px', paddingBottom: '40px', borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <NeighborhoodGrid />
      </div>
    </section>

    <section className="faq section"><div className="container faq-grid"><div className="section-heading"><p className="eyebrow blue">TIRE SUAS DÚVIDAS</p><h2>Antes de pedir<br />sua bateria.</h2><p>Não sabe qual é o modelo?<br />A gente ajuda você a descobrir.</p><a className="text-link" href={whatsapp()} target="_blank" rel="noopener noreferrer" data-contact="whatsapp" data-location="faq">Conversar com a equipe <ArrowUpRight size={18} /></a></div><FAQ items={faqs} /></div></section>

    <section className="closing"><div className="container closing-inner"><div><p className="eyebrow">DISK BATERIA SALVADOR</p><h2>Vamos colocar seu dia<br />em movimento?</h2><p>Conte seu veículo e seu bairro. Sua próxima partida começa aqui.</p></div><div className="closing-actions"><ContactButton location="closing">Pedir orçamento agora</ContactButton><a href={`tel:+${site.phone}`} data-contact="phone" data-location="closing"><Phone size={18} /> {site.phoneDisplay}</a></div></div></section>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
    />
  </main>;
}
