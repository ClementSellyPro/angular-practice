import {Injectable} from '@angular/core';
import {TodoType} from '../models/todoType.type';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: BehaviorSubject<TodoType[]> = new BehaviorSubject<TodoType[]>([]);
  tasks$: Observable<TodoType[]> = this.tasks.asObservable();

  private tasksDone: BehaviorSubject<TodoType[]> = new BehaviorSubject<TodoType[]>([]);
  tasksDone$: Observable<TodoType[]> = this.tasksDone.asObservable();

  private isAddNewTaskVisible= new BehaviorSubject<boolean>(false);
  addNewTaskVisible$ = this.isAddNewTaskVisible.asObservable();

  private isTaskDoneDisplayed = new BehaviorSubject<boolean>(false);
  isTaskDoneDisplayed$ = this.isTaskDoneDisplayed.asObservable();

  private nextId = 1;

  constructor() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const savedDone = JSON.parse(localStorage.getItem('tasksDone') || '[]');

    if (savedTasks.length === 0 && savedDone.length === 0) {
      const defaultTasks = [
        {id: 1, title: 'Task 1', description: 'Task 1 description', isDone: false},
        {id: 2, title: 'Task 2', description: 'Task 2 description', isDone: false},
      ];
      this.tasks.next(defaultTasks);
      this.nextId = 3;
      localStorage.setItem('tasks', JSON.stringify(defaultTasks));
    } else {
      this.tasks.next(savedTasks);
      this.tasksDone.next(savedDone);

      const allTasks = [...savedTasks, ...savedDone];
      this.nextId = allTasks.length > 0 ? Math.max(...allTasks.map(t => t.id)) + 1 : 1;
    }
  }

  displayAddNewTask() {
    this.isAddNewTaskVisible.next(true);
  }

  cancelAdd() {
    this.isAddNewTaskVisible.next(false);
  }

  addNewTask(task: TodoType) {
    const newTask: TodoType = {...task, id: this.nextId++};
    const updatedTasks = [...this.tasks.value, newTask];

    this.tasks.next(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    this.cancelAdd();
  }

  markedAsDone(todo: TodoType) {
    const updatedTasks = this.tasks.value.filter(task => task.id !== todo.id);
    const updatedDone = [...this.tasksDone.value, { ...todo, isDone: true }];

    this.tasks.next(updatedTasks);
    this.tasksDone.next(updatedDone);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    localStorage.setItem('tasksDone', JSON.stringify(updatedDone));
  }

  filterTasks() {
    this.isTaskDoneDisplayed.next(!this.isTaskDoneDisplayed.value);
  }
}
