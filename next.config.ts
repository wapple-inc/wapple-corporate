import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 旧Aboutページは代表プロフィール（/profile）に統合（2026-07）
      { source: "/about", destination: "/profile", permanent: true },
    ];
  },
};

export default nextConfig;
