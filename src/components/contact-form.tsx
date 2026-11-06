"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const customerName = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const topic = String(formData.get("topic") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const consent = formData.get("consent") === "on";

    setStatus("submitting");

    const { error } = await supabase.from("contacts").insert({
      customer_name: customerName,
      phone,
      email: email || null,
      topic: topic || null,
      message,
      consent,
    });

    if (error) {
      console.error("Không thể gửi form liên hệ:", error);
      setStatus("error");
      return;
    }

    form.reset();
    setStatus("success");
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block font-bold text-slate-800"
        >
          Họ và tên <span className="text-red-600">*</span>
        </label>

        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
          placeholder="Ví dụ: Nguyễn Minh Anh"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-[#3c9dea] focus:border-[#3c9dea] focus:ring-4 focus:ring-[#3c9dea]/15"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-phone"
            className="mb-2 block font-bold text-slate-800"
          >
            Số điện thoại <span className="text-red-600">*</span>
          </label>

          <input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            minLength={8}
            maxLength={20}
            pattern="[0-9+\s]{8,20}"
            placeholder="076 367 2210"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-[#3c9dea] focus:border-[#3c9dea] focus:ring-4 focus:ring-[#3c9dea]/15"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block font-bold text-slate-800"
          >
            Email
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={150}
            placeholder="tenban@email.com"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-[#3c9dea] focus:border-[#3c9dea] focus:ring-4 focus:ring-[#3c9dea]/15"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-topic"
          className="mb-2 block font-bold text-slate-800"
        >
          Bạn cần hỗ trợ về
        </label>

        <select
          id="contact-topic"
          name="topic"
          defaultValue=""
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition hover:border-[#3c9dea] focus:border-[#3c9dea] focus:ring-4 focus:ring-[#3c9dea]/15"
        >
          <option value="">Chọn nội dung cần hỗ trợ</option>
          <option value="product-advice">Tư vấn chọn túi tote</option>
          <option value="order">Hỗ trợ đặt hàng</option>
          <option value="shipping">Giao hàng và vận chuyển</option>
          <option value="return">Đổi trả sản phẩm</option>
          <option value="other">Nội dung khác</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block font-bold text-slate-800"
        >
          Nội dung <span className="text-red-600">*</span>
        </label>

        <textarea
          id="contact-message"
          name="message"
          required
          minLength={5}
          maxLength={2000}
          rows={6}
          placeholder="Hãy cho HOMECASE biết bạn cần hỗ trợ điều gì..."
          className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-[#3c9dea] focus:border-[#3c9dea] focus:ring-4 focus:ring-[#3c9dea]/15"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-600">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[#3c9dea]"
        />

        <span>
          Tôi đồng ý để HOMECASE sử dụng thông tin trên nhằm liên hệ và hỗ trợ
          yêu cầu của tôi.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-[#3c9dea] px-6 py-3.5 font-bold text-white transition hover:bg-[#2789d4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3c9dea] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Đang gửi..." : "Gửi lời nhắn"}
      </button>

      <p className="text-center text-sm leading-6 text-slate-500">
        HOMECASE sẽ phản hồi qua số điện thoại hoặc email bạn cung cấp.
      </p>

      <div aria-live="polite">
        {status === "success" && (
          <div
            role="status"
            className="rounded-2xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800"
          >
            Gửi lời nhắn thành công! HOMECASE đã ghi nhận thông tin và sẽ liên
            hệ với bạn.
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
          >
            Chưa thể gửi lời nhắn. Vui lòng kiểm tra lại thông tin hoặc thử lại
            sau.
          </div>
        )}
      </div>
    </form>
  );
}