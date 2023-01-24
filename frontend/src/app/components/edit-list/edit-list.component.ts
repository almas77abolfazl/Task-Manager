import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss'],
})
export class EditListComponent implements OnInit {
  listValue!: string;
  listId: any;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.listId = params['listId'];
      this.taskService.getLists().subscribe((lists: List[]) => {
        const list =lists.find((list) => list._id === this.listId);
        if (list) {
          this.listValue = list.title
        }
      });
    });
  }

  editList(value: string) {
    this.taskService.updateList(this.listId, value).subscribe(list=>{
      this.router.navigate(['/lists' , this.listId])
    });
  }
}
