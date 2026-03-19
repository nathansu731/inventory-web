"use client";

import { HeaderComponent } from "@/components/header/header-component";
import { useLandingPageState } from "@/components/landing-page/use-landing-page-state";
import { Footer } from "@/components/footer/footer";
import Link from "next/link";
import { helps } from "@/lib/helps";

export default function BlogPage() {
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
          <div className="container px-4 md:px-6">
            <article>
              <header>
                <h1 className="text-3xl font-bold mb-8">Help Topics</h1>
              </header>
              {helps.map((help) => (
                <Link
                  key={help.slug}
                  href={`/help/${help.slug}`}
                  className="text-lg font-medium hover:underline cursor-pointer block mb-4"
                >
                  {help.title}
                </Link>
              ))}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
