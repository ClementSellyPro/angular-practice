import {Book} from '../models/book.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = []

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book) {
    this.books.push(book);
  }
}
