import { services } from "../../data/siteContent";
import GlassCard from "../ui/GlassCard";
import SectionHeading from "../ui/SectionHeading";

function ServicesSection() {
  return (
    <section className="bg-[#fbf8f2] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-content flex-col gap-12">
        <SectionHeading
          eyebrow="Leistungen"
          title="Modern im Auftritt. Klar im Ziel."
          description="Wir machen Videos und Online-Inhalte für Automotive-Betriebe, die hochwertig wirken und im Verkauf einen echten Zweck erfüllen."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <GlassCard key={service.title} className="reveal p-7 transition hover:-translate-y-1 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ef4f24]">Automotive</p>
              <h3 className="mt-5 font-display text-2xl text-[#171717]">{service.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-secondary sm:text-base">
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
