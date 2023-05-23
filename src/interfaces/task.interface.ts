export interface ITask {
  id: number;
  name: string;
  text: string;
  status: string;
  created: number;
}

export interface ITaskSingle {
  task: ITask;
  removeTask?: (id: number) => void;
}