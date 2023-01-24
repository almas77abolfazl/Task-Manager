import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-lists-section',
  templateUrl: './lists-section.component.html',
  styleUrls: ['./lists-section.component.scss'],
})
export class ListsSectionComponent implements OnInit {
  constructor(public taskService: TaskService) {}

  ngOnInit(): void {}
}
