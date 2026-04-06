import type { Metadata } from "next";
import { getPosts } from "@/lib/blog";
import BlogPageClient from "@/components/blog/blog-page-client";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "ARK Blog | Demand Forecasting & Inventory Insights",
  description:
    "Articles, playbooks, and practical guidance on demand forecasting, inventory planning, and AI-driven operations.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "ARK Blog | Demand Forecasting & Inventory Insights",
    description:
      "Articles, playbooks, and practical guidance on demand forecasting, inventory planning, and AI-driven operations.",
    type: "website",
    url: absoluteUrl("/blog"),
  },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return <BlogPageClient posts={posts} />;
}
