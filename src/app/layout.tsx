import { metadata, viewport } from "@/lib";
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
    knowsAbout: [
      "Full-stack development",
      "MERN Stack",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Machine Learning",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${bagelFatOne.variable} ${afacad.variable}`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
