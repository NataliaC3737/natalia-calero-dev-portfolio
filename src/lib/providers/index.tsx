"use client";
import { ReactNode, useEffect } from "react";
import MarginLines from "@/components/atoms/MarginLines/MarginLines";
import Navbar from "@/components/molecules/navigation/Navbar";
import { LanguageProvider } from "@/context/languageContext";
import { ThemeProvider } from "@/context/themeContext";
import { useLanguage } from "@/context/hooks/useLanguage";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";

function LangSync() {
  const { language } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = language === "EN" ? "en" : "es";
  }, [language]);
  return null;
}

export default function Providers({ children }: { children: ReactNode }) {
  const currentPath = usePathname();

  return (
    <LanguageProvider>
      <ThemeProvider>
        <LangSync />
        <MarginLines isHome={currentPath === "/"} />
        <Navbar />
        {children}
        <Toaster richColors position="bottom-right" />
      </ThemeProvider>
    </LanguageProvider>
  );
}
