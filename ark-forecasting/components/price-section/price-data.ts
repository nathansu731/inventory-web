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
    cta: "Sign up for free",
    description: "Perfect for getting started",
    features: ["Up to 3 projects", "Basic support", "1GB storage", "Community access"],
    name: "Launch",
    price: "$99",
  },
  {
    action: "signup",
    cta: "Sign up for free",
    description: "Great for growing teams",
    features: ["Up to 10 projects", "Priority support", "50GB storage", "Team collaboration", "Advanced analytics"],
    name: "Professional",
    popular: true,
    price: "$199",
  },
  {
    action: "sales",
    cta: "Contact Sales",
    description: "For scale and custom requirements",
    features: ["Unlimited projects", "24/7 dedicated support", "Custom storage", "Advanced integrations", "Custom workflows", "SSO & security"],
    name: "Enterprise",
    price: "Custom",
  },
];
