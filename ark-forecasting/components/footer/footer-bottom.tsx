import Link from "next/link";
import type React from "react";

export const FooterBottom = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} ARK-Forecasting. All rights reserved.
      </p>
      <div className="flex gap-4">
        <Link
          href="#"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="#"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Terms of Service
        </Link>
        <Link
          href="#"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Cookie Policy
        </Link>
      </div>
    </div>
  );
};
