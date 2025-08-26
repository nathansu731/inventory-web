import { BarChart, Brain, Package, Target, Users, Zap } from "lucide-react";
import type React from "react";

export const features = [
  {
    title: "AI-Powered Demand Forecasting",
    description:
      "Predict future demand with machine learning algorithms that analyze historical data and market trends.",
    icon: <Brain className="size-5" />,
  },
  {
    title: "Inventory Optimization",
    description:
      "Optimize stock levels to reduce carrying costs while preventing stockouts and overstock situations.",
    icon: <Package className="size-5" />,
  },
  {
    title: "Automated Reordering",
    description:
      "Set up intelligent reorder points and automate purchase orders based on forecasted demand.",
    icon: <Zap className="size-5" />,
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain insights with comprehensive reporting on inventory performance, forecast accuracy, and trends.",
    icon: <BarChart className="size-5" />,
  },
  {
    title: "Multi-Channel Integration",
    description:
      "Connect with your sales channels, ERPs, and marketplaces for unified inventory management.",
    icon: <Target className="size-5" />,
  },
  {
    title: "Supplier Management",
    description:
      "Track supplier performance, lead times, and costs to optimize your supply chain operations.",
    icon: <Users className="size-5" />,
  },
];

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
