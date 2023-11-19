import { ITasksProvider } from "../../Domain";
import { IOperations } from "./IOperations";
import { ITyping } from "./ITyping";

export interface IAppClient {
  tasksProvider: ITasksProvider;
  operations: IOperations;
  typingService: ITyping;
}
