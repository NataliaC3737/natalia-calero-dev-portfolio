"use client";
import LanguageToggle from "@/components/atoms/toggles/LanguageToggle";
import { ThemeToggle } from "@/components/atoms/toggles/ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();
  return (
    <nav className="fixed top-0 z-50 px-32 py-5 w-full flex items-center justify-between border-b border-b-primary backdrop-blur-xl">
      <Link
        href={"/"}
        className="text-brown-coffee font-bagel-fat-one text-2xl"
      >
        COCONAT
      </Link>
      <div className="flex gap-6">
        <Link
          href={"/me"}
          className={`text-brown-coffee font-afacad text-lg ${
            currentPath === "/me" && "underline"
          }`}
        >
          About me
        </Link>
        <Link
          href={"/projects"}
          className={`text-brown-coffee font-afacad text-lg ${
            currentPath === "/projects" && "underline"
          }`}
        >
          Projects
        </Link>
        <Link
          href={"/contact"}
          className={`text-brown-coffee font-afacad text-lg ${
            currentPath === "/contact" && "underline"
          }`}
        >
          Get in touch
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </nav>
  );
}
