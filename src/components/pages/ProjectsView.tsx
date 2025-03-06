import { IProject } from "@/types/interfaces/data.interface";
import Heading from "../atoms/Heading/Heading";
import ProjectCard from "../molecules/cards/ProjectCard";
import SectionLayout from "../templates/sections/SectionLayout";

export default function ProjectsView() {
  const projectsData = [
    {
      image: "/projectCover.png",
      title: "Character recognition with NN",
      description:
        "A project that pushed the boundaries of my knowledge during my Professional Degree. Using Python, Keras, and TensorFlow, I developed a neural network for character recognition, diving deep into machine learning research and applying it to solve real-world challenges.",
      origin: "College",
      dateDeployed: "20 May 2024",
      links: { web: "", repo: "", project:"/projects/neural-net" },
    },
    {
      image: "/projectCover.png",
      title: "Psycology platform Anguna",
      description:
        "A project that pushed the boundaries of my knowledge during my Professional Degree. Using Python, Keras, and TensorFlow, I developed a neural network for character recognition, diving deep into machine learning research and applying it to solve real-world challenges.",
      origin: "Collab",
      dateDeployed: "20 May 2024",
      links: { web: "", repo: "", project:"/projects/psico-anguna" },
    },
    {
      image: "/projectCover.png",
      title: "Making notes with Ideas Weave",
      description:
        "A project that pushed the boundaries of my knowledge during my Professional Degree. Using Python, Keras, and TensorFlow, I developed a neural network for character recognition, diving deep into machine learning research and applying it to solve real-world challenges.",
      origin: "Own",
      dateDeployed: "20 May 2024",
      links: { web: "", repo: "", project:"/projects/ideas-weave" },
    },
    {
      image: "/projectCover.png",
      title: "Find your craft mate with Craft Mate",
      description:
        "A project that pushed the boundaries of my knowledge during my Professional Degree. Using Python, Keras, and TensorFlow, I developed a neural network for character recognition, diving deep into machine learning research and applying it to solve real-world challenges.",
      origin: "Own",
      dateDeployed: "20 May 2024",
      links: { web: "", repo: "", project:"/projects/craft-mate" },
    },
  ];
  return (
    <SectionLayout>
      <div className="flex flex-col">
        <Heading>Featured projects</Heading>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            {projectsData.map((d: IProject, index: number) => (
              <ProjectCard key={index} data={d} orientation="vertical" />
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
