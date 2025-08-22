import { Button } from "@/components/ui/button";
import { ChevronRight, Moon, Sun } from "lucide-react";
import Link from "next/link";
import type React from "react";

type HeaderRightSectionProps = {
  toggleTheme: () => void;
  handleStartTrial: () => void;
  mounted: boolean;
  theme: string | undefined;
  handleBookDemo: () => void;
};

export const HeaderRightSection = ({
  toggleTheme,
  handleStartTrial,
  mounted,
  theme,
  handleBookDemo,
}: HeaderRightSectionProps) => {
  return (
    <div className="hidden lg:flex gap-4 items-center">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="rounded-full"
      >
        {mounted && theme === "dark" ? (
          <Sun className="size-[18px]" />
        ) : (
          <Moon className="size-[18px]" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Link
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        Log in
      </Link>
      <Button className="rounded-full" onClick={handleStartTrial}>
        Start Free Trial
        <ChevronRight className="ml-1 size-4" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="rounded-full h-12 px-8 text-base bg-transparent"
        onClick={handleBookDemo}
      >
        Book a Demo
      </Button>
    </div>
  );
};
