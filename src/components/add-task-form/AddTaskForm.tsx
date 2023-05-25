import React, {FC, useEffect, useState} from "react";
import { ITask } from "@/interfaces/task.interface";
import { ETaskStatuses, ETaskTags } from "@/enums/task.enum";
import Checkbox from "@/components/ui/checkbox/Checkbox";

interface AddTaskFormProps {
  create: (task: ITask) => void;
  isModalVisible: boolean;
}

const AddTaskForm: FC<AddTaskFormProps> = ({ create, isModalVisible }) => {
  const emptyTask = {
    id: 0,
    name: "",
    text: "",
    status: ETaskStatuses.Archived,
    created: 0,
    tags: [],
  };
  const initialTagsCheckboxes = [
    {
      id: 0,
      name: ETaskTags.Home,
      label: "Home",
      isChecked: false,
    },
    {
      id: 1,
      name: ETaskTags.Work,
      label: "Work",
      isChecked: false,
    },
  ];

  const [task, setTask] = useState<ITask>(emptyTask);
  const [tagsCheckboxes, setTagsCheckboxes] = useState(initialTagsCheckboxes);
  const [selectedTags, setSelectedTags] = useState([]);

  function clearForm() {
    setTask(emptyTask);
    setTagsCheckboxes(initialTagsCheckboxes);
    setSelectedTags([]);
  }

  function addNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (task.name.trim().length === 0 || task.text.trim().length === 0) {
      alert('Please fill in all fields in the form')
      return;
    }

    create({
      ...task,
      id: Date.now(),
      created: Date.now(),
      tags: selectedTags,
    });

    clearForm();
  }

  const handleCheckboxChange = (e, index: number) => {
    tagsCheckboxes[index].isChecked = !tagsCheckboxes[index].isChecked;
    setTagsCheckboxes([...tagsCheckboxes]);

    if (tagsCheckboxes[index].isChecked) {
      setSelectedTags([...selectedTags, e.target.value]);
    } else {
      setSelectedTags(selectedTags.filter((tag) => tag !== e.target.value));
    }
  };

  useEffect(() => {
    if (!isModalVisible) {
      clearForm();
    }
  }, [isModalVisible])

  return (
    <form className="form" onSubmit={addNewTask}>
      <div className="form__title">Create a new task</div>

      <div className="form__inner">
        <input
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          type="text"
          placeholder="Name"
          className="input form__area"
        />
        <textarea
          value={task.text}
          onChange={(e) => setTask({ ...task, text: e.target.value })}
          placeholder="Description"
          className="input form__area"
        />

        <div className="title title--sm form__label">Select tags:</div>
        <div className="form__checkboxes">
          {tagsCheckboxes.map((checkbox, index) => (
            <Checkbox
              key={checkbox.id}
              value={checkbox.label}
              text={checkbox.label}
              selected={checkbox.isChecked}
              handleOnChange={(e) => handleCheckboxChange(e, index)}
              className="form__checkbox"
            />
          ))}
        </div>
      </div>

      <button className="button">Create task</button>
    </form>
  );
};

export default AddTaskForm;
