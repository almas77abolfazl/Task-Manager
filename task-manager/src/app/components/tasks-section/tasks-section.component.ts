import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
@Component({
  selector: 'app-tasks-section',
  templateUrl: './tasks-section.component.html',
  styleUrls: ['./tasks-section.component.scss']
})
export class TasksSectionComponent implements OnInit {

  @Input() tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
