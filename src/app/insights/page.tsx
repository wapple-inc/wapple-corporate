import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import InsightsFilter from "@/components/InsightsFilter";
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

      {/* Article list with filter */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-sm text-[#6b6b6b]">記事を準備中です。</p>
          ) : (
            <InsightsFilter posts={posts} />
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
