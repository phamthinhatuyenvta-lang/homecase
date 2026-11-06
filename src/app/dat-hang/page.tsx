import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import OrderForm from "@/components/order-form";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Đặt hàng | Homecase",
  description:
    "Đặt túi tote Homecase dành cho học sinh, sinh viên tại Đà Nẵng.",
};

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-[#fff9f2] text-[#163146]">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-16">
        <nav
          aria-label="Đường dẫn"
          className="mb-8 flex items-center gap-2 text-sm font-bold text-[#61727f]"
        >
          <Link
            href="/"
            className="rounded hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-[#147bc8]"
          >
            Trang chủ
          </Link>

          <span aria-hidden="true">/</span>
          <span className="text-[#147bc8]">Đặt hàng</span>
        </nav>

        <div className="max-w-3xl">
          <p className="eyebrow">Order your daily tote</p>

          <h1 className="text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-6xl">
            Đặt túi tote Homecase
          </h1>

          <p className="mt-5 text-base leading-8 text-[#526a7a] sm:text-lg">
            Điền thông tin để Homecase tư vấn mẫu túi, màu sắc và phương thức
            nhận hàng phù hợp với bạn.
          </p>
        </div>

        <div className="mt-10">
  <Suspense
    fallback={
      <div className="rounded-[28px] border border-[#3c9dea]/15 bg-white p-6 text-[#61727f] sm:p-10">
        Đang tải form đặt hàng...
      </div>
    }
  >
    <OrderForm />
  </Suspense>
</div>
      </section>

      <SiteFooter />
    </main>
  );
}