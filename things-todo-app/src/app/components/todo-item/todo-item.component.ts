import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  isModified: boolean = false;

  onModify() {
    this.isModified = true;
  }

  cancelModify() {
    this.isModified = false;
  }
}
