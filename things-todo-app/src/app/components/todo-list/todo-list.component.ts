import {Component, OnInit} from '@angular/core';
import {TodoItemComponent} from '../todo-item/todo-item.component';
import {TodoType} from '../../models/todoType.type';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [
    TodoItemComponent
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  allTasks: TodoType[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.allTasks = this.todoService.getAllTasks();
    console.log(this.allTasks);
  }
}
