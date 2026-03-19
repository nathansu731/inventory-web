import { getPostBySlug } from "@/lib/blog";
import BlogPostClient from "@/components/blog/blog-post-client";

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) return <div>Post not found</div>;

  return <BlogPostClient post={post} />;
}
