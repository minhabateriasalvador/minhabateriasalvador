export const site = {
  name: 'Minha Bateria Salvador',
  url: 'https://www.minhabateriasalvador.com.br',
  phone: '5571993151471',
  phoneDisplay: '(71) 99315-1471',
  email: 'contato@minhabateria.com.br',
  address: 'Rua Arthur Fraga, 218, Loja 01 — STIEP, Salvador — BA',
  maps: 'https://maps.google.com/maps?cid=15088412402514049413',
  reviews: 'https://g.page/r/CYW5cmQjz2TREBM/review',
  googleSearch: 'https://www.google.com/search?q=Minha+Bateria+Salvador',
  googleReviewsPopup: 'https://www.google.com/search?q=Minha+Bateria+Salvador#lrd=0x7161b1f6bcbae1d:0xd164cf236472b985,1,,,,',
  reviewsCount: 275,
  ratingValue: '4.9',
};

// Site liberado e indexavel oficialmente para producao e Google Search Console
export const indexable = true;

export const social = {
  locale: 'pt_BR',
  type: 'website' as const,
  siteName: site.name,
  images: [{ url: '/images/compartilhar.webp', width: 1200, height: 630, alt: 'Minha Bateria Salvador' }],
};

export const whatsapp = (subject = 'uma bateria') =>
  `https://wa.me/${site.phone}?text=${encodeURIComponent(`Olá! Vim pelo site Minha Bateria Salvador e gostaria de um orçamento de ${subject}.`)}`;

export const categories = [
  { name: 'Bateria para carro', image: 'bateria-carro.webp', alt: 'Carro branco e bateria Moura', description: 'Para carros de passeio e SUVs. Informe modelo e ano para encontrarmos a capacidade e o encaixe corretos.', capacities: ['45 Ah', '60 Ah', '70 Ah', '90 Ah'], brands: ['Moura', 'Zetta', 'Heliar'], subject: 'bateria para carro' },
  { name: 'Bateria para moto', image: 'bateria-moto.webp', alt: 'Motocicleta e bateria Moura', description: 'Baterias para motos e scooters, com garantia de fábrica. Consulte a aplicação certa para a sua motocicleta.', capacities: ['5 Ah', '7 Ah', '10 Ah', '12 Ah'], brands: ['Moura', 'Zetta', 'Pioneiro'], subject: 'bateria para moto' },
  { name: 'Bateria para caminhão', image: 'bateria-caminhao.webp', alt: 'Caminhão Mercedes-Benz e bateria Heliar', description: 'Opções para caminhões, vans e frotas. Nossa equipe confere a aplicação e a disponibilidade para seu veículo.', capacities: ['100 Ah', '150 Ah', '180 Ah', '220 Ah'], brands: ['Heliar', 'Pioneiro', 'Moura'], subject: 'bateria para caminhão' },
  { name: 'Bateria Start-Stop', image: 'bateria-start-stop.webp', alt: 'Carro com sistema Start-Stop e bateria Moura', description: 'Tecnologias EFB e AGM para veículos Start-Stop. A escolha considera a especificação original do fabricante.', capacities: ['60 Ah', '70 Ah', '72 Ah', '90 Ah'], brands: ['Moura', 'Heliar', 'Kondor'], subject: 'bateria Start-Stop EFB ou AGM' },
];

