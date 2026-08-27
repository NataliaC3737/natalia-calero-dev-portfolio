"use client";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer
      className={`absolute bottom-0 left-0 w-full py-5 border-t border-t-primary bg-background`}
    >
      <div className="flex justify-center items-center gap-2">
        <p className="font-afacad text-brown-coffee text-sm">
          Developed by Natalia Calero Fernández
        </p>
        <Heart className="h-4 w-4 text-brown-coffee" />
      </div>
    </footer>
  );
}
