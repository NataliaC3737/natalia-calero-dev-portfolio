import type { Metadata } from "next";
import { AboutMeView } from "@/components";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Perfil profesional de Natalia Calero Fernández: desarrolladora full-stack MERN, ingeniera de IA y experiencia Web3. Conoce su trayectoria, formación y habilidades técnicas.",
  alternates: {
    canonical: "/me",
  },
};

export default function Me() {
  return <AboutMeView />;
}
