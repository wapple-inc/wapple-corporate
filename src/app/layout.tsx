import type { Metadata } from "next";
import { Inter, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-jp",
});

const siteUrl = "https://wapple.co.jp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "株式会社Wapple | 課題を構造化し、行動変容まで伴走する。",
    template: "%s | 株式会社Wapple",
  },
  description:
    "株式会社Wappleは、事業戦略コンサルティング・企業研修・コーチングを通じて、企業の成長と組織変革を伴走型で支援します。",
  keywords: ["コンサルティング", "企業研修", "コーチング", "事業戦略", "組織開発", "人材育成", "新規事業", "市場調査"],
  authors: [{ name: "株式会社Wapple" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "株式会社Wapple",
    title: "株式会社Wapple | 課題を構造化し、行動変容まで伴走する。",
    description:
      "株式会社Wappleは、事業戦略コンサルティング・企業研修・コーチングを通じて、企業の成長と組織変革を伴走型で支援します。",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "株式会社Wapple" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社Wapple | 課題を構造化し、行動変容まで伴走する。",
    description:
      "株式会社Wappleは、事業戦略コンサルティング・企業研修・コーチングを通じて、企業の成長と組織変革を伴走型で支援します。",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSerifJP.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
