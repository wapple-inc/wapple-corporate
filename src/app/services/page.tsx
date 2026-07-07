import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "Wappleの3つのサービス：事業戦略コンサルティング（市場調査・新規事業支援）、企業研修・人材開発、ビジネスコーチング。経営課題の整理から行動変容まで一貫支援。",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "サービス",
    description:
      "事業戦略コンサルティング・企業研修・ビジネスコーチング。経営課題の整理から行動変容まで一貫支援。",
    url: `${SITE_URL}/services`,
  },
};

const services = [
  {
    id: "consulting",
    number: "01",
    title: "事業戦略コンサルティング",
    subtitle: "Strategy Consulting",
    lead: "複雑な課題を整理し、経営の意思決定を支援する。",
    description:
      "市場調査・競合分析・事業検討支援を通じて、経営判断に必要な材料を整理します。",
    pains: [
      "新規事業を検討しているが、何から手をつければいいか分からない",
      "競合・市場環境の変化に対して、打ち手が見えていない",
      "課題は感じているが、論点が整理できていない",
      "戦略は描けているが、現場への浸透・実装で止まっている",
    ],
    menu: [
      { item: "市場調査・競合分析", desc: "定量・定性調査を組み合わせ、市場実態を把握" },
      { item: "事業戦略立案", desc: "市場環境・競合を踏まえた戦略の設計と意思決定支援" },
      { item: "新規事業検討支援", desc: "事業アイデアの検証から事業計画策定まで" },
    ],
  },
  {
    id: "training",
    number: "02",
    title: "企業研修・人材開発",
    subtitle: "Corporate Training",
    lead: "知識の習得で終わらせず、現場で使われる学びへ。",
    description:
      "一方向の講義ではなく、対話と実践を重視した研修を設計。組織に学習文化を根付かせます。",
    pains: [
      "研修を実施しても、現場での行動が変わらない",
      "管理職・チームリーダーのマネジメント力を底上げしたい",
      "ロジカルシンキングやコミュニケーション力を組織全体で強化したい",
      "研修プログラムを一から設計する時間・リソースがない",
    ],
    menu: [
      { item: "ロジカルシンキング研修", desc: "構造的思考・論点整理・資料作成力の強化" },
      { item: "コミュニケーション研修", desc: "対話力・聴く力・伝える力の向上" },
      { item: "管理職向けマネジメント研修", desc: "チームビルディング・フィードバック・組織改善" },
      { item: "マインドフルネス・セルフマネジメント研修", desc: "自己認識・集中力・ストレス対応力の向上" },
    ],
  },
  {
    id: "coaching",
    number: "03",
    title: "ビジネスコーチング",
    subtitle: "Business Coaching",
    lead: "思考を整理し、行動変容を支援する。",
    description:
      "意思決定・マネジメント・キャリアなど、個人が抱える課題に向き合い、次の行動を明確にします。階層を問わず、一人ひとりの変化を伴走支援します。",
    pains: [
      "経営判断に迷いが生じており、思考を整理したい",
      "管理職として、部下への関わり方・マネジメントを見直したい",
      "目標は明確だが、行動に移せずにいる",
      "自分の強みと課題を客観的に把握し、成長につなげたい",
    ],
    menu: [
      { item: "経営者・経営幹部向けコーチング", desc: "経営課題・意思決定・ビジョン実現を支援" },
      { item: "管理職・リーダー向けコーチング", desc: "チームマネジメント・自己成長の促進" },
      { item: "ビジネスパーソン向けコーチング", desc: "キャリア・行動変容・自律的思考習慣の形成" },
    ],
  },
];

export default function ServicesPage() {
  const servicesJsonLd = services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.subtitle,
    description: s.description,
    url: `${SITE_URL}/services#${s.id}`,
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    areaServed: "JP",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.title,
      itemListElement: s.menu.map((m) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: m.item, description: m.desc },
      })),
    },
  }));

  const breadcrumb = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "サービス", path: "/services" },
  ]);

  return (
    <>
      <JsonLd data={[...servicesJsonLd, breadcrumb]} />
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 border-b border-[#d2d2d7]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">Services</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-[#1d1d1f]">
              サービス
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Service list */}
      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-24 px-6 ${idx % 2 === 1 ? "bg-[#f5f5f7]" : ""}`}
        >
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-display text-6xl font-bold text-[#d2d2d7]">{s.number}</span>
                <div>
                  <p className="text-xs tracking-[0.2em] text-[#6e6e73] uppercase mb-1">{s.subtitle}</p>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1d1d1f]">{s.title}</h2>
                </div>
              </div>
              <p className="font-display text-lg text-[#1d1d1f] mb-6 border-l-2 border-[#1d1d1f] pl-4">
                {s.lead}
              </p>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-12 max-w-2xl">{s.description}</p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <FadeIn delay={0.1}>
                <h3 className="text-xs tracking-[0.2em] text-[#6e6e73] uppercase mb-6">
                  こんな課題はありませんか
                </h3>
                <ul className="space-y-4">
                  {s.pains.map((pain) => (
                    <li key={pain} className="flex items-start gap-3 text-sm text-[#6e6e73]">
                      <span className="mt-2 w-1.5 h-1.5 border border-[#6e6e73] rounded-full flex-shrink-0" />
                      {pain}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-xs tracking-[0.2em] text-[#6e6e73] uppercase mb-6">
                  提供メニュー
                </h3>
                <div className="space-y-4">
                  {s.menu.map((m) => (
                    <div key={m.item} className="border-b border-[#d2d2d7] pb-4">
                      <p className="text-sm font-bold text-[#1d1d1f] mb-1">{m.item}</p>
                      <p className="text-xs text-[#6e6e73]">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1d1d1f] text-center">
        <FadeIn>
          <p className="text-sm text-[#6e6e73] mb-6 leading-relaxed">
            まずは課題を話してみましょう。<br />
            ご支援内容・料金はご状況に応じてご提案します。
          </p>
          <Link
            href="/contact"
            className="inline-block border border-white text-white px-10 py-4 text-sm tracking-widest hover:bg-white hover:text-[#1d1d1f] transition-colors"
          >
            お問い合わせ
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
