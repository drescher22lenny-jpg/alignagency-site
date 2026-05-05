import { Link } from "react-router-dom";

const HERO_IMAGE_SRC = "/images/hero.png";

const trustedSegments = ["Autohäuser", "Motorradhändler", "Fahrradläden", "Werkstätten"];

const heroStats = [
  {
    value: "+37%",
    label: "mehr Anfragen in 60 Tagen",
  },
  {
    value: "100+",
    label: "zufriedene Partner",
  },
  {
    value: "500+",
    label: "Videos für Automotive produziert",
  },
  {
    value: "Full Service",
    label: "von Strategie bis Leadgenerierung",
  },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-black/10 bg-[#fbf8f2]">
      <div className="grid min-h-[calc(100svh-5rem)] w-full grid-cols-1 lg:grid-cols-[minmax(460px,48vw)_1fr]">
        <div className="relative z-10 flex flex-col justify-center px-5 py-14 sm:px-8 lg:ml-[max(2.5rem,calc((100vw-1480px)/2+2.5rem))] lg:pr-10 lg:py-20">
          <div className="reveal max-w-3xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#ef4f24]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]">
                Automotive Marketing, das bewegt.
              </p>
            </div>

            <h1 className="max-w-3xl font-display text-5xl leading-[0.98] text-[#171717] sm:text-6xl lg:text-7xl xl:text-8xl">
              Mehr Anfragen. Mehr Vertrauen. Mehr <span className="text-[#ef4f24]">Verkäufe.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#3b3833] sm:text-lg">
              Wir bringen Autohäuser, Motorradhändler und Fahrradläden mit starken Videos,
              klaren Kampagnen und Short Form Content planbar vor die richtigen Kunden.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-black px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(23,23,23,0.14)] transition hover:-translate-y-0.5 hover:bg-[#ef4f24]"
              >
                Mehr Anfragen sichern
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-black/18 bg-white px-7 py-4 text-sm font-semibold text-[#171717] transition hover:-translate-y-0.5 hover:border-black/30 hover:bg-[#fffaf3]"
              >
                Über uns
              </Link>
            </div>
          </div>

          <div className="reveal mt-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#5a554e]">
              Vertraut von Automotive-Betrieben
            </p>
            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:items-center sm:gap-8">
              {trustedSegments.map((segment) => (
                <span
                  key={segment}
                  className="text-sm font-bold uppercase tracking-[0.08em] text-[#171717]"
                >
                  {segment}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden lg:-ml-16 lg:min-h-full lg:[clip-path:polygon(17%_0,100%_0,100%_100%,0_100%)]">
          <img
            src={HERO_IMAGE_SRC}
            alt="Automotive Content Produktion"
            className="h-full w-full scale-[1.08] object-cover object-[35%_center]"
          />
        </div>
      </div>

      <div className="border-t border-black/10 bg-[#fffaf3]/86">
        <div className="mx-auto grid w-full max-w-[1480px] grid-cols-1 divide-y divide-black/10 px-5 py-7 sm:px-8 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4 lg:px-10">
          {heroStats.map((stat) => (
            <div key={stat.value} className="reveal flex gap-5 py-4 md:px-8 md:first:pl-0">
              <p className="min-w-[5.5rem] bg-accent-gradient bg-clip-text text-3xl font-semibold text-transparent">
                {stat.value}
              </p>
              <p className="max-w-[11rem] text-sm leading-6 text-[#3b3833]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
