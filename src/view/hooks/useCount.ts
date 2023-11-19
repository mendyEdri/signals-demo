import { useUncompletedTasks } from "./";

export const useCount = () => {
  const data = useUncompletedTasks();

  return data?.length;
};
