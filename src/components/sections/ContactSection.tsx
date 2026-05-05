import { Link } from "react-router-dom";
import GlassCard from "../ui/GlassCard";
import ContactForm from "../ui/ContactForm";
import SectionHeading from "../ui/SectionHeading";

type ContactSectionProps = {
  compact?: boolean;
};

function ContactSection({ compact = false }: ContactSectionProps) {
  return (
    <section className={`bg-[#fbf8f2] px-5 ${compact ? "py-12" : "py-20"} sm:px-8 lg:px-10`}>
      <div className="mx-auto flex w-full max-w-content flex-col gap-10">
        <SectionHeading
          eyebrow="Kontakt"
          title="Sie möchten online professioneller auftreten und mehr Fahrzeuge verkaufen?"
          description="Erzählen Sie uns kurz, wo Sie gerade stehen. Wir schauen gemeinsam, welcher Content für Ihr Autohaus oder Ihren Motorradhandel sinnvoll ist."
        />

        <GlassCard className="reveal grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ef4f24]">Direkt starten</p>
              <p className="mt-4 max-w-sm text-base leading-7 text-secondary">
                Wir hören zu, stellen die richtigen Fragen und geben Ihnen eine ehrliche
                Einschätzung, was online den größten Hebel hat.
              </p>
            </div>

            <div className="space-y-3 text-sm text-secondary">
              <p>Short Form Content</p>
              <p>Imagefilme</p>
              <p>Video</p>
              <p>Digitale Lösungen</p>
            </div>

            <Link
              to="/contact"
              className="inline-flex rounded-full border border-black/16 px-5 py-3 text-sm font-medium text-[#171717] transition hover:-translate-y-0.5 hover:border-black/28 hover:bg-white"
            >
              Zur Kontaktseite
            </Link>
          </div>

          <ContactForm />
        </GlassCard>
      </div>
    </section>
  );
}

export default ContactSection;
