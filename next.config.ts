import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 旧Aboutページは代表プロフィール（/profile）に統合（2026-07）
      { source: "/about", destination: "/profile", permanent: true },
      // 2026-10 刷新：人材開発へ集中。旧サービス・事例ページは研修プログラムへ
      { source: "/cases", destination: "/services", permanent: false },
    ];
  },
};

export default nextConfig;
