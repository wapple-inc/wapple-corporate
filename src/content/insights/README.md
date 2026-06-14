# インサイト記事の追加方法

`/insights`（オウンドメディア）の記事は、このフォルダに **1記事 = 1つの `.md` ファイル** で配置します。
ファイル名（拡張子を除く）がそのままURLのスラッグになります。

例：`shinki-jigyo-shijo-chosa.md` → `https://wapple.co.jp/insights/shinki-jigyo-shijo-chosa`

## フロントマター（必須）

各ファイルの先頭に、以下のメタ情報を記述します。

```markdown
---
title: 記事タイトル（一覧・<title>・OGPに使用）
description: メタディスクリプション。検索結果に出る要約。80〜120字目安。
date: 2026-06-14          # 公開日 YYYY-MM-DD（一覧の並び順・sitemapに使用）
category: 事業戦略         # 事業戦略 / 人材開発 / 組織開発 / コーチング のいずれか
keywords:                 # 狙うSEOキーワード（meta keywords・Articleに使用）
  - 新規事業 市場調査 やり方
  - 市場調査 進め方
draft: false              # true の間は公開されない（一覧・URL・sitemapに出ない）
---

本文をMarkdownで記述（`##` 見出しから開始。記事タイトルの `#` は不要）
```

## 公開フロー

1. `draft: true` で執筆・レビュー
2. 公開してよければ `draft: false` に変更
3. デプロイ（git push → Vercel）で公開反映

`draft: true` の記事はビルドに含まれず、URLは404になります。
公開は **デプロイ時にのみ反映** されるため、ファイルを置いただけでは公開されません。

## 本文のポイント（SEO）

- `##`（h2）で論点ごとに区切る。1記事に3〜6個が目安
- 記事末尾に関連サービスへの内部リンクを置く（例：`[事業戦略コンサルティング](/services#consulting)`）
- 表は Markdown table で記述可（`.article-body` でスタイル適用済み）
