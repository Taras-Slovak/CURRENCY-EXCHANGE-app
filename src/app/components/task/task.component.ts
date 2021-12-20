import { TaskService } from './../../services/task.service';
import { Task } from '../../Task';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe(tasks => this.tasks = tasks);
  }
  deleteTask(task: Task) {

  }

}
