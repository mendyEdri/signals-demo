import { useAppContext } from "./useAppContext";

export const useCompletedTasks = () => {
  const { tasksProvider } = useAppContext();

  return tasksProvider.completedTasks.value;
};
