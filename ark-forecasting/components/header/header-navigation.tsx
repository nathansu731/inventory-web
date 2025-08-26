import Link from "next/link";
import type React from "react";

export const HeaderNavigation = () => {
  return (
    <nav className="hidden lg:flex lg:gap-8 gap-4 mx-4">
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
  );
};
