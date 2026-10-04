import type { Copy } from "./i18n";

export const EXPRESS_APP_URL = "https://express-web-one.vercel.app/login";
export const COOPERADO_URL = "https://cooperado.cocapec.com.br/";

export type NavItem = {
  label: Copy;
  href: string;
  internal?: boolean;
  children?: { label: Copy; href: string }[];
};

export const navItems: NavItem[] = [
  {
    label: { pt: "COCAPEC", en: "COCAPEC" },
    href: "https://www.cocapec.com.br/institucional",
    children: [
      { label: { pt: "Institucional", en: "About" }, href: "https://www.cocapec.com.br/institucional" },
      { label: { pt: "Estrutura de Governança", en: "Governance structure" }, href: "https://www.cocapec.com.br/estrutura-de-governanca" },
      { label: { pt: "Certificações", en: "Certifications" }, href: "https://www.cocapec.com.br/certificacoes-e-reconhecimentos" },
      { label: { pt: "Cooperativismo", en: "Cooperativism" }, href: "https://www.cocapec.com.br/cooperativismo" },
      { label: { pt: "Sustentabilidade", en: "Sustainability" }, href: "https://www.cocapec.com.br/sustentabilidade" },
    ],
  },
  {
    label: { pt: "Governança e Transparência", en: "Governance and transparency" },
    href: "https://www.cocapec.com.br/governanca-e-transparencia",
    children: [
      { label: { pt: "Estatuto", en: "Bylaws" }, href: "https://www.cocapec.com.br/governanca-e-transparencia#estatuto" },
      { label: { pt: "LGPD", en: "Data protection" }, href: "https://www.cocapec.com.br/governanca-e-transparencia#lgpd" },
      { label: { pt: "Manual Boas Práticas Trabalhistas", en: "Labor good-practice manual" }, href: "https://www.cocapec.com.br/governanca-e-transparencia#manual-de-boas-praticas-trabalhistas" },
      { label: { pt: "Relatório Gestão", en: "Management report" }, href: "https://www.cocapec.com.br/governanca-e-transparencia#relatorio-de-gestao" },
      { label: { pt: "Canal de Ética", en: "Ethics channel" }, href: "https://www.cocapec.com.br/governanca-e-transparencia#canal-de-etica" },
      { label: { pt: "Ouvidoria", en: "Ombudsman" }, href: "https://www.cocapec.com.br/governanca-e-transparencia#ouvidoria" },
      { label: { pt: "Relatório de Sustentabilidade", en: "Sustainability report" }, href: "https://www.cocapec.com.br/relatorio-de-sustentabilidade" },
      { label: { pt: "Relatório de Transparência e Igualdade Salarial", en: "Pay transparency report" }, href: "https://www.cocapec.com.br/relatorio-de-transparencia-e-igualdade-salarial" },
    ],
  },
  {
    label: { pt: "Unidades de Negócios", en: "Business units" },
    href: "https://www.cocapec.com.br/unidades-de-negocios",
    children: [
      { label: { pt: "Armazenagem", en: "Warehousing" }, href: "https://www.cocapec.com.br/unidades-de-negocios#armazenagem" },
      { label: { pt: "Classificação/Degustação", en: "Grading and cupping" }, href: "https://www.cocapec.com.br/unidades-de-negocios#classificacaodegustacao" },
      { label: { pt: "Comercialização Café", en: "Coffee trading" }, href: "https://www.cocapec.com.br/unidades-de-negocios#comercializacao-cafe" },
      { label: { pt: "Exportação de café", en: "Coffee export" }, href: "https://www.cocapec.com.br/unidades-de-negocios#exportacao-de-cafe" },
      { label: { pt: "Torrefação", en: "Roasting" }, href: "https://www.cocapec.com.br/unidades-de-negocios#torrefacao" },
      { label: { pt: "Insumos", en: "Inputs" }, href: "https://www.cocapec.com.br/unidades-de-negocios#insumos" },
      { label: { pt: "Máquinas e Implementos", en: "Machinery" }, href: "https://www.cocapec.com.br/unidades-de-negocios#maquinas-e-implementos" },
      { label: { pt: "Espaço veterinário", en: "Veterinary space" }, href: "https://www.cocapec.com.br/unidades-de-negocios#espaco-veterinario" },
      { label: { pt: "Concessionária Mahindra", en: "Mahindra dealership" }, href: "https://www.cocapec.com.br/unidades-de-negocios#concessionaria-mahindra" },
      { label: { pt: "Revendedora Oficial TDI", en: "Official TDI dealer" }, href: "https://www.cocapec.com.br/unidades-de-negocios#revendedora-oficial-tdi" },
    ],
  },
  {
    label: { pt: "Serviços", en: "Services" },
    href: "https://www.cocapec.com.br/servicos",
    children: [
      { label: { pt: "Assistência Técnica", en: "Technical assistance" }, href: "https://www.cocapec.com.br/servicos" },
      { label: { pt: "Laboratório de Análises (Solo e Tecido Vegetal)", en: "Analysis laboratory" }, href: "https://www.cocapec.com.br/servicos" },
      { label: { pt: "Estação Meteorológica", en: "Weather station" }, href: "https://www.cocapec.com.br/servicos" },
      { label: { pt: "GIS - Sistema de Informação Geográfica", en: "GIS" }, href: "https://www.cocapec.com.br/servicos" },
      { label: { pt: "Coleta de Embalagens", en: "Packaging collection" }, href: "https://www.cocapec.com.br/servicos" },
      { label: { pt: "Oficina Mecânica", en: "Mechanical workshop" }, href: "https://www.cocapec.com.br/servicos" },
    ],
  },
  {
    label: { pt: "Nossos Cafés", en: "Our coffees" },
    href: "https://www.cocapec.com.br/nossos-cafes",
    children: [
      { label: { pt: "Café Tulha Velha", en: "Café Tulha Velha" }, href: "https://www.cocapec.com.br/nossos-cafes" },
      { label: { pt: "Café Cocapec", en: "Café Cocapec" }, href: "https://www.cocapec.com.br/nossos-cafes" },
      { label: { pt: "Linha Senhor Café", en: "Senhor Café line" }, href: "https://senhorcafe.com.br/" },
    ],
  },
  {
    label: { pt: "Agenda", en: "Calendar" },
    href: "https://www.cocapec.com.br/agenda",
  },
  {
    label: { pt: "Novidades", en: "Newsroom" },
    href: "/novidades",
    internal: true,
  },
];

