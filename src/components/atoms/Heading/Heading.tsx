import { ReactNode } from "react";

export default function Heading({
  children,
  gradient,
}: {
  children: ReactNode;
  gradient?: boolean;
}) {
  return (
    <h2
      className={`text-3xl lg:text-4xl font-bagel-fat-one pb-8 ${
        gradient
          ? "bg-linear-to-r from-primary to-gradient-end bg-clip-text text-transparent"
          : "text-brown-dark"
      }`}
    >
      {children}
    </h2>
  );
}
