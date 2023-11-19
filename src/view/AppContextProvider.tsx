import { FC } from "react";
import { IAppContext, AppContext } from "./AppContext";

export const AppContextProvider: FC<IAppContext> = (props) => {
  const { children, operations, typingService, tasksProvider } = props;
  return (
    <AppContext.Provider value={{ operations, typingService, tasksProvider }}>
      {children}
    </AppContext.Provider>
  );
};
