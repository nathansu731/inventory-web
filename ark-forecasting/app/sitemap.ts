import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";
import { helps } from "@/lib/helps";
import { absoluteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/help"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  const posts = await getPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.publishedDate ? new Date(post.publishedDate) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const helpRoutes: MetadataRoute.Sitemap = helps.map((help) => ({
    url: absoluteUrl(`/help/${help.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes, ...helpRoutes];
}
