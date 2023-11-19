import { act } from "react-dom/test-utils";
import { ITask } from "../Domain";
import { ClientFactory } from "../Lib";
import { randomString } from "./utils";

export enum OperationsKeys {
  addTask = "addTask",
  completeTask = "completeTask",
  setTypingText = "setTypingText",
}

export class ClientBuilder {
  private appClient = new ClientFactory().build();

  withTasks = (tasks: ITask[]) => {
    tasks.forEach((task) => this.appClient.operations.addTask(task));
    return this;
  };

  withTypingText = (text: string = randomString()) => {
    act(() => this.appClient.operations.setTypingText(text));
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

  build = () => {
    return this.appClient;
  };
}
