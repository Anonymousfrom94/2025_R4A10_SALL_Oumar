import { Component, Input } from '@angular/core';
import { Card } from '../container.component';
import { Router, RouterLink } from '@angular/router';
import { TravelService } from '../../../service/travel.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent {
  @Input({required: true}) card!: Card;

  constructor(private readonly router: Router, private travels: TravelService){}

  onNavigation(){
    this.router.navigate(['/detail', this.card.id]);
  }

  deleteCard(){
    this.travels.deleteById(this.card.id);
  }

}
