import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, breadcrumbJsonLd } from "@/lib/site";
import { getAllInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "インサイト",
  description:
    "事業戦略・人材開発・組織開発・コーチングに関する実務的な知見をお届けします。市場調査の進め方、研修設計、論点整理など、現場で使える考え方をまとめています。",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "インサイト",
    description:
      "事業戦略・人材開発・組織開発・コーチングに関する実務的な知見をお届けします。",
    url: `${SITE_URL}/insights`,
  },
};

const categoryColors: Record<string, string> = {
  "事業戦略": "bg-[#0a0a0a] text-white",
  "人材開発": "bg-[#6b6b6b] text-white",
  "組織開発": "bg-[#e5e5e5] text-[#0a0a0a]",
  "コーチング": "bg-[#f9f9f9] text-[#0a0a0a] border border-[#e5e5e5]",
};

function formatDate(date: string) {
  const [y, m, d] = date.split("-");
  return y && m && d ? `${y}.${m}.${d}` : date;
}

export default function InsightsPage() {
  const posts = getAllInsights();

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "インサイト | 株式会社Wapple",
    url: `${SITE_URL}/insights`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    hasPart: posts.map((p) => ({
      "@type": "Article",
      headline: p.title,
      url: `${SITE_URL}/insights/${p.slug}`,
      datePublished: p.date,
    })),
  };

  const breadcrumb = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "インサイト", path: "/insights" },
  ]);

  return (
    <>
      <JsonLd data={[collectionJsonLd, breadcrumb]} />

      {/* Page header */}
      <section className="pt-32 pb-16 px-6 border-b border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6b6b6b] uppercase mb-4">Insights</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#0a0a0a]">
              インサイト
            </h1>
            <p className="text-sm text-[#6b6b6b] leading-relaxed mt-6 max-w-2xl">
              事業戦略・人材開発・組織開発・コーチングに関する実務的な知見をお届けします。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Article list */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-sm text-[#6b6b6b]">記事を準備中です。</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#e5e5e5]">
              {posts.map((p, i) => (
                <FadeIn key={p.slug} delay={(i % 2) * 0.1}>
                  <Link
                    href={`/insights/${p.slug}`}
                    className="block h-full p-10 border-b border-[#e5e5e5] md:odd:border-r hover:bg-[#f9f9f9] transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className={`text-xs px-2.5 py-1 tracking-wider ${
                          categoryColors[p.category] || "bg-[#e5e5e5] text-[#0a0a0a]"
                        }`}
                      >
                        {p.category}
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
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0a0a0a] text-center">
        <FadeIn>
          <p className="text-sm text-[#6b6b6b] mb-6 leading-relaxed">
            具体的な課題について相談したい方は、お気軽にお問い合わせください。
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
