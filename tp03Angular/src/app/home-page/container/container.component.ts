import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { TravelService } from '../../service/travel.service';
import { Router } from '@angular/router';

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

  cards;

  constructor(private readonly travel: TravelService,
              private readonly router: Router
            ){
    this.cards = travel.travels; 
  }

  onNavigation(){
    this.router.navigate(['/generate']);
  }
}
