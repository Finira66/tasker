import styles from "./Tasks.module.scss";
import Layout from "@/components/layout/Layout";
import TaskItem from "@/components/ui/task/TaskItem";
import AddTaskForm from "@/components/modals/add-task-form/AddTaskForm";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";
import { ITask } from "@/interfaces/task.interface";
import {ETaskStatuses} from '@/enums/task.enum';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Task name",
      text: "description of the task",
      status: "archived",
      created: Date.now(),
    },
    {
      id: 2,
      name: "Task name 2",
      text: "description of the task",
      status: "archived",
      created: Date.now(),
    },
    {
      id: 3,
      name: "Task name 3",
      text: "description of the task",
      status: "archived",
      created: Date.now(),
    },
    {
      id: 4,
      name: "Task name 4",
      text: "description of the task",
      status: "archived",
      created: Date.now(),
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  const archivedTasks = tasks.filter((task) => task.status === "archived");
  const inProgressTasks = tasks.filter((task) => task.status === "in_progress");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  function createTask(newTask: ITask) {
    setTasks([...tasks, newTask]);
    setModalVisible(false);
  }

  function removeTask(id: number) {
    setTasks(tasks.filter((task) => task.id != id));
  }

  function completeTask(id: number) {
    const indexTask = tasks.findIndex((task) => task.id === id);

    if (tasks[indexTask].status === ETaskStatuses.Archived) {
      tasks[indexTask].status = ETaskStatuses.InProgress;
    } else if (tasks[indexTask].status === ETaskStatuses.InProgress) {
      tasks[indexTask].status = ETaskStatuses.Completed;
    }

    setTasks([...tasks])
  }

  return (
    <Layout>
      <div className="container">
        <h2 className={`${styles.title} title`}>My Tasks list</h2>

        <button
          className={`${styles.button} button`}
          onClick={() => setModalVisible(true)}
        >
          Add a new task
        </button>

        <Modal visible={modalVisible} setVisible={setModalVisible}>
          <AddTaskForm create={createTask} />
        </Modal>

        <div className={styles.grid}>
          <div>
            <div className="title title--md">Archive</div>
            {archivedTasks.length ? (
              archivedTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  remove={removeTask}
                  complete={completeTask}
                />
              ))
            ) : (
              <div>Tasks not found.</div>
            )}
          </div>
          <div>
            <div className="title title--md">In progress</div>
            {inProgressTasks.length ? (
              inProgressTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  remove={removeTask}
                  complete={completeTask}
                />
              ))
            ) : (
              <div>In progress tasks not found.</div>
            )}
          </div>
          <div>
            <div className="title title--md">Completed</div>
            {completedTasks.length ? (
              completedTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))
            ) : (
              <div>Completed tasks not found.</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;
