"use client";
import { MarginLines, Navbar } from "@/components";
import { LanguageProvider, ThemeProvider } from "@/context";
import { stripLocale } from "@/lib/i18n";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: ReactNode }) {
  const currentPath = usePathname();
  const isHome = stripLocale(currentPath) === "/";

  return (
    <LanguageProvider>
      <ThemeProvider>
        <MarginLines isHome={isHome} />
        <Navbar />
        {children}
        <Toaster richColors position="bottom-right" />
      </ThemeProvider>
    </LanguageProvider>
  );
}
