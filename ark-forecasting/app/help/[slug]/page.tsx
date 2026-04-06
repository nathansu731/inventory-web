import type { Metadata } from "next";
import { helps } from "@/lib/helps";
import { notFound } from "next/navigation";
import { HelpPostClient } from "@/components/help/help-post-client";
import { absoluteUrl } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return helps.map((help) => ({ slug: help.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const help = helps.find((p) => p.slug === slug);

  if (!help) {
    return {
      title: "Help Topic Not Found | ARK Forecasting",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${help.title} | ARK Help`,
    description: help.description,
    alternates: {
      canonical: `/help/${help.slug}`,
    },
    openGraph: {
      title: `${help.title} | ARK Help`,
      description: help.description,
      type: "article",
      url: absoluteUrl(`/help/${help.slug}`),
      images: help.image ? [{ url: absoluteUrl(help.image), alt: help.title }] : undefined,
    },
  };
}

export default async function HelpPost({ params }: Props) {
  const { slug } = await params;
  const help = helps.find((p) => p.slug === slug);

  if (!help) notFound();

  return <HelpPostClient help={help} />;
}
