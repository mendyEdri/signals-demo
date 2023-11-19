import React from "react";
import { ITasksProvider } from "../Domain";
import { IOperations } from "../Lib/interfaces/IOperations";
import { ITyping } from "../Lib/interfaces/ITyping";

export interface IAppContext {
  tasksProvider?: ITasksProvider;
  operations?: IOperations;
  typingService?: ITyping;
  children?: React.ReactNode;
}

export const AppContext = React.createContext<IAppContext>({});
