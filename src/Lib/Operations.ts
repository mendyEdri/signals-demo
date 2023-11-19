import { ITask, ITasksService } from "../Domain";
import { IOperations } from "./interfaces/IOperations";
import { ITyping } from "./interfaces/ITyping";
import _ from "lodash";

export class Operations implements IOperations {
  constructor(
    private tasksService: ITasksService,
    private typingService: ITyping
  ) {}

  addTask = (task: ITask) => {
    const tempValue = this.tasksService.data.value;
    this.tasksService.data.value = [...tempValue, task];
  };

  completeTask = (task: ITask) => {
    task.completed = true;

    this.tasksService.data.value = [...this.tasksService.data.value];
  };

  setTypingText = (text: string) => {
    this.typingService.isTyping.value = true;
    this.typingService.typingText.value = text;
  };

  resetTyping = () => {
    this.typingService.isTyping.value = false;
    this.typingService.typingText.value = undefined;
  };
}
