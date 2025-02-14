import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent {
  title = "titre";
  paragraph = "Paragraphe";
  //C'est de là que tu dois continuer. La logique des cartes est à gerer soit avec les inputs soit j'ai une autre solution qui 
  //consiste à faire une boucle ngFor et stocké les données de mes cartes directement dans container.
}
