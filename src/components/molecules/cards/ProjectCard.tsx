import GithubIcon from "@/components/atoms/icons/githubIcon";
import { IProject } from "@/types/interfaces/data.interface";
import Image from "next/image";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({
  data,
  orientation = "horizontal",
}: {
  data: IProject;
  orientation?: "vertical" | "horizontal";
}) {
  return (
    <div className={`bg-surface rounded-lg flex gap-4 p-5 ${
      orientation === "vertical" ? "flex-col" : "flex-row"
    }`}>
      <Image
        src="/projectCover.png"
        alt="project cover"
        width={180}
        height={140}
        className="w-full"
      />
      <div
        className={`flex gap-2 ${
          orientation === "vertical" ? "flex-col-reverse" : "flex-col"
        }`}
      >
        <div>
          <h3 className="font-afacad text-base font-bold text-brown-coffee">
            {data.title}
          </h3>
          <p className="font-afacad text-sm text-secondary">
            {data.description}
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2 items-center">
            <p className="font-afacad text-xs text-brown-coffee">
              {data.origin}
            </p>
            <span className="h-4 w-[1px] bg-border" />
            <p className="font-afacad text-xs text-secondary">
              {data.dateDeployed}
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <Link href={data.links.web}>
              <LinkIcon className="text-brown-coffee w-5 h-5" />
            </Link>
            <Link href={data.links.repo}>
              <GithubIcon size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
