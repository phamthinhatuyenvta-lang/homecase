import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { featuredPost, formatPostDate, posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Homecase Journal | Chọn, phối và chăm sóc túi tote",
  description: "Bài viết hữu ích về cách chọn túi tote, phối đồ và bảo quản túi cotton dành cho sinh viên.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#fff9f2] text-[#163146]">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
        <nav aria-label="Đường dẫn" className="mb-7 flex items-center gap-2 text-sm font-bold text-[#61727f]">
          <Link href="/" className="rounded hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-[#147bc8]">Trang chủ</Link>
          <span aria-hidden="true">/</span><span className="text-[#147bc8]">Blog</span>
        </nav>
        <p className="eyebrow">Style • Care • Tote guide</p>
        <div className="grid gap-7 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-7xl">Homecase <span className="text-[#3c9dea]">Journal.</span></h1>
          <p className="text-base leading-8 text-[#526a7a] sm:text-lg">Góc chia sẻ cách chọn tote, phối đồ hằng ngày và chăm sóc túi cotton để mỗi chiếc túi đồng hành cùng bạn lâu hơn.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
        <article className="grid overflow-hidden rounded-[32px] border border-[#3c9dea]/15 bg-white shadow-[0_20px_70px_rgba(60,157,234,0.12)] lg:grid-cols-[1.05fr_0.95fr]">
          <Link href={`/blog/${featuredPost.slug}`} className="relative min-h-[360px] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#147bc8] lg:min-h-[520px]">
            <Image src={featuredPost.coverImage} alt={featuredPost.coverAlt} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="bg-[#edf8ff] object-contain p-8 transition duration-500 hover:scale-[1.03]" />
          </Link>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#147bc8]">Bài viết nổi bật • {featuredPost.category}</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl"><Link href={`/blog/${featuredPost.slug}`} className="rounded transition-colors hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147bc8]">{featuredPost.title}</Link></h2>
            <p className="mt-5 leading-7 text-[#5c6f7d]">{featuredPost.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-bold text-[#75848f]"><time dateTime={featuredPost.publishedAt}>{formatPostDate(featuredPost.publishedAt)}</time><span aria-hidden="true">•</span><span>{featuredPost.readingTime}</span></div>
            <Link href={`/blog/${featuredPost.slug}`} className="button-primary mt-8 self-start">Đọc bài viết</Link>
          </div>
        </article>
      </section>

      <section className="border-y border-[#3c9dea]/15 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10"><p className="eyebrow">Bài viết mới</p><h2 className="section-title">Thêm cảm hứng cho daily vibe</h2></div>
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="group flex h-full flex-col rounded-[26px] border border-[#3c9dea]/15 bg-[#fff9f2] p-4">
                <Link href={`/blog/${post.slug}`} className="relative block aspect-[4/3] overflow-hidden rounded-[19px] bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147bc8]"><Image src={post.coverImage} alt={post.coverAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-5 transition duration-500 group-hover:scale-[1.04]" /></Link>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#147bc8]">{post.category}</p><h2 className="mt-3 text-xl font-bold leading-snug tracking-[-0.025em]"><Link href={`/blog/${post.slug}`} className="rounded hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-[#147bc8]">{post.title}</Link></h2><p className="mt-3 flex-1 text-sm leading-6 text-[#61727f]">{post.excerpt}</p><div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#7b8993]"><time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time><span aria-hidden="true">•</span><span>{post.readingTime}</span></div><Link href={`/blog/${post.slug}`} className="mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-lg font-bold underline decoration-[#3c9dea] decoration-2 underline-offset-4 hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147bc8]">Đọc bài viết <span aria-hidden="true">→</span></Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
