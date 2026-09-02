import { AboutMeView } from "@/components";
import { buildPageMetadata } from "@/lib/seo";
import { aboutContent } from "@/lib/seo-content";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const content = aboutContent[lang] ?? aboutContent.es;
  return buildPageMetadata({ lang, path: "/me", ...content });
}

export default function MePage() {
  return <AboutMeView />;
}
