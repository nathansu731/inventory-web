"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to Optimize Your Inventory?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Join hundreds of businesses that have transformed their
                inventory management with AI-powered forecasting. Start your
                free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full h-12 px-8 text-base"
                  onClick={handleStartTrial}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                >
                  Contact Sales
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-4">
                No credit card required. 14-day free trial. Setup in minutes.
              </p>
            </motion.div>
          </div>
        </section>
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
