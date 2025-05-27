import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {TodoItemComponent} from './components/todo-item/todo-item.component';

@Component({
  selector: 'app-root',
  imports: [
    NgOptimizedImage,
    TodoItemComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
