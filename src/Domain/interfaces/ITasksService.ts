import { Signal } from "@preact/signals-react";
import { ITask } from "./ITask";

export interface ITasksService {
  data: Signal<ITask[]>;
}
