import { Component, Input } from '@angular/core';
import { Card } from '../container.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent {
  @Input({required: true}) card!: Card;
  test : boolean = false;
  public getCardDetail(){
    this.test = !this.test;
    return "detail/" + this.card.id;
  }
}
