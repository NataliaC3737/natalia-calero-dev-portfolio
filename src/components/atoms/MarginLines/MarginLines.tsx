export default function MarginLines({ isHome }: { isHome: boolean }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <div className="absolute left-8 lg:left-16 top-0 h-full w-px bg-linear-to-b from-primary/15 via-border/30 to-transparent" />
      <div className="absolute right-8 lg:right-16 top-0 h-full w-px bg-linear-to-b from-primary/15 via-border/30 to-transparent" />
      {isHome && (
        <div className="absolute bottom-16 left-8 lg:left-16 right-8 lg:right-16 h-px bg-linear-to-r from-transparent via-border/50 to-transparent" />
      )}
    </div>
  );
}
