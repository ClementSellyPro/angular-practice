import {Component, Input} from '@angular/core';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-books-item',
  imports: [],
  templateUrl: './books-item.component.html',
  styleUrl: './books-item.component.css'
})
export class BooksItemComponent {
  @Input() book!: Book;
}
