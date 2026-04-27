import tucavaca from '../assets/tucavaca.png';
import partnersSitting from '../assets/team/partners-sitting.jpg';
import partnersCasual from '../assets/team/partners-casual.jpg';
import teamGroup from '../assets/team/team-group.jpg';
import jimmyMichelle from '../assets/team/jimmy-michelle.jpg';
import coupleHug from '../assets/team/couple-hug-1.jpg';
import corinaPortrait from '../assets/team/corina-marion.png';
import salomonPortrait from '../assets/team/salomon-eid.jpeg';
import veronicaPortrait from '../assets/team/veronica-cespedes.jpg';
import betoPortrait from '../assets/team/beto-saavedra.png';
import brunoPortrait from '../assets/team/bruno-ayllon.jpg';
import tugerenteStage from '../uploads/tugerente.png';
import tugerenteFounder from '../assets/team/freddy-arredondo.jpg';
import revaLogo from '../assets/portfolio/reva-logo.png';
import mandaLogo from '../assets/portfolio/manda-logo.jpeg';
import cirkulaLogo from '../assets/portfolio/cirkula-logo.png';
import mobiAction from '../assets/portfolio/mobi-en-accion.jpeg';
import mobiLogo from '../assets/portfolio/mobi-logo.jpeg';

export const SITE = {
  name: 'Babasu Ventures',
  tagline: 'The seeds that will become the forest.',
  email: 'INFO@BABASUVENTURES.COM',
  location: 'Santa Cruz de la Sierra, Bolivia',
  linkedIn: 'https://www.linkedin.com/company/babasu/',
};

export const NAV_ITEMS = [
  { key: 'philosophy', label: 'Philosophy', href: 'philosophy/' },
  { key: 'portfolio', label: 'Portfolio', href: 'portfolio/' },
  { key: 'team', label: 'Team', href: 'team/' },
  { key: 'contact', label: 'Contact', href: 'contact/' },
];

export const HOME_PILLARS = [
  {
    eyebrow: 'Early conviction',
    title: 'We move before consensus forms.',
    body:
      'Babasu leads with a point of view. We prefer depth, honest underwriting and real founder chemistry over crowded rounds.',
  },
  {
    eyebrow: 'Regional lens',
    title: 'Built in Bolivia, investing across Latin America.',
    body:
      'Our network is local by default and regional by ambition, with long relationships across operators, founders and follow-on capital.',
  },
  {
    eyebrow: 'Long cycles',
    title: 'The work starts after the check.',
    body:
      'We stay close where it matters: hiring, product feedback, strategic introductions and difficult moments between rounds.',
  },
];

export const HOME_FAQS = [
  {
    question: 'Where do we invest?',
    answer: [
      'Our focus is in tech-based startups with teams that leverage technology and inventiveness to generate value and consistently perform from MVP to their international expansions.',
      'Industries that provide the right conditions for disruption and significant growth. Financial services, SaaS, mobility, enterprise software, ecommerce, are amongst the industries where we focus.',
      'We have a geographical focus in Latin America, particularly in Bolivia, Peru, Paraguay, Ecuador and Uruguay, though we have invested in startups from across the region.',
    ],
  },
  {
    question: 'Which traits do we look for in founders?',
    answer: [
      'We look for purpose driven and highly committed entrepreneurs who are in it for the long run and strive to make a positive impact on society.',
      'Entrepreneurs with a deep understanding of their industry and their startups\' unit economics.',
      'Our fund has a gender lens into finding startups with gender mainstreaming initiatives in place or a leadership team with female founders.',
      'We look forward to working with founders who can lead by example, and pass on their passion and purpose into their teams and make it part of their culture.',
    ],
  },
  {
    question: 'In which stages do we get involved?',
    answer: [
      'We are an early-stage fund focused on investing in pre-seed and seed rounds. We look for startups that have raised prior funding and present initial growth in its market of origin.',
      'Our fund leverages its resources into propelling startups to an international expansion with successful soft-landings.',
    ],
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    title: 'Patient capital',
    body:
      'We invest with a long-term lens, backing founders through the demanding stages of building durable companies rather than optimizing for short-term optics.',
  },
  {
    title: 'Operating empathy',
    body:
      'Our investment judgment is shaped by real operating experience. We value founders who understand execution, unit economics and the human side of scale.',
  },
  {
    title: 'Purposeful innovation',
    body:
      'We support technology and business models that solve relevant problems, create measurable value and improve how people and companies move through daily work.',
  },
  {
    title: 'Sustainable growth',
    body:
      'We champion disciplined expansion, helping founders translate ambition into resilient businesses that can compound across Latin America.',
  },
];

