import React, {
  type HTMLInputAutoCompleteAttribute,
  type HTMLInputTypeAttribute,
} from "react";

export interface InputProps {
  name: string;
  label?: string;
  size?: number;
  readOnly?: boolean;
  tagline?: React.ReactNode;
  type?: HTMLInputTypeAttribute;
  maxLength?: number;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  autofocus?: boolean;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: string | number;
  dataIsLoading?: boolean;
  error?: string;
}
