import { IProject } from "@/types/interfaces/data.interface";
import Heading from "../atoms/Heading/Heading";
import ProjectCard from "../molecules/cards/ProjectCard";
import SectionLayout from "../templates/sections/SectionLayout";

export default function ProjectsView() {
  const projectsData = [
    {
      image: "/projectCover.png",
      title: "Character recognition with Neural Network",
      description:
        "A project that pushed the boundaries of my knowledge during my Professional Degree. Using Python, Keras, and TensorFlow, I developed a neural network for character recognition, diving deep into machine learning research and applying it to solve real-world challenges.",
      origin: "College",
      dateDeployed: "20 May 2024",
      links: { web: "", repo: "" },
    },
    {
      image: "/projectCover.png",
      title: "Character recognition with Neural Network",
      description:
        "A project that pushed the boundaries of my knowledge during my Professional Degree. Using Python, Keras, and TensorFlow, I developed a neural network for character recognition, diving deep into machine learning research and applying it to solve real-world challenges.",
      origin: "College",
      dateDeployed: "20 May 2024",
      links: { web: "", repo: "" },
    },
    {
      image: "/projectCover.png",
      title: "Character recognition with Neural Network",
      description:
        "A project that pushed the boundaries of my knowledge during my Professional Degree. Using Python, Keras, and TensorFlow, I developed a neural network for character recognition, diving deep into machine learning research and applying it to solve real-world challenges.",
      origin: "College",
      dateDeployed: "20 May 2024",
      links: { web: "", repo: "" },
    },
    {
      image: "/projectCover.png",
      title: "Character recognition with Neural Network",
      description:
        "A project that pushed the boundaries of my knowledge during my Professional Degree. Using Python, Keras, and TensorFlow, I developed a neural network for character recognition, diving deep into machine learning research and applying it to solve real-world challenges.",
      origin: "College",
      dateDeployed: "20 May 2024",
      links: { web: "", repo: "" },
    },
  ];
  return (
    <SectionLayout>
      <div className="flex flex-col">
        <Heading>Featured projects</Heading>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            {projectsData.slice(0, 2).map((d: IProject, index: number) => (
              <ProjectCard key={index} data={d} />
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
