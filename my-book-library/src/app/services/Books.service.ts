import {Book} from '../models/book.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  books$: Observable<Book[]> = this.books.asObservable();

  constructor(private http: HttpClient) {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks && storedBooks.length > 0) {
      this.books.next(JSON.parse(storedBooks));
    } else {
      this.http.get<Book[]>('assets/books.json').subscribe(books => {
        this.books.next(books);
        localStorage.setItem('books', JSON.stringify(books));
    });
    }
  }

  getBooks(): Book[] {
    return this.books.value;
  }

  addBook(book: Book) {
    const updatedBooks = [...this.books.value, book]
    this.books.next(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  }

  deleteBook(id: string) {
    const updatedBooks = this.books.value.filter(book => book.id !== id);
    this.books.next(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  }
}
