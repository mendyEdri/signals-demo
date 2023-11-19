import { ITask } from "../interfaces/ITask";
import { ITasksService } from "../interfaces/ITasksService";
import { Signal, signal } from "@preact/signals-react";

export class RuntimeTasksService implements ITasksService {
  data: Signal<ITask[]> = signal([]);
}
