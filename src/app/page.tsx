import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import RippleCanvas from "@/components/RippleCanvas";
import RippleStory from "@/components/RippleStory";
import LineReveal from "@/components/LineReveal";
import SectionLabel from "@/components/SectionLabel";
import ProgramList from "@/components/ProgramList";
import CountUp from "@/components/CountUp";
import CtaBand from "@/components/CtaBand";
import Marquee from "@/components/Marquee";
import ImageReveal from "@/components/ImageReveal";
import HeroLines, { HeroFade } from "@/components/HeroLines";
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

      {/* Hero：画面いっぱいの水面。一滴が落ち、波紋が広がる */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden px-5 md:px-10">
        <RippleCanvas className="absolute inset-0 w-full h-full" focus={{ x: 0.8, y: 0.34 }} focusMobile={{ x: 0.72, y: 0.2 }} />
        <div className="relative flex-1 max-w-[1280px] w-full mx-auto flex flex-col justify-end pt-32 pb-24 md:pb-28">
          <HeroFade delay={0.05}>
            <p className="eyebrow">人材開発｜研修・ワークショップ・コーチング</p>
          </HeroFade>
          <HeroLines
            delay={0.2}
            className="mt-6 t-display text-[#1d1d1f]"
            lines={["学びと経験で", "人の可能性をひらく"]}
          />
          <div className="mt-10 md:mt-12 grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end">
            <HeroFade delay={0.6}>
              <p className="t-lead text-[#6e6e73] max-w-[34em]">
                一人の気づきが行動を変え、周りとの関わりを変えていく。
                <br className="hidden md:inline" />
                Wappleは、その最初の一滴となる学び・対話・経験をつくる人材開発の会社です。
              </p>
            </HeroFade>
            <HeroFade delay={0.72}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={CTA.href} className="btn-primary !px-7 !py-3.5">
                  {CTA.label}
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <Link href="/services" className="btn-ghost !px-7 !py-3.5">
                  サービスを見る
                </Link>
              </div>
            </HeroFade>
          </div>
        </div>
        <div className="relative max-w-[1280px] w-full mx-auto pb-7 flex justify-between items-center text-[11px] tracking-[0.16em] text-[#6e6e73]" aria-hidden="true">
          <span className="flex items-center gap-3">
            <span className="relative block w-px h-9 bg-[#d2d2d7] overflow-hidden">
              <span className="absolute left-0 top-0 w-px h-3 bg-accent animate-[scrollcue_2.2s_cubic-bezier(0.65,0,0.35,1)_infinite]" />
            </span>
            SCROLL
          </span>
          <span className="hidden md:inline">水面に触れると 波紋が広がります</span>
        </div>
      </section>

      {/* 01 名前の由来：スクロールで広がる波紋 */}
      <RippleStory />

      {/* Vision / Mission */}
      <section className="px-5 md:px-10 py-24 md:py-36">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 md:gap-20">
          {[
            { k: "VISION", lines: ["一人ひとりの可能性がひらかれ", "その変化が波紋のように", "社会へ広がっていく世界"] },
            { k: "MISSION", lines: ["学びと経験を通じて", "人の可能性がひらく", "きっかけをつくる"] },
          ].map((b, i) => (
            <div key={b.k} className="border-t border-[#1d1d1f] pt-6">
              <SectionLabel label={b.k} />
              <LineReveal as="p" delay={i * 0.12} className="mt-10 text-[26px] md:text-[clamp(24px,2.35vw,34px)] font-semibold leading-[1.5] tracking-[-0.025em]" lines={b.lines} />
            </div>
          ))}
        </div>
      </section>

      {/* 02 注力している4つの研修 */}
      <section className="px-5 md:px-10 py-24 md:py-36 bg-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionLabel n="02" label="FOCUS" />
          <div className="mt-8 grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 items-end">
            <LineReveal className="t-h2" lines={["AIが進むほど", "人の判断力が問われる"]} />
            <FadeIn delay={0.15}>
              <p className="t-lead text-[#6e6e73]">
                生成AIの活用が広がるほど、その答えを確かめて判断する力が求められます。Wappleは次の4つの研修に力を入れています。
              </p>
            </FadeIn>
          </div>
          <div className="mt-16 md:mt-20">
            <ProgramList programs={focusPrograms} />
          </div>
          <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-14 md:gap-20">
            {evidence.map((e, i) => (
              <FadeIn key={e.num} delay={i * 0.1}>
                <p className="text-[64px] md:text-[104px] font-semibold leading-none t-num text-[#1d1d1f]">
                  <CountUp text={e.num} />
                </p>
                <p className="mt-6 text-[15.5px] leading-[1.9] max-w-[30em]">{e.text}</p>
                <a href={e.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-[12px] text-[#6e6e73] link-line">
                  出典：{e.source} ↗
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 03 研修の考え方 */}
      <section className="px-5 md:px-10 py-24 md:py-36">
        <div className="max-w-[1280px] mx-auto">
          <SectionLabel n="03" label="OUR APPROACH" />
          <LineReveal className="mt-8 t-h2" lines={["学びを行動に変える研修"]} />
          <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-14 md:gap-12">
            {approach.map((a, i) => (
              <FadeIn key={a.n} delay={i * 0.1}>
                <div className="border-t border-[#d2d2d7] pt-6">
                  <p className="t-num text-[56px] md:text-[72px] font-semibold leading-none text-accent/25">{a.n}</p>
                  <h3 className="mt-6 t-h3">{a.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.9] text-[#6e6e73]">{a.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Marquee
        className="py-10 md:py-14 mb-24 md:mb-36 border-y border-[#e5e5ea] text-[40px] md:text-[80px] font-semibold tracking-[-0.03em] text-[#1d1d1f]"
        items={["学び", "対話", "経験", "Learning", "Dialogue", "Experience"]}
      />

      {/* 04 階層別 */}
      <section className="px-5 md:px-10 pb-24 md:pb-36">
        <div className="max-w-[1280px] mx-auto">
          <SectionLabel n="04" label="BY LEVEL" />
          <LineReveal className="mt-8 t-h2" lines={["階層別研修にも", "対応しています"]} />
          <div className="mt-14 md:mt-16 grid sm:grid-cols-2 md:grid-cols-4 border-t border-[#d2d2d7]">
            {levelPrograms.map((l, i) => (
              <FadeIn key={l.level} delay={i * 0.07} className={`py-8 sm:px-6 border-b md:border-b-0 border-[#e5e5ea] ${i > 0 ? "md:border-l" : ""} ${i % 2 === 1 ? "sm:border-l" : ""} ${i === 0 ? "sm:pl-0" : ""}`}>
                <p className="t-num text-[12px] text-accent font-semibold">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-[19px] font-semibold">{l.level}</h3>
                <ul className="mt-5 space-y-2.5">
                  {l.themes.map((t) => (
                    <li key={t} className="text-[14.5px] text-[#424245]">{t}</li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 05 代表 */}
      <section className="px-5 md:px-10 py-24 md:py-36 bg-surface">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-[5fr_6fr] gap-12 md:gap-20 items-center">
          <ImageReveal className="rounded-[28px]">
            <div className="relative">
              <Image
                src="/profile.png"
                alt="講師 秦善成"
                width={800}
                height={880}
                className="w-full object-cover aspect-[4/4.6]"
              />
            </div>
          </ImageReveal>
          <div>
            <SectionLabel n="05" label="PROFILE" />
            <FadeIn delay={0.1}>
              <p className="mt-8 text-[40px] md:text-[56px] font-semibold tracking-[-0.03em] leading-tight">秦 善成</p>
              <div className="mt-7 space-y-3 text-[15.5px] md:text-[16.5px] leading-[1.95]">
                <p>三菱UFJリサーチ＆コンサルティングで戦略コンサルタントとして、50件を超えるプロジェクトに携わりました。</p>
                <p>その後、Apple Japanにて、オンラインストア・カスタマーサポート部門のデータ分析と業務改善を担いながら、トレーナーとして研修の企画・実施に取り組みました。</p>
                <p>独立を経て、2026年に株式会社Wappleを設立しました。現在は研修とコーチングを通じて人材開発に取り組んでいます。</p>
              </div>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {["ICF認定コーチ（ACC）", "マインドフルネス瞑想協会 認定講師"].map((c) => (
                  <span key={c} className="text-[13px] border border-[#d2d2d7] rounded-full px-3.5 py-1.5 bg-white">
                    {c}
                  </span>
                ))}
              </div>
              <Link href="/profile" className="group mt-10 inline-flex items-center gap-3 text-[15px] font-semibold text-accent-dark">
                <span className="link-line">代表プロフィールを見る</span>
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 06 流れ */}
      <section className="px-5 md:px-10 py-24 md:py-36">
        <div className="max-w-[1280px] mx-auto">
          <SectionLabel n="06" label="FLOW" />
          <LineReveal className="mt-8 t-h2" lines={["ご相談から実施まで"]} />
          <div className="mt-16 md:mt-20">
            <FlowLine items={flow} />
          </div>
        </div>
      </section>

      {/* コラム（公開記事があるときだけ表示） */}
      {posts.length > 0 && (
        <section className="px-5 md:px-10 pb-24 md:pb-36">
          <div className="max-w-[1280px] mx-auto">
            <SectionLabel label="COLUMN" />
            <h2 className="mt-8 t-h2">コラム</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-6 border-t border-[#d2d2d7]">
              {posts.map((p) => (
                <Link key={p.slug} href={`/insights/${p.slug}`} className="block group pt-6">
                  <p className="text-[12px] font-semibold text-accent">{p.category}</p>
                  <p className="mt-2 text-[18px] font-semibold leading-[1.6] group-hover:text-accent-dark transition-colors">{p.title}</p>
                  <p className="mt-2 text-[13px] text-[#6e6e73]">{p.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
