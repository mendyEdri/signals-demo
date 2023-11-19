import { useOnTaskComplete, useUncompletedTasks } from "../hooks";

export const TasksList = (): JSX.Element => {
  const data = useUncompletedTasks();
  const onCompleteTask = useOnTaskComplete();

  let component;
  if (data && data?.length > 0) {
    component = data?.map((item, index) => {
      return (
        <li
          data-testid={"task" + index}
          key={item.id}
          onClick={() => {
            onCompleteTask(item);
          }}
        >
          {item.title}
        </li>
      );
    });
  } else {
    component = <h2 data-testid="no-tasks">No tasks yet</h2>;
  }

  return (
    <>
      <h2>To Do</h2>
      {component}
    </>
  );
};
