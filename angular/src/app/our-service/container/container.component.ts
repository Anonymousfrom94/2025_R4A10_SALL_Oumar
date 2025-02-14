import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

export type Card = {
  image: string,
  title: string,
  paragraph: string 
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
      image: "assets/images/loupe.png",
      title: "Search doctor",
      paragraph: "Choose your doctor from thousands of specialist, general, and trusted hospitals"
    },
    {
      image: "assets/images/medic.png",
      title: "Online pharmacy",
      paragraph: "Buy  your medicines with our mobile application with a simple delivery system"
    },
    {
      image: "assets/images/telephone.png",
      title: "Consultation",
      paragraph: "Free consultation with our trusted doctors and get the best recomendations"
    },
    {
      image: "assets/images/calepin.png",
      title: "Details info",
      paragraph: "Free consultation with our trusted doctors and get the best recomendations"
    },
    {
      image: "assets/images/trousse.png",
      title: "Emergency care",
      paragraph: "You can get 24/7 urgent care for yourself or your children and your lovely family"
    },
    {
      image: "assets/images/fiche.png",
      title: "Tracking",
      paragraph: "Track and save your medical history and health data"
    }
  ]
}
