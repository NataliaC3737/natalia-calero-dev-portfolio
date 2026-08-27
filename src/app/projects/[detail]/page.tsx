"use client";
import { ProjectDetailTemplate } from "@/components";
import { useLanguage } from "@/context";
import { useParams } from "next/navigation";

export default function ProjectDetail() {
  const { detail } = useParams();
  const { translations } = useLanguage();

  const projects = (translations as any).projects.list;

  const project = projects?.find(
    (p: any) => p.links?.project === `/projects/${detail}`,
  );

  return <ProjectDetailTemplate project={project} />;
}
