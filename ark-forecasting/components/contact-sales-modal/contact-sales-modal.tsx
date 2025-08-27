import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type React from "react";

type FormDataContactModal = {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  message: string;
};

type ContactSalesModalProps = {
  showContactSalesModal: boolean;
  setShowContactSalesModal: React.Dispatch<React.SetStateAction<boolean>>;
  signupStep: number;
  handleFormSubmit: (e: React.FormEvent) => void;
  formData: FormDataContactModal;
  handleInputChange: (field: string, value: string) => void;
};

export const ContactSalesModal = ({
  showContactSalesModal,
  setShowContactSalesModal,
  signupStep,
  handleFormSubmit,
  formData,
  handleInputChange,
}: ContactSalesModalProps) => {
  return (
    <Dialog
      open={showContactSalesModal}
      onOpenChange={setShowContactSalesModal}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {signupStep === 1 ? "Contact Sales" : "Check Your Email"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {signupStep === 1
              ? "Need support? We're just a message away."
              : "We've sent you a verification link to complete your signup."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
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
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              placeholder="Your Company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Message</Label>
            <Input
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full rounded-full">
            Submit
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Reach out and take the next step.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
