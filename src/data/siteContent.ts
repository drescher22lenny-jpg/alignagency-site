export type Service = {
  title: string;
  description: string;
};

export type PortfolioItem = {
  title: string;
  category: string;
  summary: string;
  image: string;
  accent: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

export const navigationItems = [
  { label: "Start", href: "/" },
  { label: "Über uns", href: "/about" },
  { label: "Kontakt", href: "/contact" },
];

export const services: Service[] = [
  {
    title: "Short Form Content",
    description:
      "Wir produzieren kurze Videos, die Fahrzeuge, Angebote und Menschen schnell verständlich zeigen und auf Social Media Aufmerksamkeit schaffen.",
  },
  {
    title: "Imagefilme",
    description:
      "Wir machen Imagefilme, die Vertrauen aufbauen und zeigen, warum Kunden genau bei Ihnen kaufen oder anfragen sollten.",
  },
  {
    title: "Verkaufsorientierte Inhalte",
    description:
      "Wir denken Content nicht nur schön, sondern mit Ziel: mehr Interesse, mehr Probefahrten, mehr Beratungsgespräche und mehr Verkäufe.",
  },
  {
    title: "Professioneller Auftritt",
    description:
      "Wir helfen Autohäusern und Motorradhändlern, online moderner, hochwertiger und einheitlicher wahrgenommen zu werden.",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Identity System",
    category: "Branding",
    summary:
      "Visuelles Fundament für eine moderne Marke mit klarer Typografie, reduzierter Oberfläche und sauberem Motion-Setup.",
    image: "/images/logos/alignAgency.png",
    accent: "from-[#F6C453]/20 via-transparent to-transparent",
  },
  {
    title: "Campaign Motion",
    category: "Social Media / Kampagnen",
    summary:
      "Kampagnen und Content-Formate mit klarer Bildsprache, wiedererkennbarem Auftritt und einer Umsetzung, die funktional bleibt.",
    image: "/images/logos/Vector.png",
    accent: "from-[#F08B49]/20 via-transparent to-transparent",
  },
  {
    title: "Digital Presence",
    category: "Web",
    summary:
      "Digitale Oberfläche für eine hochwertige Präsenz mit starkem ersten Eindruck und klaren Conversion-Pfaden.",
    image: "/images/logos/alignAgency-1.png",
    accent: "from-[#D6523C]/20 via-transparent to-transparent",
  },
];

export const portfolioShowcase = [
  {
    eyebrow: "Markenwirkung",
    title: "Content, Vertrauen und Verkauf müssen zusammenarbeiten.",
    description:
      "Wir verbinden starke Bilder, klare Botschaften und Erfahrung im Automotive-Bereich, damit Ihr Online-Auftritt professioneller wirkt und mehr Anfragen auslöst.",
  },
  {
    eyebrow: "Arbeitsweise",
    title: "Wir arbeiten nahbar, schnell und mit Blick auf das Ergebnis.",
    description:
      "Vom ersten Konzept bis zum fertigen Video achten wir darauf, dass der Content zu Ihrem Betrieb passt und im Alltag wirklich nutzbar ist.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Stanley Grennigloh",
    role: "Geschäftsführer",
    image: "/images/team/managing-director.webp",
    bio: "Begleitet Strategie, Kundenkontakt und die Frage, wie aus gutem Content echte Anfragen und Verkäufe entstehen.",
  },
  {
    name: "Lenny Drescher",
    role: "Creative Director & Founder",
    image: "/images/team/creative-director-founder.webp",
    bio: "Verantwortet Bildsprache, Videos und kreative Richtung mit viel Erfahrung in Content für Autohäuser und Motorradhändler.",
  },
];
