"use client";

const nodes = [
  { cx: "8%",  cy: "12%", r: 2.5, dur: "18s", dx: 18, dy: 14 },
  { cx: "23%", cy: "7%",  r: 2,   dur: "22s", dx: -12, dy: 20 },
  { cx: "41%", cy: "18%", r: 3,   dur: "16s", dx: 20,  dy: -10 },
  { cx: "63%", cy: "9%",  r: 2,   dur: "25s", dx: -15, dy: 18 },
  { cx: "78%", cy: "22%", r: 2.5, dur: "20s", dx: 12,  dy: -16 },
  { cx: "92%", cy: "11%", r: 2,   dur: "17s", dx: -18, dy: 12 },
  { cx: "15%", cy: "38%", r: 2,   dur: "23s", dx: 15,  dy: 20 },
  { cx: "35%", cy: "45%", r: 3,   dur: "19s", dx: -20, dy: -12 },
  { cx: "55%", cy: "33%", r: 2,   dur: "21s", dx: 18,  dy: 15 },
  { cx: "72%", cy: "48%", r: 2.5, dur: "15s", dx: -14, dy: -18 },
  { cx: "88%", cy: "37%", r: 2,   dur: "26s", dx: 10,  dy: 20 },
  { cx: "5%",  cy: "62%", r: 2.5, dur: "20s", dx: 20,  dy: -14 },
  { cx: "28%", cy: "70%", r: 2,   dur: "18s", dx: -16, dy: 12 },
  { cx: "48%", cy: "65%", r: 3,   dur: "22s", dx: 14,  dy: -20 },
  { cx: "67%", cy: "72%", r: 2,   dur: "16s", dx: -18, dy: 16 },
  { cx: "84%", cy: "60%", r: 2.5, dur: "24s", dx: 12,  dy: 18 },
  { cx: "18%", cy: "85%", r: 2,   dur: "19s", dx: 16,  dy: -12 },
  { cx: "43%", cy: "88%", r: 2,   dur: "21s", dx: -14, dy: -16 },
  { cx: "62%", cy: "82%", r: 2.5, dur: "17s", dx: 20,  dy: 10 },
  { cx: "90%", cy: "80%", r: 2,   dur: "23s", dx: -12, dy: -20 },
];

const lines = [
  { x1: "8%",  y1: "12%", x2: "23%", y2: "7%",  dur: "20s", i: 0,  j: 1  },
  { x1: "23%", y1: "7%",  x2: "41%", y2: "18%", dur: "18s", i: 1,  j: 2  },
  { x1: "41%", y1: "18%", x2: "63%", y2: "9%",  dur: "22s", i: 2,  j: 3  },
  { x1: "63%", y1: "9%",  x2: "78%", y2: "22%", dur: "16s", i: 3,  j: 4  },
  { x1: "78%", y1: "22%", x2: "92%", y2: "11%", dur: "24s", i: 4,  j: 5  },
  { x1: "15%", y1: "38%", x2: "35%", y2: "45%", dur: "19s", i: 6,  j: 7  },
  { x1: "35%", y1: "45%", x2: "55%", y2: "33%", dur: "21s", i: 7,  j: 8  },
  { x1: "55%", y1: "33%", x2: "72%", y2: "48%", dur: "17s", i: 8,  j: 9  },
  { x1: "72%", y1: "48%", x2: "88%", y2: "37%", dur: "23s", i: 9,  j: 10 },
  { x1: "8%",  y1: "12%", x2: "15%", y2: "38%", dur: "25s", i: 0,  j: 6  },
  { x1: "41%", y1: "18%", x2: "35%", y2: "45%", dur: "18s", i: 2,  j: 7  },
  { x1: "63%", y1: "9%",  x2: "55%", y2: "33%", dur: "20s", i: 3,  j: 8  },
  { x1: "5%",  y1: "62%", x2: "28%", y2: "70%", dur: "22s", i: 11, j: 12 },
  { x1: "28%", y1: "70%", x2: "48%", y2: "65%", dur: "16s", i: 12, j: 13 },
  { x1: "48%", y1: "65%", x2: "67%", y2: "72%", dur: "24s", i: 13, j: 14 },
  { x1: "67%", y1: "72%", x2: "84%", y2: "60%", dur: "19s", i: 14, j: 15 },
  { x1: "18%", y1: "85%", x2: "43%", y2: "88%", dur: "21s", i: 16, j: 17 },
  { x1: "43%", y1: "88%", x2: "62%", y2: "82%", dur: "17s", i: 17, j: 18 },
  { x1: "15%", y1: "38%", x2: "5%",  y2: "62%", dur: "23s", i: 6,  j: 11 },
  { x1: "88%", y1: "37%", x2: "84%", y2: "60%", dur: "20s", i: 10, j: 15 },
];

export default function NetworkBackground() {
  return (
    <>
      <style>{`
        @keyframes float-0  { 0%,100%{transform:translate(0,0)}  50%{transform:translate(18px,14px)} }
        @keyframes float-1  { 0%,100%{transform:translate(0,0)}  50%{transform:translate(-12px,20px)} }
        @keyframes float-2  { 0%,100%{transform:translate(0,0)}  50%{transform:translate(20px,-10px)} }
        @keyframes float-3  { 0%,100%{transform:translate(0,0)}  50%{transform:translate(-15px,18px)} }
        @keyframes float-4  { 0%,100%{transform:translate(0,0)}  50%{transform:translate(12px,-16px)} }
        @keyframes float-5  { 0%,100%{transform:translate(0,0)}  50%{transform:translate(-18px,12px)} }
        @keyframes float-6  { 0%,100%{transform:translate(0,0)}  50%{transform:translate(15px,20px)} }
        @keyframes float-7  { 0%,100%{transform:translate(0,0)}  50%{transform:translate(-20px,-12px)} }
        @keyframes float-8  { 0%,100%{transform:translate(0,0)}  50%{transform:translate(18px,15px)} }
        @keyframes float-9  { 0%,100%{transform:translate(0,0)}  50%{transform:translate(-14px,-18px)} }
        @keyframes float-10 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(10px,20px)} }
        @keyframes float-11 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(20px,-14px)} }
        @keyframes float-12 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(-16px,12px)} }
        @keyframes float-13 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(14px,-20px)} }
        @keyframes float-14 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(-18px,16px)} }
        @keyframes float-15 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(12px,18px)} }
        @keyframes float-16 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(16px,-12px)} }
        @keyframes float-17 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(-14px,-16px)} }
        @keyframes float-18 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(20px,10px)} }
        @keyframes float-19 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(-12px,-20px)} }
        .net-node { animation-timing-function: ease-in-out; animation-iteration-count: infinite; will-change: transform; }
        @media (prefers-reduced-motion: reduce) { .net-node, .net-line { animation: none !important; } }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0 }}
        >
          {lines.map((l, idx) => (
            <line
              key={idx}
              className="net-line"
              x1={l.x1} y1={l.y1}
              x2={l.x2} y2={l.y2}
              stroke="#0a0a0a"
              strokeWidth="0.5"
              opacity="0.15"
            />
          ))}
          {nodes.map((n, idx) => (
            <circle
              key={idx}
              className="net-node"
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill="#0a0a0a"
              opacity="0.25"
              style={{
                animationName: `float-${idx}`,
                animationDuration: n.dur,
                animationDelay: `${-(idx * 1.3).toFixed(1)}s`,
              }}
            />
          ))}
        </svg>
      </div>
    </>
  );
}
