import type { Metadata } from 'next';
import { ShieldCheck, Lock, Mail, Phone, MapPin } from 'lucide-react';
import { Breadcrumbs, ContactButton } from '../components';
import { site, social } from '../site';

export const metadata: Metadata = {
  title: 'Políticas de Privacidade | Minha Bateria Salvador',
  description: 'Conheça nossa Política de Privacidade e Proteção de Dados (LGPD). Saiba como a Minha Bateria Salvador coleta, utiliza e protege suas informações.',
  alternates: { canonical: '/politicas-de-privacidade/' },
  openGraph: {
    ...social,
    title: 'Políticas de Privacidade | Minha Bateria Salvador',
    url: '/politicas-de-privacidade/',
  },
};

export default function PoliticaPrivacidade() {
  const breadcrumbItems = [
    { name: 'Início', url: '/' },
    { name: 'Políticas de Privacidade', url: '/politicas-de-privacidade/' },
  ];

  return (
    <main id="conteudo" className="inner-page">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow"><ShieldCheck size={14} /> SEGURANÇA E TRANSPARÊNCIA</p>
          <h1>Políticas de Privacidade</h1>
          <p>
            Compromisso com a proteção dos seus dados pessoais e transparência no atendimento, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
          </p>
        </div>
      </section>

      <div className="container inner-content">
        <section>
          <h2>1. Introdução</h2>
          <p>
            A <strong>Minha Bateria Salvador</strong>, com sede em Salvador – BA, é comprometida com a proteção dos seus dados pessoais e com a transparência na forma como são coletados, utilizados e armazenados. Esta Política de Privacidade tem o objetivo de informar como tratamos as informações dos usuários que acessam nosso site e de orientar sobre os seus direitos, conforme a Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018).
          </p>
        </section>

        <section>
          <h2>2. Definições Importantes</h2>
          <p>Para facilitar a compreensão desta Política, esclarecemos os seguintes termos:</p>
          <ul>
            <li><strong>Dados Pessoais:</strong> informações relacionadas a uma pessoa natural identificada ou identificável, como nome, e-mail, telefone, endereço, entre outros.</li>
            <li><strong>Tratamento de Dados:</strong> qualquer operação realizada com dados pessoais, como coleta, armazenamento, uso, compartilhamento e exclusão.</li>
            <li><strong>Titular:</strong> o usuário ou cliente que fornece seus dados pessoais.</li>
            <li><strong>Controlador:</strong> a <strong>Minha Bateria Salvador</strong>, responsável por definir as finalidades e os meios de tratamento dos dados pessoais.</li>
            <li><strong>Cookies:</strong> pequenos arquivos de texto utilizados para identificar o navegador ou dispositivo do usuário, facilitando a navegação e personalizando a experiência no site.</li>
          </ul>
        </section>

        <section>
          <h2>3. Dados Pessoais Coletados</h2>
          <p>Podemos coletar os seguintes dados pessoais quando você interage com o nosso site ou solicita atendimento:</p>
          <ul>
            <li><strong>Dados fornecidos diretamente:</strong> nome, e-mail, telefone/WhatsApp, bairro e endereço inseridos para solicitação de orçamento, pedido de entrega ou suporte técnico.</li>
            <li><strong>Dados de navegação:</strong> informações coletadas automaticamente (por meio de cookies e tecnologias de telemetria analítica), como endereço IP aproximado, tipo de navegador, páginas visitadas e tempo de navegação.</li>
            <li><strong>Dados de transações:</strong> informações necessárias para processar pedidos de baterias, emissão de comprovantes de garantia e notas fiscais.</li>
          </ul>
        </section>

        <section>
          <h2>4. Finalidades do Tratamento</h2>
          <p>Utilizamos os seus dados pessoais exclusivamente para:</p>
          <ul>
            <li><strong>Prestação de Serviços:</strong> possibilitar o atendimento via WhatsApp, entrega e instalação de baterias veiculares em Salvador, testes elétricos no local e emissão de certificados de garantia.</li>
            <li><strong>Melhoria da Experiência:</strong> analisar o desempenho do site e aprimorar a velocidade de navegação e a relevância dos conteúdos oferecidos.</li>
            <li><strong>Comunicação e Suporte:</strong> responder a dúvidas técnicas sobre aplicações de baterias, pós-venda e acionamento de garantias de fábrica.</li>
            <li><strong>Segurança:</strong> monitorar e prevenir acessos indevidos e fraudes nos nossos canais digitais.</li>
          </ul>
        </section>

        <section>
          <h2>5. Compartilhamento de Dados</h2>
          <p>
            A <strong>Minha Bateria Salvador</strong> não comercializa, não aluga e não compartilha dados pessoais com terceiros para fins publicitários independentes. O compartilhamento ocorre apenas com prestadores essenciais (sistemas de emissão fiscal, plataformas de pagamento e ferramentas analíticas) ou mediante obrigação legal.
          </p>
        </section>

        <section>
          <h2>6. Cookies e Tecnologias de Rastreamento</h2>
          <p>
            Utilizamos cookies técnicos e analíticos para garantir que as páginas carreguem de forma segura e rápida. Você pode configurar seu navegador para recusar cookies a qualquer momento, sem prejuízo à navegação básica no site.
          </p>
        </section>

        <section>
          <h2>7. Segurança e Armazenamento</h2>
          <p>
            Adotamos medidas técnicas e administrativas compatíveis com as melhores práticas de segurança digital para proteger seus dados contra acessos não autorizados ou destruição acidental. As conexões em nosso site são protegidas por criptografia SSL/HTTPS.
          </p>
        </section>

        <section>
          <h2>8. Seus Direitos como Titular de Dados</h2>
          <p>Em conformidade com o artigo 18 da LGPD, você tem o direito de:</p>
          <ul>
            <li>Confirmar a existência de tratamento dos seus dados.</li>
            <li>Acessar, corrigir ou atualizar informações incompletas ou inexatas.</li>
            <li>Solicitar a eliminação ou anonimização de dados pessoais tratados com o seu consentimento.</li>
            <li>Revogar o consentimento a qualquer momento de forma gratuita e facilitada.</li>
          </ul>
        </section>

        <section>
          <h2>9. Canal de Atendimento e Encarregado (DPO)</h2>
          <p>Para exercer qualquer um dos seus direitos ou esclarecer dúvidas sobre a privacidade dos seus dados, entre em contato diretamente conosco:</p>
          <div className="contact-details" style={{ marginTop: '20px' }}>
            <div>
              <h3>Canais Diretos</h3>
              <p><Mail size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> <a href={`mailto:${site.email}`}>{site.email}</a></p>
              <p><Phone size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> <a href={`tel:+${site.phone}`}>{site.phoneDisplay}</a></p>
            </div>
            <div>
              <h3>Endereço da Loja</h3>
              <p><MapPin size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> {site.address}</p>
              <p>STIEP — Salvador, Bahia — CEP 41770-095</p>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '30px', borderTop: '1px solid var(--line)', paddingTop: '20px', fontSize: '0.85rem', color: 'var(--muted)' }}>
          <p>Esta política foi atualizada em: <strong>Março de 2026</strong>. Quaisquer alterações futuras serão publicadas nesta mesma página.</p>
        </section>
      </div>
    </main>
  );
}
