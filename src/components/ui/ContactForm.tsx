import { FormEvent, useState } from "react";

const RECIPIENT_EMAIL = "info@align-agency.com";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

function buildMailtoLink(data: ContactFormData) {
  const subject = `Projektanfrage von ${data.name}${data.company ? ` | ${data.company}` : ""}`;
  const body = [
    "Neue Anfrage über alignAgency",
    "",
    `Name: ${data.name}`,
    `E-Mail: ${data.email}`,
    `Unternehmen: ${data.company || "-"}`,
    "",
    "Nachricht:",
    data.message,
  ].join("\n");

  return `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = buildMailtoLink(formData);
  }

  function updateField<K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/45"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(event) => updateField("name", event.target.value)}
          placeholder="Ihr Name"
          required
          className="w-full rounded-[24px] border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/20"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/45"
        >
          E-Mail
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="mail@unternehmen.de"
          required
          className="w-full rounded-[24px] border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/20"
        />
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="company"
          className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/45"
        >
          Unternehmen
        </label>
        <input
          id="company"
          type="text"
          value={formData.company}
          onChange={(event) => updateField("company", event.target.value)}
          placeholder="Unternehmen oder Marke"
          className="w-full rounded-[24px] border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/20"
        />
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/45"
        >
          Nachricht
        </label>
        <textarea
          id="message"
          rows={7}
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Worum geht es und was soll entstehen?"
          required
          className="w-full rounded-[24px] border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/20"
        />
      </div>

      <div className="sm:col-span-2 flex items-center justify-between gap-4">
        <p className="text-xs leading-6 text-white/45">
          Die Anfrage wird an {RECIPIENT_EMAIL} als vorbereitete E-Mail geöffnet.
        </p>
        <button
          type="submit"
          className="inline-flex rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
        >
          Anfrage senden
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
