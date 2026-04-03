"use client";

import { useLandingPageState } from "@/components/landing-page/use-landing-page-state";
import { HeaderComponent } from "@/components/header/header-component";
import Image from "next/image";
import { Footer } from "@/components/footer/footer";
import type { Helps } from "@/lib/helps";

type Props = {
  help: Helps;
};

export function HelpPostClient({ help }: Props) {
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
              <h1 className="text-4xl font-bold mb-4">{help.title}</h1>
            </header>

            {help.image && (
              <div className="mb-10">
                <Image
                  src={help.image}
                  alt={help.title}
                  width={800}
                  height={533}
                  className="rounded-lg w-[70%] h-auto object-cover mx-auto"
                />
              </div>
            )}

            <section className="space-y-6">{help.content}</section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
