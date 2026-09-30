"use client";
// ページ遷移：最後にクリックした位置を中心に、灰青の面が一滴のように縮んで新しいページが現れる
// 初回の読み込みでは出さない。動きを減らす設定でも出さない
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

let firstLoad = true;
let origin = { x: 50, y: 50 };
if (typeof window !== "undefined") {
  window.addEventListener(
    "pointerdown",
    (e) => {
      origin = { x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 };
    },
    { capture: true, passive: true },
  );
}

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const [show] = useState(() => !firstLoad);
  const [o] = useState(origin);

  useEffect(() => {
    firstLoad = false;
  }, []);

  return (
    <>
      {show && !reduce && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[60] bg-accent pointer-events-none"
          initial={{ clipPath: `circle(150% at ${o.x}% ${o.y}%)` }}
          animate={{ clipPath: `circle(0% at ${o.x}% ${o.y}%)` }}
          transition={{ duration: 0.85, ease: [0.65, 0, 0.35, 1] }}
        />
      )}
      {children}
    </>
  );
}
