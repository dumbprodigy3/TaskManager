import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task, TaskStatus } from '../models/task.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  errorMessage: string | null = null;
  taskId: number | null = null;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    // Initialize form with validators
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.maxLength(250)],
      dueDate: ['', Validators.required],
      status: [TaskStatus.Pending, Validators.required]
    });
  }

  ngOnInit(): void {
    // Check if we're in edit mode by checking for an 'id' in the route
    this.taskId = this.route.snapshot.params['id'];
    if (this.taskId) {
      // If editing, populate the form with the task data
      this.taskService.getTask(this.taskId).subscribe(
        (task) => this.taskForm.patchValue(task),
        (error) => {
          console.error('Error loading task:', error);
          this.errorMessage = 'Could not load the task details.';
        }
      );
    }
  }

  saveTask(): void {
    if (this.taskForm.invalid) {
      this.errorMessage = 'Please correct the errors and try again.';
      return;
    }

    const taskData: Task = this.taskForm.value;

    console.log("Task data:", taskData);

    if (this.taskId) {
      taskData.id = this.taskId;
      this.taskService.updateTask(this.taskId, taskData).pipe(
        tap(() => this.router.navigate([`/tasks`])),
        catchError((error) => {
          console.error('Error updating task:', error);
          this.errorMessage = 'Failed to update task. Please try again later.';
          return of(null);
        })
      ).subscribe();
    } else {
      this.taskService.createTask(taskData).pipe(
        tap(() => this.router.navigate(['/tasks'])),
        catchError((error) => {
          console.error('Error creating task:', error);
          this.errorMessage = 'Failed to create task. Please try again later.';
          return of(null);
        })
      ).subscribe();
    }
  }

  cancel(): void {
    this.router.navigate(['/tasks']);
  }
}
