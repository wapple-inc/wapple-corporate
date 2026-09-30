import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import PageHero from "@/components/PageHero";
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
      <PageHero label="CONTACT" title={["お問い合わせ", "無料相談"]} />

      <section className="px-5 md:px-10 py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-[1fr_1.1fr] gap-16 md:gap-24">
          <FadeIn>
            <h2 className="t-h3 !text-[26px] md:!text-[34px] !leading-[1.5]">まずはお気軽に<br />ご相談ください</h2>
            <p className="mt-6 text-[15.5px] leading-[1.95] text-[#6e6e73]">
              研修やワークショップ、コーチングに関するご相談を承ります。講師のご依頼やその他のお問い合わせも、こちらのフォームからお送りください。
            </p>
            <ol className="mt-12 border-t border-[#d2d2d7]">
              {points.map((t, i) => (
                <li key={t.head} className="grid grid-cols-[40px_1fr] py-6 border-b border-[#e5e5ea]">
                  <span className="t-num text-[13px] text-accent font-semibold pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-[17px] font-semibold">{t.head}</p>
                    <p className="mt-1.5 text-[14.5px] leading-[1.85] text-[#6e6e73]">{t.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-[13px] text-[#6e6e73]">2営業日以内にご連絡します。</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-surface rounded-[28px] p-7 md:p-12">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
