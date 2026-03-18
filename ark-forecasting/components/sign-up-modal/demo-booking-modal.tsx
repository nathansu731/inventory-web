import { Calendar, CheckCircle } from "lucide-react";
import type React from "react";
import { Button } from "@/components/ui/button";
import type {
  DemoFormData,
  DemoSubmitHandler,
} from "@/components/sign-up-modal/types";

type DemoBookingModalProps = {
  handleDemoSubmit: DemoSubmitHandler;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  step: number;
};

const DemoBookingForm = ({
  handleDemoSubmit,
  onClose,
}: {
  handleDemoSubmit: DemoSubmitHandler;
  onClose: () => void;
}) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const demoData: DemoFormData = {
      companyName: String(formData.get("companyName") ?? ""),
      companySize: String(formData.get("companySize") ?? ""),
      email: String(formData.get("email") ?? ""),
      fullName: String(formData.get("fullName") ?? ""),
      interests: String(formData.get("interests") ?? ""),
      preferredDemoTime: String(formData.get("preferredDemoTime") ?? ""),
    };

    await handleDemoSubmit(demoData);
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
        >
          Schedule Demo
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
      <h3 className="mb-4 text-2xl font-bold text-gray-900">Demo Scheduled!</h3>
      <p className="mb-6 text-gray-600">
        Thank you for your interest in ARK Forecasting. Here&#39;s what happens
        next:
      </p>

      <div className="mb-8 space-y-4 text-left">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
            <span className="text-sm font-semibold text-blue-600">1</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Confirmation Email</h4>
            <p className="text-sm text-gray-600">
              You&#39;ll receive a confirmation email within 5 minutes
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
            <span className="text-sm font-semibold text-blue-600">2</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Calendar Invite</h4>
            <p className="text-sm text-gray-600">
              Our team will send you a calendar invite within 24 hours
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
            <span className="text-sm font-semibold text-blue-600">3</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Personalized Demo</h4>
            <p className="text-sm text-gray-600">
              30-minute demo tailored to your specific needs
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
            <span className="text-sm font-semibold text-blue-600">4</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Q&amp;A Session</h4>
            <p className="text-sm text-gray-600">
              Ask questions and discuss your forecasting requirements
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

export const DemoBookingModal = ({
  handleDemoSubmit,
  open,
  setOpen,
  step,
}: DemoBookingModalProps) => {
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
                Book Your Demo
              </h3>
              <p className="text-gray-600">
                See ARK Forecasting in action with a personalized demo
              </p>
            </div>
            <DemoBookingForm
              handleDemoSubmit={handleDemoSubmit}
              onClose={() => setOpen(false)}
            />
          </>
        ) : (
          <DemoBookingSuccessState onClose={() => setOpen(false)} />
        )}
      </div>
    </div>
  );
};
