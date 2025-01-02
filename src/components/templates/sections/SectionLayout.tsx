import { ReactNode } from "react";
import "./sectionLayout.scss";

export default function SectionLayout({ children }: { children: ReactNode }) {
  return <section className="section">{children}</section>;
}
