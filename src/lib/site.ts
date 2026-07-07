// サイト全体で共有する定数。canonical / OGP / 構造化データの参照元を一本化し、
// www / 非www やURLの表記ゆれを防ぐ。
//
// ⚠️ ドメイン正規化について:
// コードは一貫して非www（https://wapple.co.jp）を正規ホストとして扱う。
// 本番（Vercel）側のドメイン設定も「wapple.co.jp を Primary」にし、
// www.wapple.co.jp → wapple.co.jp へリダイレクトさせること（現状は逆）。
export const SITE_URL = "https://wapple.co.jp";
export const SITE_NAME = "株式会社Wapple";
export const SITE_DESCRIPTION =
  "株式会社Wappleは、事業戦略コンサルティング・企業研修・コーチングを通じて、企業の成長と組織変革を伴走型で支援します。";

// 組織の基本情報（schema.org / フッター等で共有）
export const ORG = {
  name: SITE_NAME,
  legalName: "株式会社Wapple",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  email: "yoshinari.hata@wapple.life",
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
    "事業戦略コンサルティング",
    "市場調査",
    "新規事業開発",
    "組織開発",
    "人材開発",
    "企業研修",
    "ビジネスコーチング",
  ],
} as const;

// 代表者の基本情報（/profile ページと構造化データの正本）
export const PERSON = {
  name: "秦 善成",
  nameCompact: "秦善成",
  furigana: "はた よしなり",
  nameEn: "Yoshinari Hata",
  jobTitle: "代表取締役",
  id: `${SITE_URL}/profile#person`,
  url: `${SITE_URL}/profile`,
  image: `${SITE_URL}/profile.png`,
  description:
    "株式会社Wapple代表取締役。三菱UFJリサーチ＆コンサルティングでグローバル戦略コンサルタントとして6年間従事し、市場調査・事業戦略立案・新規事業検討を担当。その後Apple Japanにてデータ分析・業務改善・人材育成・研修設計に従事。2026年に株式会社Wappleを設立し、コンサルティング・企業研修・コーチングを提供。ICF認定コーチ（ACC）。",
  // 同一人物のWeb上の別拠点（検索エンジンのエンティティ統合シグナル）
  sameAs: ["https://www.wapple.life"],
  credentials: [
    "国際コーチング連盟（ICF）アソシエイト認定コーチ（ACC）",
    "JADP認定上級心理カウンセラー",
    "一般社団法人マインドフルネス瞑想協会認定講師",
    "Digital Wellness Institute Certified Digital Wellness Educator",
    "Google Digital Marketing & E-Commerce Certificate",
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
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "早稲田大学" },
    { "@type": "CollegeOrUniversity", name: "北京大学" },
  ],
  knowsAbout: ORG.knowsAbout,
  knowsLanguage: ["ja", "en", "zh"],
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
    "事業戦略コンサルティング・企業研修・ビジネスコーチングを通じて、企業の課題解決から行動変容までを一貫して支援。",
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
