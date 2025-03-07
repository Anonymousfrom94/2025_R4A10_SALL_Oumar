import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { RouterLink } from '@angular/router';
import { BookAPIService } from '../../services/book-api.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-book-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-list-page.component.html',
  styleUrl: './book-list-page.component.css',
})
export class BookListPageComponent implements OnInit {
  //private readonly bookService = inject(BooksInMemoryService);
  private readonly bookService = inject(BookAPIService); //Remplacement du service en memoire par l'api
  books: Book[] = [];

  ngOnInit() {
    this.bookService.getAllBooks().subscribe((books: Book[]) => {
      this.books = books;
    });  
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).pipe(take(1)).subscribe(() => {
        this.books = this.books.filter(book => book.id !== id);
      });
  }
}
