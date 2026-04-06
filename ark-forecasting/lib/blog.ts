import { Entry, EntrySkeletonType, EntriesQueries } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { client } from "./contentful";

export interface BlogPostFields {
  title: string;
  slug: string;
  body: Document;
  excerpt?: string;
  publishedDate?: string;
  author?: {
    fields: {
      name: string;
      bio?: Document;
      photo?: {
        fields: { file: { url: string } };
      };
    };
  };
  coverImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

type BlogPostQuery = EntriesQueries<BlogPostSkeleton, undefined> & {
  "fields.slug"?: string;
};

type BlogPostSkeleton = EntrySkeletonType<BlogPostFields, "blogPost">;

export interface BlogPost {
  title: string;
  slug: string;
  content: Document;
  excerpt?: string;
  publishedDate?: string;
  image?: string;
  author?: {
    name: string;
    bio?: Document;
    photo?: string;
  };
}

export function getPostDescription(post: BlogPost): string {
  return (
    post.excerpt ||
    `Read "${post.title}" on ARK Forecasting for practical inventory and demand forecasting insights.`
  );
}

function mapEntry(entry: Entry<BlogPostSkeleton>): BlogPost {
  const fields = entry.fields as BlogPostFields;
  const imageUrl = fields.coverImage?.fields?.file?.url;

  return {
    title: fields.title,
    slug: fields.slug,
    content: fields.body,
    excerpt: fields.excerpt,
    publishedDate: fields.publishedDate,
    image: imageUrl ? `https:${imageUrl}?w=1200` : undefined,
    author: fields.author
      ? {
          name: fields.author.fields.name,
          bio: fields.author.fields.bio,
          photo: fields.author.fields.photo?.fields.file.url
            ? `https:${fields.author.fields.photo.fields.file.url}?w=200`
            : undefined,
        }
      : undefined,
  };
}

export async function getPosts(): Promise<BlogPost[]> {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    order: ["-fields.publishedDate"] as any,
  });

  return res.items.map(mapEntry);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  } as BlogPostQuery);

  if (!res.items.length) return null;
  const item = res.items[0];
  return mapEntry(item);
}
