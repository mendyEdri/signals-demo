import { Task } from "../Domain";

export const randomString = () => {
  return (Math.random() + 1).toString(36).substring(7);
};

export const randomTask = () => {
  return new Task(randomString());
};

export const randomArray = (length: number = 4) => {
  return Array.from({ length }, (_, i) => i + 1);
};
