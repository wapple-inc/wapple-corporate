import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, PERSON, breadcrumbJsonLd } from "@/lib/site";

// 研修テーマ別ページ（/training/*）の共通レイアウト。
// 各ページは metadata と TrainingPageData を定義し、このコンポーネントに渡すだけにする。
// 構成: 見出し → 課題 → プログラム（3形式） → 進め方 → 講師 → 実績 → FAQ → CTA

export type TrainingProgram = {
  format: string; // 例: 90分
  label: string; // 例: 講演・体験版
  audience: string;
  goals: string[];
};

export type TrainingPageData = {
  path: string; // 例: /training/generative-ai
  eyebrow: string; // 英語の小見出し（例: Generative AI Training）
  title: string; // h1
  lead: string; // 誰の何を変えるか（1〜2文）
  intro: string; // 補足説明
  pains: string[];
  programs: TrainingProgram[];
  modules: { title: string; detail: string }[];
  approach: { title: string; detail: string }[];
  instructorPoints: { title: string; detail: string }[];
  results: string[];
  faqs: { q: string; a: string }[];
  serviceDescription: string; // 構造化データ用
  ctaNote?: string;
};

// 講師紹介の共通部分（差別化3点は各ページで文脈に合わせて書く）
const instructorSummary =
  "三菱UFJリサーチ＆コンサルティングで市場調査・事業戦略立案に携わった後、Apple Japanで新入社員・中途社員研修の設計・運営を担当。2026年に株式会社Wappleを設立。ICF認定コーチ（ACC）、マインドフルネス瞑想協会認定講師。";

