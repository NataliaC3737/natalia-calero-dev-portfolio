import Link from "next/link";
import Button from "../atoms/Button/Button";
import Heading from "../atoms/Heading/Heading";
import SectionLayout from "../templates/sections/SectionLayout";
import GithubIcon from "../atoms/icons/githubIcon";
import LinkedinIcon from "../atoms/icons/linkedinIcon";
import ExperienceCard from "../molecules/cards/ExperienceCard";
import { IExperience } from "@/types/interfaces/data.interface";
import TechStackCard from "../molecules/cards/TechStackCard";
// import Footer from "../molecules/Footer";

export default function AboutMeView() {
  const experienceData = [
    {
      dateRange: "October 2024 - Now",
      jobPosition: "Frontend developer",
      company: "ChangeTheBlock",
      description:
        "As a Junior Developer at ChangeTheBlock, I bring ideas to life on the web. From building seamless user interfaces with Next.js and React to integrating powerful APIs. I’m actively involved in every stage of frontend development. Collaborating in an agile environment, I focus on designing intuitive tools and dashboards while ensuring secure, user-friendly experiences.",
      skills: ["React", "Next.js", "Typescript", "Sass"],
    },
    {
      dateRange: "October 2023 - 2024",
      jobPosition: "Full stack developer trainee",
      company: "ChangeTheBlock",
      description:
        "In this role, I took part in building static and dynamic websites, playing an active role in team projects. I integrated APIs and worked on backend functionalities using Node.js and Express. I also implemented secure authentication systems and helped develop interfaces that make complex data easy to understand.",
      skills: ["React", "Next.js", "Typescript", "Express.js", "Postman"],
    },
  ];
  const techStackData = [
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Next.js",
    "Express.js",
    "MongoDB",
    "MySQL",
  ];
  return (
    <SectionLayout>
      <div className="flex flex-col">
        <Heading>Professional profile</Heading>
        <p className="text-xl text-brown-coffee font-afacad">
          Welcome to my digital space! As a passionate web developer and data
          scientist, I thrive on creating dynamic and intuitive web experiences.
          With a background in both frontend and backend development, I
          specialize in API integration, data analysis, and building sleek,
          responsive interfaces. I’m constantly learning, adapting, and aiming
          to add value to every project I touch.
        </p>
        <div className="flex justify-between pt-10">
          <Button variant="outlined">Contact me</Button>
          <div className="flex gap-4">
            <Link href={`https://github.com/NataliaC3737`}>
              <GithubIcon />
            </Link>
            <Link
              href={`https://www.linkedin.com/in/natalia-calero-fern%C3%A1ndez-b54975254/`}
            >
              <LinkedinIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Heading>My journey</Heading>
        <div className="flex flex-col gap-5">
          {experienceData.map((d: IExperience, index: number) => (
            <ExperienceCard key={index} data={d} />
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <Heading>My tech stack</Heading>
        <div className="flex flex-col gap-6">
          <p className="text-xl text-brown-coffee font-afacad">
            Here are a few <strong>technologies</strong> I’ve been working with
            recently:
          </p>
          <div className="flex gap-4">
            {techStackData.map((d: string, index: number) => (
              <TechStackCard key={index} text={d} />
            ))}
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </SectionLayout>
  );
}
