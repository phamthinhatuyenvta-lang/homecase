"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

type FormStatus = "idle" | "submitting" | "success" | "duplicate" | "error";

export default function NewsletterForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim().toLowerCase();
    const website = String(formData.get("website") ?? "").trim();

    if (website) {
      form.reset();
      setStatus("success");
      return;
    }

    setStatus("submitting");

    const { error } = await supabase.from("newsletter_subscribers").insert({
      email,
      source: "footer",
    });

    if (error) {
      if (error.code === "23505") {
        setStatus("duplicate");
        return;
      }

      console.error("Không thể đăng ký nhận tin:", error);
      setStatus("error");
      return;
    }

    form.reset();
    setStatus("success");
  }

  return (
    <form className="mt-5 w-full max-w-xs" onSubmit={handleSubmit}>
      <div className="flex items-center rounded-full border border-[#3c9dea]/25 bg-[#fff9f2] p-1.5 transition focus-within:border-[#3c9dea] focus-within:ring-4 focus-within:ring-[#3c9dea]/10">
        <label htmlFor="newsletter-email" className="sr-only">
          Email đăng ký nhận tin
        </label>

        <input
          id="newsletter-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          maxLength={150}
          placeholder="Email của bạn"
          onChange={() => status !== "idle" && setStatus("idle")}
          className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-[#163146] outline-none placeholder:text-[#7b8993]"
        />

        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          aria-label="Đăng ký nhận tin"
          className="grid size-10 shrink-0 place-items-center rounded-full bg-[#3c9dea] text-lg text-white transition hover:bg-[#147bc8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#147bc8] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span aria-hidden="true">
            {status === "submitting" ? "…" : "→"}
          </span>
        </button>
      </div>

      <div className="mt-3 min-h-5" aria-live="polite">
        {status === "idle" && (
          <p className="text-xs leading-5 text-[#7b8993]">
            Theo dõi những cập nhật mới nhất từ Homecase.
          </p>
        )}

        {status === "success" && (
          <p role="status" className="text-xs font-bold leading-5 text-green-700">
            Đăng ký thành công! Cảm ơn bạn đã đồng hành cùng Homecase.
          </p>
        )}

        {status === "duplicate" && (
          <p role="status" className="text-xs font-bold leading-5 text-[#147bc8]">
            Email này đã đăng ký nhận tin rồi nha.
          </p>
        )}

        {status === "error" && (
          <p role="alert" className="text-xs font-bold leading-5 text-red-700">
            Chưa thể đăng ký. Bạn vui lòng thử lại sau.
          </p>
        )}
      </div>
    </form>
  );
}
