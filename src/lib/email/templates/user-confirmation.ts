const primary = "#d96b28";
const gradientEnd = "#b8561e";
const coffee = "#6a4532";
const muted = "#b89e8d";
const cream = "#faf7f4";
const surface = "#f5f2e7";
const white = "#ffffff";

type Locale = "EN" | "ES";

const copy = {
  EN: {
    lang: "en",
    heading: "Thank you for your message",
    subheading:
      "I've received your inquiry and will review it carefully. You can expect a response shortly.",
    yourEmail: "Your email",
    subjectLabel: "Subject",
    messageLabel: "Message",
    name: "Natalia Calero Fernández",
    role: "Full-stack Developer & AI Engineer",
    footer: "This is an automated confirmation sent via",
    closing: "I look forward to connecting with you.",
    lookingForward: "I look forward to connecting with you.",
  },
  ES: {
    lang: "es",
    heading: "Gracias por tu mensaje",
    subheading:
      "He recibido tu consulta y la revisaré detenidamente. Recibirás una respuesta en breve.",
    yourEmail: "Tu correo",
    subjectLabel: "Asunto",
    messageLabel: "Mensaje",
    name: "Natalia Calero Fernández",
    role: "Desarrolladora Full-stack & Ingeniera de IA",
    footer: "Confirmación automática enviada desde",
    closing: "Quedo a la espera de poder conectar contigo.",
    lookingForward: "Quedo a la espera de poder conectar contigo.",
  },
} as const;

export function userConfirmationTemplate(
  fromEmail: string,
  subject: string,
  message: string,
  locale: Locale = "ES"
): string {
  const t = copy[locale];

  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:${cream};font-family:'Georgia','Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:${cream};padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:${white};border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          <tr>
            <td style="background:linear-gradient(135deg,${primary} 0%,${gradientEnd} 100%);padding:48px 40px 40px;text-align:center;">
              <h1 style="margin:0 0 10px;color:${white};font-size:26px;font-weight:700;letter-spacing:-0.3px;">${t.heading}</h1>
              <p style="margin:0;color:rgba(255,255,255,0.9);font-size:15px;line-height:1.6;">${t.subheading}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 6px;color:${muted};font-size:12px;text-transform:uppercase;letter-spacing:2px;">${t.yourEmail}</p>
                    <p style="margin:0;color:${coffee};font-size:15px;">${fromEmail}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 6px;color:${muted};font-size:12px;text-transform:uppercase;letter-spacing:2px;">${t.subjectLabel}</p>
                    <p style="margin:0;color:${coffee};font-size:15px;font-weight:600;">${subject}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:32px;">
                    <p style="margin:0 0 6px;color:${muted};font-size:12px;text-transform:uppercase;letter-spacing:2px;">${t.messageLabel}</p>
                    <p style="margin:0;color:${coffee};font-size:15px;line-height:1.7;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <hr style="border:none;border-top:1px solid ${surface};margin:0 0 28px;">
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:16px;">
                    <p style="margin:0;color:${coffee};font-size:14px;line-height:1.6;">${t.closing}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin:0;color:${coffee};font-size:14px;font-weight:600;">${t.name}</p>
                    <p style="margin:4px 0 0;color:${muted};font-size:13px;">${t.role}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <p style="margin:24px 0 0;color:${muted};font-size:12px;text-align:center;">${t.footer} nataliacalero.dev</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
