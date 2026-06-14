import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "支援実績",
  description:
    "Wappleの支援実績。食品メーカーの新規事業構想・販路戦略、小売チェーンの市場調査、建設会社の海外拠点設立支援など、多様な業種・テーマのプロジェクト実績。",
  alternates: { canonical: "/cases" },
  openGraph: {
    title: "支援実績",
    description:
      "新規事業・事業戦略・市場調査など、多様な業種・テーマのプロジェクト支援実績。",
    url: `${SITE_URL}/cases`,
  },
};

const cases = [
  {
    category: "新規事業",
    client: "食品メーカー",
    region: "日本",
    period: "2025年",
    title: "新規事業構想における販売戦略・収益計画策定",
    description:
      "新規事業アイデアの市場性検証から、販売チャネル戦略・収益モデルの策定までを支援。経営陣との議論を重ね、事業化判断の材料を整備。",
  },
  {
    category: "事業戦略",
    client: "食品メーカー",
    region: "日本",
    period: "2025年",
    title: "販路戦略の立案および収益計画の策定",
    description:
      "市場環境の整理から販路別の戦略立案・収益モデルの設計まで、事業拡大に向けた戦略策定を伴走支援。",
  },
  {
    category: "市場調査",
    client: "小売チェーン",
    region: "日本",
    period: "2025年",
    title: "新規事業領域の市場調査・情報整備支援",
    description:
      "新規事業の検討に向けた市場環境・競合・顧客ニーズの調査を実施。事業の方向性を判断するためのエビデンス整備を支援。",
  },
  {
    category: "市場調査",
    client: "小売チェーン",
    region: "日本",
    period: "2026年",
    title: "法人向け新規事業開発のための市場・顧客調査",
    description:
      "BtoB領域における市場実態調査・顧客ヒアリング設計・競合分析を実施。新規事業の方向性を判断するためのエビデンス整備を支援。",
  },
  {
    category: "新規事業",
    client: "建設会社",
    region: "ベトナム",
    period: "2026年",
    title: "海外拠点設立のための現地情報整備支援",
    description:
      "ベトナム拠点設立に向けた現地情報の収集・整理・ガイドブック化を支援。法務・労務・ビジネス慣習を含む実務的な情報を体系的にまとめ、現地展開の基盤づくりに貢献。",
  },
];

const categoryColors: Record<string, string> = {
  "事業戦略": "bg-[#0a0a0a] text-white",
  "新規事業": "bg-[#6b6b6b] text-white",
  "市場調査": "bg-[#e5e5e5] text-[#0a0a0a]",
  "組織開発・研修": "bg-[#f9f9f9] text-[#0a0a0a] border border-[#e5e5e5]",
  "ビジネスコーチング": "bg-[#f9f9f9] text-[#0a0a0a] border border-[#e5e5e5]",
};

export default function CasesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "株式会社Wapple 支援実績",
    itemListElement: cases.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      description: c.description,
    })),
  };

  const breadcrumb = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "支援実績", path: "/cases" },
  ]);

  return (
    <>
      <JsonLd data={[itemList, breadcrumb]} />
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 border-b border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6b6b6b] uppercase mb-4">Cases</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#0a0a0a]">
              支援実績
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Cases grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#e5e5e5]">
          {cases.map((c, i) => (
            <FadeIn key={`${c.title}-${i}`} delay={(i % 2) * 0.1}>
              <div className="p-10 border-b border-[#e5e5e5] md:odd:border-r">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-xs px-2.5 py-1 tracking-wider ${categoryColors[c.category] || "bg-[#e5e5e5] text-[#0a0a0a]"}`}>
                    {c.category}
                  </span>
                  <span className="text-xs text-[#6b6b6b]">{c.region}</span>
                  <span className="text-xs text-[#6b6b6b]">/ {c.period}</span>
                </div>
                <p className="text-xs text-[#6b6b6b] mb-2">{c.client}</p>
                <h3 className="font-serif text-base font-bold text-[#0a0a0a] mb-4 leading-snug">
                  {c.title}
                </h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">{c.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0a0a0a] text-center">
        <FadeIn>
          <p className="text-sm text-[#6b6b6b] mb-6 leading-relaxed">
            貴社の状況に合わせた支援内容をご提案します。
          </p>
          <Link
            href="/contact"
            className="inline-block border border-white text-white px-10 py-4 text-sm tracking-widest hover:bg-white hover:text-[#0a0a0a] transition-colors"
          >
            お問い合わせ
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
