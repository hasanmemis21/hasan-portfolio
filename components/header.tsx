"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/projects", label: "Projeler" },
  { href: "/experience", label: "Deneyim" },
  { href: "/skills", label: "Yetenekler" },
  { href: "/contact", label: "İletişim" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold tracking-wide">hasanmemis.dev</Link>
        <nav className="hidden sm:flex gap-5 text-sm text-gray-300">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`hover:text-white ${pathname === n.href ? "text-white" : ""}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
