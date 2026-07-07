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
  "コラム": "bg-[#1d1d1f] text-white",
  "お知らせ": "bg-[#6e6e73] text-white",
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
                ? "bg-[#1d1d1f] text-white border-[#1d1d1f]"
                : "bg-white text-[#6e6e73] border-[#d2d2d7] hover:border-[#1d1d1f] hover:text-[#1d1d1f]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Article list */}
      {filtered.length === 0 ? (
        <p className="text-sm text-[#6e6e73]">該当する記事はありません。</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#d2d2d7]">
          {filtered.map((p, i) => (
            <Link
              key={p.slug}
              href={`/insights/${p.slug}`}
              className="block h-full p-10 border-b border-[#d2d2d7] md:odd:border-r hover:bg-[#f5f5f7] transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-xs px-2.5 py-1 tracking-wider ${tagStyles[p.tag] ?? "bg-[#d2d2d7] text-[#1d1d1f]"}`}>
                  {p.tag}
                </span>
                <time className="text-xs text-[#6e6e73]" dateTime={p.date}>
                  {formatDate(p.date)}
                </time>
              </div>
              <h2 className="font-display text-lg font-bold text-[#1d1d1f] mb-4 leading-snug group-hover:underline">
                {p.title}
              </h2>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{p.description}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
