export type PricingAction = "signup" | "sales";

export type PricingPlan = {
  action: PricingAction;
  cta: string;
  description: string;
  features: string[];
  name: string;
  popular?: boolean;
  price: string;
};

// Keep this public pricing aligned with the plan cards in the app dashboard.
export const PRICING_PLANS: PricingPlan[] = [
  {
    action: "signup",
    cta: "Get started free",
    description: "Perfect for getting started",
    features: ["Full-accuracy forecasting models", "100 SKU runs with monthly refresh", "Forecast accuracy tracking", "CSV import/export", "Community support", "Single store", "2 user seats"],
    name: "Free",
    price: "A$0",
  },
  {
    action: "signup",
    cta: "Choose Launch",
    description: "Everything on Free tier, plus",
    features: ["2,500 SKU runs a month with weekly refreshing", "5 user seats", "2-year run history", "Third-party integrations", "Up to 3 stores", "Email support"],
    name: "Launch",
    price: "A$139",
  },
  {
    action: "signup",
    cta: "Choose Professional",
    description: "Ideal for SMB",
    features: ["10,000 SKU runs a month with weekly refreshing", "15 user seats", "5-year run history", "Third-party integrations", "Up to 6 stores", "Priority support"],
    name: "Professional",
    popular: true,
    price: "A$379",
  },
  {
    action: "sales",
    cta: "Contact Sales",
    description: "For scale and custom requirements",
    features: ["Unlimited SKU runs", "Unlimited store locations", "Advanced dashboards", "Dedicated support", "Multi-channel forecasting", "Unlimited run history"],
    name: "Enterprise",
    price: "Custom",
  },
];
