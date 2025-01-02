import SectionLayout from "@/components/templates/sections/SectionLayout";
import DrawnArrow from "@/components/atoms/icons/drawnArrow";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import "./home.scss";

export default function Home() {
  return (
    <SectionLayout>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-5">
          <p className="text-3xl text-brown-coffee font-bagel-fat-one">
            Hi, my name is
          </p>
          <h1 className="text-5xl text-primary font-bagel-fat-one">
            Natalia Calero<span className="text-brown-coffee">.</span>
          </h1>
          <h1 className="text-5xl text-brown-coffee font-bagel-fat-one">
            Frontend developer<span className="text-primary">.</span>
          </h1>
          <div className="flex gap-4">
            <Button variant="primary">Contact me</Button>
            <Button variant="outlined">Download Resume</Button>
          </div>
        </div>
        <div className="flex items-end gap-5">
          <div>
            <DrawnArrow />
            <p className="font-bagel-fat-one text-brown-coffee text-2xl">me</p>
          </div>
          <Image
            src={"/coconut.png"}
            alt="Coconut photo"
            width={400}
            height={400}
          />
        </div>
      </div>
    </SectionLayout>
  );
}
