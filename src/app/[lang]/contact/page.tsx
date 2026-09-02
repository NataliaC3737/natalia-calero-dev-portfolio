import { ContactView } from "@/components";
import { buildPageMetadata } from "@/lib/seo";
import { contactContent } from "@/lib/seo-content";
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
  const content = contactContent[lang] ?? contactContent.es;
  return buildPageMetadata({ lang, path: "/contact", ...content });
}

export default function ContactPage() {
  return <ContactView />;
}
