import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import ContactForm from "@/components/contact-form";
export const metadata: Metadata = {
  title: "Liên hệ | HOMECASE",
  description:
    "Liên hệ HOMECASE để được tư vấn chọn túi tote cotton phù hợp với nhu cầu đi học, đi làm và đi chơi.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#fff9f2]">
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-slate-600"
          >
            <Link
              href="/"
              className="transition hover:text-[#3c9dea] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3c9dea]"
            >
              Trang chủ
            </Link>

            <span aria-hidden="true">/</span>

            <span aria-current="page" className="font-semibold text-slate-900">
              Liên hệ
            </span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <section>
              <p className="mb-3 font-bold uppercase tracking-[0.16em] text-[#3c9dea]">
                HOMECASE
              </p>

              <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                Liên hệ với chúng mình
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Bạn đang phân vân chưa biết chọn chiếc tote nào? Hãy để lại
                thông tin, HOMECASE sẽ hỗ trợ bạn chọn sản phẩm phù hợp.
              </p>

              <div className="mt-8 space-y-5 rounded-3xl border border-[#3c9dea]/20 bg-white p-6 shadow-sm sm:p-8">
                <ContactItem
                  label="Hotline"
                  value="076 367 2210"
                  href="tel:0763672210"
                />

                <ContactItem
                  label="Email"
                  value="homecasedana@gmail.com"
                  href="mailto:homecasedana@gmail.com"
                />

                <ContactItem
                  label="TikTok"
                  value="@homecasedana"
                  href="https://www.tiktok.com/@homecasedana"
                />

                <ContactItem
                  label="Instagram"
                  value="@homecasedana"
                  href="https://www.instagram.com/homecasedana"
                />

                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-[#3c9dea]">
                    Địa chỉ
                  </p>

                  <address className="mt-1 not-italic leading-7 text-slate-700">
                    71 Ngũ Hành Sơn, Đà Nẵng
                  </address>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="contact-form-title"
              className="rounded-3xl border border-[#3c9dea]/20 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2
                id="contact-form-title"
                className="text-2xl font-bold text-slate-900 sm:text-3xl"
              >
                Gửi lời nhắn cho HOMECASE
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Điền thông tin bên dưới để nhận tư vấn từ HOMECASE.
              </p>

              <ContactForm />
            </section>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

type ContactItemProps = {
  label: string;
  value: string;
  href: string;
};

function ContactItem({ label, value, href }: ContactItemProps) {
  const isExternal = href.startsWith("http");

  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-wide text-[#3c9dea]">
        {label}
      </p>

      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="mt-1 inline-block font-semibold text-slate-800 transition hover:text-[#3c9dea] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3c9dea]"
      >
        {value}
      </a>
    </div>
  );
}