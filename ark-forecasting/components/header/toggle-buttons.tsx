import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import type React from "react";

type ToggleButtonsProps = {
  toggleTheme: () => void;
  mounted: boolean;
  theme: string | undefined;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
};

export const ToggleButtons = ({
  setMobileMenuOpen,
  mobileMenuOpen,
}: ToggleButtonsProps) => {
  return (
    <div className="flex items-center gap-4 lg:hidden">
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
