import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {BooksService} from '../../services/Books.service';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService){};

  ngOnInit() {
    this.books = this.booksService.getBooks();
  }

}
