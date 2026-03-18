import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type {
  PricingPeriod,
  PricingPlan,
} from "@/components/price-section/price-data";

type PricePlanCardProps = {
  delay: number;
  onPrimaryAction: () => void;
  period: PricingPeriod;
  plan: PricingPlan;
};

export const PricePlanCard = ({
  delay,
  onPrimaryAction,
  period,
  plan,
}: PricePlanCardProps) => {
  const showPeriodLabel = plan.name !== "Professional";
  const periodLabel = period === "annually" ? "/anually" : "/month";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <Card
        className={`relative h-full overflow-hidden ${
          plan.popular
            ? "border-primary shadow-lg"
            : "border-border/40 shadow-md"
        } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
      >
        {plan.popular && (
          <div className="absolute right-0 top-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            Most Popular
          </div>
        )}
        <CardContent className="flex h-full flex-col p-6">
          <h3 className="text-2xl font-bold">{plan.name}</h3>
          <div className="mt-4 flex items-baseline">
            <span className="text-4xl font-bold">{plan.price}</span>
            {showPeriodLabel && (
              <span className="ml-1 text-muted-foreground">{periodLabel}</span>
            )}
          </div>
          <p className="mt-2 text-muted-foreground">{plan.description}</p>
          <ul className="my-6 flex-grow space-y-3">
            {plan.features.map((feature) => (
              <li key={`${plan.name}-${feature}`} className="flex items-center">
                <Check className="mr-2 size-4 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            className={`mt-auto w-full rounded-full ${
              plan.popular
                ? "bg-primary hover:bg-primary/90"
                : "bg-muted hover:bg-muted/80"
            }`}
            variant={plan.popular ? "default" : "outline"}
            onClick={onPrimaryAction}
          >
            {plan.cta}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
