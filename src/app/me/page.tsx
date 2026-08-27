import type { Metadata } from "next";
import AboutMeView from "@/components/pages/AboutMeView";

export const metadata: Metadata = {
  title: "About me",
  description:
    "Professional profile of Natalia Calero Fernández: full-stack MERN developer, AI engineer, and Web3 experience. Explore her journey, education, and technical skills.",
};

export default function Me() {
  return <AboutMeView />;
}
