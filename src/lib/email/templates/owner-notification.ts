const primary = "#d96b28";
const gradientEnd = "#b8561e";
const coffee = "#6a4532";
const muted = "#b89e8d";
const cream = "#faf7f4";
const white = "#ffffff";
const accentBg = "#fdf6ee";

type Locale = "EN" | "ES";

const copy = {
  EN: {
    lang: "en",
    badge: "New message",
    heading: "You received a new contact form submission",
    fromLabel: "From",
    subjectLabel: "Subject",
    messageLabel: "Message",
    replyButton: "Reply",
    footer: "Sent via the contact form at",
  },
  ES: {
    lang: "es",
    badge: "Nuevo mensaje",
    heading: "Has recibido una nueva solicitud de contacto",
    fromLabel: "De",
    subjectLabel: "Asunto",
    messageLabel: "Mensaje",
    replyButton: "Responder",
    footer: "Enviado desde el formulario de contacto de",
  },
} as const;

export function ownerNotificationTemplate(
  fromEmail: string,
  subject: string,
  message: string,
  locale: Locale = "ES"
): string {
  const t = copy[locale];
  const trimmedSubject = subject.trim() || "(sin asunto)";

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
            <td style="background:${accentBg};padding:32px 40px;border-bottom:3px solid ${primary};">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="display:inline-block;background:${primary};color:${white};font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;padding:5px 14px;border-radius:20px;">${t.badge}</span>
                  </td>
                  <td align="right">
                    <span style="color:${muted};font-size:12px;">natalia-calero.dev</span>
                  </td>
                </tr>
              </table>
              <h1 style="margin:22px 0 0;color:${coffee};font-size:21px;font-weight:700;">${t.heading}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 6px;color:${muted};font-size:12px;text-transform:uppercase;letter-spacing:2px;">${t.fromLabel}</p>
                    <a href="mailto:${fromEmail}" style="margin:0;color:${primary};font-size:16px;font-weight:600;text-decoration:none;">${fromEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 6px;color:${muted};font-size:12px;text-transform:uppercase;letter-spacing:2px;">${t.subjectLabel}</p>
                    <p style="margin:0;color:${coffee};font-size:16px;font-weight:600;">${trimmedSubject}</p>
                  </td>
                </tr>
                <tr>
                  <td>
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
                    <hr style="border:none;border-top:1px solid ${cream};margin:0 0 28px;">
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <a href="mailto:${fromEmail}" style="display:inline-block;background:linear-gradient(135deg,${primary} 0%,${gradientEnd} 100%);color:${white};font-size:14px;font-weight:600;text-decoration:none;padding:12px 36px;border-radius:28px;">${t.replyButton} &rarr;</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <p style="margin:24px 0 0;color:${muted};font-size:12px;text-align:center;">${t.footer} natalia-calero.dev</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
