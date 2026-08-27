"use client";
import { Heading, ProjectCard, SectionLayout } from "@/components";
import { useLanguage } from "@/context";
import { motion } from "framer-motion";

export default function ProjectsView() {
  const { translations } = useLanguage();
  const t = (translations as any).projects;

  return (
    <SectionLayout>
      <motion.div
        className="flex flex-col gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Heading gradient>{t.title}</Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.list.map((d: any, index: number) => (
            <ProjectCard key={index} data={d} index={index} />
          ))}
        </div>
      </motion.div>
    </SectionLayout>
  );
}
