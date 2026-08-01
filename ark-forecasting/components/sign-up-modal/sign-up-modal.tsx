import { LeadEnquiryModal } from "@/components/sign-up-modal/demo-booking-modal";
import type { DemoSubmitHandler, LeadType } from "@/components/sign-up-modal/types";

type SignUpModalProps = {
  handleLeadSubmit: DemoSubmitHandler;
  isLeadModalOpen: boolean;
  leadStep: number;
  leadType: LeadType;
  setIsLeadModalOpen: (isOpen: boolean) => void;
};

export const SignUpModal = ({
  handleLeadSubmit,
  isLeadModalOpen,
  leadStep,
  leadType,
  setIsLeadModalOpen,
}: SignUpModalProps) => {
  return (
    <LeadEnquiryModal
      handleDemoSubmit={handleLeadSubmit}
      leadType={leadType}
      open={isLeadModalOpen}
      setOpen={setIsLeadModalOpen}
      step={leadStep}
    />
  );
};
