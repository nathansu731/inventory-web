import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import type React from "react";

type ToggleButtonsProps = {
  toggleTheme: () => void;
  mounted: boolean;
  theme: string | undefined;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
};

export const ToggleButtons = ({
  toggleTheme,
  mounted,
  theme,
  setMobileMenuOpen,
  mobileMenuOpen,
}: ToggleButtonsProps) => {
  return (
    <div className="flex items-center gap-4 lg:hidden">
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
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="size-5" />
        ) : (
          <Menu className="size-5" />
        )}
        <span className="sr-only">Toggle menu</span>
      </Button>
    </div>
  );
};
