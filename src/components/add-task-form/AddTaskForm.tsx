import React, {FC, useState} from "react";
import { ITask } from "@/interfaces/task.interface";
import { ETaskStatuses } from "@/enums/task.enum";

interface AddTaskFormProps{
  create: (task: ITask) => void
}

const AddTaskForm: FC<AddTaskFormProps> = ({ create }) => {
  const emptyTask = {
    id: 0,
    name: "",
    text: "",
    status: ETaskStatuses.Archived,
    created: 0,
  };

  const [task, setTask] = useState<ITask>(emptyTask);

  function addNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    create({
      ...task,
      id: Date.now(),
      created: Date.now(),
    });

    setTask(emptyTask);
  }

  return (
    <form onSubmit={addNewTask}>
      <div className="modal__title">Create a new task</div>

      <div className="modal__inner">
        <input
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          type="text"
          placeholder="Name"
          className="input modal__area"
        />
        <textarea
          value={task.text}
          onChange={(e) => setTask({ ...task, text: e.target.value })}
          placeholder="Description"
          className="input modal__area"
        />
      </div>

      <button className="button">Create task</button>
    </form>
  );
};

export default AddTaskForm;
