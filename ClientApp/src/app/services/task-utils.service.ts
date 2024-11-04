import { Injectable } from '@angular/core';
import { TaskStatus } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskUtilsService {

  constructor() { }

  getStatusText(status: TaskStatus): string {
    switch (status) {
      case TaskStatus.Pending:
        return 'Pending';
      case TaskStatus.InProgress:
        return 'In Progress';
      case TaskStatus.Completed:
        return 'Completed';
      default:
        return 'N/A';
    }
  }
}
