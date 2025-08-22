import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu, Moon, Sun, X } from "lucide-react";
import type React from "react";
import { HeaderNavigation } from "@/components/header/header-navigation";
import { HeaderMobileNavigation } from "@/components/header/header-mobile-navigation";
import { HeaderRightSection } from "@/components/header/header-right-section";
import { ToggleButtons } from "@/components/header/toggle-buttons";

type HeaderComponentProps = {
  isScrolled: boolean;
  toggleTheme: () => void;
  mounted: boolean;
  theme: string | undefined;
  handleStartTrial: () => void;
  handleBookDemo: () => void;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
};

export const HeaderComponent = ({
  isScrolled,
  toggleTheme,
  mounted,
  theme,
  handleStartTrial,
  handleBookDemo,
  setMobileMenuOpen,
  mobileMenuOpen,
}: HeaderComponentProps) => {
  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center gap-2 font-bold">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
            A
          </div>
          <span>ARK-Forecasting</span>
        </div>
        <HeaderNavigation />
        <HeaderRightSection
          toggleTheme={toggleTheme}
          handleStartTrial={handleStartTrial}
          mounted={mounted}
          theme={theme}
          handleBookDemo={handleBookDemo}
        />
        <ToggleButtons
          toggleTheme={toggleTheme}
          mounted={mounted}
          theme={theme}
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
        />
      </div>
      <HeaderMobileNavigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleStartTrial={handleStartTrial}
      />
    </header>
  );
};