export const PHILOSOPHY_ESSAY = [
  'Babasu Ventures was built on the belief that innovation, discipline and entrepreneurial courage can transform societies when they are directed toward real problems.',
  'Our perspective comes from experience operating in Latin America, where resilience, capital efficiency and local understanding matter as much as vision. That experience shapes how we evaluate founders, support decisions and define impact.',
  'We seek entrepreneurs who combine inventiveness with execution, and we aim to be a useful partner from first conviction through the long journey of building enduring companies.',
];

export const PHILOSOPHY_PRACTICES = [
  {
    title: 'Founder alignment',
    body:
      'We invest in people whose ambition is matched by clarity, integrity and a willingness to build through complexity.',
  },
  {
    title: 'Regional understanding',
    body:
      'We value businesses that start with deep local insight and grow into repeatable systems for broader Latin American markets.',
  },
  {
    title: 'Hands-on value',
    body:
      'Beyond capital, we contribute perspective, pattern recognition and operational support where it can materially improve outcomes.',
  },
];

export const PHILOSOPHY_HISTORY = [
  'Our history is grounded in a conviction that venture capital should be both ambitious and responsible. We back founders with the patience required to build companies that create lasting economic and societal value.',
  'That means looking beyond momentum and focusing on fundamentals: strong teams, thoughtful products, disciplined execution and markets where technology can unlock meaningful change.',
  'We think and act as owners and entrepreneurs ourselves, committed to helping founders turn bold ideas into tangible realities with durability, relevance and purpose.',
];

export const PHILOSOPHY_MANIFESTO_POINTS = [
  'We back transformative ideas with practical discipline.',
  'We work alongside founders, not at a distance.',
  'We measure success in lasting value, not temporary noise.',
];

export const INVESTMENT_THEMES = [
  {
    label: 'Software for operators',
    body:
      'Back-office, workflow and financial systems that become the operating layer for ambitious businesses in the region.',
  },
  {
    label: 'Embedded infrastructure',
    body:
      'Products that turn fragmented services into repeatable rails: payments, logistics, compliance and mission-critical APIs.',
  },
  {
    label: 'Applied commerce',
    body:
      'Tools that make commerce more resilient, measurable and efficient for underserved markets and mid-sized companies.',
  },
  {
    label: 'Founders with unfair insight',
    body:
      'Teams who know the operational pain first-hand and can turn lived context into a durable product advantage.',
  },
];

