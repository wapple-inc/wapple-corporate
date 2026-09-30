// ファーストビューの見出し：CSS だけで1行ずつせり上がる（サーバーで描画・JS不要）
type Tag = "h1" | "h2" | "p";

export default function HeroLines({
  lines,
  as: Comp = "h1",
  className = "",
  delay = 0.1,
  stagger = 0.12,
}: {
  lines: React.ReactNode[];
  as?: Tag;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  return (
    <Comp className={className}>
      {lines.map((line, i) => (
        <span key={i} className="css-line">
          <span style={{ "--d": `${delay + i * stagger}s` } as React.CSSProperties}>{line}</span>
        </span>
      ))}
    </Comp>
  );
}

export function HeroFade({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <div className={`css-fade ${className}`} style={{ "--d": `${delay}s` } as React.CSSProperties}>
      {children}
    </div>
  );
}
