import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/blog-article";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { getPost, posts } from "@/data/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Không tìm thấy bài viết | Homecase",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          alt: post.coverAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const related = post.relatedSlugs
    .map((relatedSlug) => getPost(relatedSlug))
    .filter((item) => item !== undefined)
    .map((item) => ({
      slug: item.slug,
      title: item.title,
      excerpt: item.excerpt,
      coverImage: item.coverImage,
      coverAlt: item.coverAlt,
      category: item.category,
    }));

  return (
    <div className="min-h-screen bg-[#fff9f2] text-[#163146]">
      <SiteHeader />
      <BlogArticle post={post} related={related} />
      <SiteFooter />
    </div>
  );
}
