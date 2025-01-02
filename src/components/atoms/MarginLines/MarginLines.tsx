export default function MarginLines({ isHome }: { isHome: boolean }) {
  return (
    <div className="absolute w-screen h-screen inset-0 pointer-events-none z-50">
      {/* Líneas verticales */}
      <div className="w-screen flex justify-between px-20 h-full">
        <div className="w-[1px] h-screen bg-primary" />
        <div className="w-[1px] h-screen bg-primary" />
      </div>
      {/* Línea horizontal centrada */}
      {isHome && (
        <div className="absolute bottom-10 w-screen h-[1px] bg-primary" />
      )}
    </div>
  );
}
