import { ProjectsView } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured projects by Natalia Calero Fernández: AI-powered document digitisation (DocLayout-YOLO + TrOCR), business websites with CMS, and more.",
};

export default function Projects() {
  return <ProjectsView />;
}