export const COMPANIES = [
  {
    slug: 'tugerente',
    name: 'tuGerente',
    stage: 'Growth software',
    category: 'ERP / Operating SaaS',
    region: 'Mexico, Bolivia, Peru',
    summary:
      'ERP for SMEs that brings inventory, sales, purchasing, accounts and reporting into one operating system.',
    thesis:
      'The value is straightforward: better stock visibility, tighter financial control and fewer blind spots in daily operations.',
    support:
      'This is the kind of software we want in the portfolio when it can become infrastructure for merchants, distributors and food businesses.',
    externalHref: 'https://tugerente.com/',
    externalLabel: 'Visit landing',
    accent: 'terra',
    image: tugerenteStage,
    heroImage: tugerenteStage,
    cardImage: tugerenteStage,
    founder: 'Freddy Arredondo',
    founderRole: 'CEO',
    cardLabel: 'Freddy Arredondo',
    cardMeta: 'CEO · tuGerente',
    href: 'portfolio/tugerente/',
  },
  {
    slug: 'reva',
    name: 'Reva',
    stage: 'Selected company',
    category: 'Sports booking platform',
    region: 'Paraguay, Bolivia, Colombia',
    summary:
      'Sports-tech software for clubs and amateur players to manage reservations, schedules and tournaments in one place.',
    thesis:
      'REVA turns fragmented club operations into one digital workflow with bookings, payments, communication and tournament management.',
    support:
      'It belongs here because it improves both sides of the market at once: operators run complexes better and players book faster.',
    externalHref: 'https://reva.la/',
    externalLabel: 'Visit landing',
    accent: 'moss',
    image: teamGroup,
    heroImage: teamGroup,
    cardImage: teamGroup,
    logo: revaLogo,
    cardLabel: 'Equipo Reva',
    cardMeta: 'Sports tech',
    href: 'portfolio/reva/',
  },
  {
    slug: 'manda',
    name: 'Manda',
    stage: 'Selected company',
    category: 'Fintech infrastructure',
    region: 'United States, Argentina, LatAm',
    summary:
      'No-code and low-code fintech infrastructure for teams that want to launch financial products without building the full stack from zero.',
    thesis:
      'Manda compresses months of fintech build time into modular components that teams can deploy faster and more cheaply.',
    support:
      'It fits our portfolio because infrastructure matters most when it lowers the barrier for new operators to launch regulated products.',
    externalHref: 'https://www.linkedin.com/company/somosmanda/',
    externalLabel: 'Visit company page',
    accent: 'sand',
    image: coupleHug,
    heroImage: coupleHug,
    cardImage: coupleHug,
    logo: mandaLogo,
    cardLabel: 'Fini y Tomas',
    cardMeta: 'Fintech infra',
    href: 'portfolio/manda/',
  },
  {
    slug: 'cirkula',
    name: 'Cirkula',
    stage: 'Selected company',
    category: 'Food surplus marketplace',
    region: 'Peru',
    summary:
      'Marketplace that helps restaurants and food retailers sell quality surplus food, recover revenue and reduce waste.',
    thesis:
      'The model works because merchant economics, consumer savings and waste reduction all improve inside the same transaction.',
    support:
      'It belongs in the portfolio because the environmental case is backed by a clear commercial case on both sides of the marketplace.',
    externalHref: 'https://www.cirkulaapp.com/',
    externalLabel: 'Visit landing',
    accent: 'sea',
    image: jimmyMichelle,
    heroImage: jimmyMichelle,
    logo: cirkulaLogo,
    cardImage: jimmyMichelle,
    cardLabel: 'Michelle & Jimmy',
    cardMeta: 'Food rescue',
    href: 'portfolio/cirkula/',
  },
  {
    slug: 'mobi',
    name: 'Mobi',
    stage: 'Selected company',
    category: 'Electric mobility subscription',
    region: 'Peru, Bolivia, Paraguay',
    summary:
      'Rider-as-a-Service platform that gives delivery workers access to electric motorcycles through an all-in subscription.',
    thesis:
      'MOBI combines electric mobility, leasing and software to turn vehicle access into a stronger income tool for riders.',
    support:
      'We like this kind of mobility business when hardware, financing and software reinforce one another instead of operating separately.',
    externalHref: 'https://www.mobi.lat/',
    externalLabel: 'Visit landing',
    accent: 'moss',
    image: mobiAction,
    heroImage: mobiAction,
    cardImage: mobiAction,
    logo: mobiLogo,
    founder: 'Ariel Revollo',
    founderRole: 'CEO',
    cardLabel: 'Ariel Revollo',
    cardMeta: 'CEO · Mobi Latam',
    href: 'portfolio/mobi/',
  },
];

