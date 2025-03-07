import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from './task.component';

@Component({
  selector: 'entertask',
  templateUrl: './entertask.component.html',
  styleUrls: ['./entertask.component.css']
})
export class EnterTaskComponent {
    @Output() entered = new EventEmitter<Task>();

    text: string = "";

    click() {
        if (this.text) this.entered.emit(this.text);
        this.text = "";
    }
}