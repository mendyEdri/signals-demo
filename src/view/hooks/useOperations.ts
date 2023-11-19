import { useAppContext } from "./useAppContext";

export const useOperations = () => {
  const { operations } = useAppContext();

  return operations;
};
