import TechIcons from "@/components/atoms/icons/techIcons";

export default function TechStackCard({ text }: { text: string }) {
  return (
    <div className="w-[150px] h-[150px] flex flex-col items-center justify-center gap-2 bg-surface rounded-lg border border-brown-muted">
      <TechIcons selectedIcon={text} size={40}/>
      <p className="text-sm font-afacad font-bold text-brown-coffee">{text}</p>
    </div>
  );
}
