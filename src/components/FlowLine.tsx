// 流れの図：1本の直線と丸で段階を示す（矢印は使わない）。研修スライドの flow と同じ型。
// 強調する段階は大きな灰青の丸、ほかは小さなグレーの丸。見出しと説明は丸の下。
export type FlowItem = { head: string; body: string };

export default function FlowLine({ items, highlight = 0 }: { items: FlowItem[]; highlight?: number }) {
  return (
    <>
      {/* PC：横一列 */}
      <div className="hidden md:block relative">
        <div className="absolute left-0 right-0 top-[11px] h-px bg-[#D2D2D7]" />
        <ol className="relative grid" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
          {items.map((it, i) => (
            <li key={it.head} className="pr-6">
              <div className="h-[23px] flex items-center">
                {i === highlight ? (
                  <span className="block w-[23px] h-[23px] rounded-full bg-[#4F6D8A]" />
                ) : (
                  <span className="block w-[11px] h-[11px] rounded-full bg-[#A1A1A6] ml-[6px]" />
                )}
              </div>
              <p className={`mt-6 text-[17px] font-semibold ${i === highlight ? "text-[#3E5871]" : "text-[#1D1D1F]"}`}>
                {it.head}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6E6E73]">{it.body}</p>
            </li>
          ))}
        </ol>
      </div>
      {/* スマホ：縦一列 */}
      <div className="md:hidden relative">
      <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#D2D2D7]" />
      <ol className="relative pl-10">
        {items.map((it, i) => (
          <li key={it.head} className="relative pb-8 last:pb-0">
            <span className="absolute -left-10 top-0 w-[23px] h-[23px] flex items-center justify-center">
              {i === highlight ? (
                <span className="block w-[23px] h-[23px] rounded-full bg-[#4F6D8A]" />
              ) : (
                <span className="block w-[11px] h-[11px] rounded-full bg-[#A1A1A6]" />
              )}
            </span>
            <p className={`text-[16px] font-semibold ${i === highlight ? "text-[#3E5871]" : "text-[#1D1D1F]"}`}>{it.head}</p>
            <p className="mt-1 text-[14px] leading-relaxed text-[#6E6E73]">{it.body}</p>
          </li>
        ))}
      </ol>
      </div>
    </>
  );
}
