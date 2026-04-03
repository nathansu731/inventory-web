"use client";

import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  slug: string;
  publishedDate?: string;
  image?: string;
}

export const BlogCard = ({
  title,
  slug,
  publishedDate,
  image,
}: BlogCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block bg-[#050505] border border-[#2a2a2a] rounded-2xl overflow-hidden transition-all duration-400 hover:border-[#555555] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
    >
      {image && (
        <Image
          src={image}
          alt={title}
          width={800}
          height={533}
          className="w-full h-[200px] object-cover grayscale-[20%] transition duration-300 group-hover:grayscale-0"
        />
      )}

      <div className="p-6">
        {publishedDate && (
          <span className="block text-xs uppercase tracking-[1.5px] text-white/75 mb-3">
            {new Date(publishedDate).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        )}

        <h2 className="text-[1.25rem] font-semibold text-[#e0e0e0] leading-[1.4] transition-colors duration-300 group-hover:text-white">
          {title}
        </h2>
      </div>
    </Link>
  );
};
