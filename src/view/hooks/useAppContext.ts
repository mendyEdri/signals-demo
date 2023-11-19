import { useContext } from "react";
import { AppContext, IAppContext } from "../AppContext";

export const useAppContext = (): IAppContext => {
  const appContext = useContext<IAppContext>(AppContext);

  return appContext;
};