export const testimonials = [
  {
    name: 'Renato Uzel',
    avatar: '/images/avaliacoes/renato-uzel.webp',
    badge: 'Cliente Google',
    rating: 5,
    text: 'Excelente serviço, liguei pedindo uma bateria nova e chegou em menos de 20min. O técnico Jurandir muito atencioso e educado. Bateria com preço bom, e diversas outras opções de valores também.',
    time: 'Avaliação no Google',
  },
  {
    name: 'Francisco Zeilson Marques Viana Júnior',
    avatar: '/images/avaliacoes/francisco-zeilson.webp',
    badge: 'Local Guide • 18 avaliações',
    rating: 5,
    text: 'Encontrei a Minha Bateria na Internet e fui rapidamente atendido pelo WhatsApp, e também rapidamente já me trouxeram a bateria para substituir. Foi o melhor preço que encontrei e com ótimo atendimento.',
    time: '4 meses atrás',
  },
  {
    name: 'Jair Oliveira',
    avatar: '/images/avaliacoes/jair-oliveira.webp',
    badge: 'Local Guide • 69 avaliações',
    rating: 5,
    text: 'Serviço de entrega e instalação rápido, eficiente e técnico muito cordial e educado.',
    time: '3 meses atrás',
  },
  {
    name: 'Elen Shelby',
    avatar: '/images/avaliacoes/elen-shelby.webp',
    badge: 'Cliente Google',
    rating: 5,
    text: '👏👏👏👏🙏🏻 Gratidão a Michel e ao técnico Alex Jesus abençoe vcs.',
    time: 'Avaliação no Google',
  },
  {
    name: 'Tayná Gonzalez',
    avatar: '/images/avaliacoes/tayna-gonzalez.webp',
    badge: 'Cliente Google',
    rating: 5,
    text: 'Serviço rápido e eficiente! Preço e qualidade! Indico..',
    time: 'Avaliação no Google',
  },
  {
    name: 'Raquel Magalhães',
    avatar: '/images/avaliacoes/raquel-magalhaes.webp',
    badge: 'Cliente Google',
    rating: 5,
    text: 'Excelente. Tratamento ótimo. Michel, correspondeu a minha expectativa. Recomendo compra de baterias, com a "Minha Bateria."',
    time: 'Avaliação no Google',
  },
];

export const faqs = [
  { question: 'Disk Baterias Salvador: como fazer meu pedido?', answer: 'Chame a Minha Bateria pelo WhatsApp ou ligue para (71) 99315-1471. Envie o modelo e o ano do veículo, seu bairro e, se possível, uma foto da bateria atual. A equipe confirma a bateria indicada, o valor e a previsão de atendimento antes de combinar a entrega.' },
  { question: 'A entrega e a instalação da bateria são grátis?', answer: 'Oferecemos entrega e instalação gratuitas em Salvador. Informe seu endereço para confirmar a cobertura e a previsão de chegada. O prazo depende do bairro, do trânsito e da disponibilidade da equipe e do produto.' },
  { question: 'Vocês têm bateria Moura em Salvador?', answer: 'Sim. Trabalhamos com baterias Moura para diferentes aplicações, incluindo modelos convencionais e Start-Stop. Consulte o estoque pelo WhatsApp. A capacidade, a tecnologia e a garantia variam conforme o modelo indicado para o veículo.' },
  { question: 'Qual é o preço da bateria de 60 amperes?', answer: 'O valor depende da marca, do modelo, da tecnologia e das condições da troca da bateria usada. Envie os dados do veículo para receber um orçamento atualizado, com as condições de pagamento e a garantia do produto.' },
  { question: 'Como saber se preciso trocar a bateria?', answer: 'Dificuldade para dar partida pode ter outras causas além da bateria. Nossa equipe realiza o teste da bateria e do sistema elétrico antes de indicar a troca, para ajudar a identificar a necessidade do seu veículo.' },
  { question: 'Posso entregar minha bateria usada na troca?', answer: 'Sim, aceitamos a bateria usada na troca. Informe essa condição ao pedir o orçamento para a equipe confirmar o valor e orientar sobre a devolução.' },
];

export const neighborhoods = [
  'STIEP', 'Pituba', 'Itaigara', 'Brotas', 'Caminho das Árvores', 'Costa Azul',
  'Armação', 'Boca do Rio', 'Imbuí', 'Patamares', 'Piatã', 'Itapuã',
  'Barra', 'Graça', 'Vitória', 'Ondina', 'Rio Vermelho', 'Cabula',
  'Horto Florestal', 'Paralela', 'Stella Maris'
];

