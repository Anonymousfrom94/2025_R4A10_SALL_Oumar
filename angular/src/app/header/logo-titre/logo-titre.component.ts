import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-titre',
  standalone: true,
  imports: [],
  templateUrl: './logo-titre.component.html',
  styleUrl: './logo-titre.component.sass'
})
export class LogoTitreComponent {
  title: string = "Trafalgar";
  logo: string = this.title[0];
}
