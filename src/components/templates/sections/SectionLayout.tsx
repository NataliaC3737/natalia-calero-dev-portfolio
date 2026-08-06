import { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import "./sectionLayout.scss";

export default function SectionLayout({ children }: { children: ReactNode }) {
  return (
    <section className="section flex flex-col gap-32 h-screen overflow-y-scroll relative">
      {children}
      <div className="sticky bottom-8 flex justify-center pointer-events-none animate-bounce">
        <ChevronDown className="text-brown-muted w-6 h-6" />
      </div>
    </section>
  );
}
