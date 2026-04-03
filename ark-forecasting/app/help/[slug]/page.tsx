import { helps } from "@/lib/helps";
import { notFound } from "next/navigation";
import { HelpPostClient } from "@/components/help/help-post-client";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function HelpPost({ params }: Props) {
  const { slug } = await params;
  const help = helps.find((p) => p.slug === slug);

  if (!help) notFound();

  return <HelpPostClient help={help} />;
}
