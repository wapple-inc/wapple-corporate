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
    "株式会社Wapple代表取締役・秦善成（Yoshinari Hata）のプロフィール。三菱UFJリサーチ＆コンサルティング、Apple Japanを経て、2026年に株式会社Wappleを設立。事業戦略コンサルティング・企業研修・コーチングを提供。ICF認定コーチ（ACC）。",
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

// 年次は記載しない（経歴の流れが伝われば十分なため）。社名＋何をしてきたか、のみ。
const career: { org: string; detail?: string }[] = [
  {
    org: "早稲田大学 政治経済学部 経済学科 卒業",
  },
  {
    org: "三菱UFJリサーチ＆コンサルティング",
    detail:
      "小売・流通・消費財業界を中心に、海外展開・新規事業の市場調査、事業戦略立案、ビジネスデューデリジェンスに従事。",
  },
  {
    org: "Apple Japan",
    detail:
      "オンラインストアの不正取引対策におけるデータ分析と、新入社員・中途社員向け研修の設計・実施を担当。顧客の声をもとにしたサービス品質の改善にも携わる。",
  },
  {
    org: "株式会社Wapple",
    detail:
      "独立を経て設立。事業戦略コンサルティング・企業研修・コーチングを通じて、課題の構造化から行動変容までを伴走型で支援している。",
  },
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

const companyInfo = [
  { label: "会社名（商号）", value: "株式会社Wapple" },
  { label: "代表者名", value: "秦 善成" },
  { label: "事業内容", value: "事業戦略コンサルティング／企業研修・人材開発／ビジネスコーチング" },
  { label: "所在地", value: "東京都目黒区下目黒１丁目１番１４号 コノトラビル７F" },
  { label: "設立日", value: "2026年4月24日" },
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
              三菱UFJリサーチ＆コンサルティングにて市場調査・事業戦略立案・新規事業検討に携わる。その後、Apple
              Japanにてデータ分析・業務改善・研修設計・人材育成に従事。
            </p>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              2026年、株式会社Wappleを設立。事業や組織の課題を構造的に整理する視点と、一人ひとりの成長・行動変容を支援する視点の双方を活かし、コンサルティング・企業研修・コーチングを提供している。国際コーチング連盟（ICF）認定コーチ（ACC）。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About Wapple — 社名の由来と考え方 */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">About Wapple</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-12 leading-tight">
              点と点をつなぎ、<br className="md:hidden" />変化の波紋を広げる。
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="max-w-2xl">
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">
                Wappleという名前は、Water Ripple——水の波紋に由来します。
              </p>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">
                組織の課題や可能性は、ばらばらの点のように見えて、実はつながっています。
                戦略、人材、現場の行動、組織の文化。
                点と点をつなぎ、構造として捉えることで、はじめて本質的な打ち手が見えてきます。
              </p>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">
                そして、変化は大きな掛け声からは生まれません。
                一人ひとりの小さな気づきと行動の変化が、水面の波紋のように、周囲へ、組織全体へと広がっていく。
                Wappleは、コンサルティング・企業研修・コーチングを通じて、その持続的な変化が生まれる土台づくりを支援します。
              </p>
              <p className="text-xs text-[#6e6e73]">
                このサイトの背景で点と点が結ばれていくのは、この考え方を表したものです。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Career */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">Career</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-16">経歴</h2>
          </FadeIn>
          <div className="max-w-3xl">
            {career.map((c, i) => (
              <FadeIn key={c.org} delay={i * 0.05}>
                <div className="py-6 border-t border-[#d2d2d7] last:border-b">
                  <p className={`text-base font-semibold text-[#1d1d1f] ${c.detail ? "mb-2" : ""}`}>{c.org}</p>
                  {c.detail && (
                    <p className="text-sm text-[#6e6e73] leading-relaxed">{c.detail}</p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
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
      <section className="py-24 px-6">
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

      {/* Company Info */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">Company</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-16">企業概要</h2>
          </FadeIn>
          <div className="max-w-3xl">
            {companyInfo.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.05}>
                <div className="flex gap-6 py-5 border-t border-[#d2d2d7] last:border-b">
                  <p className="text-xs tracking-wider text-[#6e6e73] w-36 flex-shrink-0 pt-0.5">{item.label}</p>
                  <p className="text-sm text-[#1d1d1f]">{item.value}</p>
                </div>
              </FadeIn>
            ))}
          </div>
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
              初回相談を予約する（無料）
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
