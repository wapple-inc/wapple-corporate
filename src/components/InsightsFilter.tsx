"use client";
import { useState } from "react";
import Link from "next/link";
import type { InsightMeta, InsightTag } from "@/lib/insights";

const TAGS: { label: string; value: InsightTag | "all" }[] = [
  { label: "すべて", value: "all" },
  { label: "コラム", value: "コラム" },
  { label: "お知らせ", value: "お知らせ" },
];

const tagStyles: Record<InsightTag, string> = {
  "コラム": "bg-[#0a0a0a] text-white",
  "お知らせ": "bg-[#6b6b6b] text-white",
};

function formatDate(date: string) {
  const [y, m, d] = date.split("-");
  return y && m && d ? `${y}.${m}.${d}` : date;
}

export default function InsightsFilter({ posts }: { posts: InsightMeta[] }) {
  const [active, setActive] = useState<InsightTag | "all">("all");

  const filtered = active === "all" ? posts : posts.filter((p) => p.tag === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex items-center gap-3 mb-12">
        {TAGS.map((t) => (
          <button
            key={t.value}
            onClick={() => setActive(t.value)}
            className={`text-xs tracking-widest px-4 py-2 border transition-colors ${
              active === t.value
                ? "bg-[#0a0a0a] text-white border-[#0a0a0a]"
                : "bg-white text-[#6b6b6b] border-[#e5e5e5] hover:border-[#0a0a0a] hover:text-[#0a0a0a]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Article list */}
      {filtered.length === 0 ? (
        <p className="text-sm text-[#6b6b6b]">該当する記事はありません。</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#e5e5e5]">
          {filtered.map((p, i) => (
            <Link
              key={p.slug}
              href={`/insights/${p.slug}`}
              className="block h-full p-10 border-b border-[#e5e5e5] md:odd:border-r hover:bg-[#f9f9f9] transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-xs px-2.5 py-1 tracking-wider ${tagStyles[p.tag] ?? "bg-[#e5e5e5] text-[#0a0a0a]"}`}>
                  {p.tag}
                </span>
                <time className="text-xs text-[#6b6b6b]" dateTime={p.date}>
                  {formatDate(p.date)}
                </time>
              </div>
              <h2 className="font-serif text-lg font-bold text-[#0a0a0a] mb-4 leading-snug group-hover:underline">
                {p.title}
              </h2>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">{p.description}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
