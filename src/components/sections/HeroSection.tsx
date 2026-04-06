import { Link } from "react-router-dom";
import AbstractGlow from "../ui/AbstractGlow";

const HERO_VIDEO_SRC = "/videos/hero/alignagency-hero.mp4";

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-16 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="h-full w-full object-cover opacity-28"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.38),rgba(10,10,10,0.88)),radial-gradient(circle_at_top,rgba(240,139,73,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(246,196,83,0.08),transparent_25%)]" />
      </div>
      <div className="absolute inset-0 z-[1] bg-black/24" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-7rem)] w-full max-w-content grid-cols-1 items-end gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10 max-w-3xl lg:w-[122%] lg:max-w-[1100px]">
          <h1 className="font-display text-5xl leading-[0.95] text-primary-light sm:text-6xl lg:text-8xl">
            Markenauftritte mit Haltung, Klarheit und digitaler Präsenz.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/68 sm:text-lg">
            alignAgency baut Marken durch Branding, Social Media Content, Videos, Kampagnen und
            digitalen Lösungen für Unternehmen, die modern auftreten und langfristig konsistent
            wirken wollen.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
            >
              Portfolio ansehen
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-primary-light transition hover:border-white/20 hover:bg-white/10"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>

        <div className="relative hidden min-h-[420px] items-end justify-center lg:min-h-[560px] lg:flex">
          <AbstractGlow className="left-8 top-10 h-40 w-40 animate-float" />
          <AbstractGlow className="bottom-16 right-8 h-52 w-52 bg-[linear-gradient(135deg,#D6523C,#F6C453)] opacity-20" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