export const COMPANY_PROFILES = {
  tugerente: {
    heroTitle:
      'Administrative software built for SMEs that need more control, not more complexity.',
    heroBody:
      'tuGerente reflects the kind of company Babasu wants its portfolio to be known for: practical software, real operating value and a product that can matter every single day inside the business.',
    badgeNote: 'Featured company',
    badgeBody:
      'Software that helps SMEs organize finance, inventory and day-to-day execution.',
    facts: [
      { label: 'Website', value: 'tugerente.com' },
      { label: 'Sector', value: 'SaaS / ERP' },
      { label: 'Operating countries', value: 'Mexico, Bolivia, Peru' },
      { label: 'Core user', value: 'SMEs running finance, inventory and operations' },
    ],
    overviewTitle: 'Software for the operating reality of Latin American SMEs.',
    overviewBody: [
      'tuGerente is the kind of product that earns its place by helping businesses run with more clarity. It is software tied to finance, inventory and the decisions operators need to make every day.',
      'That matters because SMEs across the region still deal with fragmented systems, inconsistent processes and weak visibility over what is actually happening inside the business. Products that remove that friction create immediate value.',
    ],
    spotlight: {
      label: 'Founder spotlight',
      title: 'Freddy Arredondo',
      body:
        'Freddy Arredondo represents the kind of founder we value most: close to the problem, credible in execution and building a product with obvious day-to-day usefulness.',
      image: tugerenteFounder,
      alt: 'Freddy Arredondo from tuGerente',
    },
    whyTitle:
      'The strongest SME software becomes part of daily operations, not just reporting.',
    whyBody:
      'The strongest signal here is not novelty. It is relevance: software that becomes part of how a company operates, with a use case that can scale across multiple Latin American markets.',
    highlights: [
      {
        title: 'Built for operating reality',
        body:
          'tuGerente addresses the daily control problems that slow down growing SMEs: cash visibility, inventory accuracy and operational follow-through.',
      },
      {
        title: 'Utility over novelty',
        body:
          'The product matters because it becomes useful immediately inside the business, not because it depends on speculative behavior change.',
      },
      {
        title: 'Regional relevance',
        body:
          'Its use case travels well across Latin America because administrative complexity for SMEs is recurring, urgent and still underserved.',
      },
    ],
    closingTitle:
      'tuGerente is a strong example of the kind of operating software we are proud to back.',
    closingBody: [
      'The company is operator-led, useful, regionally relevant and anchored in concrete business outcomes rather than broad category narratives.',
      'That combination of recurring utility and regional relevance is exactly what makes the business compelling.',
    ],
    stageImage: tugerenteStage,
    closingImage: tugerenteStage,
  },
  reva: {
    heroTitle:
      'Sports infrastructure software for clubs, tournaments and amateur players.',
    heroBody:
      'Reva digitizes how sports complexes operate, from bookings and payments to tournament publishing and player communication.',
    badgeNote: 'Portfolio company',
    badgeBody:
      'A sports-tech workflow that helps clubs sell more available time and makes booking easier for players.',
    facts: [
      { label: 'Website', value: 'reva.la' },
      { label: 'Sector', value: 'Sports tech' },
      { label: 'Operating countries', value: 'Paraguay, Bolivia, Colombia' },
      { label: 'Core user', value: 'Sports clubs, complexes and amateur players' },
    ],
    overviewTitle:
      'A practical software layer for fragmented sports-club operations.',
    overviewBody: [
      'Reva addresses a simple but recurring operational gap: clubs need a better way to manage reservations, tournaments, pricing and communication without relying on manual coordination.',
      'On the other side of the product, players get a cleaner discovery and booking experience for courts and competitions. That two-sided utility is part of what makes the product defensible.',
    ],
    spotlight: {
      label: 'Company spotlight',
      title: 'Reservations + tournaments + payments',
      body:
        'What matters here is not only booking software in isolation. Reva combines scheduling, communication and transaction flows in a way that can improve the economics of sports venues.',
      image: teamGroup,
      alt: 'Reva platform visual',
    },
    whyTitle:
      'A strong sports-tech product should simplify operations while improving venue utilization.',
    whyBody:
      'Reva fits that test because it serves a real operational workflow, not just audience engagement. It helps clubs manage capacity better and gives players a more direct way to reserve and participate.',
    highlights: [
      {
        title: 'Operational workflow',
        body:
          'The product connects reservations, tournament management, pricing and payments in one system rather than splitting them across manual tools.',
      },
      {
        title: 'Marketplace utility',
        body:
          'Reva creates value for both operators and players, which improves retention and increases the practical usefulness of the platform.',
      },
      {
        title: 'Regional fit',
        body:
          'The underlying need is common across mid-market sports venues in Latin America, which gives the model room to travel.',
      },
    ],
    closingTitle:
      'This is the kind of vertical software we like when it is close to revenue and daily operations.',
    closingBody: [
      'Reva is a good example of software built around a concrete use case where digitization directly improves scheduling, sell-through and user experience.',
      'For Babasu, that combination of operational relevance and category focus matters more than broad storytelling.',
    ],
    stageImage: teamGroup,
    closingImage: teamGroup,
  },
  manda: {
    heroTitle:
      'Fintech infrastructure for teams that want to launch faster and build less from scratch.',
    heroBody:
      'Manda develops modular financial infrastructure so organizations can deploy fintech products quickly through a no-code or low-code approach.',
    badgeNote: 'Portfolio company',
    badgeBody:
      'A modular fintech stack built to reduce the cost and time required to launch wallets and financial features.',
    facts: [
      { label: 'Public company page', value: 'LinkedIn / somosmanda' },
      { label: 'Sector', value: 'Fintech infrastructure' },
      { label: 'Model', value: 'No-code / low-code financial components' },
      { label: 'Core use case', value: 'Faster launch of fintech products' },
    ],
    overviewTitle:
      'Infrastructure businesses matter when they compress complexity for everyone else.',
    overviewBody: [
      'Manda’s proposition is straightforward: give companies reusable financial building blocks so they can launch products faster and without assembling the entire operating stack themselves.',
      'That matters in Latin American fintech because product launches tend to be slow, expensive and highly constrained by technical and regulatory complexity. Lowering that barrier is valuable infrastructure work.',
    ],
    spotlight: {
      label: 'Product spotlight',
      title: 'Launch fintech products in days, not months',
      body:
        'The appeal here is speed with modularity. Manda positions itself as a way for teams to test and deploy wallets and related flows without carrying the full burden of custom development from day one.',
      image: coupleHug,
      alt: 'Manda company visual',
    },
    whyTitle:
      'Good infrastructure companies create leverage for other operators, not just convenience.',
    whyBody:
      'Manda belongs in that category because its product reduces build time, lowers upfront cost and makes fintech deployment more accessible to teams that otherwise could not justify the full investment.',
    highlights: [
      {
        title: 'Time compression',
        body:
          'The company’s value proposition is centered on reducing the timeline to launch financial products through modular components.',
      },
      {
        title: 'Lower implementation cost',
        body:
          'A no-code and low-code approach matters most when it turns a high-friction technical project into something more commercially realistic.',
      },
      {
        title: 'Infrastructure logic',
        body:
          'Rather than compete as a single fintech app, Manda sits underneath product creation itself, which is a more structural place to build.',
      },
    ],
    closingTitle:
      'We like these businesses when they become the enabling layer behind multiple launches.',
    closingBody: [
      'Manda fits our portfolio because it is not only solving for one end-user experience. It is giving other operators a faster route to market.',
      'That kind of leverage is exactly why infrastructure can be so powerful when the execution is strong.',
    ],
    stageImage: coupleHug,
    closingImage: coupleHug,
  },
  cirkula: {
    heroTitle:
      'A food-surplus marketplace that turns excess inventory into revenue instead of waste.',
    heroBody:
      'Cirkula helps restaurants and food retailers sell quality surplus food at attractive prices, creating a clear economic incentive to waste less.',
    badgeNote: 'Portfolio company',
    badgeBody:
      'A marketplace where merchant economics, consumer savings and waste reduction reinforce each other.',
    facts: [
      { label: 'Website', value: 'cirkulaapp.com' },
      { label: 'Sector', value: 'Food surplus marketplace' },
      { label: 'Headquarters', value: 'Lima, Peru' },
      { label: 'Founded', value: '2019' },
    ],
    overviewTitle:
      'The best sustainability products usually win first on convenience and economics.',
    overviewBody: [
      'Cirkula is a good example. Restaurants and food stores get an extra sales channel for surplus inventory, while consumers get quality food at a better price.',
      'That gives the product an advantage over purely mission-driven models: the behavior already makes sense economically for both sides, and the environmental benefit comes with the transaction.',
    ],
    spotlight: {
      label: 'Model spotlight',
      title: 'Come, Ahorra, Ayuda',
      body:
        'The positioning is simple because the value exchange is simple: merchants monetize excess food, users save money and the platform helps reduce waste.',
      image: jimmyMichelle,
      alt: 'Cirkula company visual',
    },
    whyTitle:
      'This kind of company belongs in the portfolio when the impact case and the business case are aligned.',
    whyBody:
      'Cirkula works because it does not ask users to choose between usefulness and principle. The product can be adopted for price, convenience and inventory efficiency while still producing measurable environmental value.',
    highlights: [
      {
        title: 'Merchant-side utility',
        body:
          'The company gives food businesses a practical way to recover value from products that otherwise would go unsold.',
      },
      {
        title: 'Consumer pull',
        body:
          'The user proposition is intuitive: good food at a lower price, purchased through a simple digital experience.',
      },
      {
        title: 'Impact with economics',
        body:
          'Reducing food waste matters more when the operating model does not depend on sacrificing commercial logic to achieve it.',
      },
    ],
    closingTitle:
      'The best sustainability businesses make the better choice feel commercially obvious.',
    closingBody: [
      'Cirkula fits that lens because it translates an environmental problem into a recurring commercial workflow with clear incentives.',
      'That combination of practical adoption and measurable impact is what makes the company worth backing.',
    ],
    stageImage: jimmyMichelle,
    closingImage: jimmyMichelle,
  },
  mobi: {
    heroTitle:
      'Electric mobility, subscription access and rider income in one operating model.',
    heroBody:
      'Mobi Latam gives delivery workers access to electric motorcycles through a subscription model designed to increase earning capacity and lower friction around vehicle access.',
    badgeNote: 'Portfolio company',
    badgeBody:
      'A Rider-as-a-Service model that combines electric hardware, leasing logic and software into one mobility product.',
    facts: [
      { label: 'Website', value: 'mobi.lat' },
      { label: 'Sector', value: 'Electric mobility' },
      { label: 'Operating countries', value: 'Peru, Bolivia, Paraguay' },
      { label: 'Core offer', value: 'All-in electric motorcycle subscription' },
    ],
    overviewTitle:
      'This is the type of mobility company we care about when access directly affects income generation.',
    overviewBody: [
      'Mobi’s model is not just about vehicles. It is about giving riders a way to access productive assets through a subscription structure that bundles the hardware with a software-led operating layer.',
      'That matters because the constraint for many workers is not demand for delivery itself, but access to the vehicle, financing and operating support needed to participate efficiently.',
    ],
    spotlight: {
      label: 'Model spotlight',
      title: 'Rider-as-a-Service',
      body:
        'The core insight is that mobility can function as income infrastructure. Mobi turns electric motorcycles into a more accessible earning tool for delivery workers across regional markets.',
      image: mobiAction,
      alt: 'Mobi Latam in action',
    },
    whyTitle:
      'We like tangible infrastructure plays when software, financing and usage reinforce one another.',
    whyBody:
      'Mobi fits that pattern because the vehicle is only part of the product. The stronger value lies in combining access, subscription economics and operational tooling around a recurring real-world need.',
    highlights: [
      {
        title: 'Income-linked utility',
        body:
          'The product sits close to daily earnings, which makes its value easier to understand and harder to ignore for the end user.',
      },
      {
        title: 'Electric mobility layer',
        body:
          'The electric vehicle component adds a strong efficiency and sustainability angle without losing the commercial rationale of the model.',
      },
      {
        title: 'Regional expansion logic',
        body:
          'The operating need travels well across urban delivery markets in Latin America, which gives the model regional relevance beyond one city.',
      },
    ],
    closingTitle:
      'The most convincing mobility products show their value in daily use, not only in a dashboard.',
    closingBody: [
      'Mobi represents a grounded way of backing mobility: not as abstract transportation innovation, but as infrastructure that can improve access to work and raise productivity.',
      'That kind of real-world operating leverage is exactly what makes the business meaningful.',
    ],
    stageImage: mobiAction,
    closingImage: mobiAction,
  },
};

