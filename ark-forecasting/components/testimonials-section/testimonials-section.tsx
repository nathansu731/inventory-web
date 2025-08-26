import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type React from "react";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
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
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Trusted by Inventory Professionals
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            See how businesses are transforming their inventory management with
            ARK-Forecasting.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              quote:
                "ARK-Forecasting reduced our stockouts by 85% while cutting inventory holding costs by 30%. The AI predictions are incredibly accurate.",
              author: "Sarah Chen",
              role: "Inventory Manager, Fashion Forward",
              rating: 5,
            },
            {
              quote:
                "The demand forecasting has been a game-changer for our seasonal products. We now order the right quantities at the right time.",
              author: "Michael Rodriguez",
              role: "Operations Director, SportGear Pro",
              rating: 5,
            },
            {
              quote:
                "Implementation was seamless and we saw results within the first week. The automated reordering feature saves us hours every day.",
              author: "Emily Johnson",
              role: "Supply Chain Lead, HomeDecor Plus",
              rating: 5,
            },
            {
              quote:
                "The analytics dashboard gives us insights we never had before. We can now make data-driven inventory decisions with confidence.",
              author: "David Kim",
              role: "CEO, TechGadgets Inc",
              rating: 5,
            },
            {
              quote:
                "Our forecast accuracy improved from 60% to 92% after switching to ARK-Forecasting. The ROI was immediate and substantial.",
              author: "Lisa Patel",
              role: "Demand Planner, Beauty Essentials",
              rating: 5,
            },
            {
              quote:
                "The supplier integration features help us optimize our entire supply chain. Lead time predictions are spot-on.",
              author: "James Wilson",
              role: "Procurement Manager, Industrial Supply Co",
              rating: 5,
            },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, j) => (
                        <Star
                          key={j}
                          className="size-4 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                  </div>
                  <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                    <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
