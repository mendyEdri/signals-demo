import { act } from "react-dom/test-utils";
import { Task } from "../../Domain";
import { ClientBuilder } from "../ClientBuilder";
import { randomArray, randomTask } from "../utils";

describe("Unit Tests", () => {
  test("add operation", () => {
    const client = new ClientBuilder().build();
    client.operations.addTask(new Task("123"));

    expect(client.tasksProvider.allTasks.value.length).toBe(1);
  });

  test("add operation title", () => {
    const client = new ClientBuilder().build();
    const title = "this is title 12311 bo";
    client.operations.addTask(new Task(title));

    expect(client.tasksProvider.allTasks.value[0].title).toEqual(title);
  });

  test("add operation start with uncomplete state", () => {
    const client = new ClientBuilder().build();
    client.operations.addTask(randomTask());

    expect(client.tasksProvider.allTasks.value[0].completed).toBe(false);
  });

  test("add operation can add to an array multiple tasks", () => {
    const client = new ClientBuilder().build();

    randomArray(5).forEach(() => client.operations.addTask(randomTask()));
    expect(client.tasksProvider.allTasks.value.length).toBe(5);
  });

  test("Expect complete task to update completedTasks", () => {
    const task1 = randomTask();
    const client = new ClientBuilder()
      .withTasks([task1, randomTask(), randomTask()])
      .build();

    expect(client.tasksProvider.uncompletedTasks.value.length).toBe(3);

    act(() => client.operations.completeTask(task1));
    expect(client.tasksProvider.uncompletedTasks.value.length).toBe(2);
    expect(client.tasksProvider.completedTasks.value.length).toBe(1);
  });
});
