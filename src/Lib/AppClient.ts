import { ITasksProvider } from "../Domain";
import { IOperations } from "./interfaces/IOperations";
import { IAppClient } from "./interfaces";
import { ITyping } from "./interfaces/ITyping";

export class AppClient implements IAppClient {
  operations: IOperations;
  typingService: ITyping;
  tasksProvider: ITasksProvider;

  constructor(
    tasksProvider: ITasksProvider,
    operations: IOperations,
    typingService: ITyping
  ) {
    this.tasksProvider = tasksProvider;
    this.operations = operations;
    this.typingService = typingService;
  }
}
