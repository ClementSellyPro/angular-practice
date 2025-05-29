import { Component } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-item-input',
  imports: [
    FormsModule
  ],
  templateUrl: './todo-item-input.component.html',
  styleUrl: './todo-item-input.component.css'
})
export class TodoItemInputComponent {
  inputTitle: string = '';
  inputDescription: string = '';

  constructor(private todoService: TodoService) {}

  cancelAdd() {
    this.todoService.cancelAdd();
  }

  addNewTask() {
    const newTask = {
      id: 0,
      title: this.inputTitle,
      description: this.inputDescription,
      isDone: false
    }

    this.todoService.addNewTask(newTask);
    this.inputTitle = '';
    this.inputDescription = '';
    this.todoService.cancelAdd();
  }
}
