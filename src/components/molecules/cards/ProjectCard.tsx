"use client";
import { GithubIcon } from "@/components";
import { useLanguage } from "@/context";
import { IProject } from "@/types/data.interface";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BookmarkIcon,
  CalendarIcon,
  ExternalLinkIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({
  data,
  index = 0,
}: {
  data: IProject;
  index?: number;
}) {
  const { translations, localize } = useLanguage();
  const t = (translations as any).projects;
  return (
    <motion.div
      className="group bg-surface rounded-2xl overflow-hidden border border-border/40 hover:border-primary/30 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className="relative h-48 overflow-hidden bg-linear-to-br from-warm-glow to-surface">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-surface/80 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 flex gap-2">
          {data.links.web && (
            <Link
              href={data.links.web}
              className="p-2 bg-surface/80 backdrop-blur-sm rounded-full hover:bg-primary/10 transition-colors"
            >
              <ExternalLinkIcon className="w-4 h-4 text-brown-coffee" />
            </Link>
          )}
          {data.links.repo && (
            <Link
              href={data.links.repo}
              className="p-2 bg-surface/80 backdrop-blur-sm rounded-full hover:bg-primary/10 transition-colors"
            >
              <GithubIcon size={16} />
            </Link>
          )}
        </div>
      </div>
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-center gap-3 text-xs text-brown-muted">
          <span className="flex items-center gap-1">
            <BookmarkIcon className="w-3.5 h-3.5" />
            {data.origin}
          </span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="flex items-center gap-1">
            <CalendarIcon className="w-3.5 h-3.5" />
            {data.dateDeployed}
          </span>
        </div>
        <h3 className="text-xl font-bold text-brown-dark font-afacad group-hover:text-primary transition-colors">
          {data.title}
        </h3>
        <p className="text-sm text-brown-muted font-afacad leading-relaxed line-clamp-3">
          {data.description}
        </p>
        <Link
          className="mt-auto font-afacad text-sm font-semibold text-primary flex items-center gap-2 hover:gap-3 transition-all"
          href={localize(data.links.project)}
        >
          {t.viewProject}
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
