"use client";
import {
  Button,
  ExperienceCard,
  GithubIcon,
  Heading,
  LinkedinIcon,
  SectionLayout,
  TechStackCard,
} from "@/components";
import { useLanguage } from "@/context/hooks/useLanguage";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutMeView() {
  const { translations } = useLanguage();
  const t = (translations as any).about;

  return (
    <SectionLayout>
      <motion.div
        className="flex flex-col gap-12 sm:gap-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col gap-6">
          <Heading gradient>{t.profile}</Heading>
          <p className="text-base sm:text-lg text-brown-coffee font-afacad leading-relaxed">
            {t.profileText}
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
            <Button variant="gradient" goTo="/contact" isLink>
              {t.contact}
            </Button>
            <div className="flex gap-4">
              <Link
                href="https://github.com/NataliaC3737"
                className="p-2.5 rounded-full bg-surface border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <GithubIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/natalia-calero-dev/"
                className="p-2.5 rounded-full bg-surface border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <LinkedinIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Heading>{t.journey}</Heading>
          <div>
            {t.experience.map((d: any, index: number) => (
              <ExperienceCard key={index} data={d} index={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Heading>{t.education}</Heading>
          <div>
            {t.educationList.map((d: any, index: number) => (
              <ExperienceCard
                key={index}
                data={{
                  dateRange: d.dateRange,
                  jobPosition: d.title,
                  company: d.institution,
                  description: d.description,
                  skills: d.skills,
                }}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Heading>{t.skills}</Heading>
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex flex-wrap gap-2">
                {t.techStack.map((d: string, index: number) => (
                  <TechStackCard key={index} text={d} />
                ))}
              </div>
            </div>
            <div>
              <Heading>{t.softSkills}</Heading>
              <div className="flex flex-wrap gap-2">
                {t.softSkillsList?.map((d: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-accent-light text-sm font-medium text-brown-coffee font-afacad rounded-xl border border-primary/10"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-base text-brown-coffee font-afacad">
              <span>
                <strong className="text-primary">{t.spanish}:</strong>{" "}
                {t.native}
              </span>
              <span>
                <strong className="text-primary">{t.english}:</strong>{" "}
                {t.professional}
              </span>
              <span>
                <strong className="text-primary">{t.driversLicense}:</strong>{" "}
                {t.licenseLevel}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 pb-20">
          <Heading>{t.hobbies}</Heading>
          <div className=" flex flex-col gap-4">
            {t.hobbiesList?.map((d: any, index: number) => (
              <motion.div
                key={index}
                className="bg-surface rounded-xl p-6 border border-border/30 hover:border-primary/20 transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <h3 className="text-lg font-bold text-brown-dark font-afacad mb-2">
                  {d.title}
                </h3>
                <p className="text-sm text-brown-coffee font-afacad leading-relaxed">
                  {d.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionLayout>
  );
}
