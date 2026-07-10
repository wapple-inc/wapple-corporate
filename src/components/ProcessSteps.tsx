import FadeIn from "@/components/FadeIn";

const steps = [
  {
    number: "01",
    title: "初回相談（無料）",
    description:
      "現状やお悩みをお聞かせください。課題が整理されていない段階で構いません。",
  },
  {
    number: "02",
    title: "論点整理",
    description:
      "対話を通じて課題を構造化し、取り組むべき論点を明確にします。",
  },
  {
    number: "03",
    title: "ご提案",
    description:
      "課題・ご予算に応じた支援内容・進め方・費用をご提案します。",
  },
  {
    number: "04",
    title: "伴走支援",
    description:
      "定例での対話を軸に、実行と行動変容まで伴走します。",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 px-6 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] text-[#6e6e73] uppercase mb-4">Process</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-16">
            ご支援の進め方
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-[#d2d2d7] bg-white">
          {steps.map((s, i) => (
            <FadeIn key={s.number} delay={i * 0.1}>
              <div className="relative p-8 border-b md:border-b-0 md:border-r border-[#d2d2d7] last:border-0 h-full">
                <p className="font-display text-4xl font-bold text-[#d2d2d7] mb-4">{s.number}</p>
                <h3 className="font-display text-base font-bold text-[#1d1d1f] mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{s.description}</p>
                {i < steps.length - 1 && (
                  <span className="hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 z-10 text-[#6e6e73]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M5 3l6 5-6 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
