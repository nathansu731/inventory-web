"use client";

import { HeaderComponent } from "@/components/header/header-component";
import { useLandingPageState } from "@/components/landing-page/use-landing-page-state";
import { Footer } from "@/components/footer/footer";
import { BlogPost } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";

interface Props {
  posts: BlogPost[];
}

export default function BlogPageClient({ posts }: Props) {
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
        <section id="features" className="w-full py-20 md:py-32">
          <div className="container px-8 lg:px-8">
            <article className="px-8 lg:px-8">
              <header>
                <h1 className="text-3xl font-bold mb-10">ARK Blogs</h1>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogCard
                    key={post.slug}
                    title={post.title}
                    slug={post.slug}
                    publishedDate={post.publishedDate}
                    image={post.image}
                  />
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
