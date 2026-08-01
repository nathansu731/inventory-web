"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import type {
  DemoFormData,
  LeadType,
} from "@/components/sign-up-modal/types";
import { trackEvent, trackLeadSubmit } from "@/lib/analytics";

const SIGN_UP_URL = "https://app.arkforecasting.com.au/signup";

const submitLead = async (payload: {
  leadType: LeadType;
  payload: Record<string, string>;
}) => {
  const response = await fetch("/api/leads", {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to submit enquiry");
  }
};

export const useLandingPageState = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadStep, setLeadStep] = useState(1);
  const [leadType, setLeadType] = useState<LeadType>("demo");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleSignUp = () => {
    trackEvent("cta_click", {
      cta_name: "sign_up_for_free",
      location: "landing_page",
    });
    window.location.assign(SIGN_UP_URL);
  };

  const openLeadModal = (nextLeadType: LeadType) => {
    trackEvent("cta_click", {
      cta_name:
        nextLeadType === "demo"
          ? "book_demo"
          : nextLeadType === "expert"
            ? "talk_to_expert"
            : "contact_sales",
      location: "landing_page",
    });
    setLeadType(nextLeadType);
    setLeadStep(1);
    setIsLeadModalOpen(true);
  };

  const handleLeadSubmit = async (demoData: DemoFormData) => {
    await submitLead({
      leadType,
      payload: demoData,
    });
    trackLeadSubmit(leadType);
    setLeadStep(2);
  };

  return {
    handleBookDemo: () => openLeadModal("demo"),
    handleContactSales: () => openLeadModal("sales"),
    handleLeadSubmit,
    handleSignUp,
    handleTalkToExpert: () => openLeadModal("expert"),
    isLeadModalOpen,
    isScrolled,
    leadStep,
    leadType,
    mobileMenuOpen,
    mounted,
    setIsLeadModalOpen,
    setMobileMenuOpen,
    theme,
    toggleTheme,
  };
};
