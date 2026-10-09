// 研修プログラムの正本（トップ・/services・構造化データで共有）
// 文言ルール（ブランドガイド v1）：自然な日本語を最優先。読点は必要な分だけ使い、空白で代用しない。
// 研究データは一次情報で確認済みのものだけ。演習手法（ロールプレイ等）を前面に出さず「経験・対話・実践」で語る。

export type FocusProgram = {
  id: string;
  name: string;
  summary: string;
  audience: string;
  duration: string;
  aims: string[];
  contents: string[];
};

export const focusPrograms: FocusProgram[] = [
  {
    id: "critical-thinking",
    name: "AI時代のクリティカルシンキング",
    summary: "AIの答えをうのみにせず、根拠を確かめて自分で判断する力を養います。",
    audience: "若手〜管理職",
    duration: "半日〜1日",
    aims: [
      "事実と意見を区別し、AIの答えの根拠を確かめられる",
      "話の飛躍や思い込みに気づき、問いを立て直せる",
      "自分の言葉で結論と理由を説明できる",
    ],
    contents: [
      "事実と意見を分けて考える",
      "「だから何か」「なぜそう言えるか」で筋道を確かめる",
      "職場の題材を使ってAIの答えを検証する",
      "判断した結論を簡潔に伝える",
    ],
  },
  {
    id: "self-management",
    name: "AI時代のセルフマネジメント",
    summary: "情報や業務に追われる中でも、自分の状態に気づき、集中と判断の質を保つ方法を身につけます。",
    audience: "全社員",
    duration: "半日",
    aims: [
      "ストレスや疲れのサインに早く気づける",
      "刺激にすぐ反応せず、自分の行動を選べる",
      "職場で続けられる小さな習慣を決められる",
    ],
    contents: [
      "ストレスが体・考え・行動に表れる仕組みを知る",
      "短い呼吸法などのマインドフルネスを体験する",
      "注意がそれたときに立ち戻る練習をする",
      "明日から続ける習慣を決める",
    ],
  },
  {
    id: "one-on-one",
    name: "AI時代の1on1・フィードバック",
    summary: "部下が自ら考えて動けるよう支える対話の進め方を、実践を通じて身につけます。",
    audience: "新任管理職・管理職候補",
    duration: "半日〜1日",
    aims: [
      "答えを渡すのではなく、問いによって部下の考えを引き出せる",
      "事実にもとづいて率直に伝えられる",
      "部下の意見を受け止め、次の改善につなげられる",
    ],
    contents: [
      "問いだけで進める1on1を体験する",
      "問いの順番（GROW）と聴き方を学ぶ",
      "職場で起こりうる場面を想定して対話を実践する",
      "次の1on1の進め方を計画する",
    ],
  },
  {
    id: "ai-workshop",
    name: "職務別 生成AI活用ワークショップ",
    summary: "自部署の実務を題材に、生成AIを業務で使いこなす方法を身につけます。",
    audience: "部署単位",
    duration: "1日〜",
    aims: [
      "自分の業務の中でAIを活用できる場面を見つけられる",
      "目的に合った指示を出し、出てきた答えを確かめられる",
      "チームで使うときのルールを決められる",
    ],
    contents: [
      "事前のヒアリングで題材にする業務を決める",
      "実務の題材で指示と検証を繰り返す",
      "チームでの使い方のルールを決める",
    ],
  },
];

// 分け方は講師プロフィール（4_Assets/Contents/研修コンテンツ/_編集用/template/profile_doc.py の THEMES）と同じ（2026-10-09）
export const levelPrograms: { level: string; themes: string[] }[] = [
  { level: "新入社員", themes: ["ビジネスマナー", "報連相", "コミュニケーション・傾聴", "集中とコンディション管理"] },
  { level: "若手", themes: ["主体性・セルフリーダーシップ", "キャリアデザイン", "OJT・後輩指導", "ロジカルシンキング"] },
  { level: "中堅", themes: ["データ分析の基本", "経営戦略（全3回）", "顧客視点・ホスピタリティ", "プレゼンテーション"] },
  { level: "管理職候補・管理職", themes: ["リーダーシップ", "フィードバック", "マネジメント基礎", "1on1・コーチング"] },
  { level: "全社員", themes: ["セルフマネジメント", "異文化理解"] },
  { level: "教育機関", themes: ["生成AIリテラシー（高校生）", "生成AI活用（教員）"] },
];

export const coaching = [
  { title: "管理職・リーダー向けコーチング", body: "チームのマネジメントやご自身の成長について、対話を通じて考えを整理し、次の行動を決めていきます。" },
  { title: "経営者・経営幹部向けコーチング", body: "意思決定や組織づくりの課題について、考えを深めるための対話の相手を務めます。" },
  { title: "研修後のフォローコーチング", body: "研修で決めた行動目標を職場で実践できるよう、個別の対話で支えます。" },
];

// Wappleの研修の考え方（MVV「学び・対話・経験」に対応）
export const approach = [
  {
    n: "01",
    title: "経験から学ぶ",
    body: "これまでの経験を振り返り、うまくいったこと・つ\u2060まずいたことを言葉にするところから始めます。そこで得た気づきを、明日からの仕事で使える形にしていきます。",
  },
  {
    n: "02",
    title: "対話で深める",
    body: "受講者どうしの対話や振り返りを通じて、自分の考え方や行動を見つめ直します。",
  },
  {
    n: "03",
    title: "職場での行動につなげる",
    body: "研修で決めた行動を職場で実践できるよう、事前のヒアリングから研修後の振り返りまで一貫して設計します。",
  },
];

export const flow = [
  { head: "無料相談", body: "研修の目的や対象者、現状の課題をお聞きします。" },
  { head: "設計・ご提案", body: "課題に合わせたカリキュラムとお見積りをご提示します。" },
  { head: "研修の実施", body: "対面・オンラインのどちらにも対応します。" },
  { head: "定着の支援", body: "アンケート結果をご報告し、振り返りや個別のコーチングで行動の定着を支えます。" },
];

// 一次情報で確認済みのデータのみ（2026-09-29 確認）
export const evidence = [
  {
    num: "10社中7社",
    text: "分析的思考を必須のスキルと考える企業の割合です。雇用主が最も重視するコアスキルとされています。",
    source: "World Economic Forum「Future of Jobs Report 2025」",
    url: "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf",
  },
  {
    num: "319人",
    text: "の知識労働者を対象にした調査で、生成AIへの信頼が高い人ほど批判的に考えることが少ない傾向が示されました。",
    source: "Microsoft Research・カーネギーメロン大学（CHI 2025）",
    url: "https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/",
  },
];

export const CTA = {
  label: "無料相談を申し込む",
  href: "/contact",
  heading: "まずはお気軽にご相談ください",
  note: "研修の目的や対象者が固まっていない段階でも構いません。",
};
