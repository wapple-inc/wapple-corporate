"use client";
// 「Water Ripple」の物語：スクロールに合わせて一滴から輪が1本ずつ広がる。
// 一人の気づき → 行動 → 周囲との関わり → 組織・社会（ブランドガイド v1「由来」）
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, useState } from "react";

const STEPS = [
  { ring: "気づき", head: "一人の学びや気づきが", body: "水面に落ちた一滴のように、変化はいつも一人から始まります。" },
  { ring: "行動", head: "行動を変え", body: "気づいたことを試してみる。その小さな一歩が、最初の波紋になります。" },
  { ring: "関わり", head: "周りとの関わりを変え", body: "一人の行動の変化は、隣にいる人との対話や協力のしかたを変えていきます。" },
  { ring: "組織・社会", head: "組織や社会へ広がっていく", body: "波紋が重なり合うように、変化は少しずつ人や組織、社会へ広がっていきます。" },
];

const RADII = [70, 150, 240, 340]; // viewBox 800 の中での各輪の半径

// 0〜1 の区間で線形に補間（範囲外は端の値）
const lerp = (v: number, a: number, b: number, from: number, to: number) =>
  from + (to - from) * Math.min(1, Math.max(0, (v - a) / (b - a)));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function Ring({ p, i }: { p: MotionValue<number>; i: number }) {
  const start = 0.14 + i * 0.17;
  const r = useTransform(p, (v) => RADII[i] * easeOut(lerp(v, start, start + 0.14, 0, 1)));
  const o = useTransform(p, (v) => lerp(v, start, start + 0.03, 0, 1));
  const labelO = useTransform(p, (v) => lerp(v, start + 0.09, start + 0.14, 0, 1));
  const ang = -Math.PI * 0.36;
  return (
    <>
      <motion.circle cx={400} cy={400} r={r} fill="none" stroke="#AEBFD0" strokeWidth={1.2} style={{ opacity: o }} vectorEffect="non-scaling-stroke" />
      <motion.g style={{ opacity: labelO }}>
        <circle cx={400 + RADII[i] * Math.cos(ang)} cy={400 + RADII[i] * Math.sin(ang)} r={4} fill="#AEBFD0" />
        <text
          x={400 + RADII[i] * Math.cos(ang) + 14}
          y={400 + RADII[i] * Math.sin(ang) - 10}
          fill="#E6ECF2"
          fontSize={17}
          fontWeight={600}
          letterSpacing="0.04em"
        >
          {STEPS[i].ring}
        </text>
      </motion.g>
    </>
  );
}

export default function RippleStory() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [step, setStep] = useState(-1);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    let s = -1;
    for (let i = 0; i < STEPS.length; i++) if (v >= 0.14 + i * 0.17 + 0.04) s = i;
    if (v >= 0.84) s = 4;
    setStep(s);
  });

  const dropY = useTransform(scrollYProgress, (v) => -260 * (1 - Math.pow(lerp(v, 0, 0.12, 0, 1), 2)));
  const dropO = useTransform(scrollYProgress, (v) => lerp(v, 0, 0.03, 0, 1));
  const dropR = useTransform(scrollYProgress, (v) => lerp(v, 0.1, 0.14, 7, 5));
  const finalO = useTransform(scrollYProgress, (v) => lerp(v, 0.84, 0.92, 0, 1));
  const finalY = useTransform(scrollYProgress, (v) => lerp(v, 0.84, 0.92, 24, 0));
  const introO = useTransform(scrollYProgress, (v) => lerp(v, 0.08, 0.13, 1, 0));
  const barW = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  if (reduce) {
    return (
      <section className="bg-[#1d1d1f] text-white px-5 md:px-10 py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[12px] font-semibold tracking-[0.16em] text-[#aebfd0]">01 — WATER RIPPLE</p>
          <h2 className="mt-6 t-h2">一滴から広がる波紋</h2>
          <ol className="mt-12 grid md:grid-cols-4 gap-10">
            {STEPS.map((s, i) => (
              <li key={s.ring}>
                <p className="t-num text-[#aebfd0] text-sm">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-[20px] font-semibold">{s.head}</p>
                <p className="mt-2 text-[15px] leading-[1.9] text-[#c7c7cc]">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-16 t-h3">Wappleは、その最初の一滴となる「学び・対話・経験」をつくる会社です。</p>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-[#1d1d1f] text-white h-[520vh]" aria-label="Water Ripple：Wappleという名前の由来">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* 波紋 */}
        <svg
          viewBox="0 0 800 800"
          className="absolute left-1/2 md:left-[66%] top-[36%] md:top-1/2 w-[135vw] md:w-[min(86vh,56vw)] -translate-x-1/2 -translate-y-1/2 overflow-visible"
          aria-hidden="true"
        >
          {RADII.map((_, i) => (
            <Ring key={i} p={scrollYProgress} i={i} />
          ))}
          <motion.circle cx={400} cy={400} r={dropR} fill="#E6ECF2" style={{ y: dropY, opacity: dropO }} />
        </svg>

        {/* 文字 */}
        <div className="relative h-full max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col justify-end md:justify-center pb-16 md:pb-0">
          <p className="text-[12px] font-semibold tracking-[0.16em] text-[#aebfd0] md:absolute md:top-28">
            <span className="t-num">01</span> — WATER RIPPLE
          </p>

          <div className="relative mt-5 md:mt-0 min-h-[190px] md:min-h-[260px] md:max-w-[440px]">
            <motion.div style={{ opacity: introO }} className="absolute inset-0">
              <p className="t-h2">Water Ripple</p>
              <p className="mt-3 text-[18px] md:text-[22px] text-[#c7c7cc]">水の波紋から生まれた名前です</p>
            </motion.div>

            {STEPS.map((s, i) => (
              <motion.div
                key={s.ring}
                className="absolute inset-0"
                initial={false}
                animate={step === i ? { opacity: 1, y: 0 } : { opacity: 0, y: step > i ? -18 : 18 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden={step !== i}
              >
                <p className="t-num text-[13px] text-[#aebfd0]">{String(i + 1).padStart(2, "0")} / 04</p>
                <p className="mt-3 text-[28px] md:text-[40px] font-semibold leading-[1.35] tracking-[-0.02em]">{s.head}</p>
                <p className="mt-4 text-[15px] md:text-[17px] leading-[1.95] text-[#c7c7cc]">{s.body}</p>
              </motion.div>
            ))}

            <motion.div style={{ opacity: finalO, y: finalY }} className="absolute inset-0" aria-hidden={step !== 4}>
              <p className="text-[26px] md:text-[36px] font-semibold leading-[1.45] tracking-[-0.02em]">
                Wappleは
                <br />
                その最初の一滴となる
                <br />
                <span className="text-[#aebfd0]">学び・対話・経験</span>を
                <br />
                つくる会社です
              </p>
            </motion.div>
          </div>

          {/* 進み具合 */}
          <div className="mt-10 md:mt-0 md:absolute md:bottom-14 md:left-10 md:right-10 h-px bg-white/15 max-w-[1280px]">
            <motion.div className="h-px bg-[#aebfd0]" style={{ width: barW }} />
          </div>
        </div>

        {/* 読み上げ用：全文 */}
        <div className="sr-only">
          {STEPS.map((s) => (
            <p key={s.ring}>
              {s.head}。{s.body}
            </p>
          ))}
          <p>Wappleは、その最初の一滴となる「学び・対話・経験」をつくる会社です。</p>
        </div>
      </div>
    </section>
  );
}
