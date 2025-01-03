import { ReactNode } from "react";

export default function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-4xl text-primary font-bagel-fat-one pb-10">{children}</h2>
  );
}
