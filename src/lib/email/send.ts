import { userConfirmationTemplate } from "./templates/user-confirmation";
import { ownerNotificationTemplate } from "./templates/owner-notification";

type Locale = "EN" | "ES";

interface SendEmailParams {
  to: { email: string; name?: string };
  subject: string;
  htmlContent: string;
}

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

const subjectCopy: Record<Locale, { user: string; owner: string }> = {
  EN: {
    user: "Thank you for reaching out — Natalia Calero Dev",
    owner: "New message from",
  },
  ES: {
    user: "Gracias por contactar — Natalia Calero Dev",
    owner: "Nuevo mensaje de",
  },
};

async function sendEmail(params: SendEmailParams): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "Natalia Calero";

  if (!apiKey) {
    throw new Error("BREVO_API_KEY is not configured");
  }

  if (!senderEmail) {
    throw new Error("BREVO_SENDER_EMAIL is not configured");
  }

  const response = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { email: senderEmail, name: senderName },
      to: [params.to],
      subject: params.subject,
      htmlContent: params.htmlContent,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `Brevo API error (${response.status}): ${errorBody}`
    );
  }
}

export async function sendContactEmails(
  fromEmail: string,
  subject: string,
  message: string,
  locale: Locale = "ES"
): Promise<void> {
  const ownerEmail =
    process.env.BREVO_OWNER_EMAIL || process.env.BREVO_SENDER_EMAIL;

  if (!ownerEmail) {
    throw new Error(
      "Neither BREVO_OWNER_EMAIL nor BREVO_SENDER_EMAIL is configured"
    );
  }

  const sc = subjectCopy[locale];

  await Promise.all([
    sendEmail({
      to: { email: fromEmail },
      subject: sc.user,
      htmlContent: userConfirmationTemplate(fromEmail, subject, message, locale),
    }),
    sendEmail({
      to: { email: ownerEmail },
      subject: `${sc.owner} ${fromEmail}`,
      htmlContent: ownerNotificationTemplate(fromEmail, subject, message, locale),
    }),
  ]);
}
