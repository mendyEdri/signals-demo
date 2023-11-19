import { useOperations } from "./useOperations";

export const useOnTaskComplete = () => {
  const operations = useOperations();

  return operations?.completeTask;
};
