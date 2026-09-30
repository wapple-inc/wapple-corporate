"use client";
// 流れの図：1本の直線と丸で段階を示す（矢印は使わない）。研修スライドの flow と同じ型。
// スクロールに合わせて線が引かれ、線が届いた丸から灰青に変わる。
import { motion, useReducedMotion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

export type FlowItem = { head: string; body: string };

export default function FlowLine({ items }: { items: FlowItem[]; highlight?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const scale = useTransform(scrollYProgress, (v) => Math.min(1, Math.max(0, v)));
  const [reached, setReached] = useState(reduce ? items.length : 0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (reduce) return;
    setReached(Math.min(items.length, Math.floor(v * (items.length - 1) + 1.0001)));
  });

  const dot = (i: number) => {
    const on = i < reached;
    return (
      <span className="relative block w-[23px] h-[23px]">
        <span className={`absolute inset-0 rounded-full bg-accent transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${on ? "scale-100" : "scale-[0.48] !bg-[#a1a1a6]"}`} />
        {on && <span className="absolute inset-0 rounded-full border border-accent animate-[ping_1.6s_cubic-bezier(0,0,0.2,1)_1]" />}
      </span>
    );
  };

  return (
    <div ref={ref}>
      {/* PC：横一列 */}
      <div className="hidden md:block relative">
        <div className="absolute left-0 right-0 top-[11px] h-px bg-[#d2d2d7]" />
        <motion.div className="absolute left-0 right-0 top-[11px] h-px bg-accent origin-left" style={{ scaleX: reduce ? 1 : scale }} />
        <ol className="relative grid" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
          {items.map((it, i) => (
            <li key={it.head} className="pr-8">
              {dot(i)}
              <p className="mt-7 t-num text-[13px] text-[#6e6e73]">STEP {String(i + 1).padStart(2, "0")}</p>
              <p className={`mt-2 text-[20px] font-semibold transition-colors duration-500 ${i < reached ? "text-[#1d1d1f]" : "text-[#86868b]"}`}>{it.head}</p>
              <p className="mt-2.5 text-[14.5px] leading-[1.85] text-[#6e6e73]">{it.body}</p>
            </li>
          ))}
        </ol>
      </div>
      {/* スマホ：縦一列 */}
      <div className="md:hidden relative">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#d2d2d7]" />
        <motion.div className="absolute left-[11px] top-2 bottom-2 w-px bg-accent origin-top" style={{ scaleY: reduce ? 1 : scale }} />
        <ol className="relative pl-11">
          {items.map((it, i) => (
            <li key={it.head} className="relative pb-10 last:pb-0">
              <span className="absolute -left-11 top-0">{dot(i)}</span>
              <p className="t-num text-[12px] text-[#6e6e73]">STEP {String(i + 1).padStart(2, "0")}</p>
              <p className={`mt-1 text-[18px] font-semibold transition-colors duration-500 ${i < reached ? "text-[#1d1d1f]" : "text-[#86868b]"}`}>{it.head}</p>
              <p className="mt-1.5 text-[14.5px] leading-[1.85] text-[#6e6e73]">{it.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
