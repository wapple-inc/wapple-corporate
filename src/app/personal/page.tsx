import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "個人の方へ",
  description:
    "株式会社Wappleの個人向けサービス一覧。パーソナルコーチングをはじめ、個人の成長・変容を支援するサービスをご紹介します。",
  alternates: { canonical: "/personal" },
  openGraph: {
    title: "個人の方へ",
    description: "Wappleの個人向けサービス一覧。パーソナルコーチングなど、個人の成長を支援するサービスをご紹介。",
    url: `${SITE_URL}/personal`,
  },
};

const services = [
  {
    category: "Coaching",
    title: "伴走コーチング",
    description:
      "目標設定から行動変容まで、対話を通じて個人の課題を構造化し、継続的な変化をサポートします。",
    href: "https://www.wapple.life/coaching",
    available: true,
  },
  {
    category: "Coming Soon",
    title: "近日公開予定",
    description: "新しい個人向けサービスを準備中です。公開をお待ちください。",
    href: null,
    available: false,
  },
];

export default function PersonalPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "個人の方へ", path: "/personal" },
  ]);

  return (
    <>
      <JsonLd data={[breadcrumb]} />

      {/* Page header */}
      <section className="pt-32 pb-16 px-6 border-b border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6b6b6b] uppercase mb-4">For Individuals</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#0a0a0a]">
              個人の方へ
            </h1>
            <p className="mt-6 text-sm text-[#6b6b6b] leading-relaxed max-w-xl">
              法人・チームではなく、個人として成長・変容を求める方に向けたサービスをご用意しています。
              ご興味のあるサービスの詳細ページへお進みください。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#e5e5e5]">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="p-10 border-b border-[#e5e5e5] last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 md:odd:border-r min-h-[280px] flex flex-col">
                <div className="mb-6">
                  <span className={`text-xs px-2.5 py-1 tracking-wider ${s.available ? "bg-[#0a0a0a] text-white" : "bg-[#e5e5e5] text-[#6b6b6b]"}`}>
                    {s.category}
                  </span>
                </div>
                <h2 className="font-serif text-xl font-bold text-[#0a0a0a] mb-4 leading-snug">
                  {s.title}
                </h2>
                <p className="text-sm text-[#6b6b6b] leading-relaxed flex-1">
                  {s.description}
                </p>
                {s.available && s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm border border-[#0a0a0a] px-6 py-3 hover:bg-[#0a0a0a] hover:text-white transition-colors tracking-wider self-start"
                  >
                    詳細・お申込みはこちら
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ) : (
                  <p className="mt-8 text-xs text-[#aaa] tracking-widest">Coming soon</p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#f9f9f9] text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] text-[#6b6b6b] uppercase mb-6">Corporate</p>
          <p className="font-serif text-2xl font-bold text-[#0a0a0a] mb-4">
            法人・チームへのご支援はこちら
          </p>
          <p className="text-sm text-[#6b6b6b] mb-8">
            企業・組織向けのコンサルティング・研修・コーチングは法人向けサービスをご覧ください。
          </p>
          <Link
            href="/services"
            className="inline-block border border-[#0a0a0a] text-[#0a0a0a] px-10 py-4 text-sm tracking-widest hover:bg-[#0a0a0a] hover:text-white transition-colors"
          >
            法人向けサービスを見る
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
