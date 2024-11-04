import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task, TaskStatus } from '../models/task.model';
import { TaskUtilsService } from '../services/task-utils.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  isLoading = true;

  constructor(
    private taskService: TaskService,
    private taskUtilsService: TaskUtilsService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.isLoading = false;
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    });
  }

  getStatusText(status: TaskStatus): string {
    return this.taskUtilsService.getStatusText(status);
  }
}
