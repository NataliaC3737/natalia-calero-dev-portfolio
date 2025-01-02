import { ReactNode } from "react";

export default function Button({
  variant,
  children,
}: {
  variant: "primary" | "outlined";
  children: ReactNode;
}) {
  return (
    <button
      className={`py-1 px-4 rounded-full ${
        variant === "primary" && "bg-primary text-surface"
      } ${
        variant === "outlined" && "border boder-primary text-primary bg-surface"
      }
      `}
    >
      {children}
    </button>
  );
}
