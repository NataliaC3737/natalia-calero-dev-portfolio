"use client";
import LanguageToggle from "@/components/atoms/toggles/LanguageToggle";
import { ThemeToggle } from "@/components/atoms/toggles/ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/hooks/useLanguage";
import { navLinks, navLinkClass } from "./navLinks";

export default function DesktopNav() {
  const currentPath = usePathname();
  const { translations } = useLanguage();
  const nav = (translations as any).nav;

  return (
    <div className="hidden lg:flex items-center gap-8">
      {navLinks.map(({ href, labelKey }) => (
        <Link key={href} href={href} className={navLinkClass(href, currentPath)}>
          {nav[labelKey]}
        </Link>
      ))}
      <div className="flex items-center gap-3 pl-4 border-l border-border/60">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  );
}
