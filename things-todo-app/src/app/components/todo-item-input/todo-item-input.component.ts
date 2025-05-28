import { Component } from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item-input',
  imports: [],
  templateUrl: './todo-item-input.component.html',
  styleUrl: './todo-item-input.component.css'
})
export class TodoItemInputComponent {

  constructor(private todoService: TodoService) {}

  cancelAdd() {
    this.todoService.cancelAdd();
  }

  addNewTask() {

  }
}
