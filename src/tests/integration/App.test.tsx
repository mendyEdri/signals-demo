import { act, render, screen } from "@testing-library/react";
import App from "../../App";
import { ClientBuilder, OperationsKeys } from "../ClientBuilder";
import { randomString, randomTask } from "../utils";

describe("UI Integration tests", () => {
  test("Make sure empty state title is visible", () => {
    const appClient = new ClientBuilder().build();
    render(<App appClient={appClient} />);

    const emptyState = screen.getByTestId("no-tasks");
    expect(emptyState).toBeInTheDocument();
  });

  test("Expect list of tasks be generated when task is been added", () => {
    const appClient = new ClientBuilder().withTasks([randomTask()]).build();

    render(<App appClient={appClient} />);

    const item = screen.getByTestId("task0");
    expect(item).toBeInTheDocument();
  });

  describe("add task", () => {
    test("Expect onClick call an operation when text is valid", () => {
      const appClient = new ClientBuilder()
        .withSpyOnOperation(OperationsKeys.addTask)
        .withTypingText(randomString())
        .build();

      render(<App appClient={appClient} />);

      const button = screen.getByTestId("submit-button");
      act(() => button.click());
      expect(appClient.operations.addTask).toHaveBeenCalledTimes(1);
    });

    test("Expect onClick not to call an operation when text is not valid", () => {
      const appClient = new ClientBuilder()
        .withSpyOnOperation(OperationsKeys.addTask)
        .build();

      render(<App appClient={appClient} />);

      const button = screen.getByTestId("submit-button");
      act(() => button.click());
      expect(appClient.operations.addTask).not.toHaveBeenCalled();
    });
  });

  describe("complete task", () => {
    test("Expect clicking on a task will call complete task", () => {
      const task = randomTask();
      const appClient = new ClientBuilder()
        .withTasks([task])
        .withSpyOnOperation(OperationsKeys.completeTask)
        .build();
      render(<App appClient={appClient} />);

      const firstTask = screen.getByTestId("task0");
      act(() => firstTask.click());
      expect(appClient.operations.completeTask).toHaveBeenCalledTimes(1);
    });

    test("Expect clicking on a task will move it to completed-tasks list", () => {
      const task = randomTask();
      const appClient = new ClientBuilder()
        .withTasks([task])
        .withSpyOnOperation(OperationsKeys.completeTask)
        .build();
      render(<App appClient={appClient} />);

      const firstTask = screen.getByTestId("task0");
      act(() => firstTask.click());

      const completedTask = screen.getByTestId("completed-task0");
      expect(completedTask).toBeInTheDocument();
    });
  });

  describe("typings", () => {
    test("Expect empty string task not to be added", () => {
      const emptyString = "  ";
      const appClient = new ClientBuilder()
        .withSpyOnOperation(OperationsKeys.addTask)
        .withTypingText(emptyString)
        .build();

      render(<App appClient={appClient} />);

      const button = screen.getByTestId("submit-button");
      act(() => button.click());
      expect(appClient.operations.addTask).not.toHaveBeenCalled();
    });

    test("Expect typing to be visible when typing", () => {
      const appClient = new ClientBuilder().withTypingText().build();
      render(<App appClient={appClient} />);

      const typingIndicator = screen.getByTestId("typing-indicator");
      expect(typingIndicator).toBeInTheDocument();
    });

    test("Expect typing hidden when not typing", async () => {
      const appClient = new ClientBuilder().build();
      render(<App appClient={appClient} />);

      const typingIndicator = screen.queryAllByTestId("typing-indicator")[0];
      expect(typingIndicator).toBeUndefined();
    });

    test.skip("Expect typing indicator to be hidden after 2 seconds without typing", () => {
      jest.useFakeTimers();
      jest.spyOn(global, "setTimeout");
      const appClient = new ClientBuilder().withTypingText().build();
      render(<App appClient={appClient} />);

      jest.runAllTimers();

      const typingIndicator = screen.queryAllByTestId("typing-indicator")[0];
      expect(typingIndicator).toBeUndefined();
    });
  });
});
