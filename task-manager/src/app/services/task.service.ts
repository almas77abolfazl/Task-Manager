import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from '../models/task.model';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  selectedListId!: string;

  lists: List[] = [];
  tasks: Task[] = [];

  constructor(private webReqService: WebRequestService) {}

  getLists() {
    return this.webReqService.get('lists');
  }

  createList(title: string) {
    // We want to send a web request to create a list
    return this.webReqService.post('lists', { title });
  }

  updateList(id: string, title: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`lists/${id}`, { title });
  }

  updateTask(listId: string, taskId: string, description: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, {
      description,
    });
  }

  deleteTask(listId: string, taskId: string) {
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  deleteList(id: string) {
    return this.webReqService.delete(`lists/${id}`);
  }

  getTasks(listId: string) {
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  createTask(description: string, listId: string) {
    // We want to send a web request to create a task
    return this.webReqService.post(`lists/${listId}/tasks`, { description });
  }

  complete(task: Task) {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed,
    });
  }
}
