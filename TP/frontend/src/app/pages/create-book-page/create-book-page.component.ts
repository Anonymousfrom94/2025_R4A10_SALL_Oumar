import { Component } from '@angular/core';
import { CreateBookFormComponent } from './create-book-form/create-book-form.component';

@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [CreateBookFormComponent],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css',
})
export class CreateBookPageComponent {}
