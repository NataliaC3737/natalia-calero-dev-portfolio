"use client";
import LanguageToggle from "@/components/atoms/toggles/LanguageToggle";
import { ThemeToggle } from "@/components/atoms/toggles/ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/hooks/useLanguage";
import { Menu, X } from "lucide-react";
import { navLinks, navLinkClass } from "./navLinks";

export default function MobileNav({
  open,
  onToggle,
  onNavigate,
}: {
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const currentPath = usePathname();
  const { translations } = useLanguage();
  const nav = (translations as any).nav;

  return (
    <div className="lg:hidden">
      <button
        onClick={onToggle}
        aria-label="Menu"
        className="p-2 rounded-lg text-brown-coffee hover:bg-surface transition-colors"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col">
            {navLinks.map(({ href, labelKey }) => (
              <Link
                key={href}
                href={href}
                className={`${navLinkClass(href, currentPath)} py-3`}
                onClick={onNavigate}
              >
                {nav[labelKey]}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-3 mt-1 border-t border-border/40">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
