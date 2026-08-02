"use client";

import { Calendar, CheckCircle } from "lucide-react";
import { useState } from "react";
import type React from "react";
import { Button } from "@/components/ui/button";
import type {
  DemoFormData,
  DemoSubmitHandler,
  LeadType,
} from "@/components/sign-up-modal/types";

type LeadEnquiryModalProps = {
  handleDemoSubmit: DemoSubmitHandler;
  leadType: LeadType;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  step: number;
};

const ENQUIRY_COPY: Record<LeadType, { button: string; title: string }> = {
  demo: { button: "Book a demo", title: "Book a Demo" },
  sales: { button: "Contact Sales", title: "Contact Sales" },
  expert: { button: "Talk to an expert", title: "Talk to an expert" },
};

const RESPONSE_TIME_COPY = "Our experts will get back to you within 12 hours.";

const DemoBookingForm = ({
  handleDemoSubmit,
  onClose,
  submitButtonText,
}: {
  handleDemoSubmit: DemoSubmitHandler;
  onClose: () => void;
  submitButtonText: string;
}) => {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);

    const demoData: DemoFormData = {
      companyName: String(formData.get("companyName") ?? ""),
      email: String(formData.get("email") ?? ""),
      fullName: String(formData.get("fullName") ?? ""),
      notes: String(formData.get("notes") ?? ""),
    };

    try {
      await handleDemoSubmit(demoData);
    } catch {
      setError("We couldn't send your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Full Name
        </label>
        <input
          name="fullName"
          type="text"
          required
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-ring"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Work Email
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-ring"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Company Name
        </label>
        <input
          name="companyName"
          type="text"
          required
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-ring"
          placeholder="Your company name"
        />
      </div>

      <div>
        <label htmlFor="notes" className="mb-2 block text-sm font-medium text-foreground">
          Notes <span className="font-normal text-muted-foreground">(optional, up to 600 characters)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          maxLength={600}
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-ring"
          rows={2}
          placeholder="Tell us anything that will help us prepare."
        />
      </div>

      {error && <p className="text-sm text-red-600" role="alert">{error}</p>}

      <div className="flex gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          className="flex-1"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="flex-1"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending…" : submitButtonText}
        </Button>
      </div>
    </form>
  );
};

const DemoBookingSuccessState = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <CheckCircle className="h-8 w-8 text-primary" />
      </div>
      <h3 className="mb-4 text-2xl font-bold text-foreground">Request received!</h3>
      <p className="mb-6 text-muted-foreground">
        Thanks for contacting ARK Forecasting. Our team will be in touch within
        12 hours.
      </p>

      <div className="mb-8 space-y-4 text-left">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
            <span className="text-sm font-semibold text-primary">1</span>
          </div>
          <div>
            <h4 className="font-semibold text-foreground">We review your request</h4>
            <p className="text-sm text-muted-foreground">
              We use the details you shared to prepare for the conversation.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
            <span className="text-sm font-semibold text-primary">2</span>
          </div>
          <div>
            <h4 className="font-semibold text-foreground">A specialist gets in touch</h4>
            <p className="text-sm text-muted-foreground">
              We’ll help with the next best step for your business.
            </p>
          </div>
        </div>
      </div>

      <Button onClick={onClose} className="w-full">
        Got it, thanks!
      </Button>
    </div>
  );
};

export const LeadEnquiryModal = ({
  handleDemoSubmit,
  leadType,
  open,
  setOpen,
  step,
}: LeadEnquiryModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-border bg-background p-8 text-foreground shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        {step === 1 ? (
          <>
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">
                {ENQUIRY_COPY[leadType].title}
              </h3>
              <p className="text-muted-foreground">
                {RESPONSE_TIME_COPY}
              </p>
            </div>
            <DemoBookingForm
              handleDemoSubmit={handleDemoSubmit}
              onClose={() => setOpen(false)}
              submitButtonText={ENQUIRY_COPY[leadType].button}
            />
          </>
        ) : (
          <DemoBookingSuccessState onClose={() => setOpen(false)} />
        )}
      </div>
    </div>
  );
};
