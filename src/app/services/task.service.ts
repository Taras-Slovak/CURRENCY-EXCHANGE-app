import { Injectable } from '@angular/core';
import { TASKS } from '../mosk.tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(): Task[] {
    return TASKS
  }
}
