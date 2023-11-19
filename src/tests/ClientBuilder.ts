import { act } from "react-dom/test-utils";
import { ITask } from "../Domain";
import { ClientFactory } from "../Lib";

export enum OperationsKeys {
  addTask = "addTask",
  completeTask = "completeTask",
}

export class ClientBuilder {
  private appClient = new ClientFactory().build();

  withTasks = (tasks: ITask[]) => {
    tasks.forEach((task) => this.appClient.operations.addTask(task));
    return this;
  };

  withCompletedTasks = (tasks: ITask[]) => {
    tasks.forEach((task) => {
      task.completed = true;
      this.appClient.operations.addTask(task);
    });
    return this;
  };

  withSpyOnOperation = (operation: OperationsKeys) => {
    jest.spyOn(this.appClient.operations, operation);
    return this;
  };

  withTypingText = (text: string) => {
    act(() => (this.appClient.typingService.typingText.value = text));
    return this;
  };

  build = () => {
    return this.appClient;
  };
}
