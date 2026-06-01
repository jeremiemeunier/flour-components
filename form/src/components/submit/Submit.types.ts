export interface SubmitProps {
  size?: number;
  loading: boolean;
  label: string;
  locked?: boolean;
  className?: string;
  children?: React.ReactNode;
  buttonSize?: "s-sm" | "s-lg";
}
