import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import InsightsFilter from "@/components/InsightsFilter";
import { SITE_URL, SITE_NAME, breadcrumbJsonLd } from "@/lib/site";
import { getAllInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "コラム",
  description:
    "事業戦略・人材開発・組織開発・コーチングに関する実務的な知見をお届けします。市場調査の進め方、研修設計、論点整理など、現場で使える考え方をまとめています。",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "コラム",
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
    name: "コラム | 株式会社Wapple",
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
    { name: "コラム", path: "/insights" },
  ]);

  return (
    <>
      <JsonLd data={[collectionJsonLd, breadcrumb]} />

      <PageHero label="COLUMN" title={["コラム"]}>
        <p className="mt-8 t-lead text-[#6e6e73] max-w-[36em]">事業戦略・人材開発・組織開発・コーチングに関する実務的な知見をお届けします。</p>
      </PageHero>

      {/* Article list with filter */}
      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          {posts.length === 0 ? (
            <p className="text-sm text-[#6e6e73]">記事を準備中です。</p>
          ) : (
            <InsightsFilter posts={posts} />
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
