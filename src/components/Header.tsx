"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Profile", href: "/profile" },
  { label: "Services", href: "/services" },
  { label: "Cases", href: "/cases" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const personalNavItem = { label: "個人の方へ", href: "/personal" };

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-lg font-bold tracking-widest text-[#1d1d1f]">
          Wapple
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors tracking-wider"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={personalNavItem.href}
            className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors tracking-wider border border-[#d2d2d7] rounded-full px-3 py-1.5"
          >
            {personalNavItem.label}
          </Link>
          <Link
            href="/contact"
            className="text-sm border border-[#1d1d1f] rounded-full px-4 py-2 hover:bg-[#1d1d1f] hover:text-white transition-colors tracking-wider"
          >
            無料相談
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          <span className={`block w-6 h-px bg-[#1d1d1f] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-[#1d1d1f] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#1d1d1f] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#d2d2d7] px-6 py-6 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] tracking-wider"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={personalNavItem.href}
            onClick={() => setOpen(false)}
            className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] tracking-wider"
          >
            {personalNavItem.label}
          </Link>
        </div>
      )}
    </header>
  );
}
