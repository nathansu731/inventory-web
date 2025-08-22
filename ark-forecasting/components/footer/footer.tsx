import type React from "react";
import { FooterTop } from "@/components/footer/footer-top";
import { FooterBottom } from "@/components/footer/footer-bottom";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
      <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};
