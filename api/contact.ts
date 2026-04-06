import { Resend } from "resend";

const recipientEmail = "info@align-agency.com";
const resendApiKey = process.env.RESEND_API_KEY;
const senderEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

function sendJson(
  res: {
    status: (code: number) => { json: (payload: unknown) => void };
  },
  status: number,
  payload: unknown,
) {
  res.status(status).json(payload);
}

export default async function handler(
  req: {
    method?: string;
    body?: ContactPayload;
  },
  res: {
    setHeader: (name: string, value: string) => void;
    status: (code: number) => { json: (payload: unknown) => void };
  },
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    sendJson(res, 405, { error: "Method not allowed." });
    return;
  }

  if (!resendApiKey) {
    sendJson(res, 500, { error: "RESEND_API_KEY is not configured." });
    return;
  }

  const payload = req.body || {};
  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const company = payload.company?.trim() || "-";
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    sendJson(res, 400, { error: "Bitte füllen Sie Name, E-Mail und Nachricht aus." });
    return;
  }

  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `Neue Anfrage von ${name}${company !== "-" ? ` | ${company}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>Neue Anfrage über alignAgency</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Unternehmen:</strong> ${company}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      sendJson(res, 500, { error: error.message || "Die Anfrage konnte nicht gesendet werden." });
      return;
    }

    sendJson(res, 200, { success: true });
  } catch (error) {
    console.error("Resend contact form error:", error);
    sendJson(res, 500, {
      error:
        error instanceof Error
          ? error.message
          : "Die Anfrage konnte gerade nicht gesendet werden.",
    });
  }
}
