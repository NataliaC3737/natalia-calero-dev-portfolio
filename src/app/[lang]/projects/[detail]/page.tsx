import { ProjectDetailClient } from "@/components";
import { locales, type Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/metadata";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { buildPageMetadata, localizedUrl } from "@/lib/seo";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { lang: string; detail: string }[] = [];
  for (const lang of locales) {
    for (const slug of getProjectSlugs()) {
      params.push({ lang, detail: slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; detail: string }>;
}): Promise<Metadata> {
  const { lang, detail } = await params;
  const project = getProjectBySlug(detail);
  const content = project?.[lang];

  if (!content) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return buildPageMetadata({
    lang,
    path: `/projects/${detail}`,
    title: content.title,
    description: content.description,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ lang: Locale; detail: string }>;
}) {
  const { lang, detail } = await params;
  const project = getProjectBySlug(detail);
  const content = project?.[lang];

  const url = localizedUrl(lang, `/projects/${detail}`);

  const projectJsonLd = project
    ? [
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: content?.title,
          description: content?.description,
          applicationCategory: "WebApplication",
          image: `${SITE_URL}${project.image}`,
          url,
          author: {
            "@type": "Person",
            name: "Natalia Calero Fernández",
          },
        },
      ]
    : [];

  const breadcrumbJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: localizedUrl(lang, "/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: localizedUrl(lang, "/projects"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: content?.title ?? detail,
          item: url,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([...projectJsonLd, ...breadcrumbJsonLd]),
        }}
      />
      <ProjectDetailClient detail={detail} />
    </>
  );
}
