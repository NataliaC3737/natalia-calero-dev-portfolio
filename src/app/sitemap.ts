import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getProjectSlugs } from "@/lib/projects";
import { hreflang } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://natalia-calero.dev";

  const staticPages: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/me", priority: 0.8, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.9, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  ];

  for (const slug of getProjectSlugs()) {
    staticPages.push({
      path: `/projects/${slug}`,
      priority: 0.7,
      changeFrequency: "monthly",
    });
  }

  const entries: MetadataRoute.Sitemap = [];

  for (const page of staticPages) {
    for (const lang of locales) {
      const url = `${baseUrl}/${lang}${page.path === "/" ? "" : page.path}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: hreflang(page.path),
        },
      });
    }
  }

  return entries;
}
