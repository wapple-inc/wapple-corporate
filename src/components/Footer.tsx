import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#d2d2d7] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="font-display text-lg font-bold tracking-widest mb-2">Wapple</p>
          <p className="text-sm text-[#6e6e73]">株式会社Wapple</p>
        </div>

        <nav className="flex flex-col gap-3">
          {[
            { label: "About", href: "/about" },
            { label: "Profile — 代表 秦善成", href: "/profile" },
            { label: "Services", href: "/services" },
            { label: "Cases", href: "/cases" },
            { label: "Insights", href: "/insights" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] transition-colors tracking-wider"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#d2d2d7]">
        <p className="text-xs text-[#6e6e73]">© 2026 Wapple Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
