import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#3c9dea]/15 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <Link
            href="/"
            aria-label="Về trang chủ Homecase"
            className="inline-block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147bc8]"
          >
            <Image
              src="/images/logo-primary.png"
              alt="Logo Homecase Canvas Tote"
              width={1000}
              height={1000}
              className="h-16 w-auto object-contain object-left mix-blend-multiply"
            />
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-6 text-[#60717e]">
            Trendy Totes, Daily Vibes — túi tote cotton cho những ngày đầy cảm
            hứng.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="footer-title">Khám phá</h3>

            <Link href="/san-pham" className="footer-link">
              Sản phẩm
            </Link>

            <Link href="/blog" className="footer-link">
              Homecase Journal
            </Link>

            <Link href="/lien-he" className="footer-link">
              Liên hệ
            </Link>

            <Link href="/dat-hang" className="footer-link">
              Đặt hàng
            </Link>
            <Link href="/chinh-sach" className="footer-link">
  Chính sách mua hàng
</Link>
          </div>

          <div>
            <h3 className="footer-title">Theo dõi</h3>

            <a
              className="footer-link"
              href="https://www.tiktok.com/@homecasedana"
              target="_blank"
              rel="noreferrer"
            >
              TikTok: homecasedana
            </a>

            <a
              className="footer-link"
              href="https://www.instagram.com/homecasedana"
              target="_blank"
              rel="noreferrer"
            >
              Instagram: homecasedana
            </a>
          </div>

          <div>
            <h3 className="footer-title">Liên hệ</h3>

            <a className="footer-link" href="tel:0763672210">
              076 367 2210
            </a>

            <a
              className="footer-link break-all"
              href="mailto:homecasedana@gmail.com"
            >
              homecasedana@gmail.com
            </a>

            <Link href="/lien-he" className="footer-link">
              Gửi lời nhắn
            </Link>
          </div>

          <div>
            <h3 className="footer-title">Ghé Homecase</h3>

            <address className="footer-copy not-italic">
              71 Ngũ Hành Sơn,
              <br />
              Đà Nẵng
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-[#3c9dea]/10 px-5 py-5 text-center text-xs font-bold text-[#6d7d88]">
        © 2026 Homecase. Trendy Totes, Daily Vibes.
      </div>
    </footer>
  );
}