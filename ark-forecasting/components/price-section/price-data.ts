export type PricingPeriod = "monthly" | "annually";

export type PricingPlan = {
  cta: string;
  description: string;
  features: string[];
  name: string;
  popular?: boolean;
  price: string;
};

const LAUNCH_FEATURES = [
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
  "Dedicated onboarding & support 24/7",
  "Advanced integrations",
  "Custom widgets",
];

export const PRICING_PLANS: Record<PricingPeriod, PricingPlan[]> = {
  monthly: [
    {
      cta: "Get Early Access",
      description: "Perfect for getting started",
      features: LAUNCH_FEATURES,
      name: "Launch",
      price: "$99",
    },
    {
      cta: "Get Early Access",
      description: "Great for growing teams",
      features: PROFESSIONAL_FEATURES,
      name: "Professional",
      popular: true,
      price: "$199",
    },
    {
      cta: "Contact Sales",
      description: "For advanced and large-scale planning",
      features: ENTERPRISE_FEATURES,
      name: "Enterprise",
      price: "Custom",
    },
  ],
  annually: [
    {
      cta: "Get Early Access",
      description: "Perfect for getting started",
      features: LAUNCH_FEATURES,
      name: "Launch",
      price: "$950",
    },
    {
      cta: "Get Early Access",
      description: "Great for growing teams",
      features: PROFESSIONAL_FEATURES,
      name: "Professional",
      popular: true,
      price: "$1910",
    },
    {
      cta: "Contact Sales",
      description: "For advanced and large-scale planning",
      features: ENTERPRISE_FEATURES,
      name: "Enterprise",
      price: "Custom",
    },
  ],
};
