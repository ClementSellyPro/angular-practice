import {Book} from '../models/book.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = []

  constructor() {
    const data = localStorage.getItem('books');
    const parsed = data ? JSON.parse(data) : [];
    this.books = Array.isArray(parsed) ? parsed : [];
  }

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book) {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
