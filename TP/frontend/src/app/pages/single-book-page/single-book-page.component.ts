import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { take } from 'rxjs';
import { BookAPIService } from '../../services/book-api.service';

@Component({
  selector: 'app-single-book-page',
  standalone: true,
  imports: [],
  templateUrl: './single-book-page.component.html',
  styleUrl: './single-book-page.component.css',
})
export class SingleBookPageComponent implements OnInit {
  //private readonly bookService = inject(BooksInMemoryService);
    private readonly bookService = inject(BookAPIService); //Remplacement du service en memoire par l'api
  book?: Book;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
   // private readonly bookService: BooksInMemoryService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(id).pipe(take(1)).subscribe(book => this.book = book);
  }

  deleteBook(): void {
    if (this.book) {
      this.bookService.deleteBook(this.book.id).pipe(take(1)).subscribe(() => {
          this.router.navigate(['']);
        });
    }
    }
}
