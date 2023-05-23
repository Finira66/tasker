import styles from "./Tasks.module.scss";
import Layout from "@/components/layout/Layout";
import TaskItem from "@/components/ui/task/TaskItem";
import AddTaskForm from "@/components/modals/add-task-form/AddTaskForm";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";
import {ITask} from '@/interfaces/task.interface';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Task name",
      text: "description of the task",
      status: "completed",
      created: Date.now(),
    },
    {
      id: 2,
      name: "Task name 2",
      text: "description of the task",
      status: "completed",
      created: Date.now(),
    },
    {
      id: 3,
      name: "Task name 3",
      text: "description of the task",
      status: "completed",
      created: Date.now(),
    },
    {
      id: 4,
      name: "Task name 4",
      text: "description of the task",
      status: "completed",
      created: Date.now(),
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  function createTask(newTask: ITask) {
    setTasks([...tasks, newTask]);
    setModalVisible(false)
  }

  function removeTask(id: number) {
    setTasks(tasks.filter(task => task.id != id))
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
          {tasks.length ? (
            tasks.map((task) => (
              <TaskItem key={task.id} task={task} removeTask={removeTask} />
            ))
          ) : (
            <div>Tasks not found!</div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;
