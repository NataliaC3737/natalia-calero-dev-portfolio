import { HomeView } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Natalia Calero Fernández — full-stack MERN developer & AI engineer. I build full-stack apps, deploy AI models, and care deeply about the people who use them.",
};

export default function Home() {
  return <HomeView />;
}
