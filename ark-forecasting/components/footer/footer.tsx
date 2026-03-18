import type React from "react";
import { FooterTop } from "@/components/footer/footer-top";
import { FooterBottom } from "@/components/footer/footer-bottom";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
      <div className="m-auto flex flex-col gap-8 p-12">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};
