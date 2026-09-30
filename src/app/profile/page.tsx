import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, PERSON, personJsonLd, breadcrumbJsonLd } from "@/lib/site";
import { CTA } from "@/lib/programs";

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
  { year: "2013", body: "早稲田大学政治経済学部経済学科を卒業（在学中に北京大学へ留学）" },
  { year: "2014", body: "三菱UFJリサーチ＆コンサルティングに入社。戦略コンサルタントとして市場調査や事業戦略の立案に携わり、50件超のプロジェクトに参画" },
  { year: "2020", body: "Apple Japanに入社。オンラインストア・カスタマーサポート部門でデータ分析と業務改善に携わる。トレーナーとして研修の企画・実施と効果測定、新メンバーの育成を担当" },
  { year: "2025", body: "独立。企業研修の企画・登壇、ビジネスコーチング、専門学校での経営戦略の講義を開始" },
  { year: "2026", body: "株式会社Wappleを設立し、代表取締役に就任" },
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

      <section className="pt-36 pb-16 md:pt-44 md:pb-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[400px_1fr] gap-10 md:gap-18 items-center">
          <FadeIn>
            <Image src="/profile.png" alt="秦 善成" width={1303} height={1207} priority className="w-full rounded-3xl object-cover aspect-[4/4.4]" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="eyebrow">PROFILE</p>
            <p className="mt-3 text-[15px] text-[#6e6e73]">人材開発コンサルタント／研修トレーナー／ICF認定コーチ</p>
            <h1 className="mt-1 text-[34px] md:text-[44px] font-semibold">{PERSON.name}</h1>
            <p className="text-[14px] text-[#6e6e73]">{PERSON.furigana}｜株式会社Wapple 代表取締役</p>
            <p className="mt-6 text-[16px] leading-[2]">
              研修で何より大切にしているのは、受講者一人ひとりが自ら気づく瞬間です。その気づきが行動を変え、周囲との関わりを変えていきます。その最初の一滴となる学びの場を、企業の皆さまとともにつくります。
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {credentials.map((c) => (
                <span key={c} className="text-[13px] border border-[#d2d2d7] rounded-full px-3.5 py-1.5">
                  {c}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">STYLE</p>
          <h2 className="mt-3 text-[24px] md:text-[32px] font-semibold">講師として心がけていること</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-10">
            {style.map((s) => (
              <FadeIn key={s.title}>
                <h3 className="text-[19px] font-semibold">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.9] text-[#6e6e73]">{s.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">CAREER</p>
          <h2 className="mt-3 text-[24px] md:text-[32px] font-semibold">経歴</h2>
          <div className="mt-10 relative max-w-[820px]">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#d2d2d7]" />
          <ol className="relative pl-10">
            {career.map((c, i) => (
              <li key={c.year} className="relative pb-10 last:pb-0">
                <span className="absolute -left-10 top-0 w-[23px] h-[23px] flex items-center justify-center">
                  {i === career.length - 1 ? (
                    <span className="block w-[23px] h-[23px] rounded-full bg-accent" />
                  ) : (
                    <span className="block w-[11px] h-[11px] rounded-full bg-[#a1a1a6]" />
                  )}
                </span>
                <p className="text-[15px] font-semibold text-accent-dark">{c.year}</p>
                <p className="mt-1 text-[15.5px] leading-[1.9]">{c.body}</p>
              </li>
            ))}
          </ol>
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] text-white text-center py-20 px-5 md:px-10">
        <h2 className="text-[22px] md:text-[30px] font-semibold leading-[1.5]">{CTA.heading}</h2>
        <p className="mt-3 text-[15px] text-[#c7c7cc]">{CTA.note}</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link href={CTA.href} className="btn-primary">{CTA.label}</Link>
          <Link href="/services" className="btn-ghost">サービスを見る</Link>
        </div>
      </section>
    </>
  );
}
