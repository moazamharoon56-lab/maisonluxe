import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { formatPkr } from "@/lib/format";

export default function Home() {
  const kit = products.find((product) => product.id === "bridal-kit")!;
  const singles = products.filter((product) => product.id !== "bridal-kit");

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-sage">
              Pakistani skincare ritual
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-ink sm:text-6xl">
              Cleanse. Tone.
              <span className="block italic text-accent">Glow.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-muted/80">
              Maison Luxe is a three-step ritual for all skin types — a hydrating
              wash, a pore-refining toner, and a brightening cream. Bundle them
              as the Bridal Luxe Glow Kit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/product/bridal-luxe-glow-kit"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-[#d36c52]"
              >
                Shop the kit · {formatPkr(kit.price)}
              </Link>
              <Link
                href="/shop"
                className="rounded-full border border-line bg-white px-6 py-3 text-sm text-muted hover:border-accent hover:text-accent"
              >
                Shop all
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-highlight/80 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_24px_80px_rgba(43,42,51,0.12)]">
              <Image
                src={kit.image}
                alt={kit.name}
                width={900}
                height={1100}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <p className="mt-4 text-center text-xs uppercase tracking-[0.24em] text-muted/60">
              Bridal Luxe Glow Kit · Save Rs 850
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-rose">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
          {[
            ["01", "Cleanse", "Refresh & Purify Face Wash lifts impurities without stripping."],
            ["02", "Tone", "Refresh & Revive Face Toner hydrates and refines pores."],
            ["03", "Glow", "Whitening Cream nourishes for an even, bridal-ready look."],
          ].map(([n, title, copy]) => (
            <div key={n}>
              <p className="text-xs tracking-[0.28em] text-sage">{n}</p>
              <h2 className="mt-2 font-serif text-2xl text-ink">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted/75">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-sage">Collection</p>
            <h2 className="mt-2 font-serif text-4xl text-ink">The ritual</h2>
          </div>
          <Link href="/shop" className="text-sm text-accent hover:underline">
            View shop
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {singles.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8">
          <ProductCard product={kit} />
        </div>
      </section>
    </div>
  );
}
