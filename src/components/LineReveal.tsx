"use client";
// 見出しを1行ずつ、下からせり上がるように見せる（行ごとにマスク）
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { EASE } from "@/components/FadeIn";

type Tag = "h1" | "h2" | "h3" | "p" | "div";

export default function LineReveal({
  lines,
  as = "h2",
  className = "",
  delay = 0,
  stagger = 0.09,
  immediate = false,
}: {
  lines: React.ReactNode[];
  as?: Tag;
  className?: string;
  delay?: number;
  stagger?: number;
  immediate?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const show = immediate || inView;
  const Comp = motion[as];

  return (
    <Comp ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="block"
            initial={reduce ? false : { y: "110%" }}
            animate={show ? { y: "0%" } : {}}
            transition={{ duration: 1.1, delay: delay + i * stagger, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}
