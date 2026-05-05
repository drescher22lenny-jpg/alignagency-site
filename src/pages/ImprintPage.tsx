import SectionHeading from "../components/ui/SectionHeading";

function ImprintPage() {
  return (
    <section className="bg-[#fbf8f2] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-content flex-col gap-10">
        <SectionHeading
          eyebrow="Rechtliches"
          title="Impressum"
          description="Angaben gemäß § 5 DDG und § 18 Abs. 2 MStV."
        />

        <div className="grid gap-6 rounded-[8px] border border-black/10 bg-[#fffaf3]/88 p-6 shadow-soft sm:p-8">
          <div className="space-y-3 text-secondary">
            <h2 className="font-display text-2xl text-[#171717]">Anbieter</h2>
            <p>align agency Stanley Grennigloh</p>
            <p>Einzelunternehmen</p>
            <p>Inhaber und Verantwortlicher: Stanley Grennigloh</p>
            <p>Bruchweg 20</p>
            <p>64823 Groß-Umstadt</p>
          </div>

          <div className="space-y-3 text-secondary">
            <h2 className="font-display text-2xl text-[#171717]">Kontakt</h2>
            <p>E-Mail: info@align-agency.com</p>
            <p>Telefon: 0176 76662004</p>
          </div>

          <div className="space-y-3 text-secondary">
            <h2 className="font-display text-2xl text-[#171717]">Umsatzsteuer</h2>
            <p>
              Es besteht keine Umsatzsteuer-Identifikationsnummer. Die Tätigkeit erfolgt derzeit
              unter Anwendung der Kleinunternehmerregelung.
            </p>
          </div>

          <div className="space-y-3 text-secondary">
            <h2 className="font-display text-2xl text-[#171717]">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>Stanley Grennigloh</p>
            <p>Bruchweg 20</p>
            <p>64823 Groß-Umstadt</p>
          </div>

          <div className="space-y-3 text-secondary">
            <h2 className="font-display text-2xl text-[#171717]">Hinweis</h2>
            <p>
              Kein Handelsregistereintrag vorhanden. Die Website wird technisch über Vercel
              bereitgestellt; die Domainverwaltung erfolgt über IONOS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImprintPage;
