import { Link } from "react-router-dom";
import GlassCard from "../ui/GlassCard";
import ContactForm from "../ui/ContactForm";
import SectionHeading from "../ui/SectionHeading";

type ContactSectionProps = {
  compact?: boolean;
};

function ContactSection({ compact = false }: ContactSectionProps) {
  return (
    <section className={`px-5 ${compact ? "py-12" : "py-20"} sm:px-8 lg:px-10`}>
      <div className="mx-auto flex w-full max-w-content flex-col gap-10">
        <SectionHeading
          eyebrow="Kontakt"
          title="Wenn Sie Ihre Marke auf das nächste Level bringen wollen, lassen Sie uns darüber sprechen."
          description="Ob Branding, Social Media, Kampagnen oder digitale Lösungen: Wir entwickeln einen Auftritt, der modern wirkt, klar positioniert ist und langfristig trägt."
        />

        <GlassCard className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">alignAgency</p>
              <p className="mt-4 max-w-sm text-base leading-7 text-white/62">
                Klare Kommunikation, schnelle Abstimmung und ein fokussierter Prozess von der Idee
                bis zur Umsetzung.
              </p>
            </div>

            <div className="space-y-3 text-sm text-white/60">
              <p>Branding</p>
              <p>Social Media</p>
              <p>Video</p>
              <p>Digitale Loesungen</p>
            </div>

            <Link
              to="/contact"
              className="inline-flex rounded-full border border-white/12 px-5 py-3 text-sm font-medium text-primary-light transition hover:border-white/20 hover:bg-white/10"
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