export const brandPages = {
  moura: {
    slug: 'bateria-moura-salvador',
    name: 'Bateria Moura Salvador',
    brandName: 'Moura',
    title: 'Bateria Moura Salvador | Entrega e Instalação Grátis',
    description: 'Bateria Moura Salvador com entrega rápida e instalação grátis. Bateria para carros e Start-Stop com até 24 meses de garantia. Peça pelo WhatsApp!',
    heroTitle: 'Bateria Moura Salvador com entrega e instalação grátis.',
    heroSummary: 'A Minha Bateria Salvador é revenda oficial de baterias Moura com atendimento ágil em Salvador e saída rápida da nossa loja no STIEP. Levamos até você com teste elétrico no local e condições especiais à base de troca.',
    warranty: 'Até 24 meses de garantia oficial de fábrica com assistência nacional',
    badge: 'LÍDER EM CONFIANÇA',
    models: [
      { code: 'M48FD / M50ED', capacity: '48 Ah / 50 Ah', cca: '380 A', application: 'Gol, Uno, Ka, Mobi, Kwid, Up, C3, 208', warranty: '24 meses' },
      { code: 'M60GD / M60GE', capacity: '60 Ah', cca: '440 A', application: 'Onix, Prisma, HB20, Corolla, Civic, Fox, Argo, Polo, Renegade Flex', warranty: '24 meses' },
      { code: 'M70KD / M75LD', capacity: '70 Ah / 75 Ah', cca: '580 A', application: 'Compass Flex, Toro, Hilux, Ranger, S10, Pajero, Duster', warranty: '24 meses' },
      { code: 'Moura EFB (Start-Stop)', capacity: '60 Ah / 72 Ah', cca: '560 A - 680 A', application: 'Nivus, T-Cross, Renegade, Compass, Toro, Tracker, Pulse, Fastback', warranty: '24 meses' },
      { code: 'Moura AGM (Start-Stop)', capacity: '70 Ah / 80 Ah / 92 Ah', cca: '760 A - 850 A', application: 'BMW, Mercedes-Benz, Audi, Volvo, Ranger Diesel, Compass Diesel', warranty: '24 meses' },
      { code: 'Moura Moto (MA Series)', capacity: '5 Ah a 12 Ah', cca: '50 A - 120 A', application: 'Honda CG, Biz, Bros, Yamaha Fazer, Factor, PCX, NMax', warranty: '6 meses' },
    ],
    faqs: [
      { question: 'Qual é o prazo de garantia da bateria Moura?', answer: 'A linha automotiva Moura (convencional e Start-Stop) conta com garantia oficial de até 24 meses de fábrica, com cobertura e assistência técnica em todo o território nacional.' },
      { question: 'A Minha Bateria realiza a entrega e instalação da Moura no local?', answer: 'Sim! Realizamos a entrega e a instalação gratuita da sua bateria Moura em Salvador. Nossa equipe faz o teste de carga da bateria e do alternador antes da instalação.' },
      { question: 'Como saber qual modelo de Moura é o ideal para o meu carro?', answer: 'Envie o modelo e o ano do seu carro pelo WhatsApp. Nossa equipe consulta a tabela técnica da fábrica Moura para indicar a capacidade (Ah), polo e dimensões exatas da caixa.' },
      { question: 'Vocês recebem a bateria usada na compra da Moura?', answer: 'Sim. A compra à base de troca garante um desconto imediato no orçamento, além de assegurar o descarte e reciclagem ambientalmente corretos.' },
    ]
  },
  heliar: {
    slug: 'bateria-heliar-salvador',
    name: 'Bateria Heliar Salvador',
    brandName: 'Heliar',
    title: 'Bateria Heliar Salvador | PowerFrame e Garantia 24 Meses',
    description: 'Bateria Heliar Salvador com tecnologia PowerFrame e proteção contra corrosão. Socorro 24h em todo o Brasil e instalação rápida. Peça pelo WhatsApp!',
    heroTitle: 'Bateria Heliar Salvador com tecnologia PowerFrame.',
    heroSummary: 'Baterias Heliar com tecnologia patenteada PowerFrame: até 66% mais durabilidade e alta resistência à corrosão por altas temperaturas e maresia de Salvador. Entrega e instalação rápida no seu bairro.',
    warranty: '24 meses de garantia e Proteção 24h Heliar',
    badge: 'TECNOLOGIA AVANÇADA',
    models: [
      { code: 'Heliar Original 50Ah', capacity: '50 Ah', cca: '400 A', application: 'Etios, Yaris, March, Versa, Fit, City, HB20 1.0', warranty: '24 meses' },
      { code: 'Heliar Original 60Ah', capacity: '60 Ah', cca: '480 A', application: 'Onix, Prisma, Creta, Kicks, Duster, Sandero, Corolla, Civic', warranty: '24 meses' },
      { code: 'Heliar Original 75Ah', capacity: '75 Ah', cca: '620 A', application: 'Pickups médias, SUVs, Vans e veículos utilitários', warranty: '24 meses' },
      { code: 'Heliar EFB Start-Stop', capacity: '60 Ah / 72 Ah', cca: '580 A - 700 A', application: 'Veículos com sistema Start-Stop nacional e importado', warranty: '24 meses' },
      { code: 'Heliar AGM Start-Stop', capacity: '70 Ah / 80 Ah / 95 Ah', cca: '760 A - 850 A', application: 'Veículos premium com frenagem regenerativa e alta demanda elétrica', warranty: '24 meses' },
    ],
    faqs: [
      { question: 'O que é a tecnologia PowerFrame da Heliar?', answer: 'A PowerFrame é uma tecnologia patenteada de grade estrutural estampada que proporciona até 66% mais durabilidade e proteção superior contra corrosão interna provocada pelo calor elevado e maresia de Salvador.' },
      { question: 'Como funciona a assistência 24h Heliar?', answer: 'Ao adquirir uma bateria Heliar da linha automotiva participante, você conta com o serviço de assistência técnica e socorro 24 horas em qualquer lugar do Brasil durante a vigência da garantia.' },
      { question: 'A Heliar é equipamento original de montadora?', answer: 'Sim. A Heliar é a fornecedora original de bateria para grande parte das principais montadoras instaladas no Brasil, comprovando seu alto padrão de engenharia.' },
    ]
  },
  zetta: {
    slug: 'bateria-zetta-salvador',
    name: 'Bateria Zetta Salvador',
    brandName: 'Zetta',
    title: 'Bateria Zetta Salvador | Fabricada pela Moura com Entrega',
    description: 'Bateria Zetta Salvador: qualidade e procedência do Grupo Moura com o melhor preço. Entrega e instalação grátis no seu bairro. Peça pelo WhatsApp!',
    heroTitle: 'Bateria Zetta Salvador: procedência Moura com economia.',
    heroSummary: 'Produzida pela Acumuladores Moura S.A., a Bateria Zetta combina a engenharia e qualidade da líder de mercado com um preço acessível. É a melhor opção para motoristas de aplicativo, frotas e uso diário em Salvador.',
    warranty: '12 a 15 meses de garantia de fábrica',
    badge: 'MELHOR CUSTO-BENEFÍCIO',
    models: [
      { code: 'Zetta 45Ah (Z45D)', capacity: '45 Ah', cca: '360 A', application: 'Celta, Classic, Uno, Palio, Ka antigo, Kwid, Clio', warranty: '12 a 15 meses' },
      { code: 'Zetta 60Ah (Z60D)', capacity: '60 Ah', cca: '400 A', application: 'Onix, Prisma, HB20, Fox, Voyage, Gol G5/G6, Sandero, Logan', warranty: '12 a 15 meses' },
      { code: 'Zetta 70Ah (Z70D)', capacity: '70 Ah', cca: '500 A', application: 'Sedans médios, utilitários leves e carros com som automotivo moderado', warranty: '12 a 15 meses' },
    ],
    faqs: [
      { question: 'A bateria Zetta é mesmo fabricada pela Moura?', answer: 'Sim! A Zetta é a segunda linha oficial do grupo Acumuladores Moura S.A., fabricada nas mesmas instalações industriais e seguindo os padrões do Inmetro e da fábrica Moura.' },
      { question: 'Por que a bateria Zetta é mais barata que a Moura?', answer: 'A Zetta oferece garantia de 12 a 15 meses (enquanto a Moura tradicional oferece até 24 meses), o que possibilita um preço de compra mais econômico mantendo a alta confiabilidade.' },
      { question: 'A Zetta aguenta o uso intenso de motoristas de aplicativo (Uber / 99)?', answer: 'Sim! É uma das marcas mais recomendadas para motoristas de app em Salvador por conta da excelente relação de custo por quilômetro rodado e resistência a ciclos diários de partida.' },
    ]
  },
  startStop: {
    slug: 'bateria-start-stop-salvador',
    name: 'Bateria Start-Stop Salvador',
    brandName: 'Start-Stop (EFB / AGM)',
    title: 'Bateria Start-Stop Salvador | EFB e AGM com Instalação',
    description: 'Bateria Start-Stop Salvador: modelos EFB e AGM Moura e Heliar com instalação técnica sem desprogramar seu veículo. Peça pelo WhatsApp!',
    heroTitle: 'Bateria Start-Stop Salvador: tecnologias EFB e AGM.',
    heroSummary: 'Veículos equipados com desligamento automático do motor em paradas precisam de baterias especiais EFB ou AGM. Levamos a especificação correta até você com troca técnica segura sem desprogramar o painel.',
    warranty: 'Até 24 meses de garantia de fábrica',
    badge: 'ALTA TECNOLOGIA EFB / AGM',
    models: [
      { code: 'Moura / Heliar EFB 60Ah', capacity: '60 Ah', cca: '560 A - 580 A', application: 'Nivus TSI, T-Cross TSI, Polo TSI, Tracker Turbo, Onix Premier, Renegade Flex', warranty: '24 meses' },
      { code: 'Moura / Heliar EFB 72Ah', capacity: '72 Ah', cca: '680 A - 700 A', application: 'Compass Flex, Toro Flex, Pulse, Fastback, Corolla Cross, Duster Turbo', warranty: '24 meses' },
      { code: 'Moura / Heliar AGM 70Ah / 80Ah', capacity: '70 Ah - 80 Ah', cca: '760 A - 800 A', application: 'Jeep Compass Diesel, Commander, BMW Série 3, Mercedes C-Class, Audi A3/A4', warranty: '24 meses' },
      { code: 'Moura / Heliar AGM 92Ah / 95Ah', capacity: '92 Ah - 95 Ah', cca: '850 A', application: 'SUVs grandes de luxo: Porsche, Range Rover, Volvo XC60/XC90, Audi Q5/Q7', warranty: '24 meses' },
    ],
    faqs: [
      { question: 'Posso colocar bateria comum em carro com Start-Stop?', answer: 'Não! Baterias convencionais não suportam a altíssima ciclagem de carga e descarga do Start-Stop. Uma bateria comum colocada em um carro Start-Stop costuma durar menos de 6 meses e pode danificar a central eletrônica e o alternador inteligente.' },
      { question: 'Qual a diferença entre EFB e AGM?', answer: 'As baterias EFB são indicadas para carros nacionais e médios com Start-Stop padrão. As baterias AGM possuem mantas de fibra de vidro absorvente e são projetadas para veículos com alta demanda de eletrônica embarcada e regeneração de energia de frenagem.' },
      { question: 'A troca da bateria apaga a memória do carro?', answer: 'Nossa equipe técnica utiliza procedimento com backup de alimentação para proteger os dados do computador de bordo, rádio, sensores e calibragem de vidros do veículo.' },
    ]
  }
};

