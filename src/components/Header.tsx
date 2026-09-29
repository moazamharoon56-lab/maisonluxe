"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { useCart } from "@/components/CartProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

export function Header() {
  const { count } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[#eadfd6]/80 bg-[#FAF5F0]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Logo compact />
        <nav className="hidden items-center gap-8 text-sm tracking-wide text-[#3D405B] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-[#E07A5F]"
                  : "hover:text-[#E07A5F]"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-3 text-sm md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "text-[#E07A5F]" : "text-[#3D405B]"}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/cart"
            className="relative inline-flex items-center gap-2 rounded-full bg-[#E07A5F] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#d36c52]"
          >
            Cart
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs text-[#E07A5F]">
              {count}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
