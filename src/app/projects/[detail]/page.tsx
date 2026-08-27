"use client";
import { useParams } from "next/navigation";
import { useLanguage } from "@/context/hooks/useLanguage";
import ProjectDetailTemplate from "@/components/templates/ProjectDetailTemplate/ProjectDetailTemplate";

export default function ProjectDetail() {
  const { detail } = useParams();
  const { translations } = useLanguage();

  const projects = (translations as any).projects.list;

  const project = projects?.find(
    (p: any) => p.links?.project === `/projects/${detail}`,
  );

  return <ProjectDetailTemplate project={project} />;
}