export const footerColumns: { title: Copy; links: { label: Copy; href: string; internal?: boolean }[] }[] = [
  {
    title: { pt: "COCAPEC", en: "COCAPEC" },
    links: [
      { label: { pt: "Institucional", en: "About" }, href: "https://www.cocapec.com.br/institucional" },
      { label: { pt: "Estrutura de Governança", en: "Governance structure" }, href: "https://www.cocapec.com.br/estrutura-de-governanca" },
      { label: { pt: "Certificações", en: "Certifications" }, href: "https://www.cocapec.com.br/certificacoes-e-reconhecimentos" },
      { label: { pt: "Cooperativismo", en: "Cooperativism" }, href: "https://www.cocapec.com.br/cooperativismo" },
      { label: { pt: "Sustentabilidade", en: "Sustainability" }, href: "https://www.cocapec.com.br/sustentabilidade" },
    ],
  },
  {
    title: { pt: "Governança", en: "Governance" },
    links: [
      { label: { pt: "Estatuto", en: "Bylaws" }, href: "https://www.cocapec.com.br/governanca-e-transparencia#estatuto" },
      { label: { pt: "LGPD", en: "Data protection" }, href: "https://www.cocapec.com.br/governanca-e-transparencia#lgpd" },
      { label: { pt: "Manual Boas Práticas", en: "Good-practice manual" }, href: "https://www.cocapec.com.br/governanca-e-transparencia#manual-de-boas-praticas-trabalhistas" },
      { label: { pt: "Relatório Gestão", en: "Management report" }, href: "https://www.cocapec.com.br/governanca-e-transparencia#relatorio-de-gestao" },
      { label: { pt: "Canal de Ética", en: "Ethics channel" }, href: "https://www.cocapec.com.br/governanca-e-transparencia#canal-de-etica" },
      { label: { pt: "Ouvidoria", en: "Ombudsman" }, href: "https://www.cocapec.com.br/governanca-e-transparencia#ouvidoria" },
    ],
  },
  {
    title: { pt: "Negócios", en: "Business" },
    links: [
      { label: { pt: "Unidades", en: "Units" }, href: "https://www.cocapec.com.br/unidades-de-negocios" },
      { label: { pt: "Serviços", en: "Services" }, href: "https://www.cocapec.com.br/servicos" },
    ],
  },
  {
    title: { pt: "Nossos Cafés", en: "Our coffees" },
    links: [
      { label: { pt: "Café Tulha Velha", en: "Café Tulha Velha" }, href: "https://www.cocapec.com.br/nossos-cafes" },
      { label: { pt: "Café Cocapec", en: "Café Cocapec" }, href: "https://www.cocapec.com.br/nossos-cafes" },
      { label: { pt: "Linha Senhor Café", en: "Senhor Café line" }, href: "https://senhorcafe.com.br/" },
    ],
  },
  {
    title: { pt: "Mais", en: "More" },
    links: [
      { label: { pt: "Agenda", en: "Calendar" }, href: "https://www.cocapec.com.br/agenda" },
      { label: { pt: "Contato", en: "Contact" }, href: "https://www.cocapec.com.br/contato" },
      { label: { pt: "Blog", en: "Blog" }, href: "https://www.cocapec.com.br/noticias" },
      { label: { pt: "Privacidade", en: "Privacy" }, href: "https://www.cocapec.com.br/etica-politica-de-privacidade" },
      { label: { pt: "Novidades", en: "CocapecExpress" }, href: "/novidades", internal: true },
    ],
  },
];

