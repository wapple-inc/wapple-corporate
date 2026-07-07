import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, PERSON, personJsonLd, breadcrumbJsonLd } from "@/lib/site";

// 「秦善成」での指名検索の受け皿となるページ。タイトル・h1・構造化データを氏名に最適化する。
export const metadata: Metadata = {
  title: "代表取締役 秦善成（はた よしなり）プロフィール",
  description:
    "株式会社Wapple代表取締役・秦善成（Yoshinari Hata）のプロフィール。三菱UFJリサーチ＆コンサルティングで戦略コンサルタント、Apple Japanで人材育成・データ分析に従事後、2026年に株式会社Wappleを設立。ICF認定コーチ（ACC）。",
  alternates: { canonical: "/profile" },
  openGraph: {
    title: "代表取締役 秦善成（はた よしなり）プロフィール | 株式会社Wapple",
    description:
      "秦善成（Yoshinari Hata）— 戦略コンサルティング×人材開発×コーチング。三菱UFJリサーチ＆コンサルティング、Apple Japanを経て株式会社Wappleを設立。",
    url: `${SITE_URL}/profile`,
    type: "profile",
    images: [{ url: "/profile.png", width: 800, height: 1067, alt: "秦 善成" }],
  },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/profile#page`,
  url: `${SITE_URL}/profile`,
  name: "代表取締役 秦善成（はた よしなり）プロフィール",
  inLanguage: "ja",
  mainEntity: { "@id": PERSON.id },
};

const career = [
  {
    period: "2009 – 2013",
    org: "早稲田大学 政治経済学部",
    role: "経済学科 卒業",
    detail: "在学中に北京大学（対外漢語教育学院）へ留学し、中国語を習得。",
  },
  {
    period: "2014 – 2020",
    org: "三菱UFJリサーチ＆コンサルティング",
    role: "グローバル戦略コンサルタント",
    detail:
      "小売・流通・消費財業界を中心に、海外展開・新規事業の市場調査、事業戦略立案、ビジネスデューデリジェンスを担当。50件以上のプロジェクトに参画し、うち10件でプロジェクトリーダーを務める。",
  },
  {
    period: "2020 – 2024",
    org: "Apple Japan",
    role: "Fraud Specialist / Trainer / Senior Fraud Investigator",
    detail:
      "取引データの分析・リスク評価に加え、新入社員・中途社員向け研修の設計と実施、VOC分析に基づく改善施策を担当。トレーニング運営を通じてチームパフォーマンス指標を5%向上。",
  },
  {
    period: "2025 – 2026",
    org: "独立（個人事業主）",
    role: "コンサルタント / 研修講師 / コーチ",
    detail:
      "事業戦略・市場調査コンサルティング、企業研修の企画・登壇、経営者・会社員向けコーチングを提供。",
  },
  {
    period: "2026 –",
    org: "株式会社Wapple",
    role: "代表取締役（設立）",
    detail:
      "コンサルティング・人材開発・企業研修・コーチング事業を展開。課題の構造化から行動変容までの伴走型支援を提供している。",
  },
];

const numbers = [
  { value: "43+", label: "支援プロジェクト" },
  { value: "10+", label: "対応業種" },
  { value: "10+", label: "対応国・地域" },
  { value: "10年", label: "のコンサル・育成経験" },
];

const expertise = [
  {
    title: "事業戦略・市場調査",
    detail:
      "市場調査・競合分析・論点整理・意思決定支援。中国・ASEAN・中東・欧米など海外市場の調査経験が豊富。",
  },
  {
    title: "人材開発・企業研修",
    detail:
      "対話・内省・実践を重視した研修設計と講師登壇。ロジカルシンキング、コミュニケーション、組織開発など。",
  },
  {
    title: "コーチング",
    detail:
      "ICF認定コーチ（ACC）として経営者・管理職・会社員へのコーチングを提供。マインドフルネスを取り入れた関わりが特徴。",
  },
];

const publications = [
  {
    title: "『中国小売業界で起きる地殻変動』（前編・後編）",
    detail: "三菱UFJリサーチ＆コンサルティング レポート（2019年）",
  },
  {
    title: "『日本はこうなる』シリーズ（2015〜2019年版）",
    detail: "東洋経済新報社 — 記事執筆",
  },
];

