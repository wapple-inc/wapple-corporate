// /insights（オウンドメディア）の記事をMarkdownファイルから読み込むローダー。
// 記事は src/content/insights/*.md に1記事1ファイルで配置する。
// フロントマターで title / description / date / category / keywords / draft を指定。
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const POSTS_DIR = path.join(process.cwd(), "src/content/insights");

export type InsightTag = "コラム" | "お知らせ";

export type InsightMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  category: string;
  tag: InsightTag;
  keywords: string[];
  draft: boolean;
};

export type Insight = InsightMeta & {
  /** レンダリング済みHTML本文 */
  contentHtml: string;
};

function parseFile(fileName: string): { meta: InsightMeta; raw: string } {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(POSTS_DIR, fileName);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);
  return {
    meta: {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      date: String(data.date ?? ""),
      category: String(data.category ?? ""),
      tag: (data.tag === "お知らせ" ? "お知らせ" : "コラム") as InsightTag,
      keywords: Array.isArray(data.keywords) ? data.keywords.map(String) : [],
      draft: Boolean(data.draft ?? false),
    },
    raw: content,
  };
}

/** 公開記事のメタ情報一覧を日付の新しい順で返す（draftは除外） */
export function getAllInsights(): InsightMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .map((f) => parseFile(f).meta)
    .filter((m) => !m.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** generateStaticParams 用：公開記事のslug一覧 */
export function getAllInsightSlugs(): string[] {
  return getAllInsights().map((m) => m.slug);
}

/** slugから記事本文（HTML化済み）を取得。なければnull */
export function getInsightBySlug(slug: string): Insight | null {
  const fileName = `${slug}.md`;
  if (!fs.existsSync(path.join(POSTS_DIR, fileName))) return null;
  const { meta, raw } = parseFile(fileName);
  if (meta.draft) return null;
  const contentHtml = marked.parse(raw, { async: false }) as string;
  return { ...meta, contentHtml };
}
