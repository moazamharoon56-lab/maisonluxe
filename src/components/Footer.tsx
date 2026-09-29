import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#eadfd6] bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#3D405B]/80">
            Thoughtful Pakistani skincare — cleanse, tone, and glow. Cash on
            delivery across Pakistan.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-lg text-[#2B2A33]">Visit</h3>
          <ul className="mt-3 space-y-2 text-sm text-[#3D405B]">
            <li>
              <Link href="/shop" className="hover:text-[#E07A5F]">
                Shop all
              </Link>
            </li>
            <li>
              <Link
                href="/product/bridal-luxe-glow-kit"
                className="hover:text-[#E07A5F]"
              >
                Bridal Luxe Glow Kit
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#E07A5F]">
                Our ritual
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-lg text-[#2B2A33]">Orders</h3>
          <p className="mt-3 text-sm leading-6 text-[#3D405B]/80">
            Place an order on the site and confirm it on WhatsApp. We will
            message you back to confirm delivery.
          </p>
        </div>
      </div>
      <div className="border-t border-[#eadfd6] py-4 text-center text-xs tracking-[0.2em] text-[#3D405B]/60">
        MAISON LUXE · All skin types
      </div>
    </footer>
  );
}
