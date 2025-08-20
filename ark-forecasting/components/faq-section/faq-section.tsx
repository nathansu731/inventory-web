import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type React from "react";

export const FaqSection = () => {
  return (
    <section id="faq" className="w-full py-20 md:py-32">
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
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Common questions about ARK-Forecasting and inventory optimization.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "How accurate are the demand forecasts?",
                answer:
                  "Our AI-powered forecasting typically achieves 85-95% accuracy, depending on your data quality and product characteristics. The system continuously learns from new data to improve predictions over time.",
              },
              {
                question: "What data do I need to get started?",
                answer:
                  "You'll need at least 12 months of historical sales data for best results. We support data import from most e-commerce platforms, ERPs, or CSV files. The more data you provide, the more accurate your forecasts will be.",
              },
              {
                question: "How long does implementation take?",
                answer:
                  "Most customers are up and running within 24-48 hours. Our onboarding team will help you connect your data sources and configure your first forecasts during the setup process.",
              },
              {
                question: "Can I integrate with my existing systems?",
                answer:
                  "Yes, we offer integrations with popular e-commerce platforms (Shopify, Amazon, WooCommerce), ERPs (NetSuite, SAP, QuickBooks), and 3PLs. We also provide API access for custom integrations.",
              },
              {
                question: "What happens if I exceed my SKU limit?",
                answer:
                  "If you approach your SKU limit, we'll notify you in advance. You can easily upgrade to a higher plan or contact our team for custom pricing if you need more capacity.",
              },
              {
                question: "Do you offer training and support?",
                answer:
                  "Yes, all plans include comprehensive onboarding, training materials, and ongoing support. Professional and Enterprise plans include priority support with faster response times and dedicated account management.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="border-b border-border/40 py-2"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
