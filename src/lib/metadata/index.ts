import type { Metadata, Viewport } from "next";

const SITE_NAME = "Natalia Calero Dev";
const SITE_URL = "https://natalia-calero.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Full-stack Developer & AI Engineer`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Portfolio of Natalia Calero Fernández, full-stack MERN developer & AI engineer based in Madrid. I build polished, intuitive web apps, deploy AI models to production, and focus on performance, clean code, and high-impact products.",
  keywords: [
    "Natalia Calero",
    "full-stack developer",
    "MERN developer",
    "AI engineer",
    "React",
    "Next.js",
    "Node.js",
    "portfolio",
    "Madrid",
    "freelance developer",
  ],
  authors: [
    {
      name: "Natalia Calero Fernández",
      url: "https://www.linkedin.com/in/natalia-calero-dev/",
    },
  ],
  creator: "Natalia Calero Fernández",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Full-stack Developer & AI Engineer`,
    description:
      "Full-stack MERN developer & AI engineer. I build polished, intuitive web apps, deploy AI models to production, and care about performance, clean code, and social impact.",
    locale: "es_ES",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} — Full-stack Developer & AI Engineer`,
    description:
      "Full-stack MERN developer & AI engineer building polished, intuitive software.",
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
