import { Signal, signal } from "@preact/signals-react";
import { ITyping } from "./interfaces/ITyping";

export class TypingService implements ITyping {
  isTyping: Signal<boolean> = signal(false);
  typingText: Signal<string | undefined> = signal(undefined);

  constructor() {
    this.isTyping = signal(false);
    this.typingText = signal(undefined);
  }
}
