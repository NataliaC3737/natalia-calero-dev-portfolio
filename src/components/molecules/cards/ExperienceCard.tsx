import OpenLinkIcon from "@/components/atoms/icons/openLinkIcon";
import Tag from "@/components/atoms/Tag/Tag";
import { IExperience } from "@/types/interfaces/data.interface";
import Link from "next/link";

export default function ExperienceCard({ data }: { data: IExperience }) {
  return (
    <div className="p-5 flex gap-8 hover:bg-surface rounded-lg">
      <p className="min-w-36 text-base text-secondary font-afacad">
        {data.dateRange}
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-base text-brown-coffee font-bold font-afacad">
              {data.jobPosition}
            </p>
            <div className="bg-brown-coffee inline-flex items-center w-1 h-1 rounded-full" />
            <p className="text-base text-brown-coffee font-bold font-afacad">
              {data.company}
            </p>
            <Link href={`https://changetheblock.com/`} target="blank">
              <OpenLinkIcon />
            </Link>
          </div>
          <p className="text-base text-brown-coffee font-afacad">
            {data.description}
          </p>
        </div>
        <div className="flex gap-2">
          {data.skills.map((d: string, index: number) => (
            <Tag key={index}>{d}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
