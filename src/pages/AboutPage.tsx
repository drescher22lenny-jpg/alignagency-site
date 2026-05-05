import { teamMembers } from "../data/siteContent";
import GlassCard from "../components/ui/GlassCard";
import SectionHeading from "../components/ui/SectionHeading";

const pillars = [
  "Short Form Content für Autos, Motorräder, Fahrräder und Angebote",
  "Imagefilme, die Vertrauen schaffen und Ihren Betrieb hochwertig zeigen",
  "Erfahrung mit Autohäusern, Motorradhändlern, Fahrradläden und deren Zielgruppen",
  "Klare Abläufe von der Idee bis zum fertigen Content",
];

function AboutPage() {
  return (
    <section className="bg-[#fbf8f2] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-content flex-col gap-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Über uns"
            title="Wir kennen Automotive und wissen, worauf es online ankommt."
            description="Wir helfen Betrieben rund um Autos, Motorräder und Fahrräder dabei, sichtbarer, moderner und vertrauenswürdiger aufzutreten. Mit Content, der gut aussieht und ein klares Verkaufsziel verfolgt."
          />

          <GlassCard className="reveal p-6 sm:p-8">
            <p className="text-sm leading-7 text-secondary">
              Wir arbeiten persönlich, direkt und mit einem klaren Blick für die Realität im
              Verkauf. Es geht nicht darum, einfach nur schöne Videos zu machen. Es geht darum,
              Fahrzeuge, Menschen und Angebote so zu zeigen, dass online mehr Vertrauen entsteht.
            </p>

            <div className="mt-8 grid gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-[8px] border border-black/10 bg-white/55 px-5 py-4 text-sm leading-6 text-secondary"
                >
                  {pillar}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {teamMembers.map((member) => (
            <GlassCard key={member.role} className="reveal overflow-hidden p-0">
              <div className="relative aspect-[4/5] overflow-hidden border-b border-black/10 bg-white">
                <img
                  src={member.image}
                  alt={member.role}
                  className="h-full w-full object-cover object-[center_12%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,243,0),rgba(23,23,23,0.16))]" />
              </div>

              <div className="space-y-4 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ef4f24]">{member.role}</p>
                  <h2 className="mt-3 font-display text-2xl text-[#171717]">{member.name}</h2>
                </div>
                <p className="text-sm leading-7 text-secondary">{member.bio}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
