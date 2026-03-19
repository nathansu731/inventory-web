"use client";

import { useLandingPageState } from "@/components/landing-page/use-landing-page-state";
import { HeaderComponent } from "@/components/header/header-component";
import { HeroSection } from "@/components/hero-section/hero-section";
import { LogosSection } from "@/components/logos-section/logos-section";
import { FeaturesSection } from "@/components/features-section/features-section";
import { HowItWorksSection } from "@/components/how-it-works-section/how-it-works-section";
import { TeamSection } from "@/components/team-section/team-section";
import { CustomFeaturesSection } from "@/components/custom-features-section/custom-features-section";
import { PriceSection } from "@/components/price-section/price-section";
import { FaqSection } from "@/components/faq-section/faq-section";
import { CallToActionSection } from "@/components/call-to-action-section/call-to-action-section";
import { SignUpModal } from "@/components/sign-up-modal/sign-up-modal";
import { Footer } from "@/components/footer/footer";

export default function LandingPage() {
  const {
    demoStep,
    formData,
    handleDemoSubmit,
    handleFormSubmit,
    handleInputChange,
    handleStartTrial,
    isDemoModalOpen,
    isScrolled,
    mobileMenuOpen,
    setIsDemoModalOpen,
    setMobileMenuOpen,
    setShowTrialModal,
    showTrialModal,
    signupStep,
  } = useLandingPageState();

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <HeaderComponent
        isScrolled={isScrolled}
        handleStartTrial={handleStartTrial}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
      <main className="flex-1">
        <HeroSection handleStartTrial={handleStartTrial} />
        <LogosSection />
        <FeaturesSection />
        <HowItWorksSection />
        {/*<TestimonialsSection />*/}
        <TeamSection />
        <CustomFeaturesSection handleStartTrial={handleStartTrial} />
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
