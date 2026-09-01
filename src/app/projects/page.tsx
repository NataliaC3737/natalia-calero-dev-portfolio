import { ProjectsView } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos destacados de Natalia Calero Fernández: digitalización inteligente de documentos con IA (DocLayout-YOLO + TrOCR + Gemini), webs empresariales con CMS y más.",
  alternates: {
    canonical: "/projects",
  },
};

export default function Projects() {
  return <ProjectsView />;
}
