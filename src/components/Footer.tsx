import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { SITE_TAGLINE } from "@/lib/site";
import { NAV_ITEMS, NAV_CTA } from "@/lib/nav";

const links = [...NAV_ITEMS, NAV_CTA];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white px-5 md:px-10 pt-20 md:pt-28">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-[1.4fr_1fr] gap-12">
        <div>
          <p className="text-[24px] md:text-[32px] font-semibold leading-[1.45] tracking-[-0.02em]">
            学びと経験で
            <br />
            人の可能性をひらく
          </p>
          <p className="mt-6 text-sm text-[#6e6e73]">株式会社Wapple｜東京都目黒区</p>
        </div>
        <nav className="grid grid-cols-2 gap-x-8 gap-y-4 content-start" aria-label="フッターメニュー">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="text-[14px] text-[#1d1d1f] w-fit link-line">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* 大きなロゴタイプ */}
      <div className="relative max-w-[1280px] mx-auto mt-20 md:mt-28 pb-8 md:pb-12 select-none" aria-hidden="true">
        <div className="flex items-center gap-[4vw] md:gap-10">
          <span className="shrink-0 w-[17vw] md:w-[168px]">
            <LogoMark size={168} className="block w-full h-auto" />
          </span>
          <span className="block text-[20vw] md:text-[208px] leading-[1.1] font-semibold tracking-[-0.055em] text-[#1d1d1f]">
            Wapple
          </span>
        </div>
      </div>

      <div className="relative border-t border-[#e5e5ea] -mx-5 md:-mx-10 px-5 md:px-10">
        <div className="max-w-[1280px] mx-auto py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-[#6e6e73]">
          <p>{SITE_TAGLINE}</p>
          <p>© 2026 Wapple Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
