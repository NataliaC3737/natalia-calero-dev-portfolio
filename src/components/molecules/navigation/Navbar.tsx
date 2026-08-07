"use client";
import LanguageToggle from "@/components/atoms/toggles/LanguageToggle";
import { ThemeToggle } from "@/components/atoms/toggles/ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/hooks/useLanguage";

export default function Navbar() {
  const currentPath = usePathname();
  const { translations } = useLanguage();

  const linkClass = (path: string) =>
    `font-afacad text-base tracking-wide transition-colors duration-200 ${
      currentPath === path
        ? "text-primary font-bold"
        : "text-brown-muted hover:text-brown-coffee"
    }`;

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/70 backdrop-blur-xl border-b border-border/40">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link
          href={"/"}
          className="text-2xl bg-linear-to-r from-primary to-gradient-end bg-clip-text text-transparent font-bagel-fat-one"
        >
          COCONAT
        </Link>
        <div className="flex items-center gap-8">
          <Link href={"/me"} className={linkClass("/me")}>
            {(translations as any).nav.about}
          </Link>
          <Link href={"/projects"} className={linkClass("/projects")}>
            {(translations as any).nav.projects}
          </Link>
          <Link href={"/contact"} className={linkClass("/contact")}>
            {(translations as any).nav.contact}
          </Link>
          <div className="flex items-center gap-3 pl-4 border-l border-border/60">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
