import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({
  product,
  index,
}: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-[#3c9dea]/15 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(60,157,234,0.14)]">
      <Link
        href={`/san-pham/${product.slug}`}
        className="relative block aspect-square overflow-hidden rounded-[20px] bg-[#fff9f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147bc8]"
      >
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[#147bc8] shadow-sm">
          {product.badge}
        </span>

        <span className="absolute right-4 top-4 z-10 text-xs font-black text-[#3c9dea]/70">
          {String(index + 1).padStart(2, "0")}
        </span>

        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </Link>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-black tracking-[-0.025em]">
            {product.name}
          </h2>

          <p className="whitespace-nowrap font-black text-[#147bc8]">
            {formatPrice(product.price)}
          </p>
        </div>

        <p className="mt-2 flex-1 text-sm leading-6 text-[#61727f]">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#61727f]">
          <span
            className="size-3 rounded-full border border-black/10"
            style={{ backgroundColor: product.colorHex }}
            aria-hidden="true"
          />

          {product.color}
        </div>

        <Link
          href={`/san-pham/${product.slug}`}
          className="mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-lg font-black text-[#163146] underline decoration-[#3c9dea] decoration-2 underline-offset-4 transition-colors hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147bc8]"
        >
          Xem chi tiết
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}