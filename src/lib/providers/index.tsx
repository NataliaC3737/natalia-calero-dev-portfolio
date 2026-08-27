"use client";
import { MarginLines, Navbar } from "@/components";
import { LanguageProvider, ThemeProvider, useLanguage } from "@/context";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
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
