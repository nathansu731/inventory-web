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
      companySize: String(formData.get("companySize") ?? ""),
      email: String(formData.get("email") ?? ""),
      fullName: String(formData.get("fullName") ?? ""),
      interests: String(formData.get("interests") ?? ""),
      notes: String(formData.get("notes") ?? ""),
      preferredDemoTime: String(formData.get("preferredDemoTime") ?? ""),
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
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          name="fullName"
          type="text"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Work Email
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Company Name
        </label>
        <input
          name="companyName"
          type="text"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
          placeholder="Your company name"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Company Size
        </label>
        <select
          name="companySize"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select company size</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201-1000">201-1000 employees</option>
          <option value="1000+">1000+ employees</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Preferred Demo Time
        </label>
        <select
          name="preferredDemoTime"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select preferred time</option>
          <option value="morning">Morning (9 AM - 12 PM)</option>
          <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
          <option value="evening">Evening (5 PM - 8 PM)</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          What interests you most?
        </label>
        <textarea
          name="interests"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="Tell us about your forecasting challenges or specific features you'd like to see..."
        />
      </div>

      <div>
        <label htmlFor="notes" className="mb-2 block text-sm font-medium text-gray-700">
          Notes <span className="font-normal text-gray-500">(optional, up to 600 characters)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          maxLength={600}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
          rows={4}
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
          className="flex-1 bg-black text-white hover:bg-neutral-800"
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
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <CheckCircle className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="mb-4 text-2xl font-bold text-gray-900">Request received!</h3>
      <p className="mb-6 text-gray-600">
        Thanks for contacting ARK Forecasting. Our team will be in touch within
        12 hours.
      </p>

      <div className="mb-8 space-y-4 text-left">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
            <span className="text-sm font-semibold text-blue-600">1</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">We review your request</h4>
            <p className="text-sm text-gray-600">
              We use the details you shared to prepare for the conversation.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
            <span className="text-sm font-semibold text-blue-600">2</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">A specialist gets in touch</h4>
            <p className="text-sm text-gray-600">
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
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-8"
        onClick={(event) => event.stopPropagation()}
      >
        {step === 1 ? (
          <>
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                {ENQUIRY_COPY[leadType].title}
              </h3>
              <p className="text-gray-600">
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
