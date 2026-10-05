import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import LineReveal from "@/components/LineReveal";
import SectionLabel from "@/components/SectionLabel";
import RippleCanvas from "@/components/RippleCanvas";
import CtaBand from "@/components/CtaBand";
import ImageReveal from "@/components/ImageReveal";
import HeroLines, { HeroFade } from "@/components/HeroLines";
import { SITE_URL, PERSON, SOCIAL, personJsonLd, breadcrumbJsonLd } from "@/lib/site";
import { XIcon, YouTubeIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "代表プロフィール｜秦 善成",
  description:
    "株式会社Wapple代表 秦善成（はた よしなり）のプロフィール。人材開発コンサルタント・研修トレーナー・ICF認定コーチ（ACC）。戦略コンサルタントとApple Japanでの研修の企画・実施を経て、2026年にWappleを設立。",
  alternates: { canonical: "/profile" },
  openGraph: {
    title: "代表プロフィール｜秦 善成｜株式会社Wapple",
    url: `${SITE_URL}/profile`,
    images: [{ url: "/profile.png" }],
  },
};

const career = [
  { year: "2013", body: "早稲田大学政治経済学部経済学科を卒業" },
  { year: "2014", body: "三菱UFJリサーチ＆コンサルティングに入社し、戦略コンサルタントとして市場調査や事業戦略の立案など50件を超えるプロジェクトに参画" },
  { year: "2020", body: "Apple Japanに入社し、オンラインストア・カスタマーサポート部門でデータ分析と業務改善を担当するとともに、トレーナーとして研修の企画・実施、メンバーの育成に従事" },
  { year: "2025", body: "独立し、企業研修の企画・登壇、ビジネスコーチングを開始" },
  { year: "2026", body: "株式会社Wappleを設立し、代表取締役に就任" },
];

const companyInfo = [
  { label: "会社名", value: "株式会社Wapple（Wapple Inc.）" },
  { label: "代表者", value: "代表取締役 秦 善成" },
  { label: "設立", value: "2026年4月24日" },
  { label: "所在地", value: "〒153-0064 東京都目黒区下目黒1丁目1番14号 コノトラビル7F" },
  { label: "事業内容", value: "企業研修・ワークショップの企画と実施／コーチング" },
];

const style = [
  {
    title: "受講者が自ら考える時間を大切にする",
    body: "講師が一方的に話す時間はできるだけ短くし、受講者が自ら考え、周りと意見を交わす時間を多くとるようにしています。",
  },
  {
    title: "要点を整理して分かりやすく伝える",
    body: "戦略コンサルタントとして培った論点を整理する力を生かし、複雑な内容も要点を明確にしてお伝えします。",
  },
  {
    title: "安心して発言できる雰囲気をつくる",
    body: "落語やスピーチで培った話し方を生かし、受講者が肩の力を抜いて参加できる場づくりを心がけています。",
  },
  {
    title: "研修後の行動の変化までを見据える",
    body: "学んだことが職場での行動につながるよう、事前のヒアリングから研修後の振り返りまでを一貫して設計します。",
  },
];

const credentials = [
  "国際コーチング連盟（ICF）認定コーチ ACC",
  "一般社団法人マインドフルネス瞑想協会 認定講師",
];

