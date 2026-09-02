import type { Metadata } from "next";
import { locales, type Locale } from "./i18n";
import { SITE_URL } from "./metadata";

export function localizedUrl(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  return `${SITE_URL}/${locale}${clean}`;
}

export function hreflang(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = localizedUrl(loc, path);
  }
  return languages;
}

interface PageMetaInput {
  lang: Locale;
  path: string;
  title: string;
  description: string;
}

export function buildPageMetadata({
  lang,
  path,
  title,
  description,
}: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: localizedUrl(lang, path),
      languages: hreflang(path),
    },
  };
}
