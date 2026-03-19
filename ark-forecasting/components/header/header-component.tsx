import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeaderNavigation } from "@/components/header/header-navigation";
import { HeaderMobileNavigation } from "@/components/header/header-mobile-navigation";
import { HeaderRightSection } from "@/components/header/header-right-section";
import { ToggleButtons } from "@/components/header/toggle-buttons";

type HeaderComponentProps = {
  isScrolled: boolean;
  handleStartTrial: () => void;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
};

export const HeaderComponent = ({
  isScrolled,
  handleStartTrial,
  setMobileMenuOpen,
  mobileMenuOpen,
}: HeaderComponentProps) => {
  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Image
            src="/ark-logo-black.png"
            alt="ARK Forecasting logo"
            width={50}
            height={50}
            className="size-12 object-contain"
            priority
          />
          <span>ARK Forecasting</span>
        </Link>
        <HeaderNavigation />
        <HeaderRightSection handleStartTrial={handleStartTrial} />
        <ToggleButtons
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
