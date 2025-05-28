import {Injectable} from '@angular/core';
import {TodoType} from '../models/todoType.type';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tasks: TodoType[] = [];
  private isAddNewTaskVisible= new BehaviorSubject<boolean>(false);
  addNewTaskVisible$ = this.isAddNewTaskVisible.asObservable();

  constructor() {
    this.tasks = [
      // {
      //   id: 1,
      //   title: 'Buy milk',
      //   description: 'Buy 1 ltr of milk',
      //   isDone: false
      // },
      // {
      //   id: 2,
      //   title: 'Buy eggs',
      //   description: 'Buy 3 eggs',
      //   isDone: false
      // }
    ]
  }

  displayAddNewTask() {
    this.isAddNewTaskVisible.next(true);
  }

  cancelAdd() {
    this.isAddNewTaskVisible.next(false);
  }

  getAllTasks() {
    return this.tasks;
  }

  addNewTask(task: TodoType) {
    let newTask: TodoType = {...task, id: this.tasks.length + 1};
    console.log("the new task in the service is: ", newTask);
    this.tasks.push(newTask);
    console.log(this.tasks);
  }
}
