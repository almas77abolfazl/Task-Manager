import { Component, Input, OnInit } from '@angular/core';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-lists-section',
  templateUrl: './lists-section.component.html',
  styleUrls: ['./lists-section.component.scss'],
})
export class ListsSectionComponent implements OnInit {
  @Input() lists: List[] = [];

  constructor() {}

  ngOnInit(): void {}
}
