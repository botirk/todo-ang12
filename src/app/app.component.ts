import { Component } from '@angular/core';
import { Task } from './task/task.component';



@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Array<Task> = [];

  entered(task: Task) {
    this.tasks.push(task);
  }

  delete(i: number) {
    this.tasks.splice(i, 1);
  }
}