export const slides = [
  { src: "/media/banner-campo.webp", alt: "Dia de Campo Cocapec 2026" },
  { src: "/media/banner-2.webp", alt: "COCAPEC, o melhor café está aqui" },
];

export const sideBanners = [
  { src: "/media/senhor-cafe.webp", alt: "Senhor Café", href: "https://senhorcafe.com.br/" },
  { src: "/media/mahindra.webp", alt: "Concessionária oficial Mahindra", href: "https://www.cocapec.com.br/unidades-de-negocios#concessionaria-mahindra" },
];

export const news = [
  {
    href: "https://www.cocapec.com.br/noticias/cafe-fecha-em-baixa-em-ny-e-fisico-acompanha-pressao-em-parte-das-pracas-nesta-5a-feira",
    image: "/media/news-ny.webp",
    category: { pt: "Café", en: "Coffee" },
    date: "02/10/2026",
    minutes: "4",
    title: {
      pt: "Café fecha em baixa em NY e físico acompanha pressão em parte das praças nesta 5ª feira",
      en: "Coffee closes lower in New York and the physical market follows pressure in part of the regions",
    },
    excerpt: {
      pt: "No Brasil, perdas chegam a 1,76%, mas mercado físico encerra o dia com comportamento misto",
      en: "In Brazil, losses reach 1.76%, but the physical market ends the day mixed",
    },
  },
  {
    href: "https://www.cocapec.com.br/noticias/cocapec-chega-ao-grupo-das-500-maiores-empresas-do-brasil",
    image: "/media/news-500.webp",
    category: { pt: "Cocapec", en: "Cocapec" },
    date: "01/10/2026",
    minutes: "3",
    title: {
      pt: "Cocapec chega ao grupo das 500 maiores empresas do Brasil",
      en: "Cocapec joins the 500 largest companies in Brazil",
    },
    excerpt: {
      pt: "Com foco em governança, solidez financeira e valorização do cooperado, cooperativa avança posições no cenário nacional e colhe os frutos de um bom planejamento estratégico.",
      en: "With a focus on governance, financial strength and member value, the cooperative moves up nationally and harvests a solid strategic plan.",
    },
  },
  {
    href: "https://www.cocapec.com.br/noticias/cafe-reverte-perdas-e-fecha-com-alta-de-mais-de-1-em-ny-mesmo-com-pressao-do-real",
    image: "/media/news-alta.webp",
    category: { pt: "Café", en: "Coffee" },
    date: "30/09/2026",
    minutes: "3",
    title: {
      pt: "Café reverte perdas e fecha com alta de mais de 1% em NY, mesmo com pressão do real",
      en: "Coffee reverses losses and closes up more than 1% in New York",
    },
    excerpt: {
      pt: "Arábica chegou a recuar mais de 1% durante a sessão, pressionado pelo câmbio brasileiro, mas mudou de direção nesta 3ª (29)",
      en: "Arabica fell more than 1% during the session under pressure from the Brazilian real, then turned around on Tuesday the 29th",
    },
  },
];

