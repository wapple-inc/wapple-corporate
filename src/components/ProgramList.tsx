// 注力している4つの研修：編集的なリスト。ホバーで淡い灰青の面が左から満ち、矢印が進む
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import type { FocusProgram } from "@/lib/programs";

export default function ProgramList({ programs }: { programs: FocusProgram[] }) {
  return (
    <ul className="border-t border-[#d2d2d7] md:grid md:auto-rows-fr">
      {programs.map((p, i) => (
        <li key={p.id} className="border-b border-[#d2d2d7]">
          <FadeIn delay={i * 0.06} y={16} className="h-full">
            <Link
              href={`/services#${p.id}`}
              className="group relative h-full grid grid-cols-[44px_1fr_auto] md:grid-cols-[88px_1.25fr_1fr_40px] items-center gap-x-4 md:gap-x-8 py-8 md:py-10 px-1 md:px-4 overflow-hidden"
            >
              <span className="absolute inset-0 bg-accent-soft origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" aria-hidden="true" />
              <span className="relative t-num text-[14px] md:text-[15px] text-[#6e6e73] group-hover:text-accent transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative">
                <span className="block text-[21px] md:text-[30px] font-semibold leading-[1.35] tracking-[-0.02em] group-hover:text-accent-dark transition-colors">
                  {p.name.replace("生成AI", "生成\u2060AI")}
                </span>
                <span className="md:hidden mt-3 block text-[14.5px] leading-[1.8] text-[#6e6e73]">{p.summary}</span>
                <span className="md:hidden mt-3 block text-[12.5px] text-[#6e6e73]">{p.audience}｜{p.duration}</span>
              </span>
              <span className="relative hidden md:block">
                <span className="block text-[15px] leading-[1.85] text-[#424245]">{p.summary}</span>
                <span className="mt-3 block text-[12.5px] text-[#6e6e73]">{p.audience}｜{p.duration}</span>
              </span>
              <span className="relative self-center text-[20px] text-accent arrow" aria-hidden="true">→</span>
            </Link>
          </FadeIn>
        </li>
      ))}
    </ul>
  );
}
