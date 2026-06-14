// 構造化データ（JSON-LD）を出力する共通コンポーネント。
// schema.org の各タイプ（Organization / Person / Service / BreadcrumbList など）を
// 受け取り、<script type="application/ld+json"> として埋め込む。
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
