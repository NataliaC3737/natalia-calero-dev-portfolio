import { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-afacad text-xs font-medium border border-primary/20">
      {children}
    </span>
  );
}
