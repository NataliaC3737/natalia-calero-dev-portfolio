"use client";
import { Afacad, Bagel_Fat_One } from "next/font/google";
import { ThemeProvider } from "@/context/themeContext";
// import type { Metadata } from "next";
import Navbar from "@/components/molecules/Navbar";
import "./globals.scss";
import MarginLines from "@/components/atoms/MarginLines/MarginLines";
import { usePathname } from "next/navigation";
import { LanguageProvider } from "@/context/languageContext";

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

// export const metadata: Metadata = {
//   title: "Coconat dev",
//   description:
//     "Portfolio of Natalia Calero Fernández, a passionate software developer with a focus on web development and data science",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPath = usePathname();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bagelFatOne.variable} ${afacad.variable}`}>
        <LanguageProvider>
          <ThemeProvider>
            <MarginLines isHome={currentPath === "/"} />
            <Navbar />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
