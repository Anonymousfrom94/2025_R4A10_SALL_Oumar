import { Component } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.sass'
})
export class TextComponent {
  title = "Virtual healthcare for you";
  paragraph = `Trafalgar provides progressive, and affordable 
                healthcare, accessible on mobile and online 
                for everyone`;
}