export default function ProfilePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "代表プロフィール", path: "/profile" },
  ]);

  return (
    <>
      <JsonLd data={[personJsonLd, breadcrumb]} />

      <section className="relative overflow-hidden px-5 md:px-10 pt-36 pb-24 md:pt-48 md:pb-36">
        <RippleCanvas className="absolute inset-0 w-full h-full" focus={{ x: 0.3, y: 0.55 }} focusMobile={{ x: 0.5, y: 0.3 }} interval={5200} maxAlpha={0.35} />
        <div className="relative max-w-[1280px] mx-auto grid md:grid-cols-[5fr_6fr] gap-12 md:gap-20 items-end">
          <ImageReveal immediate className="rounded-[28px]">
            <Image src="/profile.png" alt="秦 善成" width={1303} height={1207} priority className="w-full object-cover aspect-[4/4.6]" />
          </ImageReveal>
          <div>
            <HeroFade>
              <p className="text-[12px] font-semibold tracking-[0.16em] text-accent">PROFILE</p>
            </HeroFade>
            <HeroLines delay={0.15} className="mt-6 t-h1" lines={[PERSON.name]} />
            <HeroFade delay={0.3}>
              <p className="mt-3 text-[14px] text-[#6e6e73]">{PERSON.furigana}｜株式会社Wapple 代表取締役</p>
              <p className="mt-10 text-[20px] md:text-[24px] font-semibold leading-[1.75] tracking-[-0.01em]">
                研修で何より大切にしているのは、受講者一人ひとりが自ら気づく瞬間です。
              </p>
              <p className="mt-5 text-[16px] leading-[2] text-[#424245]">
                小さな気づきが行動を変え、周りとの関わりを変えていきます。そのきっかけとなる学びの場を、企業の皆さまとともにつくります。
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {credentials.map((c) => (
                  <span key={c} className="text-[13px] border border-[#d2d2d7] bg-white rounded-full px-3.5 py-1.5">
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px]">
                <a href={SOCIAL.x.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-[#1d1d1f]">
                  <XIcon size={15} />
                  <span className="link-line">{SOCIAL.x.handle}</span>
                </a>
                <a href={SOCIAL.youtube.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-[#1d1d1f]">
                  <YouTubeIcon size={18} />
                  <span className="link-line">YouTube</span>
                </a>
              </div>
            </HeroFade>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 md:px-10 py-24 md:py-36">
        <div className="max-w-[1280px] mx-auto">
          <SectionLabel n="01" label="STYLE" />
          <LineReveal className="mt-8 t-h2" lines={["講師として", "心がけていること"]} />
          <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-x-16 gap-y-4">
            {style.map((s, i) => (
              <FadeIn key={s.title} delay={(i % 2) * 0.08}>
                <div className="border-t border-[#d2d2d7] pt-7 pb-8">
                  <p className="t-num text-[13px] text-accent font-semibold">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 t-h3">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.95] text-[#6e6e73]">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 md:px-10 py-24 md:py-36">
        <div className="max-w-[1280px] mx-auto">
          <SectionLabel n="02" label="CAREER" />
          <LineReveal className="mt-8 t-h2" lines={["経歴"]} />
          <ol className="mt-16 md:mt-20 border-t border-[#1d1d1f] md:grid md:auto-rows-fr">
            {career.map((c, i) => (
              <li key={c.year}>
                <FadeIn y={14} delay={i * 0.04} className="h-full">
                  <div className="h-full grid grid-cols-[72px_1fr] md:grid-cols-[200px_1fr] gap-x-6 items-center py-8 md:py-9 border-b border-[#d2d2d7]">
                    <p className={`t-num text-[26px] md:text-[44px] font-semibold leading-none ${i === career.length - 1 ? "text-accent" : "text-[#1d1d1f]"}`}>{c.year}</p>
                    <p className="text-[15.5px] md:text-[17px] leading-[1.9]">{c.body}</p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="company" className="scroll-mt-20 bg-surface px-5 md:px-10 py-24 md:py-36">
        <div className="max-w-[1280px] mx-auto">
          <SectionLabel n="03" label="COMPANY" />
          <LineReveal className="mt-8 t-h2" lines={["会社概要"]} />
          <dl className="mt-16 md:mt-20 border-t border-[#1d1d1f] md:grid md:auto-rows-fr">
            {companyInfo.map((c) => (
              <div key={c.label} className="grid grid-cols-[88px_1fr] md:grid-cols-[200px_1fr] gap-x-6 items-center min-h-[76px] md:min-h-[88px] py-5 border-b border-[#d2d2d7]">
                <dt className="text-[13px] md:text-[14px] font-semibold text-[#6e6e73]">{c.label}</dt>
                <dd className="text-[15.5px] md:text-[17px] leading-[1.8]">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand secondary={{ label: "サービスを見る", href: "/services" }} />
    </>
  );
}
