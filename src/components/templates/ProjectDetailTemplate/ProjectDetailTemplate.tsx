import Heading from "@/components/atoms/Heading/Heading";
import SectionLayout from "../sections/SectionLayout";
import TechStackCard from "@/components/molecules/cards/TechStackCard";

export default function ProjectDetailTemplate() {
  const techStackData = [
    "Python",
    "Tensorflow",
    "Keras",
  ];
  return (
    <SectionLayout>
      <div>
        <Heading>Project title</Heading>
        <p>
          Welcome to my digital space! As a passionate web developer and data
          scientist, I thrive on creating dynamic and intuitive web experiences.
          With a background in both frontend and backend development, I
          specialize in API integration, data analysis, and building sleek,
          responsive interfaces. I’m constantly learning, adapting, and aiming
          to add value to every project I touch.
        </p>
      </div>
      <div>
        <Heading>Characteristics</Heading>
        <div className="flex flex-col gap-4">
          <div className="flex gap-10 pb-10 border-b border-brown-muted">
            <span className="text-xl">01.</span>
            <h3 className="text-3xl min-w-[250px] font-bagel-fat-one text-brown-coffee">
              From handwriting to pdf
            </h3>
            <p>
              In this project you could have the oportunity to not waste time
              transporting you thought from paper to digital. Just take a photo
              and the app will do the rest. Following the same steps you could
              have a pdf with all your notes.
            </p>
          </div>
          <div className="flex gap-10 pb-10 border-b border-brown-muted">
            <span className="text-xl">02.</span>
            <h3 className="text-3xl min-w-[250px] font-bagel-fat-one text-brown-coffee">
              From handwriting to pdf
            </h3>
            <p>
              In this project you could have the oportunity to not waste time
              transporting you thought from paper to digital. Just take a photo
              and the app will do the rest. Following the same steps you could
              have a pdf with all your notes.
            </p>
          </div>
          <div className="flex gap-10 pb-10">
            <span className="text-xl">03.</span>
            <h3 className="text-3xl min-w-[250px] font-bagel-fat-one text-brown-coffee">
              From handwriting to pdf
            </h3>
            <p>
              In this project you could have the oportunity to not waste time
              transporting you thought from paper to digital. Just take a photo
              and the app will do the rest. Following the same steps you could
              have a pdf with all your notes.
            </p>
          </div>
          <div className="flex gap-10 py-10 border-t border-brown-muted">
            <span className="text-xl">04.</span>
            <h3 className="text-3xl min-w-[250px] font-bagel-fat-one text-brown-coffee">
              From handwriting to pdf
            </h3>
            <p>
              In this project you could have the oportunity to not waste time
              transporting you thought from paper to digital. Just take a photo
              and the app will do the rest. Following the same steps you could
              have a pdf with all your notes.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Heading>Tech stack</Heading>
        <div className="flex gap-4">
          {techStackData.map((d: string, index: number) => (
            <TechStackCard key={index} text={d} />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
