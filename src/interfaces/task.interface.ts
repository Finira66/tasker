export interface ITask {
  id: number;
  name: string;
  text: string;
  status: string;
  created: number;
}

export interface ITaskSingle {
  task: ITask;
  remove?: (id: number) => void;
  complete?: (id: number) => void;
}