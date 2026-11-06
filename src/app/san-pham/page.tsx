import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/product-card";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Bộ sưu tập túi tote | Homecase",
  description: "Khám phá 5 mẫu túi tote cotton Homecase dành cho Gen Z và sinh viên tại Đà Nẵng.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#fff9f2] text-[#163146]">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
        <nav aria-label="Đường dẫn" className="mb-7 flex items-center gap-2 text-sm font-bold text-[#61727f]"><Link href="/" className="rounded hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-[#147bc8]">Trang chủ</Link><span aria-hidden="true">/</span><span className="text-[#147bc8]">Sản phẩm</span></nav>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div><p className="eyebrow">Homecase collection 2026</p><h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-7xl">Tote cho mọi <span className="text-[#3c9dea]">daily vibe.</span></h1></div>
          <p className="max-w-xl text-base leading-8 text-[#526a7a] sm:text-lg">Từ mẫu tote nhẹ cho buổi học nhanh đến chiếc túi phom rộng cho lịch trình cả ngày — chọn thiết kế hợp với cách bạn mang theo thế giới của mình.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-2" aria-label="Đặc điểm bộ sưu tập"><span className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">5 thiết kế</span><span className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">Cotton</span><span className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">50K–150K</span><span className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm">Dành cho Gen Z</span></div>
      </section>

      <section className="border-y border-[#3c9dea]/15 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex items-center justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#147bc8]">Tất cả sản phẩm</p><p className="mt-2 text-sm text-[#61727f]">Hiển thị {products.length} mẫu túi</p></div><p className="hidden text-sm font-bold text-[#61727f] sm:block">Sắp xếp: Nổi bật</p></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-[30px] bg-[#3c9dea] px-7 py-10 text-white sm:px-12 sm:py-12 lg:flex-row lg:items-center"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-white/70">Chưa biết chọn mẫu nào?</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">Homecase giúp bạn tìm đúng chiếc tote.</h2></div><Link href="/#lien-he" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 font-black text-[#147bc8] transition hover:-translate-y-0.5 hover:bg-[#fff9f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Nhận tư vấn</Link></div></section>
      <SiteFooter />
    </main>
  );
}
