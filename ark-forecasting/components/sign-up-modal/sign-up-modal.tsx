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
import { ArrowRight, Calendar, CheckCircle, Mail } from "lucide-react";
import type React from "react";

type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
};

type SignUpModalProps = {
  showTrialModal: boolean;
  setShowTrialModal: React.Dispatch<React.SetStateAction<boolean>>;
  signupStep: number;
  handleFormSubmit: (e: React.FormEvent) => void;
  formData: FormData;
  handleInputChange: (field: string, value: string) => void;
  isDemoModalOpen: boolean;
  setIsDemoModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  demoStep: number;
  handleDemoSubmit: (e: React.FormEvent) => void;
};

export const SignUpModal = ({
  showTrialModal,
  setShowTrialModal,
  signupStep,
  handleFormSubmit,
  formData,
  handleInputChange,
  isDemoModalOpen,
  setIsDemoModalOpen,
  demoStep,
  handleDemoSubmit,
}: SignUpModalProps) => {
  return (
    <>
      <Dialog open={showTrialModal} onOpenChange={setShowTrialModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              {signupStep === 1 ? "Start Your Free Trial" : "Check Your Email"}
            </DialogTitle>
            <DialogDescription className="text-center">
              {signupStep === 1
                ? "Get started with ARK-Forecasting today. No credit card required."
                : "We've sent you a verification link to complete your signup."}
            </DialogDescription>
          </DialogHeader>

          {signupStep === 1 ? (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
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
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
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

              <Button type="submit" className="w-full rounded-full">
                Create Free Account
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By signing up, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <Mail className="size-8 text-green-600 dark:text-green-400" />
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Verification email sent!</h3>
                <p className="text-sm text-muted-foreground">
                  We&#39;ve sent a verification link to{" "}
                  <strong>{formData.email}</strong>
                </p>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-green-500" />
                  <span>
                    Click the link in your email to verify your account
                  </span>
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
                onClick={() => setShowTrialModal(false)}
              >
                Got it, thanks!
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
      {isDemoModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setIsDemoModalOpen(false)}
        >
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            {demoStep === 1 ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Book Your Demo
                  </h3>
                  <p className="text-gray-600">
                    See ARK-Forecasting in action with a personalized demo
                  </p>
                </div>

                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Size
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Demo Time
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">
                        Afternoon (12 PM - 5 PM)
                      </option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What interests you most?
                    </label>
                    <textarea
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                      placeholder="Tell us about your forecasting challenges or specific features you'd like to see..."
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => setIsDemoModalOpen(false)}
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
              </>
            ) : (
              <>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Demo Scheduled!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest in ARK-Forecasting. Here&#39;s
                    what happens next:
                  </p>

                  <div className="text-left space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-sm font-semibold">
                          1
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Confirmation Email
                        </h4>
                        <p className="text-sm text-gray-600">
                          You&#39;ll receive a confirmation email within 5
                          minutes
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-sm font-semibold">
                          2
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Calendar Invite
                        </h4>
                        <p className="text-sm text-gray-600">
                          Our team will send you a calendar invite within 24
                          hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-sm font-semibold">
                          3
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Personalized Demo
                        </h4>
                        <p className="text-sm text-gray-600">
                          30-minute demo tailored to your specific needs
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-sm font-semibold">
                          4
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Q&A Session
                        </h4>
                        <p className="text-sm text-gray-600">
                          Ask questions and discuss your forecasting
                          requirements
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => setIsDemoModalOpen(false)}
                    className="w-full"
                  >
                    Got it, thanks!
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
