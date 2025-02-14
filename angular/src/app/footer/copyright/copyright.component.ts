import { Component } from '@angular/core';

@Component({
  selector: 'app-copyright',
  standalone: true,
  imports: [],
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.sass'
})
export class CopyrightComponent {
  image: string = "assets/images/logo.png";
  paragraph: string = "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone";
  right: string = "©Trafalgar PTY LTD 2020. All rights reserved";
}
