"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm", href: "/san-pham" },
  { label: "Blog", href: "/blog" },
  { label: "Giới thiệu", href: "/#gioi-thieu" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#3c9dea] px-4 py-2.5 text-center text-xs font-bold tracking-[0.08em] text-white sm:text-sm">
        Giảm 10% cho đơn hàng đầu tiên <span aria-hidden="true">•</span>{" "}
        Freeship nội thành Đà Nẵng từ 149K
      </div>

      <header className="sticky top-0 z-50 border-b border-[#3c9dea]/15 bg-[#fff9f2]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            aria-label="Homecase - Về trang chủ"
            className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#146cad]"
          >
            <Image
              src="/images/logo-primary.png"
              alt="Logo Homecase Canvas Tote"
              width={1000}
              height={1000}
              priority
              className="h-12 w-auto object-contain mix-blend-multiply sm:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Điều hướng chính">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md py-2 text-sm font-bold text-[#163146] transition-colors hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147bc8]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-[#3c9dea]/30 text-[#163146] transition-colors hover:bg-[#3c9dea] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147bc8] md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Đóng menu" : "Mở menu"}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="sr-only">{isOpen ? "Đóng menu" : "Mở menu"}</span>
            {isOpen ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-[#3c9dea]/15 bg-[#fff9f2] px-5 py-4 md:hidden"
            aria-label="Điều hướng trên điện thoại"
          >
            <div className="mx-auto grid max-w-7xl gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-bold text-[#163146] transition-colors hover:bg-[#3c9dea]/10 hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-[#147bc8]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
