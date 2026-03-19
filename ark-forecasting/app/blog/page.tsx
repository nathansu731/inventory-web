import { getPosts } from "@/lib/blog";
import BlogPageClient from "@/components/blog/blog-page-client";

export default async function BlogPage() {
  const posts = await getPosts();

  return <BlogPageClient posts={posts} />;
}
