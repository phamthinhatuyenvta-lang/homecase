import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import { featuredProducts, formatPrice } from "@/data/products";
import { posts } from "@/data/posts";

const benefits = [
  {
    number: "01",
    title: "Cotton dễ dùng",
    description: "Chất liệu cotton thân thiện, nhẹ và phù hợp với nhịp sống năng động.",
  },
  {
    number: "02",
    title: "Trẻ trung vừa đủ",
    description: "Bảng màu xanh, kem và trắng giúp chiếc tote dễ dàng đi cùng nhiều outfit.",
  },
  {
    number: "03",
    title: "Sinh ra để đi học",
    description: "Không gian rộng rãi cho giáo trình, bình nước và những món đồ hằng ngày.",
  },
];

export default function Home() {
  return (
    <main id="trang-chu" className="min-h-screen overflow-hidden bg-[#fff9f2] text-[#163146]">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-7 sm:px-8 sm:pb-24 sm:pt-10">
        <div className="relative overflow-hidden rounded-[28px] border border-[#3c9dea]/20 bg-white shadow-[0_24px_80px_rgba(60,157,234,0.14)] sm:rounded-[40px]">
          <Image
            src="/images/hero-homecase.png"
            alt="Bộ sưu tập túi tote Homecase với thông điệp Trendy Totes, Daily Vibes"
            width={1702}
            height={630}
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
            className="h-auto min-h-[230px] w-full object-cover object-center"
          />
        </div>

        <div className="grid gap-8 pt-9 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:pt-12">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#147bc8]">Canvas tote • Đà Nẵng</p>
            <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.045em] text-[#163146] sm:text-6xl lg:text-7xl">
              Trendy Totes,
              <span className="block text-[#3c9dea]">Daily Vibes.</span>
            </h1>
          </div>
          <div className="lg:pb-1">
            <p className="text-base leading-7 text-[#4e6475] sm:text-lg">
              Những chiếc túi tote cotton trẻ trung, dễ phối và đủ rộng để đồng hành cùng bạn từ giảng đường đến mọi cuộc hẹn.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link className="button-primary" href="/san-pham">Khám phá bộ sưu tập</Link>
              <Link className="button-secondary" href="/blog">Đọc blog</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="san-pham" className="scroll-mt-32 border-y border-[#3c9dea]/15 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-9 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Made for your daily vibe</p>
              <h2 className="section-title">Tote được yêu thích</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#5c6f7d] sm:text-right">Ba thiết kế tiêu biểu cho những ngày đi học, đi làm và dạo phố.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <article key={product.name} className="group rounded-[28px] border border-[#3c9dea]/15 bg-[#fff9f2] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(60,157,234,0.14)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-white">
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[#147bc8] shadow-sm">0{index + 1}</span>
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-5 transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="px-2 pb-2 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black tracking-[-0.025em]">{product.name}</h3>
                    <p className="whitespace-nowrap font-black text-[#147bc8]">{formatPrice(product.price)}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#61727f]">{product.shortDescription}</p>
                  <Link href={`/san-pham/${product.slug}`} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg font-black text-[#163146] underline decoration-[#3c9dea] decoration-2 underline-offset-4 transition-colors hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147bc8]">
                    Xem chi tiết <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gioi-thieu" className="scroll-mt-32 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[32px] bg-[#dff1ff]">
            <Image
              src="/images/tote-green-lifestyle.png"
              alt="Sinh viên trẻ đeo túi tote Homecase phối màu kem và xanh"
              width={1080}
              height={1350}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">Hello, we are Homecase</p>
            <h2 className="section-title max-w-2xl">Chiếc tote mang theo một ngày thật riêng.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#506777] sm:text-lg">
              Homecase tạo nên những mẫu túi tote cotton có phom dáng dễ dùng, màu sắc tươi sáng và tinh thần gần gũi. Một lựa chọn vừa đủ nổi bật để thể hiện cá tính, vừa đủ tiện lợi để xuất hiện mỗi ngày.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <article key={benefit.number} className="rounded-2xl border border-[#3c9dea]/15 bg-white p-5">
                  <p className="text-sm font-black text-[#3c9dea]">{benefit.number}</p>
                  <h3 className="mt-5 text-lg font-black tracking-[-0.025em]">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#61727f]">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="scroll-mt-32 bg-[#163146] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8fd0ff]">Homecase journal</p>
              <Link href="/blog" className="block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8fd0ff]">
                <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] transition-colors hover:text-[#8fd0ff] sm:text-5xl">Mặc đẹp hơn. Dùng tote lâu hơn.</h2>
              </Link>
              <p className="mt-5 max-w-md leading-7 text-white/70">Góc nhỏ chia sẻ cách chọn, phối và chăm sóc chiếc túi đồng hành cùng bạn mỗi ngày.</p>
            </div>
            <div className="divide-y divide-white/15 border-y border-white/15">
              {posts.map((post, index) => (
                <Link key={post.title} href={`/blog/${post.slug}`} className="group grid min-h-28 grid-cols-[auto_1fr_auto] items-center gap-4 rounded-lg px-1 py-5 transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8fd0ff] sm:gap-7 sm:px-4">
                  <span className="text-xs font-black text-[#8fd0ff]">0{index + 1}</span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-white/50">{post.category}</span>
                    <span className="mt-2 block text-lg font-black tracking-[-0.02em] sm:text-xl">{post.title}</span>
                  </span>
                  <span className="hidden text-sm text-white/55 sm:block">{post.readingTime} <span className="ml-3 inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="lien-he" className="scroll-mt-32 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#3c9dea] px-6 py-12 text-center text-white shadow-[0_24px_80px_rgba(60,157,234,0.25)] sm:px-12 sm:py-16">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-white/75">Your tote, your vibe</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.045em] sm:text-6xl">Tìm chiếc tote dành cho bạn.</h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/85">Nhắn Homecase để được tư vấn mẫu, màu sắc và kích thước phù hợp với lịch trình của bạn.</p>
          <a href="tel:0763672210" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 font-black text-[#147bc8] transition hover:-translate-y-0.5 hover:bg-[#fff9f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Gọi 076 367 2210</a>
        </div>
      </section>

      <footer className="border-t border-[#3c9dea]/15 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <Image src="/images/logo-primary.png" alt="Logo Homecase Canvas Tote" width={1000} height={1000} className="h-16 w-auto object-contain object-left mix-blend-multiply" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#60717e]">Trendy Totes, Daily Vibes — túi tote cotton cho những ngày đầy cảm hứng.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="footer-title">Theo dõi</h3>
              <p className="footer-copy">TikTok: homecasedana</p>
              <p className="footer-copy">Instagram: homecasedana</p>
            </div>
            <div>
              <h3 className="footer-title">Liên hệ</h3>
              <a className="footer-link" href="tel:0763672210">076 367 2210</a>
              <a className="footer-link" href="mailto:homecasedana@gmail.com">homecasedana@gmail.com</a>
            </div>
            <div>
              <h3 className="footer-title">Ghé Homecase</h3>
              <address className="footer-copy not-italic">71 Ngũ Hành Sơn,<br />Đà Nẵng</address>
            </div>
          </div>
        </div>
        <div className="border-t border-[#3c9dea]/10 px-5 py-5 text-center text-xs font-bold text-[#6d7d88]">© 2026 Homecase. Trendy Totes, Daily Vibes.</div>
      </footer>
    </main>
  );
}
