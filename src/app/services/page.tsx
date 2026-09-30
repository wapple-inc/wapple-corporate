import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import FlowLine from "@/components/FlowLine";
import { SITE_URL, SITE_NAME, breadcrumbJsonLd } from "@/lib/site";
import { focusPrograms, levelPrograms, approach, flow, evidence, coaching, CTA } from "@/lib/programs";

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

  return (
    <>
      <JsonLd data={[serviceJsonLd, breadcrumb]} />

      <section className="pt-36 pb-16 md:pt-44 md:pb-20 px-5 md:px-10 border-b border-[#e5e5ea]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow">SERVICES</p>
            <h1 className="mt-4 text-[34px] md:text-[52px] font-semibold leading-[1.3]">サービス</h1>
            <p className="mt-3 text-[17px] md:text-[20px] text-[#6e6e73]">研修・ワークショップ・コーチング</p>
            <p className="mt-6 max-w-[720px] text-[15.5px] md:text-[17px] leading-[1.9] text-[#6e6e73]">
              生成AIの活用が広がるほど、人の判断力や対話の力が問われます。<br className="hidden md:inline" />研修とワークショップは、対象者と課題に合わせて設計します。<br className="hidden md:inline" />時間や人数、対面・オンラインの形式はご相談ください。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 重点の4研修 */}
      <section id="training" className="scroll-mt-20 py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">TRAINING &amp; WORKSHOP</p>
          <h2 className="mt-3 text-[24px] md:text-[32px] font-semibold">重点の4研修</h2>
          <div className="mt-10 space-y-6">
            {focusPrograms.map((p) => (
              <FadeIn key={p.id}>
                <article id={p.id} className="scroll-mt-24 border border-[#e5e5ea] rounded-[20px] p-7 md:p-10">
                  <div className="md:flex md:items-baseline md:justify-between gap-6">
                    <h3 className="text-[21px] md:text-[26px] font-semibold">{p.name}</h3>
                    <p className="mt-2 md:mt-0 text-[13px] text-[#6e6e73] shrink-0">
                      対象：{p.audience}｜時間：{p.duration}
                    </p>
                  </div>
                  <p className="mt-3 text-[15.5px] leading-[1.8] text-[#3e5871]">{p.summary}</p>
                  <div className="mt-7 grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[13px] font-semibold text-[#6e6e73]">到達目標</p>
                      <ul className="mt-3 space-y-2.5">
                        {p.aims.map((a) => (
                          <li key={a} className="text-[15px] leading-[1.7] pl-4 relative">
                            <span className="absolute left-0 top-[0.7em] w-1.5 h-1.5 rounded-full bg-accent" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#6e6e73]">主な内容</p>
                      <ol className="mt-3 space-y-2.5">
                        {p.contents.map((c, i) => (
                          <li key={c} className="text-[15px] leading-[1.7] flex gap-3">
                            <span className="text-accent font-semibold text-[13px] mt-[3px]">{String(i + 1).padStart(2, "0")}</span>
                            {c}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {evidence.map((e) => (
              <div key={e.num} className="border-t-2 border-[#1d1d1f] pt-5">
                <p className="text-[32px] font-semibold leading-tight">{e.num}</p>
                <p className="mt-2 text-[14.5px] leading-[1.8]">{e.text}</p>
                <a href={e.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-[12px] text-[#6e6e73] underline underline-offset-2">
                  {e.source}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 階層別 */}
      <section className="bg-surface py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">BY LEVEL</p>
          <h2 className="mt-3 text-[24px] md:text-[32px] font-semibold">階層別研修</h2>
          <p className="mt-4 text-[15px] text-[#6e6e73]">2〜4時間を基本とし、1日研修や複数回のシリーズにも対応します。</p>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {levelPrograms.map((l) => (
              <div key={l.level} className="bg-white rounded-2xl p-6">
                <h3 className="text-[15px] font-semibold">{l.level}</h3>
                <ul className="mt-3 space-y-1.5">
                  {l.themes.map((t) => (
                    <li key={t} className="text-[14px] text-[#424245]">{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* コーチング */}
      <section id="coaching" className="scroll-mt-20 py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">COACHING</p>
          <h2 className="mt-3 text-[24px] md:text-[32px] font-semibold">コーチング</h2>
          <p className="mt-4 text-[15px] leading-[1.9] text-[#6e6e73]">
            国際コーチング連盟（ICF）認定コーチが、一対一の対話を通じて考えの整理と行動を支えます。<br className="hidden md:inline" />回数や期間は、ご相談のうえ決めます。
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {coaching.map((c) => (
              <div key={c.title} className="border border-[#e5e5ea] rounded-[20px] p-7">
                <h3 className="text-[18px] font-semibold">{c.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.8] text-[#6e6e73]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 進め方 */}
      <section className="bg-surface py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow">OUR APPROACH</p>
          <h2 className="mt-3 text-[24px] md:text-[32px] font-semibold">学びを行動に変える研修</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-10">
            {approach.map((a) => (
              <div key={a.n}>
                <p className="text-sm font-semibold text-accent">{a.n}</p>
                <h3 className="mt-2 text-[19px] font-semibold">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.8] text-[#6e6e73]">{a.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-20">
            <p className="eyebrow">FLOW</p>
            <h2 className="mt-3 text-[24px] md:text-[32px] font-semibold">ご相談から実施まで</h2>
            <div className="mt-10">
              <FlowLine items={flow} highlight={0} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1d1d1f] text-white text-center py-20 px-5 md:px-10">
        <h2 className="text-[22px] md:text-[30px] font-semibold leading-[1.5]">{CTA.heading}</h2>
        <p className="mt-3 text-[15px] text-[#c7c7cc]">{CTA.note}</p>
        <Link href={CTA.href} className="btn-primary mt-8">
          {CTA.label}
        </Link>
      </section>
    </>
  );
}
