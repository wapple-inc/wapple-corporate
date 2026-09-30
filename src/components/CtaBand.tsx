// ページ末尾の相談導線。暗い面に、触れると波紋が広がる
import Link from "next/link";
import RippleCanvas from "@/components/RippleCanvas";
import LineReveal from "@/components/LineReveal";
import FadeIn from "@/components/FadeIn";
import { CTA } from "@/lib/programs";

export default function CtaBand({ secondary }: { secondary?: { label: string; href: string } }) {
  return (
    <section className="relative overflow-hidden bg-[#1d1d1f] text-white px-5 md:px-10 py-28 md:py-40 cursor-crosshair">
      <RippleCanvas
        className="absolute inset-0 w-full h-full"
        color="174,191,208"
        focus={{ x: 0.5, y: 0.5 }}
        focusMobile={{ x: 0.5, y: 0.45 }}
        interval={4200}
        maxAlpha={0.42}
      />
      <div className="relative max-w-[1280px] mx-auto text-center">
        <p className="text-[12px] font-semibold tracking-[0.16em] text-[#aebfd0]">FREE CONSULTATION</p>
        <LineReveal
          as="h2"
          className="mt-6 t-h2"
          lines={["まずはお気軽に", "ご相談ください"]}
        />
        <FadeIn delay={0.25}>
          <p className="mt-7 t-lead text-[#c7c7cc]">{CTA.note}</p>
          <div className="mt-11 flex flex-col sm:flex-row justify-center gap-3.5">
            <Link href={CTA.href} className="btn-light !text-[15px] !px-9 !py-4">
              {CTA.label}
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
            {secondary && (
              <Link href={secondary.href} className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/35 px-9 py-4 text-[15px] font-semibold hover:bg-white/10 transition-colors">
                {secondary.label}
              </Link>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
