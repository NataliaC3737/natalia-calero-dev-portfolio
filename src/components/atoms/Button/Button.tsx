import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  variant,
  children,
  onClick,
  goTo,
  isLink,
  className,
}: {
  variant: "primary" | "outlined" | "empty";
  children: ReactNode;
  onClick?: () => void;
  goTo?: string;
  isLink?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${className} py-1 px-4 rounded-full w-fit font-afacad ${
        variant === "primary" && "bg-primary text-surface"
      } ${
        variant === "outlined" && "border boder-primary text-primary bg-surface"
      } ${variant === "empty" && "text-brown-coffee"}
    `}
    >
      {isLink ? (
        <Link href={goTo!} className={`${className}`}>
          {children}
        </Link>
      ) : (
        <button className={`${className}`} onClick={onClick}>
          {children}
        </button>
      )}
    </div>
  );
}
