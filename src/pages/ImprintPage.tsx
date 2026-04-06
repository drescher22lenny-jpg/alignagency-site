import SectionHeading from "../components/ui/SectionHeading";

function ImprintPage() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-content flex-col gap-10">
        <SectionHeading
          eyebrow="Rechtliches"
          title="Impressum"
          description="Angaben gemäß § 5 DDG und § 18 Abs. 2 MStV."
        />

        <div className="grid gap-6 rounded-[30px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="space-y-3 text-white/70">
            <h2 className="font-display text-2xl text-primary-light">Anbieter</h2>
            <p>Lenny Drescher Social Media Management</p>
            <p>Einzelunternehmen</p>
            <p>Inhaber: Lenny Drescher</p>
            <p>Klosterstraße 15</p>
            <p>64807 Dieburg</p>
          </div>

          <div className="space-y-3 text-white/70">
            <h2 className="font-display text-2xl text-primary-light">Kontakt</h2>
            <p>E-Mail: info@align-agency.com</p>
            <p>Telefon: 016095327282</p>
          </div>

          <div className="space-y-3 text-white/70">
            <h2 className="font-display text-2xl text-primary-light">Umsatzsteuer</h2>
            <p>
              Es besteht keine Umsatzsteuer-Identifikationsnummer. Die Tätigkeit erfolgt derzeit
              unter Anwendung der Kleinunternehmerregelung.
            </p>
          </div>

          <div className="space-y-3 text-white/70">
            <h2 className="font-display text-2xl text-primary-light">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>Lenny Drescher</p>
            <p>Klosterstraße 15</p>
            <p>64807 Dieburg</p>
          </div>

          <div className="space-y-3 text-white/70">
            <h2 className="font-display text-2xl text-primary-light">Hinweis</h2>
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
