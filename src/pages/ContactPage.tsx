import ContactForm from "../components/ui/ContactForm";
import GlassCard from "../components/ui/GlassCard";
import SectionHeading from "../components/ui/SectionHeading";

function ContactPage() {
  return (
    <section className="bg-[#fbf8f2] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto grid w-full max-w-content gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Kontakt"
          title="Lassen Sie uns über Ihren Online-Auftritt sprechen."
          description="Schreiben Sie uns kurz, ob es um Short Form Content, Imagefilme oder einen insgesamt professionelleren Auftritt geht. Wir melden uns persönlich zurück."
        />

        <GlassCard className="reveal p-6 sm:p-8">
          <ContactForm />
        </GlassCard>
      </div>
    </section>
  );
}

export default ContactPage;
