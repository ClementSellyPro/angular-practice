import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {TodoType} from '../../models/todoType.type';
import {TodoService} from '../../services/todo.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  imports: [
    NgIf,
    NgClass,
    FormsModule
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  isModified: boolean = false;
  @Input() task!: TodoType;

  editedTitle: string = '';
  editedDescription: string = '';

  constructor(private todoService: TodoService) {}

  onModify() {
    this.isModified = true;
    this.editedTitle = this.task.title;
    this.editedDescription = this.task.description;
  }

  cancelModify() {
    this.isModified = false;
    this.editedTitle = this.task.title;
    this.editedDescription = this.task.description;
  }

  onMarkedAsDone() {
    this.todoService.markedAsDone(this.task);
  }

  onDelete(id: number) {
    this.todoService.deleteTask(id);
  }
}
