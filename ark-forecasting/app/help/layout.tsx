import type React from "react";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Help Center | ARK Forecasting",
  description:
    "Guides and support content for ARK Forecasting setup, workflows, and forecasting best practices.",
  alternates: {
    canonical: "/help",
  },
  openGraph: {
    title: "Help Center | ARK Forecasting",
    description:
      "Guides and support content for ARK Forecasting setup, workflows, and forecasting best practices.",
    type: "website",
    url: absoluteUrl("/help"),
  },
};

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return children;
}
