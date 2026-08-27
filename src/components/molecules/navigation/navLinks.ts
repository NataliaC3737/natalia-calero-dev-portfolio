export const navLinks = [
  { href: "/me", labelKey: "about" },
  { href: "/projects", labelKey: "projects" },
  { href: "/contact", labelKey: "contact" },
] as const;

export function navLinkClass(path: string, currentPath: string, extra = "") {
  return [
    "font-afacad text-base tracking-wide transition-colors duration-200",
    currentPath === path
      ? "text-primary font-bold"
      : "text-brown-muted hover:text-brown-coffee",
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}
