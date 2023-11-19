import React from "react";
import { useTypingText } from "../hooks/useTypingText";

export const Status = () => {
  const { isTyping } = useTypingText();
  let component;
  if (isTyping) {
    component = <h3 data-testid="typing-indicator">typing..</h3>;
  } else {
    component = null;
  }

  return component;
};
