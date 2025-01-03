import { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="border boder-primary text-primary bg-surface rounded-full px-5 py-1 w-fit font-afacad text-xs">
      {children}
    </span>
  );
}
