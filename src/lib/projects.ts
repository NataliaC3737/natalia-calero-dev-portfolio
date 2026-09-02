export interface ProjectMeta {
  slug: string;
  image: string;
  techStack: string[];
  es: { title: string; description: string };
  en: { title: string; description: string };
}

export const projectsMeta: ProjectMeta[] = [
  {
    slug: "doc-layout-ocr",
    image: "/projects/layout-ocr-cover.webp",
    techStack: [
      "Python",
      "FastAPI",
      "YOLOv10",
      "TrOCR",
      "Gemini API",
      "React",
      "Next.js",
      "Docker",
    ],
    es: {
      title: "Document Structure AI — TFM",
      description:
        "Plataforma de digitalización inteligente de documentos que combina DocLayout-YOLO para detección de estructura y TrOCR/Gemini para OCR, construida con FastAPI y React.",
    },
    en: {
      title: "Document Structure AI — Master's Thesis",
      description:
        "Intelligent document digitisation platform combining DocLayout-YOLO for layout detection and TrOCR/Gemini for OCR, built with FastAPI and React.",
    },
  },
  {
    slug: "azajya",
    image: "/projects/azajya-cover.webp",
    techStack: ["React", "Next.js", "CMS", "Figma"],
    es: {
      title: "Azajya — Web empresarial",
      description:
        "Desarrollo integral de una web desde el diseño hasta el despliegue, integrando un CMS para que el cliente gestione sus proyectos de forma independiente.",
    },
    en: {
      title: "Azajya — Business Website",
      description:
        "Full-cycle website development from design to deployment, including a CMS for the client to manage their project listings independently.",
    },
  },
];

export function getProjectSlugs(): string[] {
  return projectsMeta.map((p) => p.slug);
}

export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  return projectsMeta.find((p) => p.slug === slug);
}
