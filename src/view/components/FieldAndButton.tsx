import { useCallback } from "react";
import { Task } from "../../Domain";
import { useAddTask } from "../hooks";
import _ from "lodash";
import { useTypingText } from "../hooks/useTypingText";

export const FieldAndButton = () => {
  const addTask = useAddTask();
  const { text, setTypingText } = useTypingText();

  const validate = useCallback(() => {
    return !_.chain(text).trim().isEmpty().value();
  }, [text]);

  return (
    <>
      <input
        type="text"
        data-testid="textfield"
        onChange={(event) => {
          setTypingText(event.target.value);
        }}
        value={text}
      />
      <button
        data-testid="submit-button"
        onClick={() => {
          if (validate()) {
            addTask?.(new Task(text));
            setTypingText("");
          }
        }}
      >
        Add Task
      </button>
    </>
  );
};
