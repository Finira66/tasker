import { useState } from "react";

const AddTaskForm = ({ create }) => {
  const [task, setTask] = useState({
    name: '',
    text: '',
  });

  function addNewTask(e) {
    e.preventDefault();
    create({
      id: Date.now(),
      ...task,
    });
    setTask({
      name: '',
      text: ''
    })
  }

  return (
    <form>
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

      <button className="button" onClick={addNewTask}>
        Create task
      </button>
    </form>
  );
};

export default AddTaskForm;
