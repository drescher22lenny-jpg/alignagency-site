import { services } from "../../data/siteContent";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";

function ServicesSection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-content flex-col gap-12">
        <SectionHeading
          eyebrow="Leistungen"
          title="Kreative Arbeit mit klarer strategischer Richtung."
          description="Wir entwickeln keine lauten Oberflächen, sondern konsistente Systeme, die Marke, Inhalt und digitale Präsenz sauber zusammenführen."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <GlassCard key={service.title} className="p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-white/40">alignAgency</p>
              <h3 className="mt-5 font-display text-2xl text-primary-light">{service.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/62 sm:text-base">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
