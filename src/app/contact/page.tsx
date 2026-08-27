import type { Metadata } from "next";
import { ContactView } from "@/components";

export const metadata: Metadata = {
  title: "Get in touch",
  description:
    "Contact Natalia Calero Fernández — full-stack MERN developer & AI engineer. Open to freelance projects, collaborations, and opportunities in web development and AI.",
};

export default function Contact() {
  return <ContactView />;
}
