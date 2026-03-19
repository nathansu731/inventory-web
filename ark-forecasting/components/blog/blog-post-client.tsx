"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { HeaderComponent } from "@/components/header/header-component";
import { useLandingPageState } from "@/components/landing-page/use-landing-page-state";
import { Footer } from "@/components/footer/footer";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";

interface Props {
  post: BlogPost;
}

export default function BlogPostClient({ post }: Props) {
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

            <section className="space-y-6 mt-4 mb-14">
              {post.content && (
                <div className="space-y-4">
                  {documentToReactComponents(post.content, {
                    renderNode: {
                      paragraph: (_node, children) => (
                        <p className="text-sm leading-relaxed">{children}</p>
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
