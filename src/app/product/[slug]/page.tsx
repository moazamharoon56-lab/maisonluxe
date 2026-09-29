import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductCard } from "@/components/ProductCard";
import { formatPkr } from "@/lib/format";
import { getProduct, products } from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return { title: product.name, description: product.tagline };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const others = products.filter((item) => item.id !== product.id);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-xs text-muted/60">
        <Link href="/shop" className="hover:text-accent">
          Shop
        </Link>
        <span className="mx-2">/</span>
        {product.name}
      </p>
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] border border-line bg-white">
          <div className="relative aspect-[4/5]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            {product.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-highlight px-3 py-1 text-xs tracking-wide text-ink"
              >
                {badge}
              </span>
            ))}
          </div>
          <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-3 text-muted/80">{product.tagline}</p>
          <p className="mt-5 text-2xl font-medium text-ink">
            {formatPkr(product.price)}
            {product.originalPrice ? (
              <span className="ml-3 text-base font-normal text-muted/50 line-through">
                {formatPkr(product.originalPrice)}
              </span>
            ) : null}
          </p>
          {product.size ? (
            <p className="mt-1 text-sm text-muted/70">{product.size}</p>
          ) : null}
          <p className="mt-6 max-w-lg text-sm leading-7 text-muted/80">
            {product.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {product.highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-white px-3 py-1 text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 max-w-sm">
            <AddToCartButton productId={product.id} />
          </div>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="font-serif text-3xl text-ink">Also in the ritual</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
