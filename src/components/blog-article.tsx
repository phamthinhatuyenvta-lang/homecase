import Image from "next/image";
import Link from "next/link";
import type { BlogPost, Section } from "@/data/blog/cach-chon-tui-tote";

const HOTLINE_DISPLAY = "076 367 2210";
const HOTLINE_TEL = "tel:0763672210";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });
}

function CtaBlock({ variant }: { variant: "mid" | "end" }) {
  const heading =
    variant === "mid"
      ? "Khám phá bộ sưu tập túi tote Homecase"
      : "Nhận tư vấn chọn tote";
  const text =
    variant === "mid"
      ? "Xem các mẫu tote cotton xanh, kem và trắng, rồi đối chiếu kích thước với đồ bạn hay mang."
      : "Chưa chắc nên chọn mẫu nào? Nhắn Homecase kèm loại laptop và lượng đồ bạn thường mang để được tư vấn.";

  return (
    <aside
      aria-label={heading}
      className="my-8 overflow-hidden rounded-[22px] border border-[#3c9dea]/20 bg-[#eef8ff] p-5 shadow-[0_14px_40px_rgba(60,157,234,0.08)] sm:my-12 sm:rounded-[28px] sm:p-8"
    >
      <p className="text-xl font-bold text-[#163146]">
  {heading}
</p>
      <p className="mt-2 max-w-xl leading-7 text-[#526a7a]">
  {text}
</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <Link
  href="/san-pham"
  className="inline-flex w-full items-center justify-center rounded-full bg-[#3c9dea] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#147bc8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147bc8] sm:w-auto"
>
  Khám phá bộ sưu tập túi tote Homecase
</Link>
        <Link
  href="/lien-he"
  className="inline-flex w-full items-center justify-center rounded-full border border-[#3c9dea] bg-white px-6 py-3 text-sm font-bold text-[#147bc8] transition hover:bg-[#dff2ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147bc8] sm:w-auto"
>
  Nhận tư vấn chọn tote
</Link>
      </div>
      {variant === "end" && (
        <p className="mt-4 text-sm text-slate-500">
          Hoặc gọi hotline{" "}
          <a
            href={HOTLINE_TEL}
            className="font-semibold text-slate-900 underline underline-offset-4"
          >
            {HOTLINE_DISPLAY}
          </a>
        </p>
      )}
    </aside>
  );
}

function List({
  items,
  ordered = false,
}: {
  items: string[];
  ordered?: boolean;
}) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      className={`mt-4 space-y-2.5 pl-1 text-[17px] leading-8 text-slate-700 ${
        ordered ? "list-none" : "list-none"
      }`}
    >
      {items.map((item, i) => (
        <li key={item} className="flex gap-3">
          {ordered ? (
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-800">
              {i + 1}
            </span>
          ) : (
            <span
              aria-hidden="true"
              className="mt-3 h-2 w-2 shrink-0 rounded-full bg-sky-500"
            />
          )}
          <span>{item}</span>
        </li>
      ))}
    </Tag>
  );
}

