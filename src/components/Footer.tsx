import Link from "next/link";
import Logo from "@/components/Logo";
import { SITE_TAGLINE } from "@/lib/site";
import { NAV_ITEMS, NAV_CTA } from "@/lib/nav";

const links = [...NAV_ITEMS, NAV_CTA];

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5ea] py-12 px-5 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-[#6e6e73]">{SITE_TAGLINE}</p>
          <p className="mt-1 text-sm text-[#6e6e73]">株式会社Wapple｜東京都目黒区</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#e5e5ea]">
        <p className="text-xs text-[#6e6e73]">© 2026 Wapple Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
