import ContactForm from "../components/ui/ContactForm";
import GlassCard from "../components/ui/GlassCard";
import SectionHeading from "../components/ui/SectionHeading";

function ContactPage() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto grid w-full max-w-content gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Kontakt"
          title="Wenn Sie Ihre Marke weiterentwickeln und klarer positionieren wollen, sind Sie bei uns richtig."
          description="Teilen Sie uns kurz mit, woran Sie arbeiten. Wir melden uns mit einer klaren Einschätzung und einem passenden nächsten Schritt zurück."
        />

        <GlassCard className="p-6 sm:p-8">
          <ContactForm />
        </GlassCard>
      </div>
    </section>
  );
}

export default ContactPage;
