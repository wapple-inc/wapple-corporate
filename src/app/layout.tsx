import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, PERSON } from "@/lib/site";

const defaultTitle = "株式会社Wapple | 課題を構造化し、行動変容まで伴走する。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | 株式会社Wapple",
  },
  description: SITE_DESCRIPTION,
  keywords: ["コンサルティング", "企業研修", "コーチング", "事業戦略", "組織開発", "人材育成", "新規事業", "市場調査", "秦善成", "Wapple"],
  authors: [{ name: SITE_NAME }, { name: PERSON.name, url: `${SITE_URL}/profile` }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "株式会社Wapple" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <GoogleAnalytics />
        <NetworkBackground />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
