import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  taskValue!: string;
  listId!: string;
  taskId!: string;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.listId = params['listId'];
      this.taskId = params['taskId'];
      this.taskService.getTasks(this.listId).subscribe((tasks: Task[]) => {
        const task = tasks.find((task) => task._id === this.taskId);
        if (task) {
          this.taskValue = task.description;
        }
      });
    });
  }

  editTask(value: string) {
    this.taskService
      .updateTask(this.listId, this.taskId, value)
      .subscribe(() => {
        this.router.navigate(['/lists', this.listId]);
      });
  }
}
