"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/projects", label: "Projeler" },
  { href: "/experience", label: "Deneyim" },
  { href: "/skills", label: "Yetenekler" },
  { href: "/contact", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // mobil açıkken body scroll kilidi
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10
      ${scrolled ? "bg-[#0b0d10]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0b0d10]/50" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-semibold">
          <span className="text-white">hasanmemis</span><span className="text-emerald-400">.dev</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-gray-300 hover:text-white">
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger (mobile) */}
        <button
          aria-label="Menüyü aç/kapat"
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <>
         {/* arka plan (overlay) */}
<div
  className="fixed inset-0 z-[60] bg-black/60"   // sade, opak overlay
  onClick={() => setOpen(false)}
  aria-hidden
/>

{/* çekmece */}
<div
  className="fixed inset-y-0 right-0 z-[70] w-80 max-w-[85%]
             bg-[#0f1216]                /* OPAR (opak) arka plan */
             border-l border-white/10 shadow-2xl
             text-white                  /* net kontrast */
             slide-in-from-right"
  role="dialog"
  aria-modal="true"
>
  <div className="flex items-center justify-between h-14 px-4 border-b border-white/10">
    <span className="font-semibold">Menü</span>
    <button
      aria-label="Kapat"
      className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/10 p-2"
      onClick={() => setOpen(false)}
    >
      <X className="w-5 h-5" />
    </button>
  </div>

  <nav className="p-4 flex flex-col gap-2">
    {NAV.map((n) => (
      <Link
        key={n.href}
        href={n.href}
        onClick={() => setOpen(false)}
        className="rounded-xl border border-white/10 bg-white/10 px-4 py-3
                   text-white hover:bg-white/15"
      >
        {n.label}
      </Link>
    ))}

    <a
      href="/cv/Hasan_Memis_CV_TR.pdf"
      className="mt-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 text-center"
      onClick={() => setOpen(false)}
    >
      CV (TR) indir
    </a>
  </nav>

  <div className="h-[env(safe-area-inset-bottom)]" />
</div>

        </>
      )}
    </header>
  );
}
