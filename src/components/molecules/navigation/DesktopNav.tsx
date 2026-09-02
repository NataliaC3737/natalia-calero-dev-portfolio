"use client";
import {
  LanguageToggle,
  ThemeToggle,
  navLinkClass,
  navLinks,
} from "@/components";
import { useLanguage } from "@/context/hooks/useLanguage";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function DesktopNav() {
  const currentPath = usePathname();
  const { translations, localize } = useLanguage();
  const nav = (translations as any).nav;

  return (
    <div className="hidden lg:flex items-center gap-8">
      {navLinks.map(({ href, labelKey }) => {
        const localized = localize(href);
        return (
          <Link
            key={href}
            href={localized}
            className={navLinkClass(localized, currentPath)}
          >
            {nav[labelKey]}
          </Link>
        );
      })}
      <div className="flex items-center gap-3 pl-4 border-l border-border/60">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  );
}
