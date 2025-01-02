"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md"
    >
      {theme === "light" ? (
        <Sun className="h-6 w-6 text-brown-coffee" />
      ) : (
        <Moon className="h-6 w-6 text-brown-coffee" />
      )}
    </button>
  );
}