export function getCompanyBySlug(slug) {
  return COMPANIES.find((company) => company.slug === slug);
}

export const TEAM_LEADS = [
  {
    name: 'Corina Marion',
    role: 'Managing Partner',
    body:
      'Leads founder relationships and long-term investment judgment across the firms we support.',
    image: corinaPortrait,
    linkedIn: 'https://www.linkedin.com/in/corina-marion-927b2647/',
  },
  {
    name: 'Salomón Eid',
    role: 'Founding Partner',
    body:
      'Brings operator discipline and product thinking to the evaluation and support of early-stage companies.',
    image: salomonPortrait,
    linkedIn: 'https://www.linkedin.com/in/salomon-eid/?original_referer=https%3A%2F%2Fbabasuventures.com%2F',
  },
];

export const TEAM_MEMBERS = [
  {
    name: 'Bruno Ayllón',
    role: 'Dealflow & Due Diligence',
    body:
      'Supports sourcing, pipeline management and evaluation across the investment process.',
    image: brunoPortrait,
    linkedIn: 'https://www.linkedin.com/in/cbrunoayllonc/',
  },
  {
    name: 'Verónica Céspedes',
    role: 'Fundraising & IR',
    body:
      'Works across fundraising communications and investor relations with a regional perspective.',
    image: veronicaPortrait,
    linkedIn: 'https://www.linkedin.com/in/veronica-cespedes-2a297a27/',
  },
  {
    name: 'Beto Saavedra',
    role: 'Venture Partner',
    body:
      'Brings strategic and commercial perspective to portfolio support, especially in growth and market positioning.',
    image: betoPortrait,
    linkedIn: 'https://www.linkedin.com/in/betosaavedra/',
  },
];

export const IMAGES = {
  tucavaca,
  partnersSitting,
  partnersCasual,
  teamGroup,
  jimmyMichelle,
  tugerenteStage,
  tugerenteFounder,
};
