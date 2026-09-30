import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import Ripple from "@/components/Ripple";
import FlowLine from "@/components/FlowLine";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, organizationJsonLd } from "@/lib/site";
import { focusPrograms, levelPrograms, approach, flow, evidence, CTA } from "@/lib/programs";
import { getAllInsights } from "@/lib/insights";

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "ja",
};

export default function Home() {
  const posts = getAllInsights().slice(0, 3);

  return (
    <>
      <JsonLd data={[organizationJsonLd, websiteJsonLd]} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-28 md:pt-44 md:pb-36 px-5 md:px-10">
        <Ripple className="absolute -right-[260px] -top-[60px] w-[520px] h-[520px] md:-right-[160px] md:top-[10px] md:w-[820px] md:h-[820px]" />
        <div className="relative max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow">人材開発｜研修・ワークショップ・コーチング</p>
            <h1 className="mt-5 text-[38px] md:text-[60px] leading-[1.3] font-semibold text-[#1d1d1f]">
              学びと経験で
              <br />
              人の可能性をひらく
            </h1>
            <p className="mt-7 text-[15.5px] md:text-[19px] leading-[1.9] text-[#6e6e73]">
              一人の気づきが行動を変え
              <br />
              周りとの関わりを変えていく。
              <br />
              Wappleはその最初の一滴となる
              <br />
              学び・対話・経験をつくる人材開発の会社です。
            </p>
            <div className="mt-11 flex flex-col sm:flex-row gap-3.5">
              <Link href={CTA.href} className="btn-primary text-center">
                {CTA.label}
              </Link>
              <Link href="/services" className="btn-ghost text-center">
                サービスを見る
              </Link>
            </div>
            <p className="mt-4 text-[13px] text-[#6e6e73]">{CTA.note}</p>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section className="bg-surface py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-18 items-start">
          <FadeIn>
            <p className="eyebrow">ABOUT WAPPLE</p>
            <h2 className="mt-3 text-[28px] md:text-[36px] font-semibold leading-[1.4]">Water Ripple</h2>
            <p className="mt-1 text-[20px] md:text-[26px] text-[#6e6e73]">水の波紋から生まれた名前です</p>
            <p className="mt-6 text-[16px] md:text-[17px] leading-[2.1]">
              水面に落ちた一滴から、小さな波紋が周囲へ広がっていくように。一人の学びや気づき、成長も、その人だけにとどまるものではありません。行動が変わり、周囲との関わりが変わり、その変化は少しずつ人や組織、社会へ広がっていく。
              <br />
              Wappleは、その最初の一滴となるような「学び・対話・経験」をつくる会社です。
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <dl className="bg-white rounded-[20px] p-8 md:p-11">
              <dt className="eyebrow">VISION</dt>
              <dd className="mt-2 mb-8 text-[18px] md:text-[20px] font-semibold leading-[1.7]">
                一人ひとりの可能性がひらかれ
                <br />
                その変化が波紋のように
                <br />
                社会へ広がっていく世界
              </dd>
              <dt className="eyebrow">MISSION</dt>
              <dd className="mt-2 text-[18px] md:text-[20px] font-semibold leading-[1.7]">
                学びと経験を通じて
                <br />
                人の可能性がひらく
                <br />
                きっかけをつくる
              </dd>
            </dl>
          </FadeIn>
        </div>
      </section>

      {/* Focus */}
      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow">FOCUS</p>
            <h2 className="mt-3 text-[26px] md:text-[36px] font-semibold leading-[1.45]">
              AIが進むほど
              <br />
              人の判断力が問われる
            </h2>
            <p className="mt-5 max-w-[720px] text-[15px] md:text-[17px] leading-[1.9] text-[#6e6e73]">
              生成AIの活用が広がるほど、その答えを確かめて判断する力が求められます。<br className="hidden md:inline" />Wappleは次の4つの研修に力を入れています。
            </p>
          </FadeIn>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {focusPrograms.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.05}>
                <Link
                  href={`/services#${p.id}`}
                  className="block h-full border border-[#e5e5ea] rounded-[20px] p-7 md:p-8 hover:border-accent transition-colors"
                >
                  <p className="text-[19px] md:text-[21px] font-semibold">{p.name}</p>
                  <p className="mt-3 text-[14.5px] leading-[1.8] text-[#6e6e73]">{p.summary}</p>
                  <p className="mt-5 pt-4 border-t border-[#e5e5ea] text-[12.5px] text-[#6e6e73]">
                    {p.audience}｜{p.duration}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {evidence.map((e) => (
              <div key={e.num} className="border-t-2 border-[#1d1d1f] pt-5">
                <p className="text-[36px] md:text-[42px] font-semibold leading-tight">{e.num}</p>
                <p className="mt-2 text-[15px] leading-[1.8]">{e.text}</p>
                <a href={e.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-[12px] text-[#6e6e73] underline underline-offset-2">
                  {e.source}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-surface py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow">OUR APPROACH</p>
            <h2 className="mt-3 text-[26px] md:text-[36px] font-semibold">学びを行動に変える研修</h2>
          </FadeIn>
          <div className="mt-12 grid md:grid-cols-3 gap-10 md:gap-12">
            {approach.map((a) => (
              <FadeIn key={a.n}>
                <p className="text-sm font-semibold text-accent">{a.n}</p>
                <h3 className="mt-2 text-[20px] font-semibold">{a.title}</h3>
                <p className="mt-2.5 text-[15px] leading-[1.8] text-[#6e6e73]">{a.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* By level */}
      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow">BY LEVEL</p>
            <h2 className="mt-3 text-[26px] md:text-[36px] font-semibold">階層別研修にも対応しています</h2>
          </FadeIn>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {levelPrograms.map((l) => (
              <div key={l.level} className="bg-surface rounded-2xl p-6">
                <h3 className="text-[15px] font-semibold">{l.level}</h3>
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {l.themes.map((t) => (
                    <span key={t} className="text-[12.5px] bg-white border border-[#e5e5ea] rounded-full px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer */}
      <section className="bg-surface py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[380px_1fr] gap-10 md:gap-18 items-center">
          <FadeIn>
            <Image
              src="/profile.png"
              alt="講師 秦善成"
              width={800}
              height={880}
              className="w-full rounded-3xl object-cover aspect-[4/4.4]"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="eyebrow">PROFILE</p>
            <p className="mt-2 text-[15px] text-[#6e6e73]">人材開発コンサルタント／研修トレーナー／ICF認定コーチ</p>
            <p className="mt-1 text-[28px] md:text-[32px] font-semibold">秦 善成</p>
            <p className="mt-5 text-[15.5px] md:text-[16px] leading-[2]">
              三菱UFJリサーチ＆コンサルティングで戦略コンサルタントとして50件超のプロジェクトに参画。Apple Japanでは、オンラインストア・カスタマーサポート部門でデータ分析と業務改善に携わるとともに、トレーナーとして研修の企画・実施を担当しました。2026年に株式会社Wappleを設立しています。
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {["ICF認定コーチ（ACC）", "マインドフルネス瞑想協会 認定講師"].map((c) => (
                <span key={c} className="text-[13px] border border-[#d2d2d7] rounded-full px-3.5 py-1.5 bg-white">
                  {c}
                </span>
              ))}
            </div>
            <Link href="/profile" className="btn-ghost mt-7 !py-2.5 !px-5 !text-[13px]">
              代表プロフィールを見る
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow">FLOW</p>
            <h2 className="mt-3 text-[26px] md:text-[36px] font-semibold">ご相談から実施まで</h2>
          </FadeIn>
          <div className="mt-12">
            <FlowLine items={flow} highlight={0} />
          </div>
        </div>
      </section>

      {/* Column（公開記事があるときだけ表示） */}
      {posts.length > 0 && (
        <section className="pb-20 md:pb-28 px-5 md:px-10">
          <div className="max-w-6xl mx-auto">
            <p className="eyebrow">COLUMN</p>
            <h2 className="mt-3 text-[26px] md:text-[36px] font-semibold">コラム</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {posts.map((p) => (
                <Link key={p.slug} href={`/insights/${p.slug}`} className="block group">
                  <p className="text-[12px] font-semibold text-accent">{p.category}</p>
                  <p className="mt-1 text-[17px] font-semibold leading-[1.6] group-hover:text-accent-dark">{p.title}</p>
                  <p className="mt-2 text-[13px] text-[#6e6e73]">{p.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#1d1d1f] text-white text-center py-24 md:py-28 px-5 md:px-10">
        <svg className="absolute left-1/2 top-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 opacity-20" viewBox="0 0 900 900" fill="none" stroke="#fff" aria-hidden="true">
          <circle cx="450" cy="450" r="60" />
          <circle cx="450" cy="450" r="150" />
          <circle cx="450" cy="450" r="260" />
          <circle cx="450" cy="450" r="380" />
        </svg>
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-[24px] md:text-[36px] font-semibold leading-[1.5]">{CTA.heading}</h2>
          <p className="mt-4 text-[15px] md:text-[17px] text-[#c7c7cc]">{CTA.note}</p>
          <Link href={CTA.href} className="btn-primary mt-9 !text-[16px] !px-9 !py-4">
            {CTA.label}
          </Link>
        </div>
      </section>
    </>
  );
}
