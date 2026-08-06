import { PhoneIcon } from "lucide-react";
import Heading from "../atoms/Heading/Heading";
import GithubIcon from "../atoms/icons/githubIcon";
import LinkedinIcon from "../atoms/icons/linkedinIcon";
import SectionLayout from "../templates/sections/SectionLayout";
import ContactForm from "../organisms/forms/ContactForm/ContactForm";

export default function ContactView() {
  return (
    <SectionLayout>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <Heading>Let&rsquo;s connect</Heading>
          <p className="text-brown-coffee text-lg font-afacad">
            Whether you&rsquo;re looking for a developer to collaborate with or just
            want to chat about tech, feel free to reach out. I&rsquo;m always open to
            new opportunities and exciting projects.
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <ContactForm />
          <div className="flex flex-col gap-4">
            <p className="text-primary text-xl font-afacad">
              Here are a few more ways to <strong>get in touch:</strong>
            </p>
            <div className="flex gap-2 items-center">
              <GithubIcon />
              <p className="text-brown-coffee text-lg font-afacad">
                NataliaC3737
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <LinkedinIcon />
              <p className="text-brown-coffee text-lg font-afacad">
                natalia-calero-dev
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <PhoneIcon className="fill-brown-coffee text-brown-coffee w-7 h-7" />
              <p className="text-brown-coffee text-lg font-afacad">
                +34 654555865
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
