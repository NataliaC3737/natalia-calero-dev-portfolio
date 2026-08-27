"use client";
import Link from "next/link";

export function NavbarBrand({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={"/"}
      className="flex items-center gap-2.5 group"
      onClick={onNavigate}
    >
      <span className="text-xl sm:text-2xl font-bagel-fat-one text-brown-dark group-hover:text-primary transition-colors duration-200">
        Natalia Calero
      </span>
      <span className="flex items-center px-2.5 py-1 rounded-full bg-linear-to-r from-primary to-gradient-end text-white font-bagel-fat-one text-sm leading-none shadow-md group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all duration-200">
        DEV
      </span>
    </Link>
  );
}
