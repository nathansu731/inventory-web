import type React from "react";

export type SignupFormData = {
  company: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type DemoFormData = {
  companyName: string;
  email: string;
  fullName: string;
  notes: string;
};

export type LeadType = "demo" | "sales" | "expert";

export type SignupSubmitHandler = (
  event: React.FormEvent,
) => void | Promise<void>;

export type DemoSubmitHandler = (
  data: DemoFormData,
) => void | Promise<void>;

export type SignupInputChangeHandler = (
  field: keyof SignupFormData,
  value: string,
) => void;
