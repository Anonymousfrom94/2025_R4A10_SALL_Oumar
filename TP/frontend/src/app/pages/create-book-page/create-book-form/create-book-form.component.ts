import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-book-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-book-form.component.html',
  styleUrl: './create-book-form.component.css'
})
export class CreateBookFormComponent {
  formGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    author: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(35)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
  });

  public isInvalidAndTouchedOrDrity(formControl: FormControl){
    return formControl.invalid && (formControl.touched || formControl.dirty);
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }
    console.log(this.formGroup.value);
  }

  public createBook() {}

}
