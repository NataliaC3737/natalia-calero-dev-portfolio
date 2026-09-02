"use client";
import EN from "@/data/en.json";
import ES from "@/data/es.json";
import type { Locale } from "@/lib/i18n";
import { getLocale, localizedPath, stripLocale } from "@/lib/i18n";
import { usePathname, useRouter } from "next/navigation";
import { createContext, ReactNode, useCallback, useMemo } from "react";

type Language = "ES" | "EN";
type TranslationData = typeof ES | typeof EN;

interface LanguageContextType {
  language: Language;
  locale: Locale;
  translations: TranslationData;
  toggleLanguage: () => void;
  localize: (path: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translationsData = {
  ES,
  EN,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const locale = getLocale(pathname);
  const language: Language = locale === "en" ? "EN" : "ES";
  const translations = translationsData[language];

  const toggleLanguage = useCallback(() => {
    const target: Locale = locale === "es" ? "en" : "es";
    router.push(localizedPath(target, stripLocale(pathname)));
  }, [locale, pathname, router]);

  const localize = useCallback(
    (path: string) => localizedPath(locale, path),
    [locale],
  );

  const value = useMemo(
    () => ({ language, locale, translations, toggleLanguage, localize }),
    [language, locale, translations, toggleLanguage, localize],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
