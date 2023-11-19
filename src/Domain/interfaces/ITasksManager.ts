import { ITask } from "./ITask";

export interface ITasksManager {
  getAllTasks(): ITask[];
  getCompletedTasks(): ITask[];
  getUncompletedTasks(): ITask[];
  addTask(task: ITask): void;
  deleteTask(task: ITask): void;
  completeTask(task: ITask): void;
}
