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

function badRequest(message: string) {
  return new Response(JSON.stringify({ error: message }), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}

export default async function handler(request: Request) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed." }), {
      status: 405,
      headers: {
        "Allow": "POST",
        "Content-Type": "application/json",
      },
    });
  }

  if (!resendApiKey) {
    return new Response(JSON.stringify({ error: "RESEND_API_KEY is not configured." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const payload = (await request.json()) as ContactPayload;
  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const company = payload.company?.trim() || "-";
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return badRequest("Bitte füllen Sie Name, E-Mail und Nachricht aus.");
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: `alignAgency <${senderEmail}>`,
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

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Resend contact form error:", error);

    return new Response(
      JSON.stringify({ error: "Die Anfrage konnte gerade nicht gesendet werden." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
