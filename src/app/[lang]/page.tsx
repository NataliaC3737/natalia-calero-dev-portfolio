import { HomeView } from "@/components";
import { buildPageMetadata } from "@/lib/seo";
import { homeContent } from "@/lib/seo-content";
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
  const content = homeContent[lang] ?? homeContent.es;
  return buildPageMetadata({ lang, path: "/", ...content });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  await params;
  return <HomeView />;
}
