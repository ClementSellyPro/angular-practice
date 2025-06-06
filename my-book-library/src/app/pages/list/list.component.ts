import {Component, OnInit} from '@angular/core';
import {BooksItemComponent} from '../../components/books-item/books-item.component';
import {Book} from '../../models/book.model';
import {BooksService} from '../../services/Books.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [BooksItemComponent, AsyncPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  books$!: Observable<Book[]>;

  constructor(private booksService: BooksService) {};

  ngOnInit() {
    this.books$ = this.booksService.books$;
  }
}
