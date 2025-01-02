import type { Config } from "tailwindcss";
import theme from "./src/styles/theme";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'], // Enable class-based and data-theme dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: theme as any,
  plugins: [require("tailwindcss-animate")],
};
export default config;