export default function TrainingPageLayout({ data }: { data: TrainingPageData }) {
  const pageUrl = `${SITE_URL}${data.path}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    serviceType: "企業研修",
    description: data.serviceDescription,
    url: pageUrl,
    provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: SITE_NAME },
    areaServed: "JP",
    audience: { "@type": "BusinessAudience", name: "企業・教育機関の人事・研修担当者" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${data.title} 実施形式`,
      itemListElement: data.programs.map((p) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${data.title}（${p.format}・${p.label}）`,
          description: `対象: ${p.audience}。${p.goals.join("／")}`,
        },
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumb = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "サービス", path: "/services" },
    { name: data.title, path: data.path },
  ]);

  return (
    <>
      <JsonLd data={[serviceJsonLd, faqJsonLd, breadcrumb]} />

      {/* Page header */}
      <section className="pt-32 pb-16 px-6 border-b border-[#d2d2d7]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">{data.eyebrow}</p>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-[#1d1d1f] leading-tight mb-8">
              {data.title}
            </h1>
            <p className="font-display text-lg md:text-xl text-[#1d1d1f] mb-6 border-l-2 border-[#1d1d1f] pl-4 max-w-3xl leading-relaxed">
              {data.lead}
            </p>
            <p className="text-sm text-[#6e6e73] leading-relaxed max-w-2xl">{data.intro}</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block text-center bg-[#1d1d1f] text-white rounded-full px-8 py-3 text-sm tracking-wider hover:bg-[#424245] transition-colors"
              >
                30分無料体験を申し込む
              </Link>
              <a
                href="#program"
                className="inline-block text-center border border-[#1d1d1f] rounded-full px-8 py-3 text-sm tracking-wider hover:bg-[#1d1d1f] hover:text-white transition-colors"
              >
                プログラムを見る
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pains */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">Challenges</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-12">
              こんな課題に
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl">
              {data.pains.map((pain) => (
                <li key={pain} className="flex items-start gap-3 text-sm text-[#6e6e73] leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 border border-[#6e6e73] rounded-full flex-shrink-0" />
                  {pain}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Programs */}
      <section id="program" className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">Program</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-4">
              プログラム
            </h2>
            <p className="text-sm text-[#6e6e73] leading-relaxed mb-12 max-w-2xl">
              90分・半日・1日の3形式。対象と目的に合わせて、モジュールを組み替えて設計します。
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#d2d2d7] bg-white rounded-2xl overflow-hidden">
            {data.programs.map((p, i) => (
              <FadeIn key={p.format} delay={i * 0.1}>
                <div className="p-8 border-b md:border-b-0 md:border-r border-[#d2d2d7] last:border-0 h-full">
                  <p className="font-display text-3xl font-bold text-[#1d1d1f] mb-1">{p.format}</p>
                  <p className="text-xs tracking-wider text-[#6e6e73] mb-6">{p.label}</p>
                  <p className="text-xs tracking-[0.2em] text-[#6e6e73] uppercase mb-2">対象</p>
                  <p className="text-sm text-[#1d1d1f] mb-6">{p.audience}</p>
                  <p className="text-xs tracking-[0.2em] text-[#6e6e73] uppercase mb-2">ゴール</p>
                  <ul className="space-y-2">
                    {p.goals.map((g) => (
                      <li key={g} className="flex items-start gap-2 text-sm text-[#6e6e73] leading-relaxed">
                        <span className="mt-2 w-1 h-1 bg-[#1d1d1f] rounded-full flex-shrink-0" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <h3 className="text-xs tracking-[0.2em] text-[#6e6e73] uppercase mt-16 mb-6">
              主なモジュール
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              {data.modules.map((m) => (
                <div key={m.title} className="border-b border-[#d2d2d7] py-4">
                  <p className="text-sm font-bold text-[#1d1d1f] mb-1">{m.title}</p>
                  <p className="text-xs text-[#6e6e73] leading-relaxed">{m.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#6e6e73] mt-8">
              お見積りは内容（形式・人数・事前ヒアリング・事後フォローの有無）に応じてご提示します。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">Approach</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-4">進め方</h2>
            <p className="text-sm text-[#6e6e73] leading-relaxed mb-12 max-w-2xl">
              一方向の講義ではなく、対話・内省・実践で「研修後に行動が変わる」設計。講義4割、ワーク6割が基本です。
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#d2d2d7] rounded-2xl overflow-hidden">
            {data.approach.map((a, i) => (
              <FadeIn key={a.title} delay={i * 0.1}>
                <div className="p-8 border-b md:border-b-0 md:border-r border-[#d2d2d7] last:border-0 h-full">
                  <p className="font-display text-3xl font-bold text-[#d2d2d7] mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-base font-bold text-[#1d1d1f] mb-3">{a.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{a.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">Instructor</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-4">講師</h2>
            <p className="text-sm text-[#1d1d1f] font-semibold mb-2">
              {PERSON.name}（{PERSON.furigana}）— {SITE_NAME} {PERSON.jobTitle}
            </p>
            <p className="text-sm text-[#6e6e73] leading-relaxed mb-12 max-w-2xl">{instructorSummary}</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.instructorPoints.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="border-t border-[#1d1d1f] pt-5 h-full">
                  <h3 className="font-display text-base font-bold text-[#1d1d1f] mb-3">{p.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{p.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <Link
              href="/profile"
              className="inline-block mt-12 text-sm tracking-widest border-b border-[#1d1d1f] pb-1 hover:text-[#6e6e73] transition-colors"
            >
              講師プロフィールを見る →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">Results</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-12">実績</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ul className="max-w-3xl">
              {data.results.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 text-sm text-[#6e6e73] leading-relaxed py-4 border-t border-[#d2d2d7] last:border-b"
                >
                  <span className="mt-2 w-1 h-1 bg-[#1d1d1f] rounded-full flex-shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#6e6e73] mt-6">
              研修会社・教育事業者経由の実績は、契約上の理由から社名を伏せて記載しています。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">FAQ</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-12">
              よくあるご質問
            </h2>
          </FadeIn>
          <div className="max-w-3xl">
            {data.faqs.map((f, i) => (
              <FadeIn key={f.q} delay={i * 0.05}>
                <div className="py-6 border-t border-[#d2d2d7] last:border-b">
                  <h3 className="text-sm font-bold text-[#1d1d1f] mb-3 leading-relaxed">Q. {f.q}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{f.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#1d1d1f] text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-6">Free Session</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
            30分の無料体験セッション
          </h2>
          <p className="text-sm text-[#6e6e73] mb-10 max-w-md mx-auto leading-relaxed">
            {data.ctaNote ??
              "研修の一部をオンラインで体験いただきながら、貴社の状況に合う形式・内容を一緒に整理します。ご相談だけでも構いません。"}
          </p>
          <Link
            href="/contact"
            className="inline-block border border-white text-white rounded-full px-10 py-4 text-sm tracking-widest hover:bg-white hover:text-[#1d1d1f] transition-colors"
          >
            30分無料体験を申し込む
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
