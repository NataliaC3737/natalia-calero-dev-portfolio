"use client";
import { ProjectDetailTemplate } from "@/components/templates/ProjectDetailTemplate";
import { useLanguage } from "@/context";

export function ProjectDetailClient({ detail }: { detail: string }) {
  const { translations } = useLanguage();
  const projects = (translations as any).projects.list;
  const project = projects?.find(
    (p: any) => p.links?.project === `/projects/${detail}`,
  );

  return <ProjectDetailTemplate project={project} />;
}
