import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, organizationJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// サイト全体を表す WebSite スキーマ（Organization は site.ts から共有）
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "ja",
};

const services = [
  {
    title: "事業戦略\nコンサルティング",
    description:
      "市場調査・競合分析・論点整理・意思決定支援。生成AIも活用しながら、経営層の「次の一手」をデータと対話で共に考えます。",
    href: "/services#consulting",
    icon: <ChartIcon />,
  },
  {
    title: "企業研修\n人材開発",
    description:
      "思考・対話の基礎から生成AIの活用、セルフマネジメントまで。対話と実践を重視した研修設計で、組織の学習文化を底上げします。",
    href: "/services#training",
    icon: <PeopleIcon />,
  },
  {
    title: "ビジネスコーチング",
    description:
      "経営者から管理職・ビジネスパーソンまで。思考を整理し、意思決定と行動変容を支援します。",
    href: "/services#coaching",
    icon: <CompassIcon />,
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] text-[#6e6e73] mb-6 uppercase">
              Wapple Inc.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#1d1d1f] leading-tight mb-8">
              課題を構造化し、
              <br />
              行動変容まで伴走する。
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-base md:text-lg text-[#6e6e73] leading-relaxed mb-12 max-w-2xl mx-auto">
              事業戦略、人材開発、リーダー育成。
              <br />
              課題の整理から現場での実践まで、一貫して支援します。
            </p>
          </FadeIn>
          <FadeIn delay={0.45}>
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
                無料相談を予約する
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-[#6e6e73]">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#6e6e73] to-transparent" />
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 relative">
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">Services</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-16">
              サービス
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#d2d2d7]">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <Link
                  href={s.href}
                  className="block p-10 border-b md:border-b-0 md:border-r border-[#d2d2d7] last:border-0 hover:bg-[#f5f5f7] transition-colors group"
                >
                  <div className="mb-6">{s.icon}</div>
                  <h3 className="font-display text-xl font-bold text-[#1d1d1f] mb-4 whitespace-pre-line leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">{s.description}</p>
                  <span className="text-xs tracking-widest text-[#1d1d1f] group-hover:underline">
                    詳しく見る →
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">About</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-8 leading-tight">
              点と点をつなぎ、<br />変化の波紋を広げる。
            </h2>
            <p className="text-sm text-[#6e6e73] leading-relaxed mb-10">
              Wappleという名前は、Water Ripple——水の波紋に由来します。
              点在する課題や可能性をつなぎ、構造として捉える。
              そして、一人ひとりの小さな気づきと行動の変化を、組織全体へ波紋のように広げていく。
              その土台づくりを、コンサルティング・企業研修・ビジネスコーチングを通じて支援します。
            </p>
            <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">
              三菱UFJリサーチ＆コンサルティングにて戦略コンサルタントとして、その後Apple Japanにてデータ分析・人材育成に従事した経験を持つ代表が、戦略と現場、双方の視点から支援します。
            </p>
            <p className="text-sm text-[#6e6e73] mb-6">
              代表取締役　<span className="text-[#1d1d1f] font-semibold">秦 善成</span>（Yoshinari Hata）
            </p>
            <Link
              href="/profile"
              className="text-sm tracking-widest border-b border-[#1d1d1f] pb-1 hover:text-[#6e6e73] transition-colors"
            >
              代表プロフィールを見る →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#1d1d1f] text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-6">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            ご相談、お待ちしています。
          </h2>
          <p className="text-sm text-[#6e6e73] mb-10 max-w-md mx-auto leading-relaxed">
            課題が整理されていない段階でも構いません。
            お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-block border border-white text-white rounded-full px-10 py-4 text-sm tracking-widest hover:bg-white hover:text-[#1d1d1f] transition-colors"
          >
            初回相談を予約する（無料）
          </Link>
        </FadeIn>
      </section>
    </>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-[#1d1d1f]">
      <rect x="4" y="4" width="40" height="40" rx="2" />
      <polyline points="10,34 20,22 28,28 38,14" />
      <circle cx="10" cy="34" r="2" fill="currentColor" stroke="none" />
      <circle cx="20" cy="22" r="2" fill="currentColor" stroke="none" />
      <circle cx="28" cy="28" r="2" fill="currentColor" stroke="none" />
      <circle cx="38" cy="14" r="2" fill="currentColor" stroke="none" />
      <line x1="8" y1="40" x2="40" y2="40" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-[#1d1d1f]">
      <circle cx="24" cy="24" r="20" />
      <circle cx="24" cy="18" r="5" />
      <circle cx="12" cy="22" r="4" />
      <circle cx="36" cy="22" r="4" />
      <path d="M8 38c0-5 3.6-8 8-8" />
      <path d="M40 38c0-5-3.6-8-8-8" />
      <path d="M16 40c0-5 3.6-9 8-9s8 4 8 9" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-[#1d1d1f]">
      <circle cx="24" cy="24" r="18" />
      <polygon points="24,10 28,24 24,22 20,24" fill="currentColor" stroke="none" />
      <polygon points="24,38 20,24 24,26 28,24" fill="#6e6e73" stroke="none" />
      <circle cx="24" cy="24" r="2" fill="white" />
    </svg>
  );
}
