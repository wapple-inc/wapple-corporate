// ゆっくり流れる大きな文字の帯。動きを減らす設定では止まる
export default function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const row = (
    <span className="flex shrink-0 items-center" aria-hidden="true">
      {items.map((t) => (
        <span key={t} className="flex items-center">
          <span className="px-8 md:px-12">{t}</span>
          <svg width="18" height="18" viewBox="0 0 20 20" className="shrink-0 text-accent" aria-hidden="true">
            <circle cx="10" cy="10" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="10" cy="10" r="2.6" fill="currentColor" />
          </svg>
        </span>
      ))}
    </span>
  );
  return (
    <div className={`overflow-hidden select-none ${className}`}>
      <p className="sr-only">{items.join("・")}</p>
      <div className="flex w-max animate-[marquee_48s_linear_infinite] motion-reduce:animate-none">
        {row}
        {row}
      </div>
    </div>
  );
}
