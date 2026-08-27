import z from "zod";

export const contactSchema = z.object({
  from: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
  to: z.string(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  locale: z.enum(["EN", "ES"]).optional().default("ES"),
});
