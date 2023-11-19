import { RuntimeTasksService } from "../Domain";
import { Operations } from "./Operations";
import { AppClient } from "./AppClient";
import { IAppClient, IClientFactory } from "./interfaces";
import { TypingService } from "./TypingService";
import { TasksProvider } from "../Domain/TasksProvider";

export class ClientFactory implements IClientFactory {
  build(): IAppClient {
    const tasksService = new RuntimeTasksService();
    const typingService = new TypingService();
    const tasksProvider = new TasksProvider(tasksService);
    const operations = new Operations(tasksService, typingService);

    return new AppClient(tasksProvider, operations, typingService);
  }
}
