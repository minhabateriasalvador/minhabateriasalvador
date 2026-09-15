import type { Metadata } from 'next';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { ContactButton } from '../components';
import { site, social } from '../site';
import { GoogleMapLazy } from '../google-map-lazy';

export const metadata: Metadata = {
  title: 'Contato e Loja no STIEP | Minha Bateria Salvador',
  description: 'Fale com a Minha Bateria Salvador pelo (71) 99315-1471. Rua Arthur Fraga, 218, Loja 01, STIEP. Peça orçamento e consulte a entrega no seu bairro.',
  alternates: { canonical: '/contato/' },
  openGraph: { ...social, title: 'Contato | Minha Bateria Salvador', url: '/contato/' },
};

export default function Contact() {
  return (
    <main id="conteudo" className="inner-page">
      <div className="inner-hero">
        <div className="container">
          <p className="eyebrow">VAMOS CONVERSAR</p>
          <h1>Sua bateria começa<br />com uma mensagem.</h1>
          <p>Envie o modelo, o ano do veículo e seu bairro. Nossa equipe confirma a bateria indicada, o preço e a previsão de atendimento.</p>
        </div>
      </div>
      <div className="container inner-content">
        <section className="contact-details">
          <div>
            <h2>Fale com a equipe</h2>
            <p>
              <a href={`tel:+${site.phone}`} data-contact="phone" data-location="contact">{site.phoneDisplay}</a><br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <ContactButton location="contact">Pedir orçamento</ContactButton>
          </div>
          <div>
            <h2>Nossa loja no STIEP</h2>
            <address>{site.address}<br />CEP 41770-095</address>
            <a href={site.maps} target="_blank" rel="noopener noreferrer" className="map-link">
              <MapPin size={18} /> Abrir no Google Maps <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <section className="contact-map-section">
          <h2>Como chegar à nossa loja no STIEP</h2>
          <p>Fácil acesso pela Av. Tancredo Neves e Paralela. Traga seu carro para testar alternador e bateria gratuitamente no local.</p>
          <GoogleMapLazy height={400} theme="light" />
        </section>

        <section>
          <h2>Atendimento no seu bairro</h2>
          <p>STIEP, Pituba, Brotas, Barra, Rio Vermelho, Itapuã, Paralela e outras regiões de Salvador. Consulte a cobertura, o horário de atendimento e a disponibilidade antes de se deslocar ou combinar a entrega.</p>
        </section>
      </div>
    </main>
  );
}

