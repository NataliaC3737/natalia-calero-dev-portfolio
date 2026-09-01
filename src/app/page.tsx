import { HomeView } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Desarrolladora Full-Stack & Ingeniera de IA en Madrid — Natalia Calero",
  description:
    "Portfolio de Natalia Calero, desarrolladora full-stack MERN e ingeniera de IA en Madrid. Especializada en aplicaciones web, despliegue de modelos de IA en producción y desarrollo con impacto social.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeView />;
}
