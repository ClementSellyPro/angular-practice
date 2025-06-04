import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Book} from '../../models/book.model';
import {BooksService} from '../../services/Books.service';
import {Router} from '@angular/router';

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
  title!: string;
  author!: string;
  year!: number;
  genre!: string;
  description!: string;
  rating!: string;
  selectedFile!: string;

  constructor(
    private booksService: BooksService,
    private router: Router,){}

  onSubmit(): void {
    this.book = {
      id: crypto.randomUUID(),
      title: this.title,
      author: this.author,
      year: this.year,
      genre: this.genre,
      description: this.description,
      rating: this.rating,
      image: this.selectedFile
    }
    this.booksService.addBook(this.book);

    this.resetForm();
    this.router.navigateByUrl('/').then(r => r);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if(file) {
      const reader = new FileReader();
      reader.onload = () => {
       this.selectedFile = reader.result as string;
      }
      reader.readAsDataURL(file);
    }
  }

  private resetForm(): void {
    this.title = '';
    this.author = '';
    this.year = 0;
    this.genre = '';
    this.description = '';
    this.rating = '';
    this.selectedFile = '';
  }
}
