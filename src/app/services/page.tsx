import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import FlowLine from "@/components/FlowLine";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import LineReveal from "@/components/LineReveal";
import CountUp from "@/components/CountUp";
import CtaBand from "@/components/CtaBand";
import { SITE_URL, SITE_NAME, breadcrumbJsonLd } from "@/lib/site";
import { focusPrograms, levelPrograms, approach, flow, evidence, coaching } from "@/lib/programs";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "研修・ワークショップ・コーチング。AI時代のクリティカルシンキング、セルフマネジメント、1on1・フィードバック、職務別の生成AI活用ワークショップのほか、新入社員から新任管理職までの階層別研修に対応します。",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "サービス｜株式会社Wapple",
    url: `${SITE_URL}/services`,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "企業研修・ワークショップ",
  serviceType: "企業研修",
  url: `${SITE_URL}/services`,
  provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: SITE_NAME },
  areaServed: "JP",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "研修プログラム",
    itemListElement: focusPrograms.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: p.name, description: `${p.summary}。対象：${p.audience}。時間：${p.duration}` },
    })),
  },
};

export default function ProgramsPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "サービス", path: "/services" },
  ]);

  const index = [
    { href: "#training", label: "重点の4研修" },
    { href: "#level", label: "階層別研修" },
    { href: "#coaching", label: "コーチング" },
    { href: "#approach", label: "進め方" },
  ];

  return (
    <>
      <JsonLd data={[serviceJsonLd, breadcrumb]} />

      <PageHero label="SERVICES" title={["サービス"]} sub="研修・ワークショップ・コーチング">
        <div className="mt-12 md:mt-16 grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-end">
          <p className="t-lead text-[#6e6e73]">
            生成AIの活用が広がるほど、人の判断力や対話の力が問われます。研修とワークショップは、対象者と課題に合わせて設計します。時間や人数、対面・オンラインの形式はご相談ください。
          </p>
          <nav aria-label="このページの目次" className="border-t border-[#d2d2d7]">
            {index.map((it, i) => (
              <a key={it.href} href={it.href} className="group flex items-center justify-between py-3.5 border-b border-[#e5e5ea] text-[15px]">
                <span className="flex items-baseline gap-4">
                  <span className="t-num text-[12px] text-accent font-semibold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="group-hover:text-accent-dark transition-colors">{it.label}</span>
                </span>
                <span className="arrow text-accent rotate-90" aria-hidden="true">→</span>
              </a>
            ))}
          </nav>
        </div>
      </PageHero>

      {/* 01 重点の4研修 */}
      <section id="training" className="scroll-mt-20 px-5 md:px-10 py-24 md:py-36">
        <div className="max-w-[1280px] mx-auto">
          <SectionLabel n="01" label="TRAINING & WORKSHOP" />
          <LineReveal className="mt-8 t-h2" lines={["重点の4研修"]} />

          <div className="mt-16 md:mt-20 border-t border-[#1d1d1f]">
            {focusPrograms.map((p, i) => (
              <article key={p.id} id={p.id} className="scroll-mt-24 grid md:grid-cols-[88px_1fr] gap-x-8 py-12 md:py-16 border-b border-[#d2d2d7]">
                <FadeIn y={16}>
                  <p className="t-num text-[40px] md:text-[48px] font-semibold leading-none text-accent/30">{String(i + 1).padStart(2, "0")}</p>
                </FadeIn>
                <div className="mt-5 md:mt-0">
                  <FadeIn y={16}>
                    <div className="md:flex md:items-baseline md:justify-between gap-8">
                      <h3 className="text-[26px] md:text-[38px] font-semibold leading-[1.35] tracking-[-0.025em]">{p.name}</h3>
                      <p className="mt-3 md:mt-0 shrink-0 flex gap-2 text-[12.5px]">
                        <span className="rounded-full bg-accent-soft text-accent-dark px-3 py-1">{p.audience}</span>
                        <span className="rounded-full bg-accent-soft text-accent-dark px-3 py-1">{p.duration}</span>
                      </p>
                    </div>
                    <p className="mt-5 t-lead text-[#3e5871] max-w-[40em]">{p.summary}</p>
                  </FadeIn>
                  <div className="mt-10 grid md:grid-cols-2 gap-10 md:gap-14">
                    <FadeIn delay={0.08}>
                      <p className="text-[12px] font-semibold tracking-[0.16em] text-[#6e6e73]">到達目標</p>
                      <ul className="mt-5 space-y-4">
                        {p.aims.map((a) => (
                          <li key={a} className="text-[15.5px] leading-[1.75] pl-6 relative">
                            <svg className="absolute left-0 top-[0.45em]" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                              <circle cx="6" cy="6" r="5" fill="none" stroke="#4F6D8A" strokeWidth="1.2" />
                              <circle cx="6" cy="6" r="1.8" fill="#4F6D8A" />
                            </svg>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </FadeIn>
                    <FadeIn delay={0.16}>
                      <p className="text-[12px] font-semibold tracking-[0.16em] text-[#6e6e73]">主な内容</p>
                      <ol className="mt-5 border-t border-[#e5e5ea]">
                        {p.contents.map((c, j) => (
                          <li key={c} className="flex gap-4 py-3 border-b border-[#e5e5ea] text-[15px] leading-[1.7]">
                            <span className="t-num text-accent font-semibold text-[12.5px] mt-[3px]">{String(j + 1).padStart(2, "0")}</span>
                            {c}
                          </li>
                        ))}
                      </ol>
                    </FadeIn>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-14 md:gap-20">
            {evidence.map((e, i) => (
              <FadeIn key={e.num} delay={i * 0.1}>
                <p className="text-[56px] md:text-[88px] font-semibold leading-none t-num">
                  <CountUp text={e.num} />
                </p>
                <p className="mt-6 text-[15px] leading-[1.9] max-w-[30em]">{e.text}</p>
                <a href={e.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-[12px] text-[#6e6e73] link-line">
                  出典：{e.source} ↗
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 02 階層別 */}
      <section id="level" className="scroll-mt-20 bg-surface px-5 md:px-10 py-24 md:py-36">
        <div className="max-w-[1280px] mx-auto">
          <SectionLabel n="02" label="BY LEVEL" />
          <div className="mt-8 grid md:grid-cols-[1.2fr_1fr] gap-6 md:gap-16 items-end">
            <LineReveal className="t-h2" lines={["階層別研修"]} />
            <FadeIn>
              <p className="t-lead text-[#6e6e73]">2〜4時間を基本とし、1日研修や複数回のシリーズにも対応します。</p>
            </FadeIn>
          </div>
          <div className="mt-14 md:mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {levelPrograms.map((l, i) => (
              <FadeIn key={l.level} delay={i * 0.07} className="bg-white rounded-[22px] p-7">
                <p className="t-num text-[12px] text-accent font-semibold">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-[20px] font-semibold">{l.level}</h3>
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

      {/* 03 コーチング */}
      <section id="coaching" className="scroll-mt-20 px-5 md:px-10 py-24 md:py-36">
        <div className="max-w-[1280px] mx-auto">
          <SectionLabel n="03" label="COACHING" />
          <div className="mt-8 grid md:grid-cols-[1.2fr_1fr] gap-6 md:gap-16 items-end">
            <LineReveal className="t-h2" lines={["コーチング"]} />
            <FadeIn>
              <p className="t-lead text-[#6e6e73]">
                国際コーチング連盟（ICF）認定コーチが、一対一の対話を通じて考えの整理と行動を支えます。回数や期間は、ご相談のうえ決めます。
              </p>
            </FadeIn>
          </div>
          <div className="mt-14 md:mt-16 border-t border-[#1d1d1f]">
            {coaching.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.06} y={14}>
                <div className="grid md:grid-cols-[88px_1fr_1.2fr] gap-x-8 gap-y-3 py-9 border-b border-[#d2d2d7]">
                  <p className="t-num text-[14px] text-accent font-semibold">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-[21px] md:text-[24px] font-semibold tracking-[-0.015em]">{c.title}</h3>
                  <p className="text-[15px] leading-[1.9] text-[#6e6e73]">{c.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 04 進め方 */}
      <section id="approach" className="scroll-mt-20 bg-surface px-5 md:px-10 py-24 md:py-36">
        <div className="max-w-[1280px] mx-auto">
          <SectionLabel n="04" label="OUR APPROACH" />
          <LineReveal className="mt-8 t-h2" lines={["学びを行動に変える研修"]} />
          <div className="mt-16 grid md:grid-cols-3 gap-14 md:gap-12">
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
          <div className="mt-24 md:mt-32">
            <SectionLabel label="FLOW" />
            <LineReveal className="mt-8 t-h2" lines={["ご相談から実施まで"]} />
            <div className="mt-16">
              <FlowLine items={flow} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
