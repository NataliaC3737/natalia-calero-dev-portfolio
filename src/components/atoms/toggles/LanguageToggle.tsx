"use client";
import { useLanguage } from "@/context/hooks/useLanguage";
import { Languages } from "lucide-react";

export default function LanguageToggle() {
  const { toggleLanguage, language } = useLanguage();

  return (
    <button
      className="text-brown-coffee text-lg flex items-center gap-1"
      onClick={toggleLanguage}
      aria-label={`Switch language to ${language === "EN" ? "Spanish" : "English"}`}
    >
      <Languages className="w-5 h-5" />
      <span className="font-afacad">{language}</span>
    </button>
  );
}
