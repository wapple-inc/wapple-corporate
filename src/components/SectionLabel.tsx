// セクションの見出しラベル：「01 — ABOUT」の形。番号は灰青、線で区切る
export default function SectionLabel({
  n,
  label,
  dark = false,
  className = "",
}: {
  n?: string;
  label: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p className={`flex items-center gap-3 text-[12px] font-semibold tracking-[0.16em] ${dark ? "text-[#aebfd0]" : "text-accent"} ${className}`}>
      {n && <span className="t-num">{n}</span>}
      {n && <span className={`block w-8 h-px ${dark ? "bg-[#aebfd0]/60" : "bg-accent/50"}`} />}
      <span>{label}</span>
    </p>
  );
}
