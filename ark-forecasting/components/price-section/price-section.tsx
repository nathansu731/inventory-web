import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  type PricingPeriod,
  PRICING_PLANS,
} from "@/components/price-section/price-data";
import { PricePlanCard } from "@/components/price-section/price-plan-card";

type PriceSectionProps = {
  handleStartTrial: () => void;
};

const PricingPlansGrid = ({
  period,
  plans,
  onPrimaryAction,
}: {
  onPrimaryAction: () => void;
  period: PricingPeriod;
  plans: typeof PRICING_PLANS.monthly;
}) => {
  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
      {plans.map((plan, index) => (
        <PricePlanCard
          key={plan.name}
          delay={index * 0.1}
          onPrimaryAction={onPrimaryAction}
          period={period}
          plan={plan}
        />
      ))}
    </div>
  );
};

export const PriceSection = ({ handleStartTrial }: PriceSectionProps) => {
  return (
    <section
      id="pricing"
      className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Choose Your Forecasting Plan
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Early-bird pricing based on your SKU volume and forecasting needs.
            Join early access now and lock in launch pricing.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="monthly" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="rounded-full p-1">
                <TabsTrigger value="monthly" className="rounded-full px-6">
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="annually" className="rounded-full px-6">
                  Annually (Save 20%)
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="monthly">
              <PricingPlansGrid
                period="monthly"
                plans={PRICING_PLANS.monthly}
                onPrimaryAction={handleStartTrial}
              />
            </TabsContent>
            <TabsContent value="annually">
              <PricingPlansGrid
                period="annually"
                plans={PRICING_PLANS.annually}
                onPrimaryAction={handleStartTrial}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