export type ForecastIcon = "rain" | "cloud" | "sun";

export const weatherCities: {
  name: string;
  days: { name: Copy; date: string; max: string; min: string; icon: ForecastIcon }[];
}[] = [
  {
    name: "Franca/SP",
    days: [
      { name: { pt: "Dom", en: "Sun" }, date: "04/10", max: "30°", min: "17°", icon: "rain" },
      { name: { pt: "Seg", en: "Mon" }, date: "05/10", max: "30°", min: "18°", icon: "rain" },
      { name: { pt: "Ter", en: "Tue" }, date: "06/10", max: "26°", min: "19°", icon: "rain" },
      { name: { pt: "Qua", en: "Wed" }, date: "07/10", max: "25°", min: "17°", icon: "rain" },
      { name: { pt: "Qui", en: "Thu" }, date: "08/10", max: "32°", min: "17°", icon: "sun" },
    ],
  },
  {
    name: "Pedregulho/SP",
    days: [
      { name: { pt: "Dom", en: "Sun" }, date: "04/10", max: "29°", min: "17°", icon: "rain" },
      { name: { pt: "Seg", en: "Mon" }, date: "05/10", max: "30°", min: "18°", icon: "rain" },
      { name: { pt: "Ter", en: "Tue" }, date: "06/10", max: "27°", min: "19°", icon: "cloud" },
      { name: { pt: "Qua", en: "Wed" }, date: "07/10", max: "24°", min: "17°", icon: "cloud" },
      { name: { pt: "Qui", en: "Thu" }, date: "08/10", max: "33°", min: "17°", icon: "sun" },
    ],
  },
  {
    name: "Capetinga/MG",
    days: [
      { name: { pt: "Dom", en: "Sun" }, date: "04/10", max: "29°", min: "17°", icon: "rain" },
      { name: { pt: "Seg", en: "Mon" }, date: "05/10", max: "29°", min: "18°", icon: "rain" },
      { name: { pt: "Ter", en: "Tue" }, date: "06/10", max: "27°", min: "19°", icon: "rain" },
      { name: { pt: "Qua", en: "Wed" }, date: "07/10", max: "24°", min: "18°", icon: "rain" },
      { name: { pt: "Qui", en: "Thu" }, date: "08/10", max: "32°", min: "17°", icon: "sun" },
    ],
  },
  {
    name: "Ibiraci/MG",
    days: [
      { name: { pt: "Dom", en: "Sun" }, date: "04/10", max: "29°", min: "16°", icon: "rain" },
      { name: { pt: "Seg", en: "Mon" }, date: "05/10", max: "29°", min: "18°", icon: "rain" },
      { name: { pt: "Ter", en: "Tue" }, date: "06/10", max: "27°", min: "19°", icon: "rain" },
      { name: { pt: "Qua", en: "Wed" }, date: "07/10", max: "24°", min: "17°", icon: "rain" },
      { name: { pt: "Qui", en: "Thu" }, date: "08/10", max: "32°", min: "17°", icon: "sun" },
    ],
  },
  {
    name: "Claraval/MG",
    days: [
      { name: { pt: "Dom", en: "Sun" }, date: "04/10", max: "30°", min: "18°", icon: "rain" },
      { name: { pt: "Seg", en: "Mon" }, date: "05/10", max: "31°", min: "19°", icon: "rain" },
      { name: { pt: "Ter", en: "Tue" }, date: "06/10", max: "28°", min: "21°", icon: "cloud" },
      { name: { pt: "Qua", en: "Wed" }, date: "07/10", max: "26°", min: "18°", icon: "rain" },
      { name: { pt: "Qui", en: "Thu" }, date: "08/10", max: "34°", min: "19°", icon: "sun" },
    ],
  },
  {
    name: "São Tomás de Aquino/MG",
    days: [
      { name: { pt: "Dom", en: "Sun" }, date: "04/10", max: "29°", min: "17°", icon: "rain" },
      { name: { pt: "Seg", en: "Mon" }, date: "05/10", max: "30°", min: "18°", icon: "rain" },
      { name: { pt: "Ter", en: "Tue" }, date: "06/10", max: "27°", min: "19°", icon: "rain" },
      { name: { pt: "Qua", en: "Wed" }, date: "07/10", max: "25°", min: "18°", icon: "cloud" },
      { name: { pt: "Qui", en: "Thu" }, date: "08/10", max: "33°", min: "17°", icon: "sun" },
    ],
  },
];

