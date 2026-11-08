import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/newsletter-form";

const footerTitleClass =
  "text-xs font-black uppercase tracking-[0.18em] text-[#147bc8]";

const footerLinkClass =
  "text-sm leading-6 text-[#60717e] transition hover:text-[#147bc8] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#147bc8]";

const socialLinks = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@homecasedana",
    icon: <TikTokIcon />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/homecasedana",
    icon: <InstagramIcon />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61594341505584",
    icon: <FacebookIcon />,
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#3c9dea]/15 bg-white">
      <div className="mx-auto grid max-w-[1500px] gap-x-10 gap-y-12 px-5 py-14 sm:grid-cols-2 sm:px-8 xl:grid-cols-[1.3fr_0.9fr_1fr_1.2fr_1.4fr] xl:items-start">
        {/* Thương hiệu */}
        <div className="sm:col-span-2 xl:col-span-1">
          <Link
            href="/"
            aria-label="Về trang chủ HOMECASE"
            className="inline-block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147bc8]"
          >
            <Image
              src="/images/logo-white.png"
              alt="Logo âm bản HOMECASE Canvas Tote"
              width={1000}
              height={1000}
              className="h-16 w-auto rounded-xl object-contain"
            />
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-[#60717e]">
            Trendy Totes, Daily Vibes - túi tote cotton cho những ngày đầy cảm
            hứng.
          </p>
        </div>

        {/* Khám phá */}
        <div>
          <h3 className={footerTitleClass}>Khám phá</h3>

          <nav
            aria-label="Liên kết footer"
            className="mt-5 flex flex-col items-start gap-2"
          >
            <Link href="/san-pham" className={footerLinkClass}>
              Sản phẩm
            </Link>

            <Link href="/blog" className={footerLinkClass}>
              Blog Homecase
            </Link>

            <Link href="/lien-he" className={footerLinkClass}>
              Liên hệ
            </Link>

            <Link href="/dat-hang" className={footerLinkClass}>
              Đặt hàng
            </Link>

            <Link href="/chinh-sach" className={footerLinkClass}>
              Chính sách mua hàng
            </Link>
          </nav>
        </div>

        {/* Mạng xã hội */}
        <div>
          <h3 className={footerTitleClass}>Theo dõi</h3>

          <p className="mt-5 max-w-[200px] text-sm leading-6 text-[#60717e]">
            Kết nối với HOMECASE trên mạng xã hội.
          </p>

          <div className="mt-5 flex flex-nowrap items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Theo dõi HOMECASE trên ${social.name}`}
                title={social.name}
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-[#3c9dea]/20 bg-[#fff9f2] text-[#147bc8] transition hover:-translate-y-1 hover:border-[#3c9dea] hover:bg-[#3c9dea] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147bc8]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Liên hệ */}
        <div>
          <h3 className={footerTitleClass}>Liên hệ</h3>

          <div className="mt-5 flex flex-col items-start gap-2">
            <a
              className={footerLinkClass}
              href="tel:0763672210"
            >
              076 367 2210
            </a>

            <a
              className={`${footerLinkClass} whitespace-nowrap`}
              href="mailto:homecasedana@gmail.com"
            >
              homecasedana@gmail.com
            </a>

          <address className="mt-0 text-sm not-italic leading-6 text-[#60717e]">
            71 Ngũ Hành Sơn, Đà Nẵng
          </address>

            <Link href="/lien-he" className={footerLinkClass}>
              Gửi lời nhắn
            </Link>
          </div>

        </div>

        {/* Đăng ký nhận tin */}
        <div>
          <h3 className={footerTitleClass}>Đăng ký nhận tin</h3>

          <p className="mt-5 max-w-xs text-sm leading-6 text-[#60717e]">
            Nhận thông tin về sản phẩm mới và ưu đãi từ HOMECASE.
          </p>

          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-[#3c9dea]/10 px-5 py-5 text-center text-xs font-bold text-[#6d7d88]">
        © 2026 Homecase. Trendy Totes, Daily Vibes.
      </div>
    </footer>
  );
}

function TikTokIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5"
      fill="currentColor"
    >
      <path d="M15.75 3c.23 1.27.95 2.39 2 3.12A5.9 5.9 0 0 0 21 7.17v3.17a8.97 8.97 0 0 1-5.25-1.72v6.15a6.23 6.23 0 1 1-5.38-6.17v3.22a3.07 3.07 0 1 0 2.2 2.95V3h3.18Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5"
      fill="currentColor"
    >
      <path d="M14 8.5V7.2c0-.8.53-1 1-1h2.8V3.1A17.4 17.4 0 0 0 15.25 3C12.65 3 11 4.58 11 7.48V8.5H8v3.6h3V21h3v-8.9h3.23l.52-3.6H14Z" />
    </svg>
  );
}
