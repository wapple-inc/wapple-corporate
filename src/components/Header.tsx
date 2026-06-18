"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Cases", href: "/cases" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const personalNavItem = { label: "個人の方へ", href: "/personal" };

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg font-bold tracking-widest text-[#0a0a0a]">
          Wapple
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors tracking-wider"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={personalNavItem.href}
            className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors tracking-wider border border-[#e5e5e5] px-3 py-1.5"
          >
            {personalNavItem.label}
          </Link>
          <Link
            href="/contact"
            className="text-sm border border-[#0a0a0a] px-4 py-2 hover:bg-[#0a0a0a] hover:text-white transition-colors tracking-wider"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          <span className={`block w-6 h-px bg-[#0a0a0a] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-[#0a0a0a] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#0a0a0a] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#e5e5e5] px-6 py-6 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a] tracking-wider"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={personalNavItem.href}
            onClick={() => setOpen(false)}
            className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a] tracking-wider"
          >
            {personalNavItem.label}
          </Link>
        </div>
      )}
    </header>
  );
}
