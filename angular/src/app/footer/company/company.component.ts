import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [],
  templateUrl: './company.component.html',
  styleUrl: './company.component.sass'
})
export class CompanyComponent {
  title: string = "Company";
  elements: Array<string> = ["About", "Testimonials", "Find a doctor", "Apps"];
}
