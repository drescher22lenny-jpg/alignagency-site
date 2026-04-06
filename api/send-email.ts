import { Resend } from "resend";

const recipientEmail = "info@align-agency.com";
const senderEmail = "info@align-agency.com";
const resendApiKey = process.env.RESEND_API_KEY;

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

type VercelRequest = {
  method?: string;
  body?: ContactPayload;
};

type VercelResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => {
    json: (payload: unknown) => void;
  };
};

function sendJson(res: VercelResponse, status: number, payload: unknown) {
  res.status(status).json(payload);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    sendJson(res, 405, { error: "Method not allowed." });
    return;
  }

  if (!resendApiKey) {
    sendJson(res, 500, {
      error: "RESEND_API_KEY is not configured on the server.",
    });
    return;
  }

  const payload = req.body || {};
  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const company = payload.company?.trim() || "-";
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    sendJson(res, 400, {
      error: "Bitte füllen Sie Name, E-Mail und Nachricht aus.",
    });
    return;
  }

  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: `alignAgency <${senderEmail}>`,
      to: [recipientEmail],
      replyTo: email,
      subject: "Neue Anfrage über Website",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>Neue Anfrage</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Unternehmen:</strong> ${company}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      sendJson(res, 500, {
        error: error.message || "Die Anfrage konnte nicht gesendet werden.",
      });
      return;
    }

    sendJson(res, 200, { success: true });
  } catch (error) {
    console.error("Resend send-email error:", error);
    sendJson(res, 500, {
      error:
        error instanceof Error
          ? error.message
          : "Die Anfrage konnte gerade nicht gesendet werden.",
    });
  }
}
