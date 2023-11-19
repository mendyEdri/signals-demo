import { useAppContext } from "./useAppContext";
import { useOperations } from "./useOperations";

export const useTypingText = () => {
  const { typingService } = useAppContext();
  const { setTypingText, pausedTyping } = useOperations();

  return {
    text: typingService.typingText.value,
    setTypingText,
    isTyping: typingService.isTyping.value,
    pausedTyping,
  };
};
