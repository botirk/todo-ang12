import { Component, EventEmitter, Input, Output } from '@angular/core';

export type Task = string;

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
    @Input() task!: Task;
    @Output() deleted = new EventEmitter<void>();
}