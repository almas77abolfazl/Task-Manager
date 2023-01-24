import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks-section',
  templateUrl: './tasks-section.component.html',
  styleUrls: ['./tasks-section.component.scss'],
})
export class TasksSectionComponent implements OnInit {
  constructor(public taskService: TaskService, private router: Router) {}

  ngOnInit(): void {}

  deleteTask(taskId: string) {
    this.taskService
      .deleteTask(this.taskService.selectedListId, taskId)
      .subscribe((res: any) => {
        this.taskService.tasks = this.taskService.tasks.filter(
          (val) => val._id !== taskId
        );
      });
  }

  onTaskClick(task: Task) {
    // we want to set the task to completed
    this.taskService.complete(task).subscribe(() => {
      // the task has been set to completed successfully
      task.completed = !task.completed;
    });
  }

  onDeleteListClick() {
    this.taskService
      .deleteList(this.taskService.selectedListId)
      .subscribe((res: any) => {
        this.router.navigate(['/lists']);
      });
  }
}
