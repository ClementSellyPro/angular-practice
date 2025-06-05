import {Book} from '../models/book.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = []

  constructor(private http: HttpClient) {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks && storedBooks.length > 0) {
      this.books = JSON.parse(storedBooks);
    } else {
      this.http.get<Book[]>('assets/books.json').subscribe(books => {
        this.books = books;
        localStorage.setItem('books', JSON.stringify(books));
    });
    }
  }

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book) {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
