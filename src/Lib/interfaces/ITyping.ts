import { Signal } from "@preact/signals-react";

export interface ITyping {
  isTyping: Signal<boolean>;
  typingText: Signal<string | undefined>;
}
