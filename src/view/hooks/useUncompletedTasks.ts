import { useAppContext } from "./useAppContext";

export const useUncompletedTasks = () => {
  const { tasksProvider } = useAppContext();

  return tasksProvider.uncompletedTasks.value;
};
