import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type HeaderRightSectionProps = {
  handleBookDemo: () => void;
  handleSignUp: () => void;
};

export const HeaderRightSection = ({ handleBookDemo, handleSignUp }: HeaderRightSectionProps) => {
  return (
    <div className="hidden lg:flex gap-4 items-center">
      <Link
        href="https://app.arkforecasting.com.au/login"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        Log in
      </Link>
      <Button className="rounded-full" onClick={handleSignUp}>
        Sign up for free
        <ChevronRight className="ml-1 size-4" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="hidden xl:inline-flex rounded-full h-12 px-8 text-base bg-transparent"
        onClick={handleBookDemo}
      >
        Book a Demo
      </Button>
    </div>
  );
};