export const articles = [
  {
    slug: 'carro-nao-pega-estalos-bateria-ou-arranque',
    title: 'Carro Não Pega e Faz Barulho de Estalo: É Bateria ou Motor de Arranque?',
    description: 'Ouviu um "tec tec" ao girar a chave ou apertar o botão Start? Saiba identificar rapidamente se o problema é bateria descarregada ou defeito no motor de arranque.',
    category: 'Diagnóstico',
    readTime: '3 min de leitura',
    date: '08 de Março de 2026',
    subject: 'diagnóstico de carro que não pega com estalos'
  },
  {
    slug: 'bateria-moura-ou-heliar-qual-a-melhor',
    title: 'Bateria Moura ou Heliar: Qual a Melhor Escolha para Salvador?',
    description: 'Comparativo técnico entre as duas principais marcas do Brasil: tecnologia de grade, garantia oficial, durabilidade sob o calor e maresia de Salvador.',
    category: 'Comparativo',
    readTime: '4 min de leitura',
    date: '08 de Março de 2026',
    subject: 'dúvida entre Bateria Moura e Heliar'
  },
  {
    slug: 'bateria-comum-em-carro-start-stop',
    title: 'Posso Colocar Bateria Comum em Carro com Sistema Start-Stop?',
    description: 'Entenda os riscos elétricos, perda de garantia e por que carros modernos exigem baterias de tecnologia EFB ou AGM.',
    category: 'Tecnologia',
    readTime: '3 min de leitura',
    date: '08 de Março de 2026',
    subject: 'dúvida sobre bateria convencional em carro Start-Stop'
  }
];

