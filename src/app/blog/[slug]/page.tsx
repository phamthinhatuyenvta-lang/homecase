import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { formatPostDate, getPost, posts } from "@/data/posts";

type BlogPostPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Không tìm thấy bài viết | Homecase" };
  return { title: `${post.title} | Homecase Journal`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const relatedPosts = posts.filter((item) => item.slug !== post.slug);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "Homecase" },
  };

  return (
    <main className="min-h-screen bg-[#fff9f2] text-[#163146]">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <header className="mx-auto max-w-5xl px-5 pb-10 pt-10 sm:px-8 sm:pb-14 sm:pt-16">
          <nav aria-label="Đường dẫn" className="mb-8 flex flex-wrap items-center gap-2 text-sm font-bold text-[#61727f]"><Link href="/" className="rounded hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-[#147bc8]">Trang chủ</Link><span aria-hidden="true">/</span><Link href="/blog" className="rounded hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-[#147bc8]">Blog</Link><span aria-hidden="true">/</span><span className="text-[#147bc8]">{post.category}</span></nav>
          <p className="eyebrow">{post.category}</p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#526a7a] sm:text-xl">{post.excerpt}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-bold text-[#71818d]"><span>Bởi {post.author}</span><span aria-hidden="true">•</span><time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time><span aria-hidden="true">•</span><span>{post.readingTime}</span></div>
        </header>

        <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-[#3c9dea]/15 bg-white sm:rounded-[38px]"><Image src={post.coverImage} alt={post.coverAlt} fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="bg-[#edf8ff] object-contain p-6 sm:p-10" /></div></div>

        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[240px_minmax(0,720px)] lg:items-start lg:gap-16">
          <aside className="rounded-2xl border border-[#3c9dea]/15 bg-white p-5 lg:sticky lg:top-32">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#147bc8]">Mục lục</p>
            <nav aria-label="Mục lục bài viết" className="mt-4 grid gap-2">{post.sections.map((section) => <a key={section.id} href={`#${section.id}`} className="rounded-lg py-1 text-sm font-bold leading-5 text-[#61727f] hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-[#147bc8]">{section.title}</a>)}{post.faq && <a href="#cau-hoi-thuong-gap" className="rounded-lg py-1 text-sm font-bold leading-5 text-[#61727f] hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-[#147bc8]">Câu hỏi thường gặp</a>}</nav>
          </aside>

          <div className="article-content min-w-0">
            {post.introduction.map((paragraph) => <p key={paragraph} className="text-lg leading-8 text-[#425d70] first:text-xl first:font-bold first:leading-9">{paragraph}</p>)}
            {post.sections.map((section, index) => (
              <div key={section.id}>
                <section id={section.id} className="scroll-mt-32 pt-10"><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}{section.subsections?.map((subsection) => <div key={subsection.title}><h3>{subsection.title}</h3>{subsection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>)}</section>
                {index === 2 && <aside className="my-10 rounded-[26px] bg-[#3c9dea] p-7 text-white sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Homecase collection</p><h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Tìm chiếc tote hợp lịch học của bạn</h2><p className="mt-3 text-white/85">So sánh kích thước, màu sắc và thiết kế trong bộ sưu tập Homecase.</p><Link href="/san-pham" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-white px-6 py-3 font-bold text-[#147bc8] hover:bg-[#fff9f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Khám phá bộ sưu tập túi tote Homecase</Link></aside>}
              </div>
            ))}

            {post.faq && <section id="cau-hoi-thuong-gap" className="scroll-mt-32 pt-10"><h2>Câu hỏi thường gặp</h2><div className="mt-6 grid gap-4">{post.faq.map((item) => <div key={item.question} className="rounded-2xl border border-[#3c9dea]/15 bg-white p-5 sm:p-6"><h3 className="mt-0">{item.question}</h3><p className="mb-0">{item.answer}</p></div>)}</div></section>}

            <aside className="mt-12 rounded-[28px] bg-[#163146] p-7 text-white sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8fd0ff]">Trendy Totes, Daily Vibes</p><h2 className="mt-3 text-3xl font-bold text-white">Chọn tote dễ hơn cùng Homecase.</h2><p className="mt-4 text-white/75">Xem bộ sưu tập hoặc để Homecase tư vấn theo lịch học và đồ dùng bạn thường mang.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/san-pham" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#3c9dea] px-6 py-3 font-bold text-white hover:bg-[#278bd9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Xem sản phẩm</Link><Link href="/#lien-he" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 font-bold text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Nhận tư vấn chọn tote</Link></div></aside>
          </div>
        </div>
      </article>

      <section className="border-y border-[#3c9dea]/15 bg-white py-16 sm:py-20"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="eyebrow">Đọc tiếp</p><h2 className="section-title">Bài viết liên quan</h2><div className="mt-9 grid gap-6 md:grid-cols-2">{relatedPosts.map((item) => <article key={item.slug} className="rounded-2xl border border-[#3c9dea]/15 bg-[#fff9f2] p-6"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#147bc8]">{item.category}</p><h3 className="mt-3 text-xl font-bold"><Link href={`/blog/${item.slug}`} className="rounded hover:text-[#147bc8] focus-visible:outline-2 focus-visible:outline-[#147bc8]">{item.title}</Link></h3><p className="mt-3 text-sm leading-6 text-[#61727f]">{item.excerpt}</p></article>)}</div></div></section>
      <SiteFooter />
    </main>
  );
}
