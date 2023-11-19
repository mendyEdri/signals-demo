import { useCompletedTasks } from "../hooks";

export const CompletedTasksList = (): JSX.Element => {
  const data = useCompletedTasks();

  let component;
  if (data && data?.length > 0) {
    component = data?.map((item, index) => {
      return (
        <li data-testid={"completed-task" + index} key={item.id}>
          {item.title}
        </li>
      );
    });
  }

  return (
    <>
      <h2>Completed Tasks:</h2>
      {component}
    </>
  );
};
