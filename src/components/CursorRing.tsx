"use client";
// マウス操作の画面だけ：カーソルの後を追う細い輪。リンクやボタンの上では大きく広がる
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorRing() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);
  const [dark, setDark] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });

  useEffect(() => {
    if (reduce || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as Element | null;
      setHover(!!t?.closest("a, button, select, input, textarea, label"));
      setDark(!!t?.closest(".bg-\\[\\#1d1d1f\\]"));
    };
    const leave = () => setVisible(false);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [reduce, x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="hidden [@media(hover:hover)_and_(pointer:fine)]:block fixed left-0 top-0 z-[70] pointer-events-none rounded-full border"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: hover ? 56 : 30,
        height: hover ? 56 : 30,
        opacity: visible ? 1 : 0,
        borderColor: dark ? "rgba(230,236,242,0.7)" : "rgba(79,109,138,0.55)",
        backgroundColor: hover ? (dark ? "rgba(230,236,242,0.08)" : "rgba(79,109,138,0.08)") : "rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
