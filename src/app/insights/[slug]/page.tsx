import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
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
    author: { "@type": "Person", name: ORG.founderName, url: `${SITE_URL}/about` },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: ORG.logo },
    },
    keywords: post.keywords.join(", "),
  };

  const breadcrumb = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "インサイト", path: "/insights" },
    { name: post.title, path: `/insights/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumb]} />

      <article>
        {/* Header */}
        <header className="pt-32 pb-12 px-6 border-b border-[#e5e5e5]">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6 text-xs text-[#6b6b6b]">
                <Link href="/insights" className="tracking-wider hover:text-[#0a0a0a]">
                  Insights
                </Link>
                <span>/</span>
                <span>{post.category}</span>
                <span>/</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#0a0a0a] leading-tight">
                {post.title}
              </h1>
            </FadeIn>
          </div>
        </header>

        {/* Body */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div
                className="article-body"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            </FadeIn>

            <div className="mt-16 pt-10 border-t border-[#e5e5e5]">
              <p className="text-xs tracking-wider text-[#6b6b6b] mb-2">AUTHOR</p>
              <p className="text-sm text-[#0a0a0a] font-bold mb-1">{ORG.founderName}</p>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                株式会社Wapple 代表取締役。三菱UFJリサーチ＆コンサルティング、Apple Japanを経て、
                事業戦略・人材開発・コーチングの伴走支援を行う。
                <Link href="/about" className="ml-1 underline hover:text-[#0a0a0a]">
                  プロフィール
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-[#0a0a0a] text-center">
          <FadeIn>
            <p className="text-sm text-[#6b6b6b] mb-6 leading-relaxed">
              記事に関連する課題について、お気軽にご相談ください。
            </p>
            <Link
              href="/contact"
              className="inline-block border border-white text-white px-10 py-4 text-sm tracking-widest hover:bg-white hover:text-[#0a0a0a] transition-colors"
            >
              お問い合わせ
            </Link>
          </FadeIn>
        </section>
      </article>
    </>
  );
}
