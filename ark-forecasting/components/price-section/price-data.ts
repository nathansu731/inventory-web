export type PricingPeriod = "monthly" | "annually";

export type PricingPlan = {
  cta: string;
  description: string;
  features: string[];
  name: string;
  popular?: boolean;
  price: string;
};

const STARTER_FEATURES = [
  "Up to 100 forecast units",
  "Limited forecasting models",
  "1 user",
];

const PROFESSIONAL_FEATURES = [
  "Up to 5000 forecast units",
  "Higher level forecasting models",
  "5 users",
  "24/7 support",
  "Limited integrations",
];

const ENTERPRISE_FEATURES = [
  "Up to 300,000 forecast units",
  "Advanced forecasting models",
  "Unlimited users",
  "Dedicated onboarding & support",
  "Advanced integrations",
  "Custom widgets",
];

export const PRICING_PLANS: Record<PricingPeriod, PricingPlan[]> = {
  monthly: [
    {
      cta: "Get Early Access",
      description: "Perfect for getting started",
      features: STARTER_FEATURES,
      name: "Launch",
      price: "$0",
    },
    {
      cta: "Get Early Access",
      description: "Great for growing teams",
      features: PROFESSIONAL_FEATURES,
      name: "Core",
      popular: true,
      price: "$99",
    },
    {
      cta: "Talk to an expert",
      description: "For advanced and large-scale planning",
      features: ENTERPRISE_FEATURES,
      name: "Professional",
      price: "Custom",
    },
  ],
  annually: [
    {
      cta: "Get Early Access",
      description: "Perfect for getting started",
      features: STARTER_FEATURES,
      name: "Launch",
      price: "$0",
    },
    {
      cta: "Get Early Access",
      description: "Great for growing teams",
      features: PROFESSIONAL_FEATURES,
      name: "Core",
      popular: true,
      price: "$950",
    },
    {
      cta: "Talk to an expert",
      description: "For advanced and large-scale planning",
      features: ENTERPRISE_FEATURES,
      name: "Professional",
      price: "Custom",
    },
  ],
};
