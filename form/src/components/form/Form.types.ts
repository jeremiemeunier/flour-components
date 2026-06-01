import React, { SubmitEvent } from "react";

export interface FormHandler {
  (formData: FormData, event: SubmitEvent<HTMLFormElement>): void;
}

export interface FormProps {
  children: React.ReactNode;
  onSubmit: FormHandler;
  className?: string;
}
