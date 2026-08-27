"use client";
import { Tag } from "@/components";
import { IExperience } from "@/types";
import { motion } from "framer-motion";
import { BriefcaseIcon } from "lucide-react";

export function ExperienceCard({
  data,
  index = 0,
}: {
  data: IExperience;
  index?: number;
}) {
  return (
    <motion.div
      className="relative pl-8 pb-8 border-l-2 border-border/60 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.15, ease: "easeOut" }}
    >
      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-linear-to-br from-primary to-gradient-end flex items-center justify-center">
        <BriefcaseIcon className="w-3 h-3 text-white" />
      </div>
      <div className="bg-surface rounded-xl p-5 border border-border/30 hover:border-primary/20 transition-colors duration-200">
        <p className="text-xs font-semibold text-primary font-afacad tracking-wide uppercase mb-2">
          {data.dateRange}
        </p>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-3">
          <h3 className="text-lg font-bold text-brown-dark font-afacad">
            {data.jobPosition}
          </h3>
          <span className="text-brown-muted font-afacad">·</span>
          <p className="text-base text-brown-muted font-afacad">
            {data.company}
          </p>
        </div>
        <p className="text-sm text-brown-coffee font-afacad leading-relaxed mb-4">
          {data.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill: string, i: number) => (
            <Tag key={i}>{skill}</Tag>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
