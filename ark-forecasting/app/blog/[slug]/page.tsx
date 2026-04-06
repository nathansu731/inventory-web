import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog";
import { getPosts } from "@/lib/blog";
import { getPostDescription } from "@/lib/blog";
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

  const description = getPostDescription(post);

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

  const description = getPostDescription(post);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    image: post.image ? [post.image] : undefined,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: post.author
      ? {
          "@type": "Person",
          name: post.author.name,
          ...(post.author.photo && { image: post.author.photo }),
        }
      : undefined,
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
