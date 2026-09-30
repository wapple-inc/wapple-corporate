// サイト全体で共有する定数。canonical / OGP / 構造化データの参照元を一本化し、
// www / 非www やURLの表記ゆれを防ぐ。
//
// ⚠️ ドメイン正規化について:
// コードは一貫して非www（https://wapple.co.jp）を正規ホストとして扱う。
// 本番（Vercel）側のドメイン設定も「wapple.co.jp を Primary」にし、
// www.wapple.co.jp → wapple.co.jp へリダイレクトさせること（現状は逆）。
export const SITE_URL = "https://wapple.co.jp";
export const SITE_NAME = "株式会社Wapple";
export const SITE_TAGLINE = "学びと経験で人の可能性をひらく";
export const SITE_DESCRIPTION =
  "株式会社Wappleは人材開発の会社です。研修・ワークショップ・コーチングで一人の気づきを行動の変化につなげます。AI時代のクリティカルシンキングやセルフマネジメント、1on1・フィードバック研修などを提供しています。";

// 組織の基本情報（schema.org / フッター等で共有）
export const ORG = {
  name: SITE_NAME,
  legalName: "株式会社Wapple",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  email: "yoshinari.hata@wapple.co.jp",
  foundingDate: "2026-04-24",
  founderName: "秦 善成",
  address: {
    streetAddress: "下目黒１丁目１番１４号 コノトラビル７F",
    addressLocality: "目黒区",
    addressRegion: "東京都",
    postalCode: "153-0064",
    addressCountry: "JP",
  },
  areaServed: "JP",
  knowsAbout: [
    "人材開発",
    "企業研修",
    "クリティカルシンキング",
    "セルフマネジメント",
    "1on1",
    "フィードバック",
    "生成AI活用",
    "ビジネスコーチング",
  ],
} as const;

// 代表者の基本情報（/profile ページと構造化データの正本）
export const PERSON = {
  name: "秦 善成",
  nameCompact: "秦善成",
  furigana: "はた よしなり",
  nameEn: "Yoshinari Hata",
  jobTitle: "代表取締役／人材開発コンサルタント・研修トレーナー",
  id: `${SITE_URL}/profile#person`,
  url: `${SITE_URL}/profile`,
  image: `${SITE_URL}/profile.png`,
  description:
    "株式会社Wapple代表取締役。人材開発コンサルタント・研修トレーナー・ICF認定コーチ（ACC）。三菱UFJリサーチ＆コンサルティングで戦略コンサルタントとして50件超のプロジェクトに参画。Apple Japanではオンラインストア・カスタマーサポート部門でデータ分析と業務改善に携わるとともに、トレーナーとして研修の企画・実施を担当。2026年に株式会社Wappleを設立。",
  // 同一人物のWeb上の別拠点（検索エンジンのエンティティ統合シグナル）
  sameAs: ["https://www.wapple.life"],
  credentials: [
    "国際コーチング連盟（ICF）アソシエイト認定コーチ（ACC）",
    "一般社団法人マインドフルネス瞑想協会認定講師",
    "Digital Wellness Institute Certified Digital Wellness Educator",
  ],
} as const;

// Person 構造化データ（正本。/profile で出力し、他ページからは @id で参照する）
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON.id,
  name: PERSON.name,
  alternateName: [PERSON.nameCompact, PERSON.furigana, PERSON.nameEn],
  jobTitle: PERSON.jobTitle,
  image: PERSON.image,
  url: PERSON.url,
  mainEntityOfPage: PERSON.url,
  worksFor: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
  description: PERSON.description,
  sameAs: PERSON.sameAs,
  alumniOf: [{ "@type": "CollegeOrUniversity", name: "早稲田大学" }],
  knowsAbout: ORG.knowsAbout,
  hasCredential: PERSON.credentials.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    name: c,
  })),
};

// Organization 構造化データ（全ページ共通で使える）
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: ORG.name,
  legalName: ORG.legalName,
  url: ORG.url,
  logo: ORG.logo,
  image: ORG.logo,
  email: ORG.email,
  description:
    "人材開発の会社。研修・ワークショップ・コーチングで一人の気づきを行動の変化につなげる。",
  foundingDate: ORG.foundingDate,
  founder: { "@type": "Person", "@id": `${SITE_URL}/profile#person`, name: ORG.founderName },
  address: {
    "@type": "PostalAddress",
    streetAddress: ORG.address.streetAddress,
    addressLocality: ORG.address.addressLocality,
    addressRegion: ORG.address.addressRegion,
    postalCode: ORG.address.postalCode,
    addressCountry: ORG.address.addressCountry,
  },
  areaServed: ORG.areaServed,
  knowsAbout: ORG.knowsAbout,
};

// パンくず構造化データを生成するヘルパー
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
