import GithubIcon from "@/components/atoms/icons/githubIcon";
import { IProject } from "@/types/interfaces/data.interface";
import Image from "next/image";
import { ArrowRightIcon, LinkIcon } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({
  data,
  orientation = "horizontal",
  hasExternalLink = true,
}: {
  data: IProject;
  orientation?: "vertical" | "horizontal";
  hasExternalLink?: boolean;
}) {
  //TODO: Hacer reutilizable la parte de la fecha y el origen junto con los links
  return (
    <div
      className={`bg-surface rounded-lg flex gap-4 p-5 ${
        orientation === "vertical" ? "flex-col" : "flex-row"
      }`}
    >
      <Image
        src="/projectCover.png"
        alt=""
        width={180}
        height={140}
        className="w-full"
      />
      <div className="flex flex-col gap-2 items-end">
        <div className="flex flex-col gap-4">
          <div
            className={`flex gap-2 ${
              orientation === "vertical" ? "flex-col-reverse" : "flex-col"
            }`}
          >
            <h3 className="font-afacad text-base font-bold text-brown-coffee">
              {data.title}
            </h3>
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-2 items-center">
                <p className="font-afacad text-xs text-brown-coffee">
                  {data.origin}
                </p>
                <span className="h-4 w-px bg-border" />
                <p className="font-afacad text-xs text-secondary">
                  {data.dateDeployed}
                </p>
              </div>
              <div className="flex gap-1 items-center">
                {hasExternalLink && (
                  <Link href={data.links.web}>
                    <LinkIcon className="text-brown-coffee w-5 h-5" />
                  </Link>
                )}
                <Link href={data.links.repo}>
                  <GithubIcon size={24} />
                </Link>
              </div>
            </div>
          </div>
          <p className="font-afacad text-sm text-secondary line-clamp-4 ">
            {data.description}
          </p>
        </div>
        <Link
          className="font-afacad text-sm text-primary flex gap-1 items-center hover:underline"
          href={data.links.project}
        >
          See more
          <ArrowRightIcon className="text-primary w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
