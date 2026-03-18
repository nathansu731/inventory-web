"use client";

import { useEffect, useState } from "react";
import type React from "react";
import { useTheme } from "next-themes";
import type {
  DemoFormData,
  TrialFormData,
} from "@/components/sign-up-modal/types";

const DEFAULT_TRIAL_FORM: TrialFormData = {
  email: "",
  firstName: "",
  lastName: "",
  company: "",
};

export const useLandingPageState = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [signupStep, setSignupStep] = useState(1);
  const [formData, setFormData] = useState<TrialFormData>(DEFAULT_TRIAL_FORM);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoStep, setDemoStep] = useState(1);

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

  const handleStartTrial = () => {
    setShowTrialModal(true);
    setSignupStep(1);
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await submitLead({
      leadType: "trial",
      payload: formData,
    });
    setSignupStep(2);
  };

  const handleInputChange = (field: keyof TrialFormData, value: string) => {
    setFormData((currentData) => ({ ...currentData, [field]: value }));
  };

  const handleBookDemo = () => {
    setIsDemoModalOpen(true);
    setDemoStep(1);
  };

  const handleDemoSubmit = async (demoData: DemoFormData) => {
    await submitLead({
      leadType: "demo",
      payload: demoData,
    });
    setDemoStep(2);
  };

  return {
    demoStep,
    formData,
    handleBookDemo,
    handleDemoSubmit,
    handleFormSubmit,
    handleInputChange,
    handleStartTrial,
    isDemoModalOpen,
    isScrolled,
    mobileMenuOpen,
    mounted,
    setIsDemoModalOpen,
    setMobileMenuOpen,
    setShowTrialModal,
    showTrialModal,
    signupStep,
    theme,
    toggleTheme,
  };
};
  const submitLead = async (payload: {
    leadType: "trial" | "demo";
    payload: Record<string, string>;
  }) => {
    try {
      await fetch("/api/leads", {
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
    } catch (error) {
      console.error("Failed to submit lead details", error);
    }
  };
