import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import { SITE_URL, SITE_NAME, ORG, breadcrumbJsonLd } from "@/lib/site";
import { getAllInsightSlugs, getInsightBySlug } from "@/lib/insights";

type Props = { params: Promise<{ slug: string }> };

// ビルド時に公開記事を静的生成
export function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) return {};
  const url = `${SITE_URL}/insights/${slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(date: string) {
  const [y, m, d] = date.split("-");
  return y && m && d ? `${y}.${m}.${d}` : date;
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/insights/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "ja",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Person", "@id": `${SITE_URL}/profile#person`, name: ORG.founderName, url: `${SITE_URL}/profile` },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: ORG.logo },
    },
    keywords: post.keywords.join(", "),
  };

  const breadcrumb = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "コラム", path: "/insights" },
    { name: post.title, path: `/insights/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumb]} />

      <article>
        {/* Header */}
        <header className="pt-40 md:pt-48 pb-14 px-5 md:px-10 border-b border-[#d2d2d7]">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6 text-xs text-[#6e6e73]">
                <Link href="/insights" className="tracking-wider hover:text-[#1d1d1f]">
                  コラム
                </Link>
                <span>/</span>
                <span>{post.category}</span>
                <span>/</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <h1 className="text-[30px] md:text-[44px] font-semibold tracking-[-0.025em] text-[#1d1d1f] leading-[1.35]">
                {post.title}
              </h1>
            </FadeIn>
          </div>
        </header>

        {/* Body */}
        <section className="py-16 md:py-20 px-5 md:px-10">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div
                className="article-body"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            </FadeIn>

            <div className="mt-16 pt-10 border-t border-[#d2d2d7]">
              <p className="text-xs tracking-wider text-[#6e6e73] mb-2">AUTHOR</p>
              <p className="text-sm text-[#1d1d1f] font-bold mb-1">{ORG.founderName}</p>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                株式会社Wapple 代表取締役。三菱UFJリサーチ＆コンサルティング、Apple Japanを経て、
                研修とコーチングを通じて人材開発に取り組んでいる。
                <Link href="/profile" className="ml-1 underline hover:text-[#1d1d1f]">
                  プロフィール
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
      </article>
      <CtaBand />
    </>
  );
}
