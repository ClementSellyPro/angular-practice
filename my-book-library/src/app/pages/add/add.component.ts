import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Book} from '../../../models/book.model';

@Component({
  selector: 'app-add',
  imports: [
    FormsModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  book!: Book;

}
