"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/hooks/useLanguage";
import Button from "../atoms/Button/Button";
import Heading from "../atoms/Heading/Heading";
import SectionLayout from "../templates/sections/SectionLayout";
import GithubIcon from "../atoms/icons/githubIcon";
import LinkedinIcon from "../atoms/icons/linkedinIcon";
import ExperienceCard from "../molecules/cards/ExperienceCard";
import TechStackCard from "../molecules/cards/TechStackCard";

export default function AboutMeView() {
  const { translations } = useLanguage();
  const t = (translations as any).about;

  return (
    <SectionLayout>
      <motion.div
        className="flex flex-col gap-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col gap-6">
          <Heading gradient>{t.profile}</Heading>
          <p className="text-lg text-brown-coffee font-afacad leading-relaxed max-w-3xl">
            {t.profileText}
          </p>
          <div className="flex items-center gap-6 pt-4">
            <Button variant="gradient" goTo="/contact" isLink>{t.contact}</Button>
            <div className="flex gap-4">
              <Link href="https://github.com/NataliaC3737" className="p-2.5 rounded-full bg-surface border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all">
                <GithubIcon />
              </Link>
              <Link href="https://www.linkedin.com/in/natalia-calero-fern%C3%A1ndez-b54975254/" className="p-2.5 rounded-full bg-surface border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all">
                <LinkedinIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Heading>{t.journey}</Heading>
          <div className="max-w-3xl">
            {t.experience.map((d: any, index: number) => (
              <ExperienceCard key={index} data={d} index={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Heading>{t.education}</Heading>
          <div className="max-w-3xl">
            {t.educationList.map((d: any, index: number) => (
              <ExperienceCard
                key={index}
                data={{ dateRange: d.dateRange, jobPosition: d.title, company: d.institution, description: d.description, skills: d.skills }}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 pb-20">
          <Heading>{t.skills}</Heading>
          <div className="flex flex-col gap-4 max-w-3xl">
            <div>
              <div className="flex flex-wrap gap-2">
                {t.techStack.map((d: string, index: number) => (
                  <TechStackCard key={index} text={d} />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-base text-brown-coffee font-afacad pt-4">
              <span><strong className="text-primary">{t.spanish}:</strong> {t.native}</span>
              <span><strong className="text-primary">{t.english}:</strong> {t.professional}</span>
              <span><strong className="text-primary">{t.driversLicense}:</strong> B1</span>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionLayout>
  );
}
