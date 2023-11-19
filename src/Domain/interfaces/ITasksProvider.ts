import { Signal } from "@preact/signals-react";
import { ITask } from "./ITask";

export interface ITasksProvider {
  allTasks: Signal<ITask[]>;
  completedTasks: Signal<ITask[]>;
  uncompletedTasks: Signal<ITask[]>;
}
