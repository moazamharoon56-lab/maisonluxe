import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPkr } from "@/lib/format";
import { AddToCartButton } from "@/components/AddToCartButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-[#eadfd6] bg-white shadow-[0_12px_40px_rgba(43,42,51,0.06)]">
      <Link href={`/product/${product.slug}`} className="relative block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#FCF6F5]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        {product.badges[0] ? (
          <span className="absolute left-4 top-4 rounded-full bg-[#F7CAD0] px-3 py-1 text-xs tracking-wide text-[#2B2A33]">
            {product.badges[0]}
          </span>
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-serif text-xl text-[#2B2A33]">{product.name}</h3>
          <p className="mt-1 text-sm text-[#3D405B]/75">{product.tagline}</p>
        </Link>
        <div className="mt-4 flex items-end justify-between gap-3">
          <p className="text-[#2B2A33]">
            <span className="text-lg font-medium">{formatPkr(product.price)}</span>
            {product.originalPrice ? (
              <span className="ml-2 text-sm text-[#3D405B]/50 line-through">
                {formatPkr(product.originalPrice)}
              </span>
            ) : null}
          </p>
        </div>
        <div className="mt-5">
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </article>
  );
}
