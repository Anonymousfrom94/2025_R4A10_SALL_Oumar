import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.sass'
})
export class NavBarComponent {
  elements = [
    {
      "name": "Home", 
      "link": "Chemin d'accès"
    },
    {
      "name": "Generate", 
      "link": "Chemin d'accès"
    }
  ];
}
