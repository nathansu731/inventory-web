import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type {
  TrialFormData,
  TrialInputChangeHandler,
  TrialSubmitHandler,
} from "@/components/sign-up-modal/types";

type TrialSignUpModalProps = {
  formData: TrialFormData;
  handleFormSubmit: TrialSubmitHandler;
  handleInputChange: TrialInputChangeHandler;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  step: number;
};

const TRIAL_MODAL_COPY = {
  earlyAccess: {
    description: "Join the waitlist and enjoy early bird discounts.",
    submitButton: "Join the waitlist",
    title: "Get Early Access",
  },
  freeTrial: {
    description:
      "Get started with ARK Forecasting today. No credit card required.",
    submitButton: "Create Free Account",
    title: "Start Your Free Trial",
  },
} as const;

const TrialSignUpForm = ({
  formData,
  handleFormSubmit,
  handleInputChange,
  submitButtonText,
}: Pick<
  TrialSignUpModalProps,
  "formData" | "handleFormSubmit" | "handleInputChange"
> & { submitButtonText: string }) => {
  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={(event) =>
              handleInputChange("firstName", event.target.value)
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={(event) => handleInputChange("lastName", event.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Work Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@company.com"
          value={formData.email}
          onChange={(event) => handleInputChange("email", event.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input
          id="company"
          placeholder="Your Company"
          value={formData.company}
          onChange={(event) => handleInputChange("company", event.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full rounded-full">
        {submitButtonText}
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </form>
  );
};

const TrialSuccessState = ({
  email,
  onClose,
}: {
  email: string;
  onClose: () => void;
}) => {
  return (
    <div className="space-y-4 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
        <Mail className="size-8 text-green-600 dark:text-green-400" />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Verification email sent!</h3>
        <p className="text-sm text-muted-foreground">
          We&#39;ve sent a verification link to <strong>{email}</strong>
        </p>
      </div>

      <div className="space-y-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <CheckCircle className="size-4 text-green-500" />
          <span>Click the link in your email to verify your account</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="size-4 text-green-500" />
          <span>Complete your profile setup</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="size-4 text-green-500" />
          <span>Start your 14-day free trial</span>
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full rounded-full bg-transparent"
        onClick={onClose}
      >
        Got it, thanks!
      </Button>
    </div>
  );
};

export const TrialSignUpModal = ({
  formData,
  handleFormSubmit,
  handleInputChange,
  open,
  setOpen,
  step,
}: TrialSignUpModalProps) => {
  // Keeping both copies makes it easy to switch back to free-trial text later.
  const activeCopy = TRIAL_MODAL_COPY.earlyAccess;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            {step === 1 ? activeCopy.title : "Check Your Email"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {step === 1
              ? activeCopy.description
              : "We've sent you a verification link to complete your signup."}
          </DialogDescription>
        </DialogHeader>

        {step === 1 ? (
          <TrialSignUpForm
            formData={formData}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            submitButtonText={activeCopy.submitButton}
          />
        ) : (
          <TrialSuccessState
            email={formData.email}
            onClose={() => setOpen(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
