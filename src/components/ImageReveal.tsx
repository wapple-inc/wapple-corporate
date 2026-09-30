"use client";
// 写真を下から上へ、幕が上がるように見せる
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export default function ImageReveal({ children, className = "", immediate = false }: { children: React.ReactNode; className?: string; immediate?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  if (immediate) {
    // ファーストビューでは JS を待たずに CSS で見せる
    return (
      <div className={`overflow-hidden ${className}`}>
        <div className="css-clip">{children}</div>
      </div>
    );
  }
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0%)", scale: 1.12 }}
        animate={inView ? { clipPath: "inset(0% 0% 0% 0%)", scale: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
