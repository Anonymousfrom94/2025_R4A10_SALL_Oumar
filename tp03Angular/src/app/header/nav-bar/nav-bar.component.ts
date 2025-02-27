import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.sass'
})
export class NavBarComponent {
  elements = [
    {
      "name": "Home", 
      "link": ""
    },
    {
      "name": "Generate", 
      "link": "generate"
    },
  ];
}
