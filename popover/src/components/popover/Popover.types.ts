export interface PopoverTypes {
  children: React.ReactNode;
}

export interface PopoverTriggerTypes {
  className?: string;
  level?: "primary" | "secondary" | "tertiary";
  format?: "icon-only" | "icon-left" | "icon-right";
  size?: "s-sm" | "s-lg";
  children: React.ReactNode;
  title?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export interface PopoverContentTypes {
  align?: "start" | "center" | "end";
  className?: string;
  children: React.ReactNode;
}
