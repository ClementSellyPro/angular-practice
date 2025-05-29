import {Component, OnInit} from '@angular/core';
import {TodoItemComponent} from '../todo-item/todo-item.component';
import {TodoType} from '../../models/todoType.type';
import {TodoService} from '../../services/todo.service';
import {Observable, switchMap} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [
    TodoItemComponent,
    AsyncPipe
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  allTasks$!: Observable<TodoType[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.allTasks$ = this.todoService.isTaskDoneDisplayed$.pipe(
      switchMap(showDone =>
        showDone ? this.todoService.tasksDone$ : this.todoService.tasks$
      )
    );
  }
}
