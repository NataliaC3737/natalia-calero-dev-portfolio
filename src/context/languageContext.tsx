"use client";
import EN from "@/data/en.json";
import ES from "@/data/es.json";
import { createContext, ReactNode, useState } from "react";

type Language = "ES" | "EN";
type TranslationData = typeof ES | typeof EN;

interface LanguageContextType {
  language: Language;
  translations: TranslationData;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Object to hold language JSONs
const translationsData = {
  ES,
  EN,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ES");

  const toggleLanguage = () => {
    const newLanguage = language === "ES" ? "EN" : "ES";
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        translations: translationsData[language],
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
