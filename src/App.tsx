import React from "react";
import { AppContextProvider, FieldAndButton, Status, TasksList } from "./view";
import { Counter } from "./view";
import { IAppClient } from "./Lib/interfaces";
import { CompletedTasksList } from "./view/components/CompletedTasksList";

export default function App({ appClient }: { appClient: IAppClient }) {
  const { operations, typingService, tasksProvider } = appClient;
  return (
    <AppContextProvider
      operations={operations}
      typingService={typingService}
      tasksProvider={tasksProvider}
    >
      <div className="split left">
        <Counter />
        <FieldAndButton />
        <TasksList />
      </div>
      <div className="split right">
        <Status />
        <CompletedTasksList />
      </div>
    </AppContextProvider>
  );
}
