"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Tag from "@/components/atoms/Tag/Tag";
import SectionLayout from "../sections/SectionLayout";
import { ExternalLink, ArrowLeft, Palette, X } from "lucide-react";
import Image from "next/image";
import GithubIcon from "@/components/atoms/icons/githubIcon";
import { useLanguage } from "@/context/hooks/useLanguage";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ProjectDetailTemplate({ project }: { project: any }) {
  const { translations } = useLanguage();
  const t = (translations as any).projectDetail;
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMedia(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (!project) {
    return (
      <SectionLayout>
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h1 className="text-3xl font-bagel-fat-one text-brown-dark mb-4">
            {t.notFound}
          </h1>
          <Link
            href="/projects"
            className="text-primary font-afacad text-sm hover:underline"
          >
            ← {t.backToProjects}
          </Link>
        </div>
      </SectionLayout>
    );
  }

  const d = project.detail;
  const hasDetail = Boolean(d);

  return (
    <SectionLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-brown-muted font-afacad hover:text-brown-coffee transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.backToProjects}
        </Link>

        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <div className="flex flex-wrap items-center gap-3 text-sm text-brown-muted mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold font-afacad text-xs uppercase tracking-wide">
              {project.origin || "Project"}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="font-afacad">{project.dateDeployed}</span>
            {d?.status && (
              <>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold font-afacad text-xs uppercase tracking-wide">
                  {d.status}
                </span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bagel-fat-one text-brown-dark leading-tight mb-6">
            {project.title?.split("—").map((part: string, i: number) =>
              i === 1 ? (
                <span key={i}>
                  <span className="bg-linear-to-r from-primary to-gradient-end bg-clip-text text-transparent">
                    —
                  </span>
                  <span className="bg-linear-to-r from-primary to-gradient-end bg-clip-text text-transparent">
                    {part}
                  </span>
                </span>
              ) : (
                part
              ),
            )}
          </h1>

          <p className="text-base sm:text-lg text-brown-coffee font-afacad leading-relaxed max-w-3xl">
            {d?.description || project.description}
          </p>

          {(project.links?.web ||
            project.links?.repo ||
            project.links?.design ||
            d?.frontendRepo ||
            d?.apiRepo) && (
            <div className="flex flex-wrap gap-3 mt-6">
              {project.links?.web && (
                <a
                  href={project.links.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-afacad font-semibold hover:bg-gradient-end transition-colors"
                >
                  {t.liveApp} <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.links?.design && (
                <a
                  href={project.links.design}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border/30 text-brown-coffee text-sm font-afacad font-semibold hover:border-primary/20 hover:bg-primary/5 transition-colors"
                >
                  <Palette className="w-4 h-4 text-primary" /> {t.design}
                </a>
              )}
              {(d?.frontendRepo || project.links?.repo) && (
                <a
                  href={d?.frontendRepo || project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border/30 text-brown-coffee text-sm font-afacad font-semibold hover:border-primary/20 hover:bg-primary/5 transition-colors"
                >
                  <GithubIcon size={16} /> {t.frontend}
                </a>
              )}
              {d?.apiRepo && (
                <a
                  href={d.apiRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border/30 text-brown-coffee text-sm font-afacad font-semibold hover:border-primary/20 hover:bg-primary/5 transition-colors"
                >
                  <GithubIcon size={16} /> {t.api}
                </a>
              )}
            </div>
          )}
        </motion.div>

        {hasDetail && d.features && d.features.length > 0 && (
          <motion.div
            className="mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h2 className="text-2xl font-bagel-fat-one text-brown-dark mb-8">
              {t.keyFeatures}
            </h2>
            <div className="flex flex-col gap-6">
              {d.features.map((f: any, i: number) => (
                <motion.div
                  key={f.title}
                  className="flex gap-4 sm:gap-6 pb-6 border-b border-border/40 last:border-0"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <span className="text-2xl sm:text-3xl font-bagel-fat-one text-primary/30 min-w-9 sm:min-w-12">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-brown-dark font-afacad mb-2">
                      {f.title}
                    </h3>
                    <p className="text-base text-brown-coffee font-afacad leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {hasDetail && d.roadmap && d.roadmap.length > 0 && (
          <motion.div
            className="mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h2 className="text-2xl font-bagel-fat-one text-brown-dark mb-8">
              {t.howBuilt}
            </h2>
            <div className="flex flex-col gap-6">
              {d.roadmap.map((r: any, i: number) => (
                <motion.div
                  key={r.step}
                  className="flex gap-4 sm:gap-6 pb-6 border-b border-border/40 last:border-0"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <span className="text-2xl sm:text-3xl font-bagel-fat-one text-primary/30 min-w-9 sm:min-w-12">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-brown-dark font-afacad mb-2">
                      {r.step}
                    </h3>
                    <p className="text-base text-brown-coffee font-afacad leading-relaxed">
                      {r.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {hasDetail && d.reflections && (
          <motion.div
            className="mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h2 className="text-2xl font-bagel-fat-one text-brown-dark mb-6">
              {t.reflections}
            </h2>
            <div className="bg-surface rounded-2xl p-6 border border-border/30">
              <p className="text-base text-brown-coffee font-afacad leading-relaxed">
                {d.reflections}
              </p>
            </div>
          </motion.div>
        )}

        {hasDetail && d.media && d.media.length > 0 && (
          <motion.div
            className="mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h2 className="text-2xl font-bagel-fat-one text-brown-dark mb-6">
              {t.media}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {d.media.map((m: any, i: number) => (
                <motion.figure
                  key={i}
                  className="group cursor-zoom-in"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  onClick={() => setSelectedMedia(i)}
                >
                  <div
                    className={`relative h-56 overflow-hidden rounded-xl border border-border/30 ${
                      m.fit === "contain" ? "bg-background" : "bg-surface"
                    }`}
                  >
                    <Image
                      src={m.image}
                      alt={m.caption || ""}
                      fill
                      className={`transition-transform duration-300 group-hover:scale-[1.02] ${
                        m.fit === "contain" ? "object-contain p-3" : "object-cover"
                      }`}
                    />
                    {m.caption && (
                      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent px-4 pt-8 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-xs text-white/85 font-afacad line-clamp-2">
                          {m.caption}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.figure>
              ))}
            </div>
          </motion.div>
        )}

        {selectedMedia !== null && d.media?.[selectedMedia] && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              className="absolute inset-0 bg-black/55 dark:bg-white/10 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={d.media[selectedMedia].image}
                alt={d.media[selectedMedia].caption || ""}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[78vh] object-contain"
              />
              {d.media[selectedMedia].caption && (
                <p className="absolute -bottom-10 left-0 text-base text-white/95 font-afacad drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                  {d.media[selectedMedia].caption}
                </p>
              )}
              <button
                onClick={() => setSelectedMedia(null)}
                aria-label="Close"
                className="absolute -top-3 -right-3 p-2 rounded-full bg-background border border-border/40 text-brown-muted hover:text-brown-coffee transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        )}

        {(project.techStack || d?.techStack) && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h2 className="text-2xl font-bagel-fat-one text-brown-dark mb-6">
              {t.techStack}
            </h2>
            <div className="flex flex-wrap gap-3">
              {(d?.techStack || []).map((tech: string, i: number) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Tag>{tech}</Tag>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </SectionLayout>
  );
}
