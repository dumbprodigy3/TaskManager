import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task, TaskStatus } from '../models/task.model';
import { TaskUtilsService } from '../services/task-utils.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})

/**
 * Component to display the task details of individual tasks.
 * 
 */
export class TaskDetailComponent implements OnInit {
  // Initialize task with values to be displayed while loading data.
  task: Task = {
    id: 0,
    title: 'Loading task title...',
    description: 'Loading task description...',
    dueDate: '',
    status: TaskStatus.NA
  };
  editMode = false;
  statusText: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
    private taskUtilsService: TaskUtilsService
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  // Get the current values for the fields.
  getTask(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.taskService.getTask(id).subscribe((task) => {
        this.task = task;
      });
    }
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  // Update the task.
  updateTask(): void {
    if (this.task && this.task.id !== undefined) {
      this.taskService.updateTask(this.task.id, this.task).subscribe(() => {
        this.editMode = false;
        this.router.navigate(['/tasks']);
      });
    } else {
      console.error('Task ID is undefined. Cannot update task.');
    }
  }

  cancelEdit(): void {
    this.editMode = false;
    this.getTask(); // Reset to original data
  }

  getStatusText(status: TaskStatus): string {
    return this.taskUtilsService.getStatusText(status);
  }

}
