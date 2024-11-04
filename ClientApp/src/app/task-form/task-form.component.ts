import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task, TaskStatus } from '../models/task.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = { title: '', description: '', dueDate: '', status: TaskStatus.Pending };

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.taskService.getTask(id).subscribe(task => this.task = task);
    }
  }

  saveTask(): void {
    if (this.task.id) {
      this.taskService.updateTask(this.task.id, this.task).subscribe(
        () => this.router.navigate(['/tasks']),
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      this.taskService.createTask(this.task).subscribe(
        () => this.router.navigate(['/tasks']),
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }

}
