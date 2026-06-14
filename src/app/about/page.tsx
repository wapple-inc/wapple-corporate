import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, ORG, breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wappleについて",
  description:
    "株式会社Wappleの代表プロフィール・企業概要。三菱UFJリサーチ＆コンサルティング、Apple Japanでの経験を経て2026年設立。コンサルティング・企業研修・コーチングを提供。",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Wappleについて",
    description:
      "株式会社Wappleの代表プロフィール・企業概要。コンサルティング・企業研修・コーチングを提供。",
    url: `${SITE_URL}/about`,
  },
};

const credentials = [
  "国際コーチング連盟（ICF）アソシエイト認定コーチ（ACC）",
  "一般社団法人マインドフルネス瞑想協会認定講師",
  "Digital Wellness Institute Certified Digital Wellness Educator",
];

// 代表者の E-E-A-T を高める Person 構造化データ
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/about#hata-yoshinari`,
  name: "秦 善成",
  alternateName: "Yoshinari Hata",
  jobTitle: "代表取締役",
  image: `${SITE_URL}/profile.png`,
  url: `${SITE_URL}/about`,
  worksFor: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  description:
    "三菱UFJリサーチ＆コンサルティングでグローバル戦略コンサルタントとして6年間従事し、市場調査・事業戦略立案・新規事業検討を担当。その後Apple Japanにてデータ分析・業務改善・人材育成に従事。2026年に株式会社Wappleを設立。",
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "早稲田大学" },
    { "@type": "CollegeOrUniversity", name: "北京大学" },
  ],
  knowsAbout: ORG.knowsAbout,
  hasCredential: credentials.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    name: c,
  })),
};

const companyInfo = [
  { label: "会社名（商号）", value: "株式会社Wapple" },
  { label: "代表者名", value: "秦 善成" },
  { label: "所在地", value: "東京都目黒区下目黒１丁目１番１４号 コノトラビル７F" },
  { label: "設立日", value: "2026年4月24日" },
];

export default function AboutPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "Wappleについて", path: "/about" },
  ]);

  return (
    <>
      <JsonLd data={[personJsonLd, breadcrumb]} />
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 border-b border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6b6b6b] uppercase mb-4">About</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#0a0a0a]">
              Wappleについて
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn delay={0.2}>
            <h2 className="font-serif text-3xl font-bold text-[#0a0a0a] mb-8 leading-tight">
              課題を構造的に捉え、<br />行動を生む支援を。
            </h2>
            <p className="text-sm text-[#6b6b6b] leading-relaxed mb-6">
              企業が抱える課題は、戦略だけでも、人材育成だけでも解決できません。
              必要なのは、課題を構造的に整理し、人の行動変容につなげること。
            </p>
            <p className="text-sm text-[#6b6b6b] leading-relaxed">
              Wappleは、コンサルティング・企業研修・ビジネスコーチングを通じて、
              経営と現場の間にあるギャップを埋め、持続的な変化を支援します。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Representative */}
      <section className="py-24 px-6 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6b6b6b] uppercase mb-4">Representative</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-16">
              代表プロフィール
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeIn>
              <div className="aspect-[3/4] bg-[#e5e5e5] relative overflow-hidden mb-6">
                <Image
                  src="/profile.png"
                  alt="秦 善成"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0a0a0a] mb-1">秦 善成</h3>
              <p className="text-sm text-[#6b6b6b] mb-1">Yoshinari Hata</p>
              <p className="text-sm text-[#6b6b6b]">株式会社Wapple 代表取締役</p>
            </FadeIn>
            <FadeIn delay={0.1} className="md:col-span-2">
              <p className="text-sm text-[#6b6b6b] leading-relaxed mb-4">
                三菱UFJリサーチ＆コンサルティングにてグローバル戦略コンサルタントとして6年間従事し、市場調査・事業戦略立案・新規事業検討など多数のプロジェクトを担当。その後、Apple Japanにてデータ分析・業務改善・人材育成に従事した。
              </p>
              <p className="text-sm text-[#6b6b6b] leading-relaxed mb-10">
                こうした経験を経て2026年に株式会社Wappleを設立。コンサルティング・企業研修・ビジネスコーチングを通じて、企業の課題解決から行動変容までを一貫して支援している。
              </p>

              <div>
                <p className="text-xs tracking-[0.2em] text-[#6b6b6b] uppercase mb-4">Credentials</p>
                <ul className="space-y-2">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-[#6b6b6b]">
                      <span className="mt-2 w-1 h-1 bg-[#0a0a0a] rounded-full flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6b6b6b] uppercase mb-4">Company</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-16">
              企業概要
            </h2>
          </FadeIn>
          <div className="max-w-3xl">
            {companyInfo.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.05}>
                <div className="flex gap-6 py-5 border-t border-[#e5e5e5] last:border-b">
                  <p className="text-xs tracking-wider text-[#6b6b6b] w-36 flex-shrink-0 pt-0.5">{item.label}</p>
                  <p className="text-sm text-[#0a0a0a]">{item.value}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
