import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c4b8] bg-white text-[#2B2A33] shadow-sm">
        <span className="flex flex-col items-center font-serif text-[11px] font-semibold leading-[0.75] tracking-tight">
          <span>M</span>
          <span>L</span>
        </span>
      </span>
      <span className={compact ? "hidden sm:block" : "block"}>
        <span className="block font-serif text-lg tracking-[0.22em] text-[#2B2A33]">
          MAISON LUXE
        </span>
        <span className="block text-[10px] uppercase tracking-[0.28em] text-[#84A59D]">
          Skincare
        </span>
      </span>
    </Link>
  );
}
