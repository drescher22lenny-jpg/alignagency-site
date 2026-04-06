import { Link } from "react-router-dom";
import { portfolioItems, portfolioShowcase } from "../../data/siteContent";
import SectionHeading from "../ui/SectionHeading";

const PORTFOLIO_PREVIEW_VIDEO_SRC = "/videos/portfolio/campaign-preview.mp4";

function PortfolioPreviewSection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-content flex-col gap-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Ausgewählte Arbeiten mit klarer visueller Haltung."
            description="Die Vorschau ist als austauschbares Showcase angelegt. Bilder, Cases und spätere Videos lassen sich ohne Umbau durch echte Projekte ersetzen."
          />
          <Link
            to="/portfolio"
            className="text-sm uppercase tracking-[0.24em] text-white/60 transition hover:text-white"
          >
            Alle Projekte ansehen
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[#111111] p-6 shadow-soft sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,139,73,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_60%)]" />
            <div className="relative flex h-full min-h-[460px] flex-col justify-between gap-10">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                  Featured Case
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight text-primary-light sm:text-4xl">
                  {portfolioShowcase[0].title}
                </h3>
                <p className="mt-5 text-base leading-7 text-white/62">
                  {portfolioShowcase[0].description}
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-5">
            {portfolioItems.slice(1).map((item, index) => {
              if (index === 0) {
                return (
                  <article
                    key={item.title}
                    className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03]"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
                    <video
                      className="absolute inset-0 h-full w-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src={PORTFOLIO_PREVIEW_VIDEO_SRC} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.16),rgba(10,10,10,0.58))]" />
                    <div className="relative flex h-full min-h-[270px] flex-col gap-10 p-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                          {item.category}
                        </p>
                        <h3 className="mt-4 font-display text-2xl text-primary-light">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-auto max-w-md text-sm leading-7 text-white/72">
                        {item.summary}
                      </p>
                    </div>
                  </article>
                );
              }

              return (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
                  <div className="relative flex h-full flex-col gap-10">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                          {item.category}
                        </p>
                        <h3 className="mt-4 font-display text-2xl text-primary-light">{item.title}</h3>
                      </div>
                      <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
                    </div>
                    <p className="max-w-md text-sm leading-7 text-white/62">{item.summary}</p>
                  </div>
                </article>
              );
            })}

          </div>
        </div>

        <article className="grid gap-6 rounded-[34px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-2">
          {portfolioShowcase.map((item) => (
            <div key={item.eyebrow} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">{item.eyebrow}</p>
              <h3 className="font-display text-2xl leading-tight text-primary-light">{item.title}</h3>
              <p className="max-w-xl text-sm leading-7 text-white/62 sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

export default PortfolioPreviewSection;
