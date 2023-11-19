import { useAppContext } from "./useAppContext";

export const useTasksProvider = () => {
  const { tasksProvider } = useAppContext();

  return tasksProvider;
};
