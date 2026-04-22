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

export const SITE = {
  name: 'Babasu Ventures',
  tagline: 'The seeds that will become the forest.',
  email: 'INFO@BABASUVENTURES.COM',
  location: 'Santa Cruz de la Sierra, Bolivia',
  linkedIn: 'https://www.linkedin.com',
};

export const NAV_ITEMS = [
  { key: 'home', label: 'Home', href: '' },
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
    name: 'tuGerente',
    stage: 'Growth software',
    category: 'ERP / Operating SaaS',
    region: 'Mexico, Bolivia, Peru',
    summary:
      'Administrative software for SMEs that need better control over finance, inventory and daily operations.',
    thesis:
      'A product built around recurring operating pain: visibility over cash flow, inventory and the day-to-day decisions that keep a business moving.',
    support:
      'The kind of utility-driven software we like to back when it can become part of a company’s daily operating system.',
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
    name: 'Reva',
    stage: 'Selected company',
    category: 'Operator-first platform',
    region: 'Latin America',
    summary:
      'A selected portfolio company within Babasu’s broader operator-first and infrastructure-led investment thesis.',
    thesis:
      'A business we highlight for the kind of grounded execution and category understanding that fits our portfolio logic.',
    support:
      'Part of the set of companies that reflect our preference for practical, repeatable products.',
    accent: 'moss',
    image: teamGroup,
    heroImage: teamGroup,
    cardImage: teamGroup,
    logo: revaLogo,
    cardLabel: 'Equipo Reva',
    cardMeta: 'Reva',
  },
  {
    name: 'Manda',
    stage: 'Selected company',
    category: 'Commerce enablement',
    region: 'Latin America',
    summary:
      'A selected portfolio company representing the type of practical, scalable products we like to support early.',
    thesis:
      'Representative of our interest in teams building simple, high-utility solutions for real commercial workflows.',
    support:
      'A company we include because it shows the kind of measurable usefulness we value early.',
    accent: 'sand',
    image: coupleHug,
    heroImage: coupleHug,
    cardImage: coupleHug,
    logo: mandaLogo,
    cardLabel: 'Fini y Tomas',
    cardMeta: 'Manda',
  },
  {
    name: 'Cirkula',
    stage: 'Selected company',
    category: 'Workflow systems',
    region: 'Latin America',
    summary:
      'A selected portfolio company in our ecosystem of operators building useful systems for regional markets.',
    thesis:
      'Fits our view that regional businesses win when software helps operators work with more clarity, consistency and resilience.',
    support:
      'A signal of our appetite for products with clear workflow value and regional relevance.',
    accent: 'sea',
    image: jimmyMichelle,
    heroImage: jimmyMichelle,
    logo: cirkulaLogo,
    cardImage: jimmyMichelle,
    cardLabel: 'Michelle & Jimmy',
    cardMeta: 'Cirkula',
  },
];

export const TUGERENTE_FACTS = [
  { label: 'Website', value: 'www.tugerente.com' },
  { label: 'Sector', value: 'SaaS / ERP' },
  { label: 'Operating countries', value: 'Mexico, Bolivia, Peru' },
  { label: 'Core user', value: 'SMEs running finance, inventory and operations' },
];

export const TUGERENTE_HIGHLIGHTS = [
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
];

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
