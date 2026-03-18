import type React from "react";

export type TrialFormData = {
  company: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type DemoFormData = {
  companyName: string;
  companySize: string;
  email: string;
  fullName: string;
  interests: string;
  preferredDemoTime: string;
};

export type TrialSubmitHandler = (
  event: React.FormEvent,
) => void | Promise<void>;

export type DemoSubmitHandler = (
  data: DemoFormData,
) => void | Promise<void>;

export type TrialInputChangeHandler = (
  field: keyof TrialFormData,
  value: string,
) => void;
