import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { TravelService } from '../../service/travel.service';

export type Card = {
  id: number,
  imageUrl: string,
  destination: string,
  prix: number
}

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.sass'
})

export class ContainerComponent {
  constructor(private readonly travelService: TravelService) {}
  cards: Card[] = this.travelService.getTravels();
}
