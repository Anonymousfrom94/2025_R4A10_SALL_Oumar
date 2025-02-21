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
  cards: Card[] = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/300/200',
      destination: 'Paris',
      prix: 100
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/300/200',
      destination: 'Londres',
      prix: 200
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/300/200',
      destination: 'New York',
      prix: 300
    },
    {
      id: 4,
      imageUrl: 'https://picsum.photos/300/200',
      destination: 'Tokyo',
      prix: 400
    }
  ]

  private _travel;

  constructor(travel: TravelService){
    this._travel = travel; 
  }
}