export const quotes = [
  { name: "Café Fino", price: "R$ 1.640,00", change: 1.2, updated: "02/10/2026" },
  { name: "Café 6 Duro", price: "R$ 1.620,00", change: 1.3, updated: "02/10/2026" },
  { name: "Milho", price: "R$ 68,58", change: 0.1, updated: "02/10/2026" },
  { name: "Soja", price: "R$ 160,90", change: -0.4, updated: "02/10/2026" },
  { name: "Boi (arroba)", price: "R$ 366,50", change: 0.6, updated: "02/10/2026" },
];

export const events = [
  {
    href: "https://www.cocapec.com.br/agenda",
    image: "/media/event-itamogi.webp",
    alt: "Dia de Campo - Itamogi/MG",
    kind: "event" as const,
    badge: { pt: "Evento", en: "Event" },
    day: "06",
    month: { pt: "OUT", en: "OCT" },
    place: { pt: "Itamogi/MG", en: "Itamogi/MG" },
    title: { pt: "dia de Campo - Itamogi/MG", en: "Field day - Itamogi/MG" },
    text: {
      pt: "Evento direcionado para cooperados e cafeicultores da região.",
      en: "Event for members and coffee growers in the region.",
    },
  },
  {
    href: "https://www.cocapec.com.br/agenda",
    image: "/media/course-senar.webp",
    alt: "Senar Play",
    kind: "course" as const,
    badge: { pt: "Curso", en: "Course" },
    day: "01",
    month: { pt: "DEZ", en: "DEC" },
    place: { pt: "Todas", en: "All" },
    title: { pt: "Senar Play", en: "Senar Play" },
    text: { pt: "Cursos gratuitos com certificado.", en: "Free courses with a certificate." },
  },
  {
    href: "https://www.cocapec.com.br/agenda",
    image: "/media/course-cap.webp",
    alt: "Capacitacoop",
    kind: "course" as const,
    badge: { pt: "Curso", en: "Course" },
    day: "01",
    month: { pt: "DEZ", en: "DEC" },
    place: { pt: "Todas", en: "All" },
    title: { pt: "Capacitacoop", en: "Capacitacoop" },
    text: { pt: "Cursos com certificado.", en: "Courses with a certificate." },
  },
];

export const modules: { title: Copy; text: Copy }[] = [
  {
    title: { pt: "Painel", en: "Dashboard" },
    text: {
      pt: "Indicadores da operação e o dimensionamento do recebimento no período, para a gestão enxergar o dia da cooperativa.",
      en: "Operating indicators and receiving capacity for the period, so management can see the cooperative's day.",
    },
  },
  {
    title: { pt: "Agendamentos", en: "Schedules" },
    text: {
      pt: "Lista de reservas, agenda do dia e o acompanhamento de cada entrega, da confirmação até a saída do caminhão.",
      en: "Reservation list, daily agenda and tracking of each delivery, from confirmation to the truck leaving.",
    },
  },
  {
    title: { pt: "Nota e pedido", en: "Invoice and order" },
    text: {
      pt: "A nota fiscal entra em XML ou PDF e é comparada com o pedido de compra. Divergências aparecem antes do agendamento seguir.",
      en: "The invoice arrives as XML or PDF and is compared with the purchase order. Differences show up before the schedule moves on.",
    },
  },
  {
    title: { pt: "Armazém", en: "Warehouse" },
    text: {
      pt: "Depois do aceite de Compras, o armazém escolhe o local físico e autoriza a descarga: Pátio de Adubos, Pátio de Máquinas, Insumos ou Loja.",
      en: "After Purchasing accepts the reservation, the warehouse picks the physical yard and authorizes unloading: fertilizer yard, machinery yard, inputs or store.",
    },
  },
  {
    title: { pt: "Recebimento", en: "Receiving" },
    text: {
      pt: "A operação confirma a chegada, inicia e finaliza a descarga, com os horários registrados no próprio agendamento.",
      en: "Operations confirm arrival, then start and finish unloading, with the times recorded on the schedule itself.",
    },
  },
  {
    title: { pt: "Boletim, estoque e acessos", en: "Bulletin, stock and access" },
    text: {
      pt: "O boletim fecha o dia de serviço por armazém. Pedidos, produtos e usuários ficam no mesmo sistema, cada papel com o que pode fazer.",
      en: "The bulletin closes the service day per warehouse. Orders, products and users live in the same system, each role with its own access.",
    },
  },
];

