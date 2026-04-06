import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog";
import { getPosts } from "@/lib/blog";
import BlogPostClient from "@/components/blog/blog-post-client";
import { notFound } from "next/navigation";
import { absoluteUrl } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | ARK Blog",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description = `Read "${post.title}" on ARK Forecasting for practical inventory and demand forecasting insights.`;

  return {
    title: `${post.title} | ARK Blog`,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | ARK Blog`,
      description,
      type: "article",
      url: absoluteUrl(`/blog/${post.slug}`),
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const posts = await getPosts();

  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    image: post.image ? [post.image] : undefined,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    publisher: {
      "@type": "Organization",
      name: "ARK Forecasting",
      url: absoluteUrl("/"),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostClient post={post} posts={posts} />
    </>
  );
}
