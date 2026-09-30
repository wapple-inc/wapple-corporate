"use client";
// 水面に落ちる一滴と、そこから広がる波紋（Canvas）。
// - 一定間隔で「焦点」の近くに一滴が落ち、3本の輪が時間差で広がる
// - クリック／タップした場所にも一滴が落ちる。ポインターを動かすと小さな波紋が残る
// - 画面外やタブ非表示のときは描画を止める。動きを減らす設定では静止した波紋だけを描く
import { useEffect, useRef } from "react";

type Drop = { x: number; y: number; t0: number; strength: number };

type Props = {
  className?: string;
  color?: string; // 輪の色（RGB の "r,g,b"）
  focus?: { x: number; y: number }; // 自動で落ちる位置（0〜1）
  focusMobile?: { x: number; y: number };
  interval?: number; // 自動の一滴の間隔（ms）
  maxAlpha?: number;
  interactive?: boolean;
};

const RING_OFFSETS = [0, 520, 1040]; // 1回の一滴から出る輪の時間差（ms）
const LIFE = 7200; // 輪が消えるまで（ms）

export default function RippleCanvas({
  className = "",
  color = "79,109,138",
  focus = { x: 0.72, y: 0.5 },
  focusMobile = { x: 0.62, y: 0.34 },
  interval = 3400,
  maxAlpha = 0.55,
  interactive = true,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let visible = true;
    let lastAuto = -Infinity;
    let lastTrail = 0;
    let lastPt = { x: -999, y: -999 };
    const drops: Drop[] = [];

    const f = () => (w < 768 ? focusMobile : focus);
    const speed = () => Math.max(w, h) / 9000; // px/ms：画面の大きさに比例

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) drawStatic();
    }

    function drawStatic() {
      ctx!.clearRect(0, 0, w, h);
      const { x, y } = f();
      const cx = x * w;
      const cy = y * h;
      const base = Math.max(w, h) * 0.07;
      for (let i = 0; i < 7; i++) {
        ctx!.beginPath();
        ctx!.arc(cx, cy, base * (i + 1) * (1 + i * 0.18), 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(${color},${maxAlpha * (1 - i / 7) * 0.8})`;
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }
      ctx!.beginPath();
      ctx!.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx!.fillStyle = `rgba(${color},${maxAlpha * 1.4})`;
      ctx!.fill();
    }

    function addDrop(x: number, y: number, strength = 1) {
      drops.push({ x, y, t0: performance.now(), strength });
      if (drops.length > 24) drops.shift();
    }

    function frame(now: number) {
      raf = requestAnimationFrame(frame);
      if (!visible) return;

      if (now - lastAuto > interval) {
        const { x, y } = f();
        const jitter = lastAuto === -Infinity ? 0 : 0.05;
        addDrop((x + (Math.random() - 0.5) * jitter) * w, (y + (Math.random() - 0.5) * jitter) * h, 1);
        lastAuto = now;
      }

      ctx!.clearRect(0, 0, w, h);
      const v = speed();

      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];
        const age = now - d.t0;
        if (age > LIFE + RING_OFFSETS[RING_OFFSETS.length - 1]) {
          drops.splice(i, 1);
          continue;
        }
        // 着水の瞬間：小さな点が現れて沈む
        if (age < 900) {
          const k = age / 900;
          const r = 4.5 * d.strength * (k < 0.25 ? k / 0.25 : 1 - (k - 0.25) / 0.75);
          ctx!.beginPath();
          ctx!.arc(d.x, d.y, Math.max(r, 0), 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${color},${Math.min(1, maxAlpha * 1.6)})`;
          ctx!.fill();
        }
        for (const off of RING_OFFSETS) {
          const a = age - off;
          if (a < 0 || a > LIFE) continue;
          const life = a / LIFE;
          // はじめは速く、だんだんゆっくり広がる
          const r = v * LIFE * (1 - Math.pow(1 - life, 2.2)) * d.strength;
          const alpha = maxAlpha * d.strength * Math.pow(1 - life, 1.6) * Math.min(1, a / 160);
          if (alpha < 0.004) continue;
          ctx!.beginPath();
          ctx!.arc(d.x, d.y, r, 0, Math.PI * 2);
          ctx!.strokeStyle = `rgba(${color},${alpha})`;
          ctx!.lineWidth = off === 0 ? 1.25 : 0.9;
          ctx!.stroke();
        }
      }
    }

    function onPointerDown(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > w || y > h) return;
      addDrop(x, y, 0.85);
    }
    function onPointerMove(e: PointerEvent) {
      if (e.pointerType !== "mouse") return;
      const now = performance.now();
      const rect = canvas!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > w || y > h) return;
      const dist = Math.hypot(x - lastPt.x, y - lastPt.y);
      if (now - lastTrail > 260 && dist > 70) {
        addDrop(x, y, 0.32);
        lastTrail = now;
        lastPt = { x, y };
      }
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    if (reduce) {
      return () => ro.disconnect();
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && !document.hidden;
    });
    io.observe(canvas);
    const onVis = () => {
      visible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVis);

    // canvas の上に文字が重なるので、イベントは親要素（セクション）で拾う
    const host = canvas.parentElement ?? canvas;
    if (interactive) {
      host.addEventListener("pointerdown", onPointerDown);
      host.addEventListener("pointermove", onPointerMove);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      host.removeEventListener("pointerdown", onPointerDown);
      host.removeEventListener("pointermove", onPointerMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, focus.x, focus.y, focusMobile.x, focusMobile.y, interval, maxAlpha, interactive]);

  return <canvas ref={ref} className={`pointer-events-none ${className}`} aria-hidden="true" />;
}
