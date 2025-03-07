import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BooksInMemoryService } from '../../../services/book-inmemory.service';
import { Router } from '@angular/router';
import { BookAPIService } from '../../../services/book-api.service';
import { take } from 'rxjs';


@Component({
  selector: 'app-create-book-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-book-form.component.html',
  styleUrl: './create-book-form.component.css'
})
export class CreateBookFormComponent {
  private booksInMemoryService = inject(BooksInMemoryService);
  @Output() bookCreated = new EventEmitter<number>();

  formGroup: FormGroup;

  constructor(private form: FormBuilder, private bookApiService: BookAPIService, private router: Router) {
    this.formGroup = this.form.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(35)]],
      author: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]]
    });
  }

  //Avant implementaion de l'Api
  /*onSubmit(): void {
    if (this.formGroup.valid) {
      this.bookApiService.createBook(this.formGroup.value).pipe(take(1)).subscribe(createdBook => {
        this.bookCreated.emit(createdBook.id);
        this.formGroup.reset();
        this.router.navigate(['']);
      });
    }
  }*/

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.bookApiService.createBook(this.formGroup.value).pipe(take(1)).subscribe(createdBook => {
        this.bookCreated.emit(createdBook.id);
        this.formGroup.reset();
        this.router.navigate(['']);
      });
    }
  }
}
