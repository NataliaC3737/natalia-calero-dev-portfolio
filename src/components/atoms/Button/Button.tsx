import Link from "next/link";
import { ReactNode } from "react";
import { Loader2 } from "lucide-react";

export function Button({
  variant,
  children,
  onClick,
  goTo,
  isLink,
  className,
  type = "button",
  disabled = false,
  loading = false,
  download = false,
}: {
  variant: "primary" | "outlined" | "empty" | "gradient";
  children: ReactNode;
  onClick?: () => void;
  goTo?: string;
  isLink?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  loading?: boolean;
  download?: boolean;
}) {
  const baseClasses =
    "py-2.5 px-6 rounded-full font-afacad text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2 transition-all duration-200";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-gradient-end shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outlined: "border-2 border-primary/60 text-primary hover:border-primary hover:bg-primary/5",
    empty: "text-brown-muted hover:text-brown-coffee",
    gradient: "text-white bg-gradient-to-r from-primary to-gradient-end shadow-md hover:shadow-lg hover:-translate-y-0.5",
  }[variant];

  const classes = [className, baseClasses, variantClasses]
    .filter(Boolean)
    .join(" ");

  if (isLink && goTo) {
    return (
      <Link href={goTo} className={classes} download={download}>
        {children}
      </Link>
    );
  }

  const spinner = loading && (
    <Loader2 className="w-4 h-4 animate-spin" />
  );

  return (
    <button className={classes} onClick={onClick} type={type} disabled={disabled || loading}>
      {spinner}
      {children}
    </button>
  );
}
