import type { Locale } from "./i18n";

export interface PageContent {
  title: string;
  description: string;
}

export const homeContent: Record<Locale, PageContent> = {
  es: {
    title:
      "Desarrolladora Full-Stack & Ingeniera de IA en Madrid — Natalia Calero",
    description:
      "Portfolio de Natalia Calero, desarrolladora full-stack MERN e ingeniera de IA en Madrid. Especializada en aplicaciones web, despliegue de modelos de IA en producción y desarrollo con impacto social.",
  },
  en: {
    title: "Full-Stack Developer & AI Engineer in Madrid — Natalia Calero",
    description:
      "Portfolio of Natalia Calero, full-stack MERN developer and AI engineer in Madrid. Specialised in web apps, deploying AI models to production, and socially impactful software.",
  },
};

export const aboutContent: Record<Locale, PageContent> = {
  es: {
    title: "Sobre mí",
    description:
      "Perfil profesional de Natalia Calero Fernández: desarrolladora full-stack MERN, ingeniera de IA y experiencia Web3. Conoce su trayectoria, formación y habilidades técnicas.",
  },
  en: {
    title: "About me",
    description:
      "Professional profile of Natalia Calero Fernández: full-stack MERN developer, AI engineer, and Web3 experience. Explore her journey, education, and technical skills.",
  },
};

export const projectsContent: Record<Locale, PageContent> = {
  es: {
    title: "Proyectos",
    description:
      "Proyectos destacados de Natalia Calero Fernández: digitalización inteligente de documentos con IA (DocLayout-YOLO + TrOCR + Gemini), webs empresariales con CMS y más.",
  },
  en: {
    title: "Projects",
    description:
      "Featured projects by Natalia Calero Fernández: AI-powered document digitisation (DocLayout-YOLO + TrOCR + Gemini), business websites with CMS, and more.",
  },
};

export const contactContent: Record<Locale, PageContent> = {
  es: {
    title: "Contacto",
    description:
      "Contacta con Natalia Calero Fernández — desarrolladora full-stack MERN e ingeniera de IA. Abierta a proyectos freelance, colaboraciones y nuevas oportunidades.",
  },
  en: {
    title: "Contact",
    description:
      "Contact Natalia Calero Fernández — full-stack MERN developer & AI engineer. Open to freelance projects, collaborations, and new opportunities.",
  },
};
