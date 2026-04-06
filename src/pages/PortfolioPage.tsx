import { portfolioItems } from "../data/siteContent";
import SectionHeading from "../components/ui/SectionHeading";

const PORTFOLIO_CASE_ONE_IMAGE_SRC = "/images/portfolio/case-1-brandboard.png";
const PORTFOLIO_PAGE_VIDEO_SRC = "/videos/portfolio/campaign-preview.mp4";

function PortfolioPage() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-content flex-col gap-12">
        <SectionHeading
          eyebrow="Portfolio"
          title="Ausgewählte Cases und Arbeiten im Überblick."
          description="Die Portfolio-Seite zeigt Branding, Kampagnen und digitale Lösungen in einer klaren, reduzierten Showcase-Struktur."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <article
              key={item.title}
              className={`relative overflow-hidden rounded-[30px] border border-white/10 ${
                index === 0 ? "md:col-span-2 md:min-h-[380px]" : ""
              } bg-white/[0.03]`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
              {index === 0 ? (
                <>
                  <img
                    src={PORTFOLIO_CASE_ONE_IMAGE_SRC}
                    alt="Case 1 Brandboard"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.24),rgba(10,10,10,0.88))]" />
                  <div className="absolute inset-0 bg-black/36" />
                </>
              ) : null}
              {index === 1 ? (
                <>
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={PORTFOLIO_PAGE_VIDEO_SRC} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.18),rgba(10,10,10,0.78))]" />
                  <div className="absolute inset-0 bg-black/24" />
                </>
              ) : null}
              <div className="relative flex h-full flex-col justify-between gap-10 p-6">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">{item.category}</p>
                  <h2 className="font-display text-3xl leading-tight text-primary-light">
                    {item.title}
                  </h2>
                  <p className="max-w-lg text-sm leading-7 text-white/62 sm:text-base">
                    {item.summary}
                  </p>
                </div>
                <div className="flex items-end justify-between gap-6">
                  <span className="text-sm text-white/40">Case 0{index + 1}</span>
                  {index !== 0 && index !== 2 ? (
                    <img src={item.image} alt={item.title} className="h-16 w-auto object-contain" />
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioPage;
