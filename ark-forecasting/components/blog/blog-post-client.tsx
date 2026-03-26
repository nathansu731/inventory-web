"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { HeaderComponent } from "@/components/header/header-component";
import { useLandingPageState } from "@/components/landing-page/use-landing-page-state";
import { Footer } from "@/components/footer/footer";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";

interface Props {
  post: BlogPost;
  posts: BlogPost[];
}

export default function BlogPostClient({ post, posts }: Props) {
  console.log("Blog post object:", post);

  const {
    handleStartTrial,
    isScrolled,
    mobileMenuOpen,
    mounted,
    setMobileMenuOpen,
    theme,
    toggleTheme,
  } = useLandingPageState();

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <HeaderComponent
        isScrolled={isScrolled}
        toggleTheme={toggleTheme}
        mounted={mounted}
        theme={theme}
        handleStartTrial={handleStartTrial}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />

      <main className="flex-1">
        <div className="container max-w-3xl mx-auto px-4 md:px-6">
          <article className="prose prose-lg prose-indigo dark:prose-invert">
            <header className="mb-14 mt-16">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            </header>

            {post.image && (
              <div className="mb-10">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={533}
                  className="rounded-lg w-[70%] h-auto object-cover mx-auto"
                />
              </div>
            )}
            <div>
              {post.publishedDate && (
                <span className="block text-xs uppercase tracking-[1.5px] text-white/75 mb-3">
                  {new Date(post.publishedDate).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}
            </div>
            <section className="space-y-6 mt-4 mb-14">
              {post.content && (
                <div className="space-y-4">
                  {documentToReactComponents(post.content, {
                    renderNode: {
                      paragraph: (_node, children) => (
                        <p className="text-[16px] leading-relaxed">
                          {children}
                        </p>
                      ),
                      "heading-1": (_node, children) => (
                        <h1 className="text-3xl font-bold">{children}</h1>
                      ),
                      "heading-2": (_node, children) => (
                        <h2 className="text-2xl font-semibold">{children}</h2>
                      ),
                      "heading-3": (_node, children) => (
                        <h3 className="text-xl font-semibold">{children}</h3>
                      ),
                      "unordered-list": (_node, children) => (
                        <ul className="list-disc list-outside ml-4">
                          {children}
                        </ul>
                      ),
                      "ordered-list": (_node, children) => (
                        <ol className="list-decimal list-outside ml-4">
                          {children}
                        </ol>
                      ),
                      "list-item": (_node, children) => (
                        <li className="mb-2">{children}</li>
                      ),
                      blockquote: (_node, children) => (
                        <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                          {children}
                        </blockquote>
                      ),
                    },
                  })}
                </div>
              )}
            </section>
          </article>
          {posts && posts.length > 1 && (
            <section className="w-full mt-20 px-4 md:px-6 flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Recent Blogs
              </h2>
              <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                {posts
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 2)
                  .map((p) => (
                    <BlogCard
                      key={p.slug}
                      title={p.title}
                      slug={p.slug}
                      publishedDate={p.publishedDate}
                      image={p.image}
                    />
                  ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
