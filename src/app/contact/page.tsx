import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ・無料相談",
  description:
    "株式会社Wappleへのお問い合わせ。研修・ワークショップ・コーチングのご相談を無料で承ります。目的や対象者が固まっていない段階でもお気軽にどうぞ。",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "お問い合わせ・無料相談｜株式会社Wapple",
    url: `${SITE_URL}/contact`,
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "お問い合わせ | 株式会社Wapple",
  url: `${SITE_URL}/contact`,
  about: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
};

const points = [
  { head: "ご相談は無料です", body: "費用が発生するのは、ご提案内容にご納得いただき、正式にご依頼いただいてからです。" },
  { head: "課題の整理からご一緒します", body: "研修の目的や対象者が固まっていない段階でも構いません。現状をお聞きしたうえで、合った進め方をご提案します。" },
  { head: "オンラインでも対面でも", body: "ご相談はオンラインで承ります。対面をご希望の場合もお知らせください。" },
];

export default function ContactPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "お問い合わせ", path: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={[contactJsonLd, breadcrumb]} />
      <section className="pt-36 pb-14 md:pt-44 md:pb-16 px-5 md:px-10 border-b border-[#e5e5ea]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow">CONTACT</p>
            <h1 className="mt-4 text-[34px] md:text-[52px] font-semibold">お問い合わせ・無料相談</h1>
          </FadeIn>
        </div>
      </section>

      <section className=" py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-16">
          <FadeIn>
            <h2 className="text-[24px] md:text-[30px] font-semibold leading-[1.5]">まずはお気軽にご相談ください</h2>
            <p className="mt-5 text-[15px] leading-[1.9] text-[#6e6e73]">
              研修やワークショップ、コーチングに関するご相談を承ります。<br className="hidden md:inline" />講師のご依頼やその他のお問い合わせも、こちらのフォームからお送りください。
            </p>
            <ul className="mt-9 space-y-6">
              {points.map((t) => (
                <li key={t.head} className="pl-5 relative">
                  <span className="absolute left-0 top-[0.55em] w-2 h-2 rounded-full bg-accent" />
                  <p className="text-[16px] font-semibold">{t.head}</p>
                  <p className="mt-1 text-[14.5px] leading-[1.8] text-[#6e6e73]">{t.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-9 text-[13px] text-[#6e6e73]">2営業日以内にご連絡します。</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
