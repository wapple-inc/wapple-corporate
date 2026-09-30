"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { NAV_ITEMS, NAV_CTA } from "@/lib/nav";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#e5e5ea]">
      <div className="max-w-6xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Wapple トップ">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={`text-sm transition-colors ${
                isActive(pathname, item.href) ? "text-accent-dark font-semibold" : "text-[#1d1d1f] hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href={NAV_CTA.href} className="btn-primary !py-2.5 !px-5 !text-[13px]">
            {NAV_CTA.label}
          </Link>
        </nav>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="メニュー">
          <span className={`block w-6 h-px bg-[#1d1d1f] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-[#1d1d1f] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#1d1d1f] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#e5e5ea] px-5 py-6 flex flex-col gap-5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-[15px] ${isActive(pathname, item.href) ? "text-accent-dark font-semibold" : "text-[#1d1d1f]"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href={NAV_CTA.href} onClick={() => setOpen(false)} className="btn-primary text-center">
            {NAV_CTA.label}
          </Link>
        </div>
      )}
    </header>
  );
}
