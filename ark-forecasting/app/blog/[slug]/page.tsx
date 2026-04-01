import { getPostBySlug } from "@/lib/blog";
import { getPosts } from "@/lib/blog";
import BlogPostClient from "@/components/blog/blog-post-client";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const posts = await getPosts();

  if (!post) notFound();

  return <BlogPostClient post={post} posts={posts} />;
}
