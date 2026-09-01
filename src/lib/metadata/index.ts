import type { Metadata, Viewport } from "next";

const SITE_NAME = "Natalia Calero Dev";
const SITE_URL = "https://natalia-calero.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Desarrolladora Full-Stack & Ingeniera de IA`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Portfolio de Natalia Calero Fernández, desarrolladora full-stack MERN e ingeniera de IA en Madrid. Construyo aplicaciones web pulidas e intuitivas, despliego modelos de IA en producción y priorizo el rendimiento, el código limpio y los productos de alto impacto.",
  keywords: [
    "Natalia Calero",
    "desarrolladora full-stack",
    "desarrolladora MERN",
    "ingeniera de IA",
    "full-stack developer",
    "AI engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Machine Learning",
    "portfolio",
    "Madrid",
    "desarrolladora freelance",
  ],
  authors: [
    {
      name: "Natalia Calero Fernández",
      url: "https://www.linkedin.com/in/natalia-calero-dev/",
    },
  ],
  creator: "Natalia Calero Fernández",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Desarrolladora Full-Stack & Ingeniera de IA`,
    description:
      "Desarrolladora full-stack MERN e ingeniera de IA. Construyo aplicaciones web pulidas e intuitivas, despliego modelos de IA en producción y cuido el rendimiento, el código limpio y el impacto social.",
    locale: "es_ES",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} — Desarrolladora Full-Stack & Ingeniera de IA`,
    description:
      "Desarrolladora full-stack MERN e ingeniera de IA construyendo software pulido e intuitivo.",
  },
  icons: {
    icon: "/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#181818" },
  ],
};
