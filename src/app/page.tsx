import type { Metadata } from "next";
import HomeView from "@/components/pages/HomeView";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Natalia Calero Fernández — full-stack MERN developer & AI engineer. I build full-stack apps, deploy AI models, and care deeply about the people who use them.",
};

export default function Home() {
  return <HomeView />;
}
