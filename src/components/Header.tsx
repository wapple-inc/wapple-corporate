"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/Logo";
import { NAV_ITEMS, NAV_CTA } from "@/lib/nav";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  // 下へスクロールすると隠れ、上へ戻すと現れる
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 320 && y > last + 2);
      if (y < last - 2) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] border-b ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      } ${scrolled || open ? "bg-white/85 backdrop-blur-md border-[#e5e5ea]" : "bg-transparent border-transparent"}`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-white px-3 py-2 rounded">
        本文へ移動
      </a>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 h-16 md:h-[72px] flex items-center justify-between">
        <Link href="/" aria-label="Wapple トップ" className="relative z-10" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-9" aria-label="メインメニュー">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-[14px] py-1 transition-colors ${active ? "text-accent-dark font-semibold" : "text-[#1d1d1f] hover:text-accent"}`}
              >
                {item.label}
                <span className={`absolute left-0 right-0 -bottom-0.5 h-px bg-accent origin-left transition-transform duration-500 ${active ? "scale-x-100" : "scale-x-0"}`} />
              </Link>
            );
          })}
          <Link href={NAV_CTA.href} className="btn-primary !py-2.5 !px-5 !text-[13px]">
            {NAV_CTA.label}
          </Link>
        </nav>

        <button
          className="md:hidden relative z-10 w-10 h-10 -mr-2 flex flex-col items-center justify-center gap-[7px]"
          onClick={() => setOpen(!open)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={`block w-6 h-px bg-[#1d1d1f] transition-transform duration-500 ${open ? "translate-y-[4px] rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-[#1d1d1f] transition-transform duration-500 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="md:hidden fixed inset-0 top-16 h-[calc(100svh-4rem)] bg-white px-5 pt-10 pb-10 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col" aria-label="メインメニュー">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.05 + i * 0.06, ease: EASE }}
                  className="border-b border-[#e5e5ea]"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-baseline gap-4 py-5 text-[28px] font-semibold tracking-[-0.02em] ${isActive(pathname, item.href) ? "text-accent-dark" : "text-[#1d1d1f]"}`}
                  >
                    <span className="t-num text-[12px] text-accent font-semibold">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className="mt-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            >
              <Link href={NAV_CTA.href} onClick={() => setOpen(false)} className="btn-primary w-full !py-4 !text-[15px]">
                {NAV_CTA.label}
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
