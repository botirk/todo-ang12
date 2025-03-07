import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { EnterTaskComponent } from './task/entertask.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '**', component: AppComponent },
    ])
  ],
  declarations: [
    TaskComponent,
    AppComponent,
    EnterTaskComponent,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }