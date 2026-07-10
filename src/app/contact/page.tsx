import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "株式会社Wappleへのお問い合わせ。事業戦略・企業研修・コーチングに関するご相談はこちらから。課題が整理されていない段階でもお気軽にどうぞ。",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "お問い合わせ",
    description:
      "Wappleへのご相談はこちら。課題が整理されていない段階でもお気軽にどうぞ。",
    url: `${SITE_URL}/contact`,
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "お問い合わせ | 株式会社Wapple",
  url: `${SITE_URL}/contact`,
  about: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
};

export default function ContactPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "お問い合わせ", path: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={[contactJsonLd, breadcrumb]} />
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 border-b border-[#d2d2d7]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">Contact</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-[#1d1d1f]">
              お問い合わせ
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn>
            {/* ← CTA見出しは壁打ち後に差し替え予定 */}
            <h2 className="font-display text-2xl font-bold text-[#1d1d1f] mb-6 leading-tight">
              ご相談、お待ちしています。
            </h2>
            <p className="text-sm text-[#6e6e73] leading-relaxed mb-8">
              課題が整理されていなくても構いません。
              対話の中から、一緒に論点を見つけていきます。
            </p>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              初回のご相談は無料で承ります。
              サービス内容・料金・対応範囲についてもお気軽にお問い合わせください。
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
