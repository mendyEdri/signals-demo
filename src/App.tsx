import React from "react";
import { AppContextProvider, FieldAndButton, TasksList } from "./view";
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
      <div className="App">
        <Counter />
        <FieldAndButton />
        <TasksList />
        <CompletedTasksList />
      </div>
    </AppContextProvider>
  );
}
