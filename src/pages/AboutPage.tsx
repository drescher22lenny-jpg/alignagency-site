import { teamMembers } from "../data/siteContent";
import GlassCard from "../components/ui/GlassCard";
import SectionHeading from "../components/ui/SectionHeading";

const pillars = [
  "Short Form Content für Fahrzeuge, Angebote und Aktionen",
  "Imagefilme, die Vertrauen schaffen und den Betrieb hochwertig zeigen",
  "Erfahrung mit Autohäusern, Motorradhändlern und deren Zielgruppen",
  "Klare Abläufe von der Idee bis zum fertigen Content",
];

function AboutPage() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-content flex-col gap-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Über uns"
            title="Wir kennen den Automotive-Bereich und wissen, worauf es online ankommt."
            description="Wir helfen Autohäusern und Motorradhändlern dabei, sichtbarer, moderner und vertrauenswürdiger aufzutreten. Mit Content, der gut aussieht und gleichzeitig ein klares Verkaufsziel verfolgt."
          />

          <GlassCard className="p-6 sm:p-8">
            <p className="text-sm leading-7 text-white/65">
              Wir arbeiten persönlich, direkt und mit einem klaren Blick für die Realität im
              Verkauf. Es geht nicht darum, einfach nur schöne Videos zu machen. Es geht darum,
              Fahrzeuge, Menschen und Angebote so zu zeigen, dass online mehr Vertrauen entsteht.
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
                  className="h-full w-full object-cover object-[center_12%]"
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
