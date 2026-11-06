import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/product-card";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { formatPrice, getProduct, products } from "@/data/products";

type ProductPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Không tìm thấy sản phẩm | Homecase" };
  return { title: `${product.name} | Homecase`, description: product.shortDescription };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#fff9f2] text-[#163146]">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12">
        <nav aria-label="Đường dẫn" className="mb-8 flex flex-wrap items-center gap-2 text-sm font-bold text-[#61727f]"><Link href="/" className="rounded hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-[#147bc8]">Trang chủ</Link><span aria-hidden="true">/</span><Link href="/san-pham" className="rounded hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-[#147bc8]">Sản phẩm</Link><span aria-hidden="true">/</span><span className="text-[#147bc8]">{product.name}</span></nav>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-[#3c9dea]/15 bg-white shadow-[0_20px_70px_rgba(60,157,234,0.12)]"><span className="absolute left-5 top-5 z-10 rounded-full bg-[#3c9dea] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white">{product.badge}</span><Image src={product.image} alt={product.alt} fill priority sizes="(max-width: 1024px) 100vw, 52vw" className="object-contain p-7 sm:p-12" /></div>

          <div className="lg:pt-4">
            <p className="eyebrow">Homecase canvas tote</p>
            <h1 className="text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-6xl">{product.name}</h1>
            <p className="mt-5 text-2xl font-black text-[#147bc8]">{formatPrice(product.price)}</p>
            <p className="mt-6 text-base leading-8 text-[#526a7a] sm:text-lg">{product.description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[#3c9dea]/15 bg-white p-4"><dt className="text-xs font-black uppercase tracking-[0.14em] text-[#7a8b97]">Màu sắc</dt><dd className="mt-3 flex items-center gap-2 font-black"><span className="size-4 rounded-full border border-black/10" style={{ backgroundColor: product.colorHex }} aria-hidden="true" />{product.color}</dd></div>
              <div className="rounded-2xl border border-[#3c9dea]/15 bg-white p-4"><dt className="text-xs font-black uppercase tracking-[0.14em] text-[#7a8b97]">Chất liệu</dt><dd className="mt-3 font-black">{product.material}</dd></div>
              <div className="col-span-2 rounded-2xl border border-[#3c9dea]/15 bg-white p-4"><dt className="text-xs font-black uppercase tracking-[0.14em] text-[#7a8b97]">Kích thước</dt><dd className="mt-3 font-black">{product.size}</dd></div>
            </dl>

            <div className="mt-8"><h2 className="text-sm font-black uppercase tracking-[0.16em] text-[#147bc8]">Điểm nổi bật</h2><ul className="mt-4 grid gap-3">{product.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[#526a7a]"><span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#3c9dea] text-xs font-black text-white" aria-hidden="true">✓</span>{feature}</li>)}</ul></div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/#lien-he" className="button-primary flex-1">Đặt hàng ngay</Link><a href="tel:0763672210" className="button-secondary flex-1">Gọi Homecase</a></div>
            <p className="mt-4 text-center text-xs font-bold text-[#7a8b97]">Giảm 10% đơn đầu tiên • Freeship nội thành Đà Nẵng từ 149K</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#3c9dea]/15 bg-white py-16 sm:py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mb-9 flex items-end justify-between gap-5"><div><p className="eyebrow">You may also like</p><h2 className="section-title">Tote cùng vibe</h2></div><Link href="/san-pham" className="hidden rounded-lg font-black text-[#147bc8] underline decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-[#147bc8] sm:block">Xem tất cả</Link></div><div className="grid gap-6 md:grid-cols-3">{relatedProducts.map((item, index) => <ProductCard key={item.slug} product={item} index={index} />)}</div></div></section>
      <SiteFooter />
    </main>
  );
}
