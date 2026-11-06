"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { formatPrice, products } from "@/data/products";
import { supabase } from "@/lib/supabase";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function OrderForm() {
  const searchParams = useSearchParams();
  const requestedProduct = searchParams.get("san-pham");

  const [selectedProduct, setSelectedProduct] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    if (!requestedProduct) {
      return;
    }

    const productExists = products.some(
      (product) => product.slug === requestedProduct,
    );

    if (productExists) {
      setSelectedProduct(requestedProduct);
    }
  }, [requestedProduct]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const customerName = String(
      formData.get("customerName") ?? "",
    ).trim();

    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const productSlug = String(formData.get("product") ?? "").trim();
    const quantity = Number(formData.get("quantity"));
    const address = String(formData.get("address") ?? "").trim();
    const note = String(formData.get("note") ?? "").trim();
    const consent = formData.get("consent") === "on";

    setStatus("submitting");

    const { error } = await supabase.from("orders").insert({
      customer_name: customerName,
      phone,
      email: email || null,
      product_slug: productSlug,
      quantity,
      address,
      note: note || null,
      consent,
    });

    if (error) {
      console.error("Không thể gửi đơn đặt hàng:", error);
      setStatus("error");
      return;
    }

    form.reset();
    setSelectedProduct("");
    setStatus("success");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-[#3c9dea]/15 bg-white p-6 shadow-[0_18px_50px_rgba(60,157,234,0.1)] sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="customerName"
            className="mb-2 block text-sm font-bold text-[#163146]"
          >
            Họ và tên <span className="text-red-600">*</span>
          </label>

          <input
            id="customerName"
            name="customerName"
            type="text"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            placeholder="Nguyễn Văn A"
            className="min-h-12 w-full rounded-xl border border-[#cbd8e1] bg-white px-4 text-[#163146] outline-none transition focus:border-[#3c9dea] focus:ring-4 focus:ring-[#3c9dea]/15"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-bold text-[#163146]"
          >
            Số điện thoại <span className="text-red-600">*</span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            minLength={8}
            maxLength={20}
            pattern="[0-9+\s]{8,20}"
            autoComplete="tel"
            placeholder="076 367 2210"
            className="min-h-12 w-full rounded-xl border border-[#cbd8e1] bg-white px-4 text-[#163146] outline-none transition focus:border-[#3c9dea] focus:ring-4 focus:ring-[#3c9dea]/15"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-bold text-[#163146]"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            maxLength={150}
            autoComplete="email"
            placeholder="email@example.com"
            className="min-h-12 w-full rounded-xl border border-[#cbd8e1] bg-white px-4 text-[#163146] outline-none transition focus:border-[#3c9dea] focus:ring-4 focus:ring-[#3c9dea]/15"
          />
        </div>

        <div>
          <label
            htmlFor="product"
            className="mb-2 block text-sm font-bold text-[#163146]"
          >
            Sản phẩm <span className="text-red-600">*</span>
          </label>

          <select
            id="product"
            name="product"
            required
            value={selectedProduct}
            onChange={(event) => {
              setSelectedProduct(event.target.value);
              setStatus("idle");
            }}
            className="min-h-12 w-full rounded-xl border border-[#cbd8e1] bg-white px-4 text-[#163146] outline-none transition focus:border-[#3c9dea] focus:ring-4 focus:ring-[#3c9dea]/15"
          >
            <option value="" disabled>
              Chọn sản phẩm
            </option>

            {products.map((product) => (
              <option key={product.slug} value={product.slug}>
                {product.name} — {formatPrice(product.price)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="quantity"
            className="mb-2 block text-sm font-bold text-[#163146]"
          >
            Số lượng <span className="text-red-600">*</span>
          </label>

          <input
            id="quantity"
            name="quantity"
            type="number"
            required
            min={1}
            max={10}
            defaultValue={1}
            className="min-h-12 w-full rounded-xl border border-[#cbd8e1] bg-white px-4 text-[#163146] outline-none transition focus:border-[#3c9dea] focus:ring-4 focus:ring-[#3c9dea]/15"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="address"
            className="mb-2 block text-sm font-bold text-[#163146]"
          >
            Địa chỉ nhận hàng <span className="text-red-600">*</span>
          </label>

          <input
            id="address"
            name="address"
            type="text"
            required
            minLength={5}
            maxLength={300}
            autoComplete="street-address"
            placeholder="Số nhà, đường, phường/xã, quận/huyện"
            className="min-h-12 w-full rounded-xl border border-[#cbd8e1] bg-white px-4 text-[#163146] outline-none transition focus:border-[#3c9dea] focus:ring-4 focus:ring-[#3c9dea]/15"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="note"
            className="mb-2 block text-sm font-bold text-[#163146]"
          >
            Ghi chú
          </label>

          <textarea
            id="note"
            name="note"
            rows={4}
            maxLength={1000}
            placeholder="Màu sắc, thời gian nhận hàng hoặc yêu cầu khác..."
            className="w-full resize-y rounded-xl border border-[#cbd8e1] bg-white px-4 py-3 text-[#163146] outline-none transition focus:border-[#3c9dea] focus:ring-4 focus:ring-[#3c9dea]/15"
          />
        </div>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl bg-[#fff9f2] p-4">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 size-4 accent-[#3c9dea]"
        />

        <span className="text-sm leading-6 text-[#526a7a]">
          Tôi đồng ý để HOMECASE sử dụng thông tin trên nhằm liên hệ và xử lý
          yêu cầu đặt hàng. <span className="text-red-600">*</span>
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#3c9dea] px-7 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#147bc8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147bc8] disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting"
          ? "Đang gửi đơn..."
          : "Gửi yêu cầu đặt hàng"}
      </button>

      <div className="mt-6" aria-live="polite">
        {status === "success" && (
          <div
            role="status"
            className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800"
          >
            <strong>Gửi đơn thành công!</strong> HOMECASE đã ghi nhận thông tin
            và sẽ liên hệ với bạn để xác nhận sản phẩm, phí vận chuyển và hình
            thức thanh toán.
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
          >
            Chưa thể gửi yêu cầu đặt hàng. Vui lòng kiểm tra lại thông tin hoặc
            thử lại sau.
          </div>
        )}
      </div>
    </form>
  );
}