export const flow: { title: Copy; text: Copy }[] = [
  {
    title: { pt: "Pedido", en: "Order" },
    text: { pt: "A compra entra no CocapecExpress e fica ligada à entrega.", en: "The purchase enters CocapecExpress and stays tied to the delivery." },
  },
  {
    title: { pt: "Reserva", en: "Reservation" },
    text: { pt: "O agendamento aparece na agenda da cooperativa e na do fornecedor.", en: "The schedule shows on the cooperative agenda and on the supplier's." },
  },
  {
    title: { pt: "Aceite", en: "Acceptance" },
    text: { pt: "Compras aceita a reserva e ela segue para direcionamento.", en: "Purchasing accepts the reservation and it moves to yard assignment." },
  },
  {
    title: { pt: "Autorização", en: "Authorization" },
    text: { pt: "O armazém define o local e autoriza a descarga.", en: "The warehouse sets the location and authorizes unloading." },
  },
  {
    title: { pt: "Descarga", en: "Unloading" },
    text: { pt: "A equipe confirma chegada, inicia e encerra a operação.", en: "The team confirms arrival, then starts and finishes the operation." },
  },
  {
    title: { pt: "Boletim", en: "Bulletin" },
    text: { pt: "O dia de serviço fica registrado por armazém e por data.", en: "The service day is recorded per warehouse and per date." },
  },
];

export const roles: { name: Copy; text: Copy }[] = [
  { name: { pt: "Admin", en: "Admin" }, text: { pt: "Contas, permissões e visão do sistema.", en: "Accounts, permissions and a full view of the system." } },
  { name: { pt: "Gestor", en: "Manager" }, text: { pt: "Consulta a agenda e acompanha o recebimento.", en: "Reads the agenda and follows receiving." } },
  { name: { pt: "Compras", en: "Purchasing" }, text: { pt: "Pedidos e aceite das reservas.", en: "Orders and reservation acceptance." } },
  { name: { pt: "Armazém", en: "Warehouse" }, text: { pt: "Local físico e autorização da descarga.", en: "Physical location and unloading authorization." } },
  { name: { pt: "Operacional", en: "Operations" }, text: { pt: "Chegada, descarga e boletim do dia.", en: "Arrival, unloading and the daily bulletin." } },
  { name: { pt: "Fornecedor", en: "Supplier" }, text: { pt: "A própria agenda e os pedidos da empresa.", en: "Their own agenda and the company's orders." } },
];

