import SectionHeading from "../components/ui/SectionHeading";

function PrivacyPage() {
  return (
    <section className="bg-[#fbf8f2] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto flex w-full max-w-content flex-col gap-10">
        <SectionHeading
          eyebrow="Rechtliches"
          title="Datenschutzerklärung"
          description="Basisversion für die aktuelle Website ohne optionale Cookies, Tracking- oder Analyse-Tools."
        />

        <div className="grid gap-6 rounded-[8px] border border-black/10 bg-[#fffaf3]/88 p-6 shadow-soft sm:p-8">
          <div className="space-y-3 text-secondary">
            <h2 className="font-display text-2xl text-[#171717]">
              1. Verantwortlicher
            </h2>
            <p>align agency Stanley Grennigloh</p>
            <p>Einzelunternehmen</p>
            <p>Inhaber und Verantwortlicher: Stanley Grennigloh</p>
            <p>Bruchweg 20, 64823 Groß-Umstadt</p>
            <p>E-Mail: info@align-agency.com</p>
            <p>Telefon: 0176 76662004</p>
          </div>

          <div className="space-y-3 text-secondary">
            <h2 className="font-display text-2xl text-[#171717]">
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

          <div className="space-y-3 text-secondary">
            <h2 className="font-display text-2xl text-[#171717]">
              3. Kontaktaufnahme
            </h2>
            <p>
              Auf dieser Website steht ein Kontaktformular zur Verfügung. Die von Ihnen
              eingegebenen Daten werden zur Bearbeitung Ihrer Anfrage verarbeitet und per E-Mail an
              uns übermittelt.
            </p>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten
              Angaben ausschließlich zur Bearbeitung Ihrer Anfrage und für den damit verbundenen
              geschäftlichen Kontakt.
            </p>
          </div>

          <div className="space-y-3 text-secondary">
            <h2 className="font-display text-2xl text-[#171717]">
              4. Keine Analyse- und Tracking-Tools
            </h2>
            <p>
              Nach aktuellem Stand werden auf dieser Website keine Analyse-, Tracking- oder
              Marketing-Tools wie Google Analytics, Meta Pixel oder vergleichbare Dienste
              eingesetzt.
            </p>
          </div>

          <div className="space-y-3 text-secondary">
            <h2 className="font-display text-2xl text-[#171717]">
              5. Cookies und Einwilligung
            </h2>
            <p>
              Nach aktuellem Stand setzt diese Website keine optionalen Cookies und verwendet keine
              Dienste, die eine vorherige Einwilligung über ein Cookie-Banner erfordern. Sollten
              später Analyse-, Marketing-, Karten-, Termin- oder externe Video-Dienste eingebunden
              werden, muss dies vorab rechtlich geprüft und gegebenenfalls über eine
              Einwilligungslösung abgebildet werden.
            </p>
          </div>

          <div className="space-y-3 text-secondary">
            <h2 className="font-display text-2xl text-[#171717]">
              6. Externe Inhalte und Einbindungen
            </h2>
            <p>
              Nach aktuellem Stand werden keine externen Karten-, Video-, Terminbuchungs- oder
              Schrift-Dienste eingebunden, die eigenständig personenbezogene Daten an Drittanbieter
              übertragen.
            </p>
          </div>

          <div className="space-y-3 text-secondary">
            <h2 className="font-display text-2xl text-[#171717]">
              7. Ihre Rechte
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

          <div className="space-y-3 text-secondary">
            <h2 className="font-display text-2xl text-[#171717]">8. Stand</h2>
            <p>Stand dieser Datenschutzerklärung: 5. Mai 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPage;
