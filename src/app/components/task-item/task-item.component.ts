import { Task } from './../../Task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  @Output() onToggleRemider: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() {

  }

  ngOnInit(): void {
  }

  onDelete(task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task) {
    this.onToggleRemider.emit(task);
  }



}
