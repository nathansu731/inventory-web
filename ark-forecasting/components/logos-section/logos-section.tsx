import Image from "next/image";
import type React from "react";

export const LogosSection = () => {
  return (
    <section className="w-full py-12 border-y bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Quick Integration with your data source securely
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
              <Image
                key={"csv"}
                src={`/csv.png`}
                alt={`csv`}
                title="csv"
                width={120}
                height={60}
                className="h-8 w-auto rounded-[4px] opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            <Image
                key={"amazon"}
                src={`/amazon.jpeg`}
                alt={`amazon`}
                title="amazon"
                width={120}
                height={60}
                className="h-8 w-auto rounded-[4px] opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            <Image
                key={"quickbooks"}
                src={`/quickbooks.png`}
                alt={`quickbooks`}
                title="quickbooks"
                width={120}
                height={60}
                className="h-8 w-auto rounded-[4px] opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            <Image
                key={"shopify"}
                src={`/shopify.png`}
                alt={`shopify`}
                title="shopify"
                width={120}
                height={60}
                className="h-8 w-auto rounded-[4px] opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            <Image
                key={"big-commerce"}
                src={`/big-commerce.png`}
                alt={`big-commerce`}
                title="big-commerce"
                width={120}
                height={60}
                className="h-8 w-auto rounded-[4px] opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
          </div>
        </div>
      </div>
    </section>
  );
};
