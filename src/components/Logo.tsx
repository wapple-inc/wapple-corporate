// Wapple ロゴ（C-3：五感の5つの輪＋中心の一滴）。正本は 6_Company/Identity/ブランドガイド_v1_20260929.md
export function LogoMark({ size = 28, color = "#4F6D8A", className }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={className ? undefined : size} height={className ? undefined : size} className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <g stroke={color} strokeWidth={size < 40 ? 4 : 2.6}>
        <circle cx="50" cy="28" r="21" />
        <circle cx="71" cy="43" r="21" />
        <circle cx="63" cy="68" r="21" />
        <circle cx="37" cy="68" r="21" />
        <circle cx="29" cy="43" r="21" />
      </g>
      <circle cx="50" cy="50" r={size < 40 ? 5.5 : 4.5} fill={color} />
    </svg>
  );
}

export default function Logo({ color = "#4F6D8A", textColor = "#1D1D1F" }: { color?: string; textColor?: string }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark size={28} color={color} />
      <span className="text-[19px] font-semibold tracking-[0.01em]" style={{ color: textColor }}>
        Wapple
      </span>
    </span>
  );
}
