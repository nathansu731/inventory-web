import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu, Moon, Sun, X } from "lucide-react";
import { motion } from "framer-motion";
import type React from "react";

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
        <nav className="hidden md:flex lg:gap-8 gap-4 mx-4">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Testimonials
          </Link>
          <Link
            href="#team"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Team
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
        </nav>
        <div className="hidden md:flex gap-4 items-center">
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
        <div className="flex items-center gap-4 md:hidden">
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
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
        >
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="#features"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#team"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="#pricing"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link
                href="#"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Button className="rounded-full" onClick={handleStartTrial}>
                Start Free Trial
                <ChevronRight className="ml-1 size-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};
