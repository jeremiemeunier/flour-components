export type MessageColor =
  | "content"
  | "positive"
  | "negative"
  | "neutral"
  | "brand"
  | "punch"
  | "vivid-sky-blue"
  | "mexican-pink"
  | "chartreuse"
  | "malachite"
  | "tomato"
  | "process-cyan"
  | "atomic-tangerine"
  | "ash-gray"
  | "vanilla"
  | "yellow-green"
  | "violet"
  | "verdigri"
  | "jonquil"
  | string;
export type MessageState = MessageContentTypes | null;
export type MessageFormat = "icon" | "icon-cta" | "cta";

export interface MessageContentTypes {
  type: MessageColor;
  content: string;
  format?: MessageFormat;
  icon?: string;
}

export interface MessageProps {
  data: MessageState;
  className?: string;
}
