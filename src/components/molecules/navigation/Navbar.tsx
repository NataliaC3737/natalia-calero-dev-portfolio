"use client";
import { useState } from "react";
import NavbarBrand from "./NavbarBrand";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/70 backdrop-blur-xl border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <NavbarBrand onNavigate={closeMenu} />
        <DesktopNav />
        <MobileNav
          open={menuOpen}
          onToggle={() => setMenuOpen((v) => !v)}
          onNavigate={closeMenu}
        />
      </div>
    </nav>
  );
}
