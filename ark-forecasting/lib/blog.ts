import { Entry, EntrySkeletonType, EntriesQueries } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { client } from "./contentful";

export interface BlogPostFields {
  title: string;
  slug: string;
  content: Document;
  image?: {
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
  image?: string;
}

function mapEntry(entry: Entry<BlogPostSkeleton>): BlogPost {
  const fields = entry.fields as any;

  return {
    title: fields.title,
    slug: fields.slug,
    content: fields.body,
    image: fields.coverImage?.fields.file.url
      ? "https:" + fields.coverImage.fields.file.url
      : undefined,
  };
}

export async function getPosts(): Promise<BlogPost[]> {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
  });

  return res.items.map(mapEntry);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  } as BlogPostQuery);

  console.log(res.items[0].fields);

  const item = res.items[0];

  if (!item) return null;

  return mapEntry(item);
}
