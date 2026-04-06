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
  { label: "Portfolio", href: "/portfolio" },
  { label: "Über uns", href: "/about" },
  { label: "Kontakt", href: "/contact" },
];

export const services: Service[] = [
  {
    title: "Branding",
    description:
      "Markenauftritte mit klarer Positionierung, präziser Bildsprache und einem visuellen System, das langfristig trägt.",
  },
  {
    title: "Social Media",
    description:
      "Klarer Social Media Content inklusive Videoproduktion, der konsistent wirkt, schnell erfassbar ist und im Alltag funktioniert.",
  },
  {
    title: "Kampagnen",
    description:
      "Werbekampagnen mit klarer Idee, starkem visuellen Wiedererkennungswert und einer Umsetzung, die aufmerksam macht und im Markt funktioniert.",
  },
  {
    title: "Digitale Lösungen",
    description:
      "Websites, Landingpages und digitale Touchpoints, die elegant aussehen und im Alltag wirklich funktionieren.",
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
    title: "Branding, Content und digitale Präsenz greifen bei uns als ein System ineinander.",
    description:
      "alignAgency verbindet Strategie, Gestaltung und Umsetzung so, dass Marken nicht nur gut aussehen, sondern in Bewegung, Kommunikation und digitalen Touchpoints konsistent wirken.",
  },
  {
    eyebrow: "Arbeitsweise",
    title: "Klar im Prozess. Nahbar in der Zusammenarbeit. Hochwertig im Ergebnis.",
    description:
      "Wir denken reduziert, entscheiden präzise und bauen nur das, was für Marke, Kommunikation und Wachstum wirklich relevant ist.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Stanley Grennigloh",
    role: "Geschäftsführer",
    image: "/images/team/managing-director.png",
    bio: "Verantwortet strategische Ausrichtung, Kundenführung und die Entwicklung eines Auftritts, der langfristig trägt.",
  },
  {
    name: "Lenny Drescher",
    role: "Creative Director & Founder",
    image: "/images/team/creative-director-founder.jpg",
    bio: "Prägt visuelle Richtung, Markenwirkung und kreative Systeme mit einem klaren Blick für Wiedererkennbarkeit und Qualität.",
  },
  {
    name: "Leon Schmidt",
    role: "Lead Development",
    image: "/images/team/lead-development.png",
    bio: "Übersetzt Ideen in digitale Lösungen, die technisch sauber, funktional und im Alltag wirklich nutzbar sind.",
  },
];
