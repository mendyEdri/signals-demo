import { useOperations } from "./useOperations";

export const useAddTask = () => {
  const operations = useOperations();

  return operations?.addTask;
};
