import {Component, OnInit} from '@angular/core';
import {BooksItemComponent} from '../../components/books-item/books-item.component';
import {Book} from '../../models/book.model';
import {BooksService} from '../../services/Books.service';

@Component({
  selector: 'app-list',
  imports: [BooksItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  books!: Book[];

  constructor(private booksService: BooksService) {};

  ngOnInit() {
    this.books = this.booksService.getBooks();
  }
}
