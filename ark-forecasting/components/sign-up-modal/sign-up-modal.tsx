import type React from "react";
import { DemoBookingModal } from "@/components/sign-up-modal/demo-booking-modal";
import { TrialSignUpModal } from "@/components/sign-up-modal/trial-sign-up-modal";
import type {
  DemoSubmitHandler,
  TrialFormData,
  TrialInputChangeHandler,
  TrialSubmitHandler,
} from "@/components/sign-up-modal/types";

type SignUpModalProps = {
  showTrialModal: boolean;
  setShowTrialModal: React.Dispatch<React.SetStateAction<boolean>>;
  signupStep: number;
  handleFormSubmit: TrialSubmitHandler;
  formData: TrialFormData;
  handleInputChange: TrialInputChangeHandler;
  isDemoModalOpen: boolean;
  setIsDemoModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  demoStep: number;
  handleDemoSubmit: DemoSubmitHandler;
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
      <TrialSignUpModal
        formData={formData}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        open={showTrialModal}
        setOpen={setShowTrialModal}
        step={signupStep}
      />
      <DemoBookingModal
        handleDemoSubmit={handleDemoSubmit}
        open={isDemoModalOpen}
        setOpen={setIsDemoModalOpen}
        step={demoStep}
      />
    </>
  );
};
