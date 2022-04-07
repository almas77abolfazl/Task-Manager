import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['listId']) {
        this.taskService.selectedListId = params['listId'];
        this.taskService
          .getTasks(params['listId'])
          .subscribe((tasks: Task[]) => {
            this.taskService.tasks = tasks;
          });
      } else {
        this.taskService.tasks = [];
      }
    });

    this.taskService.getLists().subscribe((lists: List[]) => {
      this.taskService.lists = lists;
    });
  }
}
