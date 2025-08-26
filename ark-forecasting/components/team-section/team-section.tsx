import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type React from "react";

export const TeamSection = () => {
  return (
    <section
      id="team"
      className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            Our Team
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Award-Winning Forecasting Experts
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Our team combines cutting-edge research with practical industry
            experience to deliver the most accurate forecasting solutions.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-md"
          >
            <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="size-24 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-6">
                  RG
                </div>
                <h3 className="text-2xl font-bold mb-2">Rakshitha Godahewa</h3>
                <p className="text-primary font-medium mb-4">
                  Lead Forecasting Expert & Data Scientist
                </p>
                <div className="space-y-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <div className="size-2 rounded-full bg-primary"></div>
                    <span>
                      Selected for Heidelberg Laureate Forum (Top 200 Young
                      Researchers)
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="size-2 rounded-full bg-primary"></div>
                    <span>
                      Postdoctoral Research Fellow at Monash University
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="size-2 rounded-full bg-primary"></div>
                    <span>PhD in Deep Learning for Optimization Systems</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="size-2 rounded-full bg-primary"></div>
                    <span>Expert in Time Series Forecasting & AI</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Dr. Godahewa brings world-class expertise in machine learning
                  and forecasting to ARK-Forecasting. Her research in deep
                  learning optimization and time series analysis directly powers
                  our AI algorithms, ensuring industry-leading accuracy in
                  demand predictions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team combines academic excellence with practical industry
            experience, ensuring ARK-Forecasting delivers both cutting-edge
            innovation and real-world results for your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
