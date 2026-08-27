import { NextRequest, NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/email/send";
import { z } from "zod";

const contactSchema = z.object({
  from: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
  to: z.string(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  locale: z.enum(["EN", "ES"]).optional().default("ES"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Validation failed" },
        { status: 400 }
      );
    }

    const { from, subject, message, locale } = parsed.data;

    await sendContactEmails(from, subject, message, locale);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    const message =
      error instanceof Error ? error.message : "Unexpected error";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
