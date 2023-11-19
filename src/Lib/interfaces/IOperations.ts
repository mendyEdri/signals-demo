import { ITask } from "../../Domain";

export interface IOperations {
  addTask(task: ITask): void;
  completeTask(task: ITask): void;
  setTypingText(text: string): void;
  resetTyping(): void;
}
