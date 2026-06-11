import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社Wapple",
  url: "https://wapple.co.jp",
  logo: "https://wapple.co.jp/og-image.png",
  description:
    "事業戦略コンサルティング・企業研修・ビジネスコーチングを通じて、企業の課題解決から行動変容までを一貫して支援。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "下目黒１丁目１番１４号 コノトラビル７F",
    addressLocality: "目黒区",
    addressRegion: "東京都",
    addressCountry: "JP",
  },
  founder: { "@type": "Person", name: "秦 善成" },
  foundingDate: "2026-04-24",
};

const services = [
  {
    title: "事業戦略\nコンサルティング",
    description:
      "市場調査・競合分析・論点整理・意思決定支援。経営層の「次の一手」を、データと対話で共に考えます。",
    href: "/services#consulting",
    icon: <ChartIcon />,
  },
  {
    title: "企業研修\n人材開発",
    description:
      "一方向型の講義ではなく、対話・内省・実践を重視した研修設計。組織の学習文化を底上げします。",
    href: "/services#training",
    icon: <PeopleIcon />,
  },
  {
    title: "ビジネスコーチング",
    description:
      "経営者・管理職を対象とした個人・グループコーチング。思考を整理し、意思決定と行動変容を支援します。",
    href: "/services#coaching",
    icon: <CompassIcon />,
  },
];

const numbers = [
  { value: "43+", label: "支援プロジェクト" },
  { value: "10+", label: "対応業種" },
  { value: "10+", label: "対応国・地域" },
  { value: "10", label: "年のコンサル経験" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] text-[#6b6b6b] mb-6 uppercase">
              Wapple Inc.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[#0a0a0a] leading-tight mb-8">
              課題を構造化し、
              <br />
              行動変容まで伴走する。
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-base md:text-lg text-[#6b6b6b] leading-relaxed mb-12 max-w-2xl mx-auto">
              事業戦略、人材開発、リーダー育成。
              <br />
              課題の整理から現場での実践まで、一貫して支援します。
            </p>
          </FadeIn>
          <FadeIn delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="border border-[#0a0a0a] px-8 py-3 text-sm tracking-wider hover:bg-[#0a0a0a] hover:text-white transition-colors"
              >
                サービスを見る
              </Link>
              <Link
                href="/contact"
                className="bg-[#0a0a0a] text-white px-8 py-3 text-sm tracking-wider hover:bg-[#333] transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-[#6b6b6b]">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#6b6b6b] to-transparent" />
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 relative">
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6b6b6b] uppercase mb-4">Services</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-16">
              サービス
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e5e5e5]">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <Link
                  href={s.href}
                  className="block p-10 border-b md:border-b-0 md:border-r border-[#e5e5e5] last:border-0 hover:bg-[#f9f9f9] transition-colors group"
                >
                  <div className="mb-6">{s.icon}</div>
                  <h3 className="font-serif text-xl font-bold text-[#0a0a0a] mb-4 whitespace-pre-line leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed mb-6">{s.description}</p>
                  <span className="text-xs tracking-widest text-[#0a0a0a] group-hover:underline">
                    詳しく見る →
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 px-6 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] text-[#6b6b6b] uppercase mb-4">About</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-8 leading-tight">
              課題を構造的に捉え、<br />行動を生む支援を。
            </h2>
            <p className="text-sm text-[#6b6b6b] leading-relaxed mb-10">
              企業が抱える課題は、戦略だけでも、人材育成だけでも解決できません。
              必要なのは、課題を構造的に整理し、人の行動変容につなげること。
              Wappleは、コンサルティング・企業研修・ビジネスコーチングを通じて、
              経営と現場の間にあるギャップを埋め、持続的な変化を支援します。
            </p>
            <Link
              href="/about"
              className="text-sm tracking-widest border-b border-[#0a0a0a] pb-1 hover:text-[#6b6b6b] transition-colors"
            >
              代表プロフィールを見る →
            </Link>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="aspect-square bg-[#f0f0f0]" />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0a0a0a] text-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] text-[#6b6b6b] uppercase mb-6">Contact</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            ご相談、お待ちしています。
          </h2>
          <p className="text-sm text-[#6b6b6b] mb-10 max-w-md mx-auto leading-relaxed">
            課題が整理されていない段階でも構いません。
            お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-block border border-white text-white px-10 py-4 text-sm tracking-widest hover:bg-white hover:text-[#0a0a0a] transition-colors"
          >
            お問い合わせ
          </Link>
        </FadeIn>
      </section>
    </>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-[#0a0a0a]">
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
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-[#0a0a0a]">
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
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-[#0a0a0a]">
      <circle cx="24" cy="24" r="18" />
      <polygon points="24,10 28,24 24,22 20,24" fill="currentColor" stroke="none" />
      <polygon points="24,38 20,24 24,26 28,24" fill="#6b6b6b" stroke="none" />
      <circle cx="24" cy="24" r="2" fill="white" />
    </svg>
  );
}