export const ui = {
  searchPlaceholder: { pt: "Pesquisar no site", en: "Search the site" },
  searchLabel: { pt: "Pesquisar no site", en: "Search the site" },
  member: { pt: "Espaço Cooperado", en: "Member area" },
  express: { pt: "CocapecExpress", en: "CocapecExpress" },
  contact: { pt: "Contato", en: "Contact" },
  openMenu: { pt: "Abrir menu", en: "Open menu" },
  closeMenu: { pt: "Fechar menu", en: "Close menu" },
  slogan: {
    pt: "COCAPEC: cooperativa que impulsiona o café e o cooperado",
    en: "COCAPEC: the cooperative that moves coffee and its members forward",
  },
  newsTitle: { pt: "Notícias", en: "News" },
  newsLead: { pt: "Acesse as últimas notícias sobre o mercado cafeeiro.", en: "Read the latest news on the coffee market." },
  moreNews: { pt: "Mais notícias", en: "More news" },
  minutes: { pt: "min.", en: "min." },
  weather: { pt: "Previsão do tempo", en: "Weather" },
  weatherLead: { pt: "Clima para os próximos dias", en: "Forecast for the coming days" },
  quotes: { pt: "Cotações", en: "Quotes" },
  updated: { pt: "Atualizado em", en: "Updated on" },
  previous: { pt: "Anterior", en: "Previous" },
  next: { pt: "Próximo", en: "Next" },
  magazineTitle: { pt: "Revista COCAPEC", en: "COCAPEC Magazine" },
  magazineLead: { pt: "Confira todas as edições da Revista COCAPEC.", en: "Browse every issue of COCAPEC Magazine." },
  magazines: { pt: "Acessar revistas", en: "Open magazines" },
  agenda: { pt: "Agenda", en: "Calendar" },
  agendaLead: { pt: "Confira os próximos eventos e cursos da COCAPEC", en: "See the next COCAPEC events and courses" },
  allEvents: { pt: "Ver todos os eventos", en: "See all events" },
  knowMore: { pt: "Saiba mais", en: "Learn more" },
  becomeMember: { pt: "Seja um Cooperado", en: "Become a member" },
  follow: { pt: "Siga-nos:", en: "Follow us:" },
  powered: { pt: "Powered By", en: "Powered by" },
  skip: { pt: "Ir para o conteúdo", en: "Skip to content" },
  home: { pt: "Início", en: "Home" },
  novidadesCrumb: { pt: "Novidades", en: "What's new" },
  novidadesKicker: { pt: "Hackathon Uni-FACEF 2026", en: "Uni-FACEF 2026 Hackathon" },
  novidadesTitle: { pt: "CocapecExpress Web", en: "CocapecExpress Web" },
  novidadesLead: {
    pt: "O recebimento da cooperativa em um só sistema: pedido, agenda, nota, armazém, descarga e boletim.",
    en: "The cooperative's receiving flow in one system: order, agenda, invoice, warehouse, unloading and bulletin.",
  },
  novidadesIntro: {
    pt: "O CocapecExpress Web é o painel da operação de recebimento. O fornecedor acompanha a própria agenda e os pedidos da empresa. Compras aceita a reserva, o armazém escolhe o local da descarga e a equipe operacional registra chegada, início e fim. No fechamento, o boletim guarda o dia de serviço de cada armazém.",
    en: "CocapecExpress Web is the receiving operation panel. The supplier follows their own agenda and the company's orders. Purchasing accepts the reservation, the warehouse chooses the unloading yard and the operations team records arrival, start and finish. At the close, the bulletin stores each warehouse's service day.",
  },
  whatTitle: { pt: "O que o sistema entrega", en: "What the system delivers" },
  flowTitle: { pt: "Da reserva à descarga", en: "From reservation to unloading" },
  rolesTitle: { pt: "Quem usa", en: "Who uses it" },
  rolesLead: {
    pt: "Cada entrada vê só o que o papel permite. O fornecedor não atravessa a gestão interna.",
    en: "Each login sees only what the role allows. A supplier does not cross into internal management.",
  },
  ctaTitle: { pt: "Abrir o sistema na demonstração", en: "Open the system in the demo" },
  ctaText: {
    pt: "O CocapecExpress Web sobe em um painel próprio. Entre com uma conta de demonstração para percorrer agenda, recebimento e boletim.",
    en: "CocapecExpress Web runs in its own panel. Sign in with a demo account to walk through the agenda, receiving and the bulletin.",
  },
  ctaButton: { pt: "Entrar no CocapecExpress", en: "Enter CocapecExpress" },
  searchTitle: { pt: "Busca", en: "Search" },
  searchFor: { pt: "Resultados para", en: "Results for" },
  searchEmpty: { pt: "Nenhum resultado para esta busca.", en: "No results for this search." },
  searchHint: { pt: "Digite um termo na barra do topo. A busca cobre notícias, agenda e o CocapecExpress.", en: "Type a term in the top bar. Search covers news, the calendar and CocapecExpress." },
  resultNews: { pt: "Notícia", en: "News" },
  resultEvent: { pt: "Agenda", en: "Calendar" },
  resultPage: { pt: "Página", en: "Page" },
  resultLink: { pt: "No site", en: "On the site" },
};
