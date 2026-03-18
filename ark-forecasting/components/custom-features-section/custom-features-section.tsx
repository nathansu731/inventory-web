import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type CustomFeaturesSectionProps = {
  handleStartTrial: () => void;
};

export const CustomFeaturesSection = ({
  handleStartTrial,
}: CustomFeaturesSectionProps) => {
  return (
    <>
      <section
        id="custom-features"
        className="w-full py-20 md:py-28 bg-muted/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge
              className="rounded-full px-4 py-1.5 text-sm font-medium mb-6"
              variant="secondary"
            >
              Custom Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Turn your business-specific features into reality.
            </h2>
            <p className="mt-6 text-muted-foreground md:text-lg leading-relaxed">
              Every business has unique forecasting needs. Our Australian team
              works directly with you to scope, design, and build custom
              capabilities that fit your exact operations.
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed">
              From demand forecasting enhancements and advanced data analytics
              to workflow automation and other specialized tools, our experts
              can deliver practical features at a reasonable price.
            </p>
            <Button
              size="lg"
              className="mt-8 rounded-full h-12 px-8 text-base"
              onClick={handleStartTrial}
            >
              Talk to an expert
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section
        id="privacy-security"
        className="w-full py-20 md:py-28 bg-background"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge
              className="rounded-full px-4 py-1.5 text-sm font-medium mb-6"
              variant="secondary"
            >
              Privacy and Security
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Built with enterprise-grade protection.
            </h2>
            <p className="mt-6 text-muted-foreground md:text-lg leading-relaxed">
              Data security is a core priority at ARK Forecasting. Your data is
              encrypted in transit and at rest, and hosted on AWS infrastructure
              located in Sydney, Australia.
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed">
              We follow strict operational controls aligned with modern industry
              standards, including access management, monitoring, and secure
              development practices to protect confidentiality and system
              reliability.
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed">
              Our company also undergoes independent annual audits to verify
              that our security, privacy, and data handling processes remain
              robust, transparent, and dependable for every client.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};
