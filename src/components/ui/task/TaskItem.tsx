import styles from "./TaskItem.module.scss";
import Image from "next/image";
import { FC } from "react";
import { ITaskSingle } from "@/interfaces/task.interface";
import { ETaskStatuses } from "@/enums/task.enum";

const TaskItem: FC<ITaskSingle> = ({ task, remove, complete }) => {
  return (
    <div
      className={`${styles.item} ${
        task.status === ETaskStatuses.Completed ? styles.active : ""
      }`}
    >
      <div className={styles.overhead}>
        <h4 className={styles.title}>{task.name}</h4>
        <button className="button pink" onClick={() => remove?.(task.id)}>
          <Image src="/icons/close.svg" alt="icon" width={20} height={20} />
        </button>
      </div>
      <p className={styles.text}>{task.text}</p>
      <button className="button" onClick={() => complete?.(task.id)}>
        {task.status === ETaskStatuses.Archived
          ? "Accept"
          : task.status === ETaskStatuses.InProgress
          ? "Complete"
          : "Completed"}
      </button>
    </div>
  );
};

export default TaskItem;
