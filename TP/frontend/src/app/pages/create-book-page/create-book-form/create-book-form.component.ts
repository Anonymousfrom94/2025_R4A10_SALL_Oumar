import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BooksInMemoryService } from '../../../services/book-inmemory.service';
import { Router } from '@angular/router';


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

  constructor(private formulaire: FormBuilder, private router: Router) {
    this.formGroup = this.formulaire.group({
      author: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(35)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]]
    });
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }
    console.log(this.formGroup.value);
    console.log("Creer avec succès!!!");
    const newBook = this.booksInMemoryService.createBook(this.formGroup.value);
    console.log('Livre ajouté', newBook);
    this.bookCreated.emit(newBook);
    this.formGroup.reset();
    this.router.navigate(['']);
  }

}
