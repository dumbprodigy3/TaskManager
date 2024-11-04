export interface Task {
  id?: number;
  title: string;
  description: string;
  dueDate: string;
  status: TaskStatus;
}

export enum TaskStatus {
  Pending = 0,
  InProgress = 1,
  Completed = 2,
  NA = 'N/A'
}
