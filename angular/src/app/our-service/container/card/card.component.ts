import { Component, Input } from '@angular/core';
import { Card } from '../container.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent {
  @Input() card!: Card; 
}