function SectionView({ section, index }: { section: Section; index: number }) {
  return (
    <>
      <section
        id={section.id}
        aria-labelledby={`${section.id}-title`}
        className="scroll-mt-28 pt-12"
      >
        <h2
          id={`${section.id}-title`}
          className="flex items-baseline gap-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-[28px]"
        >
          <span className="text-sky-500">{String(index + 1).padStart(2, "0")}</span>
          {section.title}
        </h2>

        {section.paragraphs.map((p) => (
          <p key={p} className="mt-4 break-words text-base leading-7 text-slate-700 sm:text-[17px] sm:leading-8">
            {p}
          </p>
        ))}

        {section.bullets && <List items={section.bullets} />}
        {section.numbered && <List items={section.numbered} ordered />}

        {section.table && (
  <div className="-mx-1 mt-7 max-w-[calc(100vw-2rem)] overflow-x-auto overscroll-x-contain rounded-[18px] border border-[#3c9dea]/20 bg-white shadow-[0_10px_30px_rgba(60,157,234,0.06)] sm:mx-0 sm:max-w-full sm:rounded-[22px]">
    <table className="w-full min-w-[620px] border-collapse text-left text-sm">
      <caption className="bg-[#3c9dea] px-5 py-4 text-left text-sm font-bold text-white">
        {section.table.caption}
      </caption>

      <thead>
        <tr className="border-b border-[#3c9dea]/20 bg-[#eaf6ff]">
          {section.table.headers.map((header) => (
            <th
              key={header}
              scope="col"
              className="px-4 py-3 sm:px-5 sm:py-4 font-bold text-[#163146]"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {section.table.rows.map((row) => (
          <tr
            key={row[0]}
            className="border-t border-[#3c9dea]/10 bg-white align-top transition hover:bg-[#f4fbff]"
          >
            {row.map((cell, index) =>
              index === 0 ? (
                <th
                  key={cell}
                  scope="row"
                  className="px-4 py-3 sm:px-5 sm:py-4 font-bold text-[#163146]"
                >
                  {cell}
                </th>
              ) : (
                <td
                  key={cell}
                  className="px-4 py-3 sm:px-5 sm:py-4 leading-6 text-[#526a7a]"
                >
                  {cell}
                </td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

        {section.subsections?.map((sub) => (
          <div key={sub.title}>
            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              {sub.title}
            </h3>
            {sub.paragraphs.map((p) => (
              <p key={p} className="mt-3 text-[17px] leading-8 text-slate-700">
                {p}
              </p>
            ))}
            {sub.bullets && <List items={sub.bullets} />}
          </div>
        ))}

        {section.products && (
  <div className="mt-8 grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {section.products.map((product) => (
      <article
        key={product.href}
        className="group overflow-hidden rounded-[22px] border border-[#3c9dea]/20 bg-white shadow-[0_12px_32px_rgba(60,157,234,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(60,157,234,0.15)]"
      >
        <Link
          href={product.href}
          className="block rounded-[22px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#147bc8]"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-[#fff9f2]">
            <Image
              src={product.image}
              alt={product.alt}
              fill
              sizes="(min-width: 1024px) 240px, (min-width: 640px) 45vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div className="flex flex-col gap-1 p-4 min-[420px]:flex-row min-[420px]:items-start min-[420px]:justify-between min-[420px]:gap-3">
            <h3 className="font-bold leading-6 text-[#163146]">
              {product.name}
            </h3>

            <p className="shrink-0 whitespace-nowrap font-bold text-[#147bc8]">
              {product.price}
            </p>
          </div>
        </Link>
      </article>
    ))}
  </div>
)}

        {section.callout && (
          <div
            role="note"
            className="mt-8 rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-5"
          >
            <p className="font-semibold text-slate-900">{section.callout.title}</p>
            <p className="mt-1 leading-7 text-slate-700">{section.callout.text}</p>
          </div>
        )}
      </section>
      {section.cta && <CtaBlock variant="mid" />}
    </>
  );
}

export default function BlogArticle({
  post,
  related,
}: {
  post: BlogPost;
  related: { slug: string; title: string; excerpt: string; coverImage: string; coverAlt: string; category: string }[];
}) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription,
      inLanguage: "vi",
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      image: [post.coverImage],
      author: { "@type": "Organization", name: post.author },
      publisher: { "@type": "Organization", name: "Homecase" },
      mainEntityOfPage: `/blog/${post.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  const toc = [
    ...post.sections.map((s) => ({ id: s.id, title: s.title })),
    { id: "cau-hoi-thuong-gap", title: "Câu hỏi thường gặp" },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl overflow-hidden px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <nav
  aria-label="Breadcrumb"
  className="min-w-0 overflow-hidden text-xs text-slate-500 sm:text-sm"
>
  <ol className="flex min-w-0 items-center gap-2">
          <li>
            <Link href="/" className="hover:text-slate-900 hover:underline">
              Trang chủ
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blog" className="hover:text-slate-900 hover:underline">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li
  aria-current="page"
  className="min-w-0 truncate text-slate-900"
  title={post.title}
>
  {post.title}
</li>
        </ol>
      </nav>

      <article className="mt-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800">
            {post.category}
          </p>
          <h1 className="mt-4 break-words text-[30px] font-extrabold leading-[1.15] tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {post.excerpt}
          </p>
          <p className="mt-5 text-xs leading-6 text-slate-500 sm:text-sm">
            Bởi <span className="font-medium text-slate-700">{post.author}</span>{" "}
            · Đăng{" "}
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>{" "}
            · Cập nhật{" "}
            <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time> ·{" "}
            {post.readingTime}
          </p>
        </header>

        <div className="relative mx-auto mt-7 aspect-video w-full max-w-5xl overflow-hidden rounded-[20px] bg-slate-100 sm:mt-10 sm:rounded-3xl">
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-8 grid min-w-0 gap-7 lg:mt-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          {/* Mục lục */}
          <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <nav
              aria-labelledby="toc-title"
              className="max-h-[320px] overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 lg:max-h-[calc(100vh-8rem)]"
            >
              <p id="toc-title" className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Mục lục
              </p>
              <ol className="mt-3 space-y-2 text-sm">
                {toc.map((item, i) => (
                  <li key={item.id} className="flex gap-2">
                    <span className="text-sky-500">{i + 1}.</span>
                    <a
                      href={`#${item.id}`}
                      className="text-slate-700 hover:text-sky-700 hover:underline"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0 max-w-3xl">
            {/* Tóm tắt nhanh */}
            <section
              aria-labelledby="takeaways-title"
              className="rounded-3xl bg-slate-900 p-6 text-white sm:p-8"
            >
              <h2 id="takeaways-title" className="text-lg font-bold">
                Tóm tắt nhanh
              </h2>
              <ul className="mt-4 space-y-2.5 text-[15px] leading-7 text-slate-200">
                {post.keyTakeaways.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span aria-hidden="true" className="text-sky-300">
                      ✓
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Mở bài */}
            <div className="mt-8">
              {post.introduction.map((p) => (
                <p key={p} className="mt-4 text-base leading-7 text-slate-700 first:mt-0 sm:text-lg sm:leading-8">
                  {p}
                </p>
              ))}
            </div>

            {post.sections.map((s, i) => (
              <SectionView key={s.id} section={s} index={i} />
            ))}

            {/* FAQ */}
            <section
              id="cau-hoi-thuong-gap"
              aria-labelledby="faq-title"
              className="scroll-mt-28 pt-12"
            >
              <h2
                id="faq-title"
                className="flex min-w-0 items-start gap-2.5 text-xl font-bold leading-7 tracking-tight text-slate-900 sm:items-baseline sm:gap-3 sm:text-[28px] sm:leading-tight"
              >
                <span className="mt-0.5 shrink-0 text-sky-500 sm:mt-0">
                  {String(post.sections.length + 1).padStart(2, "0")}
                </span>
                Câu hỏi thường gặp
              </h2>
              <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200">
                {post.faq.map((f) => (
                  <details key={f.question} className="group p-4 sm:p-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-left font-semibold text-slate-900">
                      <h3 className="text-base font-semibold">{f.question}</h3>
                      <span
                        aria-hidden="true"
                        className="text-xl text-sky-500 transition group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 leading-7 text-slate-600">{f.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <CtaBlock variant="end" />
          </div>
        </div>
      </article>

      {/* Bài liên quan */}
      <section
        aria-labelledby="related-title"
        className="mt-16 border-t border-slate-200 pt-10"
      >
        <h2 id="related-title" className="text-2xl font-bold text-slate-900">
          Bài viết liên quan
        </h2>
        <ul className="mt-6 grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {related.map((r) => (
            <li key={r.slug}>
              <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="relative aspect-video overflow-hidden bg-[#fff9f2]">
  <Image
    src={r.coverImage}
    alt={r.coverAlt}
    fill
    sizes="(min-width: 640px) 480px, 100vw"
    className="object-contain object-center"
  />
</div>
                <div className="space-y-2 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                    {r.category}
                  </p>
                  <h3 className="break-words text-base font-semibold leading-6 text-slate-900 sm:text-lg">
                    <Link href={`/blog/${r.slug}`} className="hover:underline">
                      {r.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600">{r.excerpt}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </main>
  );
}
