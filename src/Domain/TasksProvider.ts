import { signal } from "@preact/signals-react";
import { ITask, ITasksService } from "./interfaces";
import { ITasksProvider } from "./interfaces/ITasksProvider";

export class TasksProvider implements ITasksProvider {
  uncompletedTasks = signal<ITask[]>([]);
  completedTasks = signal<ITask[]>([]);
  allTasks = signal<ITask[]>([]);

  constructor(private tasksService: ITasksService) {
    tasksService.data.subscribe(this.onDataChanged);
  }

  private onDataChanged = (data: ITask[]) => {
    this.allTasks.value = data;

    this.completedTasks.value = this.tasksService.data.value.filter(
      (item) => item.completed === true
    );

    this.uncompletedTasks.value = this.tasksService.data.value.filter(
      (item) => item.completed === false
    );
  };
}
