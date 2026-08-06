import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  variant,
  children,
  onClick,
  goTo,
  isLink,
  className,
  type = "button",
}: {
  variant: "primary" | "outlined" | "empty";
  children: ReactNode;
  onClick?: () => void;
  goTo?: string;
  isLink?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}) {
  const baseClasses =
    "py-1 px-4 rounded-full w-fit font-afacad inline-block text-center";

  const variantClasses = {
    primary: "bg-primary text-surface",
    outlined: "border border-primary text-primary bg-surface",
    empty: "text-brown-coffee",
  }[variant];

  const classes = [className, baseClasses, variantClasses]
    .filter(Boolean)
    .join(" ");

  if (isLink && goTo) {
    return (
      <Link href={goTo} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
