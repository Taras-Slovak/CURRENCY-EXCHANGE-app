import { TASKS } from './../../mosk.tasks';
import { Task } from 'src/app/Task';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
