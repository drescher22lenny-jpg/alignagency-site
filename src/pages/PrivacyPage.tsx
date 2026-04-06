import SectionHeading from "../components/ui/SectionHeading";

function PrivacyPage() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-content flex-col gap-10">
        <SectionHeading
          eyebrow="Rechtliches"
          title="Datenschutzerklärung"
          description="Basisversion für die aktuelle Website ohne Tracking- oder Analyse-Tools."
        />

        <div className="grid gap-6 rounded-[30px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="space-y-3 text-white/70">
            <h2 className="font-display text-2xl text-primary-light">
              1. Verantwortlicher
            </h2>
            <p>Lenny Drescher Social Media Management</p>
            <p>Inhaber: Lenny Drescher</p>
            <p>Klosterstraße 15, 64807 Dieburg</p>
            <p>E-Mail: info@align-agency.com</p>
            <p>Telefon: 016095327282</p>
          </div>

          <div className="space-y-3 text-white/70">
            <h2 className="font-display text-2xl text-primary-light">
              2. Hosting und technische Bereitstellung
            </h2>
            <p>
              Diese Website wird über Vercel bereitgestellt. Beim Aufruf der Website können durch
              den Hosting-Anbieter technisch erforderliche Verbindungsdaten verarbeitet werden,
              insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Inhalte,
              Browserinformationen und Protokolldaten.
            </p>
            <p>
              Die Domainverwaltung erfolgt über IONOS. Eine eigenständige Analyse oder ein
              Marketing-Tracking über IONOS findet nach aktuellem Stand auf dieser Website nicht
              statt.
            </p>
          </div>

          <div className="space-y-3 text-white/70">
            <h2 className="font-display text-2xl text-primary-light">
              3. Kontaktaufnahme
            </h2>
            <p>
              Auf dieser Website steht ein Kontaktformular zur Verfügung. Aktuell erfolgt die
              Kontaktaufnahme über eine vorbereitete E-Mail mittels `mailto`. Die von Ihnen
              eingegebenen Daten werden dabei nicht serverseitig über diese Website verarbeitet,
              sondern an Ihr lokales Mailprogramm übergeben.
            </p>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten
              Angaben ausschließlich zur Bearbeitung Ihrer Anfrage und für den damit verbundenen
              geschäftlichen Kontakt.
            </p>
          </div>

          <div className="space-y-3 text-white/70">
            <h2 className="font-display text-2xl text-primary-light">
              4. Keine Analyse- und Tracking-Tools
            </h2>
            <p>
              Nach aktuellem Stand werden auf dieser Website keine Analyse-, Tracking- oder
              Marketing-Tools wie Google Analytics, Meta Pixel oder vergleichbare Dienste
              eingesetzt.
            </p>
          </div>

          <div className="space-y-3 text-white/70">
            <h2 className="font-display text-2xl text-primary-light">
              5. Externe Inhalte und Einbindungen
            </h2>
            <p>
              Nach aktuellem Stand werden keine externen Karten-, Video-, Terminbuchungs- oder
              Schrift-Dienste eingebunden, die eigenständig personenbezogene Daten an Drittanbieter
              übertragen.
            </p>
          </div>

          <div className="space-y-3 text-white/70">
            <h2 className="font-display text-2xl text-primary-light">
              6. Ihre Rechte
            </h2>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Vorschriften insbesondere das Recht auf
              Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie auf Widerspruch
              gegen die Verarbeitung Ihrer personenbezogenen Daten.
            </p>
            <p>
              Wenn Sie datenschutzrechtliche Anliegen haben, können Sie sich an
              info@align-agency.com wenden.
            </p>
          </div>

          <div className="space-y-3 text-white/70">
            <h2 className="font-display text-2xl text-primary-light">7. Stand</h2>
            <p>Stand dieser Datenschutzerklärung: 6. April 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPage;
