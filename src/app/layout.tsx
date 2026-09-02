import { metadata, viewport } from "@/lib";
import { headers } from "next/headers";
import { Afacad, Bagel_Fat_One } from "next/font/google";
import Providers from "../lib";
import "./globals.css";

const bagelFatOne = Bagel_Fat_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bagel-fat-one",
});
const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-afacad",
});

export { metadata, viewport };

const SITE_URL = "https://natalia-calero.dev";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Natalia Calero Fernández",
    url: SITE_URL,
    image: `${SITE_URL}/logo.svg`,
    jobTitle: "Desarrolladora Full-Stack & Ingeniera de IA",
    description:
      "Desarrolladora full-stack MERN e ingeniera de IA en Madrid, especializada en aplicaciones web y en el despliegue de modelos de IA en producción.",
    worksFor: {
      "@type": "Organization",
      name: "Yotramito",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madrid",
      addressCountry: "ES",
    },
    sameAs: [
      "https://www.linkedin.com/in/natalia-calero-dev/",
      "https://github.com/NataliaC3737",
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "MIOTI" },
      { "@type": "CollegeOrUniversity", name: "Ironhack" },
      { "@type": "CollegeOrUniversity", name: "MSMK University" },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Máster en IA Avanzada",
        credentialCategory: "degree",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Higher National Diploma (HND) en Computación & IA",
        credentialCategory: "diploma",
      },
    ],
    knowsLanguage: [
      { "@type": "Language", name: "Español" },
      { "@type": "Language", name: "Inglés" },
    ],
    knowsAbout: [
      "Full-stack development",
      "MERN Stack",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Artificial Intelligence",
      "Web3",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Natalia Calero Dev",
    url: SITE_URL,
    inLanguage: ["es", "en"],
  },
];

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const lang = headersList.get("x-locale") === "en" ? "en" : "es";

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${bagelFatOne.variable} ${afacad.variable}`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
