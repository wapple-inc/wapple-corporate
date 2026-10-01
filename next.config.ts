import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 旧Aboutページは代表プロフィール（/profile）に統合（2026-07）
      { source: "/about", destination: "/profile", permanent: true },
      // 2026-10 刷新：人材開発へ集中。旧サービス・事例ページは研修プログラムへ
      { source: "/cases", destination: "/services", permanent: false },
      // 2026-10 刷新：研修に集中。旧「個人の方へ」はサービスのコーチングへ（秦さん判断 2026-10-01）
      { source: "/personal", destination: "/services#coaching", permanent: false },
    ];
  },
};

export default nextConfig;
