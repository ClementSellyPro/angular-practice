import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgIf, NgOptimizedImage} from '@angular/common';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoItemInputComponent} from './components/todo-item-input/todo-item-input.component';
import {TodoService} from './services/todo.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    NgOptimizedImage,
    TodoListComponent,
    TodoItemInputComponent,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isAddNewTaskVisible$!: Observable<boolean>;
  isTaskDoneDisplayed$!: Observable<boolean>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.isAddNewTaskVisible$ = this.todoService.addNewTaskVisible$;
    this.isTaskDoneDisplayed$ = this.todoService.isTaskDoneDisplayed$;
  }

  onFilter() {
    this.todoService.filterTasks();
  }

  onAddNewTask() {
    this.todoService.displayAddNewTask();
  }
}
