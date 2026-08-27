import { TechIcons } from "@/components";

export function TechStackCard({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2.5 bg-surface rounded-xl border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200">
      <TechIcons selectedIcon={text} size={22} />
      <p className="text-sm font-medium text-brown-coffee font-afacad">
        {text}
      </p>
    </div>
  );
}
