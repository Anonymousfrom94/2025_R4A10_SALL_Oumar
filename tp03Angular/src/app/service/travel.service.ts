import { Injectable } from '@angular/core';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from './data';
import { Card } from '../home-page/container/container.component';


@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private readonly travels: Card[] = [
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

  constructor() {}

  public getTravels(){
    return this.travels;
  }

}
