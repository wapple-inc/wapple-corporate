import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "株式会社Wappleへのお問い合わせ。事業戦略・企業研修・コーチングに関するご相談はこちらから。課題が整理されていない段階でもお気軽にどうぞ。",
  openGraph: {
    title: "お問い合わせ",
    description:
      "Wappleへのご相談はこちら。課題が整理されていない段階でもお気軽にどうぞ。",
    url: "https://wapple.co.jp/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 border-b border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6b6b6b] uppercase mb-4">Contact</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#0a0a0a]">
              お問い合わせ
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn>
            {/* ← CTA見出しは壁打ち後に差し替え予定 */}
            <h2 className="font-serif text-2xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              ご相談、お待ちしています。
            </h2>
            <p className="text-sm text-[#6b6b6b] leading-relaxed mb-8">
              課題が整理されていなくても構いません。
              対話の中から、一緒に論点を見つけていきます。
            </p>
            <p className="text-sm text-[#6b6b6b] leading-relaxed">
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
