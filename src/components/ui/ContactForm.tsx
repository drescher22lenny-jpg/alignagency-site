import { FormEvent, useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type SubmissionState = "idle" | "submitting" | "success" | "error";

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmissionState("submitting");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Die Anfrage konnte nicht gesendet werden.");
      }

      setSubmissionState("success");
      setFeedbackMessage("Danke, Ihre Nachricht ist angekommen. Wir melden uns persönlich zurück.");
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      setSubmissionState("error");
      setFeedbackMessage(
        error instanceof Error
          ? error.message
          : "Die Anfrage konnte gerade nicht gesendet werden.",
      );
    }
  }

  function updateField<K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-secondary"
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
          className="w-full rounded-[8px] border border-black/12 bg-white/70 px-4 py-3 text-sm text-[#171717] outline-none transition placeholder:text-black/30 focus:border-[#ef4f24]"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-secondary"
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
          className="w-full rounded-[8px] border border-black/12 bg-white/70 px-4 py-3 text-sm text-[#171717] outline-none transition placeholder:text-black/30 focus:border-[#ef4f24]"
        />
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="company"
          className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-secondary"
        >
          Unternehmen
        </label>
        <input
          id="company"
          type="text"
          value={formData.company}
          onChange={(event) => updateField("company", event.target.value)}
          placeholder="Autohaus, Motorradhandel oder Unternehmen"
          className="w-full rounded-[8px] border border-black/12 bg-white/70 px-4 py-3 text-sm text-[#171717] outline-none transition placeholder:text-black/30 focus:border-[#ef4f24]"
        />
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-secondary"
        >
          Nachricht
        </label>
        <textarea
          id="message"
          rows={7}
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Wobei können wir helfen?"
          required
          className="w-full rounded-[8px] border border-black/12 bg-white/70 px-4 py-3 text-sm text-[#171717] outline-none transition placeholder:text-black/30 focus:border-[#ef4f24]"
        />
      </div>

      <div className="sm:col-span-2 flex items-center justify-between gap-4">
        <p
          className={`text-xs leading-6 ${
            submissionState === "error"
              ? "text-[#f08b49]"
              : submissionState === "success"
                ? "text-secondary"
                : "text-secondary"
          }`}
        >
          {feedbackMessage || "Ihre Nachricht geht direkt an info@align-agency.com."}
        </p>
        <button
          type="submit"
          disabled={submissionState === "submitting"}
          className="inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ef4f24] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submissionState === "submitting" ? "Wird gesendet..." : "Anfrage senden"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
