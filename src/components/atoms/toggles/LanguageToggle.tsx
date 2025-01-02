import { useLanguage } from "@/context/hooks/useLanguage";

export default function LanguageToggle() {
  const { toggleLanguage, language } = useLanguage();

  return (
    <button className="text-brown-coffee text-lg" onClick={toggleLanguage}>
      {language}
    </button>
  );
}
