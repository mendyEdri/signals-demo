import { useAppContext } from "./useAppContext";
import { useOperations } from "./useOperations";

export const useTypingText = () => {
  const { typingService } = useAppContext();
  const { setTypingText } = useOperations();

  return { text: typingService.typingText.value, setTypingText };
};
