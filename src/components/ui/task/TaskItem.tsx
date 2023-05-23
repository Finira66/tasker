import styles from "./TaskItem.module.scss";
import Image from "next/image";
import { FC } from "react";
import { ITaskSingle } from "@/interfaces/task.interface";

const TaskItem: FC<ITaskSingle> = ({ task, removeTask }) => {
  return (
    <div className={styles.item}>
      <div className={styles.overhead}>
        <h4 className={styles.title}>{task.name}</h4>
        <button className="button red" onClick={() => removeTask?.(task.id)}>
          <Image src="/icons/close.svg" alt="icon" width={20} height={20} />
        </button>
      </div>
      <p className={styles.text}>{task.text}</p>
      <button className="button">Complete</button>
    </div>
  );
};

export default TaskItem;
