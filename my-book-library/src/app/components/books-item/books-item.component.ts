import {Component, HostListener, Input} from '@angular/core';
import {Book} from '../../models/book.model';
import {BooksService} from '../../services/Books.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-books-item',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './books-item.component.html',
  styleUrl: './books-item.component.css'
})
export class BooksItemComponent {
  @Input() book!: Book;
  idModified!: string;
  titleModified!: string;
  authorModified!: string;
  yearModified!: number;
  genreModified!:string;
  descriptionModified!: string;
  ratingModified!: string;
  imageModified!: string;
  isModifying = false;

  constructor(private booksService: BooksService) {}

  @HostListener('document:keydown.escape', ['$event'])
  onEscape() {
    this.isModifying = false;
  }

  deleteBook(id: string) {
    this.booksService.deleteBook(id);
  }

  modifyBook() {
    this.isModifying = true;

    this.idModified = this.book.id;
    this.titleModified = this.book.title;
    this.authorModified = this.book.author;
    this.yearModified = this.book.year;
    this.genreModified = this.book.genre;
    this.descriptionModified = this.book.description;
    this.ratingModified = this.book.rating;
    this.imageModified = this.book.image;
  }

  onSubmitUpdate() {
    const updatedBook: Book = {
      id: this.idModified,
      title: this.titleModified,
      author: this.authorModified,
      year: this.yearModified,
      genre:this.genreModified,
      description: this.descriptionModified,
      rating: this.ratingModified,
      image: this.imageModified
    }

    this.booksService.updateBook(updatedBook);
    this.isModifying = false;
  }
}
