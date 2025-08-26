"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { HeaderComponent } from "@/components/header/header-component";
import { HeroSection } from "@/components/hero-section/hero-section";
import { LogosSection } from "@/components/logos-section/logos-section";
import { FeaturesSection } from "@/components/features-section/features-section";
import { HowItWorksSection } from "@/components/how-it-works-section/how-it-works-section";
import { TestimonialsSection } from "@/components/testimonials-section/testimonials-section";
import { TeamSection } from "@/components/team-section/team-section";
import { PriceSection } from "@/components/price-section/price-section";
import { FaqSection } from "@/components/faq-section/faq-section";
import { CallToActionSection } from "@/components/call-to-action-section/call-to-action-section";
import { SignUpModal } from "@/components/sign-up-modal/sign-up-modal";
import { Footer } from "@/components/footer/footer";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [signupStep, setSignupStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
  });
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoStep, setDemoStep] = useState(1);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleStartTrial = () => {
    setShowTrialModal(true);
    setSignupStep(1);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSignupStep(2);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBookDemo = () => {
    setIsDemoModalOpen(true);
    setDemoStep(1);
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoStep(2);
  };

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <HeaderComponent
        isScrolled={isScrolled}
        toggleTheme={toggleTheme}
        mounted={mounted}
        theme={theme}
        handleStartTrial={handleStartTrial}
        handleBookDemo={handleBookDemo}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
      <main className="flex-1">
        <HeroSection
          handleStartTrial={handleStartTrial}
          handleBookDemo={handleBookDemo}
        />
        <LogosSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <TeamSection />
        <PriceSection handleStartTrial={handleStartTrial} />
        <FaqSection />
        <CallToActionSection handleStartTrial={handleStartTrial} />
      </main>
      <SignUpModal
        showTrialModal={showTrialModal}
        setShowTrialModal={setShowTrialModal}
        signupStep={signupStep}
        handleFormSubmit={handleFormSubmit}
        formData={formData}
        handleInputChange={handleInputChange}
        isDemoModalOpen={isDemoModalOpen}
        setIsDemoModalOpen={setIsDemoModalOpen}
        demoStep={demoStep}
        handleDemoSubmit={handleDemoSubmit}
      />
      <Footer />
    </div>
  );
}
