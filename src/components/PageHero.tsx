// 下層ページの冒頭：大きな見出し＋右上に静かな波紋
import RippleCanvas from "@/components/RippleCanvas";
import HeroLines, { HeroFade } from "@/components/HeroLines";

export default function PageHero({
  label,
  title,
  sub,
  children,
}: {
  label: string;
  title: React.ReactNode[];
  sub?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-5 md:px-10 pt-40 pb-20 md:pt-52 md:pb-28 border-b border-[#e5e5ea]">
      <RippleCanvas
        className="absolute inset-0 w-full h-full"
        focus={{ x: 0.86, y: 0.38 }}
        focusMobile={{ x: 0.9, y: 0.22 }}
        interval={5200}
        maxAlpha={0.38}
      />
      <div className="relative max-w-[1280px] mx-auto">
        <HeroFade>
          <p className="text-[12px] font-semibold tracking-[0.16em] text-accent">{label}</p>
        </HeroFade>
        <HeroLines className="mt-6 t-h1" lines={title} delay={0.1} />
        {sub && (
          <HeroFade delay={0.35}>
            <p className="mt-5 text-[18px] md:text-[22px] text-[#6e6e73]">{sub}</p>
          </HeroFade>
        )}
        {children && <HeroFade delay={0.45}>{children}</HeroFade>}
      </div>
    </section>
  );
}
