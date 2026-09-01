import type { Metadata } from "next";
import { ContactView } from "@/components";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Natalia Calero Fernández — desarrolladora full-stack MERN e ingeniera de IA. Abierta a proyectos freelance, colaboraciones y nuevas oportunidades.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return <ContactView />;
}
