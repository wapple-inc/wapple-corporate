// トップの背景：一滴から広がる波紋（中心にロゴは置かない）
export default function Ripple({ className = "" }: { className?: string }) {
  const rings = [40, 95, 160, 235, 315, 390];
  return (
    <svg className={className} viewBox="0 0 800 800" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="ripple-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#4F6D8A" stopOpacity="0.1" />
          <stop offset="1" stopColor="#4F6D8A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="400" cy="400" r="380" fill="url(#ripple-glow)" />
      <g stroke="#4F6D8A" strokeWidth="1.2">
        {rings.map((r, i) => (
          <circle key={r} cx="400" cy="400" r={r} opacity={0.5 - i * 0.08} />
        ))}
      </g>
    </svg>
  );
}
