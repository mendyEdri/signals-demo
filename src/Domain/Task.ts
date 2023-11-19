import { v4 as uuidv4 } from "uuid";
import { ITask } from "./interfaces";

export class Task implements ITask {
  id: string;
  title: string;
  completed: boolean;
  constructor(title: string, completed: boolean = false) {
    this.id = uuidv4();
    this.title = title;
    this.completed = completed;
  }
}
