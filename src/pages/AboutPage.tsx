import { teamMembers } from "../data/siteContent";
import GlassCard from "../components/ui/GlassCard";
import SectionHeading from "../components/ui/SectionHeading";

const pillars = [
  "Branding mit klarer Haltung und visueller Stringenz",
  "Social-Media-Systeme, die modern aussehen und in der Praxis funktionieren",
  "Kampagnen, die wiedererkennbar sind und sauber umgesetzt werden",
  "Digitale Lösungen, die Gestaltung und Nutzen in Einklang bringen",
];

function AboutPage() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-content flex-col gap-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Über uns"
            title="alignAgency verbindet Markenstrategie, kreative Leitung und digitale Umsetzung in einem klaren System."
            description="Wir arbeiten nahbar, fokussiert und mit einem hohen Anspruch an Wirkung. Dabei entstehen Auftritte, Inhalte und digitale Lösungen, die professionell wirken und langfristig konsistent bleiben."
          />

          <GlassCard className="p-6 sm:p-8">
            <p className="text-sm leading-7 text-white/65">
              Unser Fokus liegt auf Branding, Social Media, Kampagnen und digitalen Lösungen, die
              visuell stark sind und zugleich im Alltag tragfähig bleiben. Es geht nicht um
              Effekte um ihrer selbst willen, sondern um eine klare Linie, die in jedem
              Kontaktpunkt spürbar wird.
            </p>

            <div className="mt-8 grid gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-[24px] border border-white/8 bg-black/20 px-5 py-4 text-sm leading-6 text-white/68"
                >
                  {pillar}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <GlassCard key={member.role} className="overflow-hidden p-0">
              <div className="relative aspect-[4/5] overflow-hidden border-b border-white/8 bg-white/[0.03]">
                <img
                  src={member.image}
                  alt={member.role}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08),rgba(10,10,10,0.42))]" />
              </div>

              <div className="space-y-4 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">{member.role}</p>
                  <h2 className="mt-3 font-display text-2xl text-primary-light">{member.name}</h2>
                </div>
                <p className="text-sm leading-7 text-white/62">{member.bio}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
