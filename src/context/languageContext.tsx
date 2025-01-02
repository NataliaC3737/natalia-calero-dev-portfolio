"use client";
import React, { createContext, useState, ReactNode } from "react";
import ES from "@/data/es.json";
import EN from "@/data/en.json";

type Language = "ES" | "EN";

interface LanguageContextType {
  language: Language;
  translations: Record<string, any>;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
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
