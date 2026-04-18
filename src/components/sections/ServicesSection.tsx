import { services } from "../../data/siteContent";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";

function ServicesSection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-content flex-col gap-12">
        <SectionHeading
          eyebrow="Leistungen"
          title="Content, der gut aussieht und verkaufen hilft."
          description="Wir machen Videos und Online-Inhalte für Autohäuser und Motorradhändler, die professionell wirken und im Verkauf einen echten Zweck erfüllen."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <GlassCard key={service.title} className="p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-white/40">Automotive Content</p>
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
