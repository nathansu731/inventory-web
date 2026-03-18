import { Button } from "@/components/ui/button";
import { ChevronRight, Moon, Sun } from "lucide-react";
import Link from "next/link";
import type React from "react";

type HeaderRightSectionProps = {
  toggleTheme: () => void;
  handleStartTrial: () => void;
  mounted: boolean;
  theme: string | undefined;
};

export const HeaderRightSection = ({
  toggleTheme,
  handleStartTrial,
  mounted,
  theme,
}: HeaderRightSectionProps) => {
  return (
    <div className="hidden lg:flex gap-4 items-center">
      <Link
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        onClick={(event) => {
          event.preventDefault();
          handleStartTrial();
        }}
      >
        Log in
      </Link>
      <Button className="rounded-full" onClick={handleStartTrial}>
        Get Early Access
        <ChevronRight className="ml-1 size-4" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="hidden xl:inline-flex rounded-full h-12 px-8 text-base bg-transparent"
        onClick={handleStartTrial}
      >
        Book a Demo
      </Button>
    </div>
  );
};
