import { ReactNode } from "react";
import "./sectionLayout.scss";

export default function SectionLayout({ children }: { children: ReactNode }) {
  return <section className="section flex flex-col gap-32 h-screen overflow-y-scroll">{children}</section>;
}