export default function ProfilePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "代表プロフィール", path: "/profile" },
  ]);

  return (
    <>
      <JsonLd data={[personJsonLd, profilePageJsonLd, breadcrumb]} />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 border-b border-[#d2d2d7]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">Profile</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-[#1d1d1f] leading-tight">
              秦 善成
            </h1>
            <p className="text-sm text-[#6e6e73] mt-4 tracking-wider">
              はた よしなり / Yoshinari Hata — 株式会社Wapple 代表取締役
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Summary */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <FadeIn>
            <div className="aspect-[3/4] bg-[#f5f5f7] relative overflow-hidden rounded-2xl mb-6">
              <Image
                src="/profile.png"
                alt="秦 善成（株式会社Wapple 代表取締役）"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-2">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-8 leading-snug">
              戦略の視点と、人の行動変容への視点。
              <br />
              その両方から企業と個人に伴走する。
            </h2>
            <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">
              三菱UFJリサーチ＆コンサルティングにてグローバル戦略コンサルタントとして6年間従事し、市場調査・事業戦略立案・新規事業検討など50件以上のプロジェクトを担当。その後、Apple
              Japanにてデータ分析・業務改善・研修設計・人材育成に携わる。
            </p>
            <p className="text-sm text-[#6e6e73] leading-relaxed mb-10">
              2026年、株式会社Wappleを設立。事業や組織の課題を構造的に整理する視点と、一人ひとりの成長・行動変容を支援する視点の双方を活かし、コンサルティング・企業研修・コーチングを提供している。国際コーチング連盟（ICF）認定コーチ（ACC）。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {numbers.map((n) => (
                <div key={n.label}>
                  <p className="font-display text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-1">{n.value}</p>
                  <p className="text-xs text-[#6e6e73] tracking-wider">{n.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Career */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">Career</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-16">経歴</h2>
          </FadeIn>
          <div className="max-w-3xl">
            {career.map((c, i) => (
              <FadeIn key={c.period} delay={i * 0.05}>
                <div className="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-2 md:gap-6 py-6 border-t border-[#d2d2d7] last:border-b">
                  <p className="text-xs tracking-wider text-[#6e6e73] pt-1">{c.period}</p>
                  <div>
                    <p className="text-base font-semibold text-[#1d1d1f]">{c.org}</p>
                    <p className="text-sm text-[#6e6e73] mb-2">{c.role}</p>
                    <p className="text-sm text-[#6e6e73] leading-relaxed">{c.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">Expertise</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-16">専門領域</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#d2d2d7] rounded-2xl overflow-hidden">
            {expertise.map((e, i) => (
              <FadeIn key={e.title} delay={i * 0.1}>
                <div className="p-10 border-b md:border-b-0 md:border-r border-[#d2d2d7] last:border-0 h-full">
                  <h3 className="font-display text-lg font-bold text-[#1d1d1f] mb-4">{e.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{e.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Publications */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">Credentials</p>
            <h2 className="font-display text-2xl font-bold text-[#1d1d1f] mb-8">資格・認定</h2>
            <ul className="space-y-3">
              {PERSON.credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-[#6e6e73]">
                  <span className="mt-2 w-1 h-1 bg-[#1d1d1f] rounded-full flex-shrink-0" />
                  {c}
                </li>
              ))}
              <li className="flex items-start gap-3 text-sm text-[#6e6e73]">
                <span className="mt-2 w-1 h-1 bg-[#1d1d1f] rounded-full flex-shrink-0" />
                TOEIC 790点 / HSK（漢語水平考試）5級
              </li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">Publications</p>
            <h2 className="font-display text-2xl font-bold text-[#1d1d1f] mb-8">執筆</h2>
            <ul className="space-y-6">
              {publications.map((p) => (
                <li key={p.title}>
                  <p className="text-sm text-[#1d1d1f] font-semibold mb-1">{p.title}</p>
                  <p className="text-sm text-[#6e6e73]">{p.detail}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <FadeIn>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-6">
            まずは、課題の整理からご一緒します。
          </h2>
          <p className="text-sm text-[#6e6e73] mb-10 max-w-md mx-auto leading-relaxed">
            コンサルティング・研修・コーチングのご相談は、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="border border-[#1d1d1f] rounded-full px-8 py-3 text-sm tracking-wider hover:bg-[#1d1d1f] hover:text-white transition-colors"
            >
              サービスを見る
            </Link>
            <Link
              href="/contact"
              className="bg-[#1d1d1f] text-white rounded-full px-8 py-3 text-sm tracking-wider hover:bg-[#424245] transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
