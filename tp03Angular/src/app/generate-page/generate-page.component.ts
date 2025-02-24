import { Component } from '@angular/core';
import { TravelService } from '../service/travel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-page',
  standalone: true,
  imports: [],
  templateUrl: './generate-page.component.html',
  styleUrl: './generate-page.component.sass'
})
export class GeneratePageComponent {
  //Elements importés du service travelService
  travels;
  destinations;
  descriptions;
  prix;

  //Elements générés par rapport aux imports du service
  generatedDestination: string = "";
  generatedDescription: string = "";
  generatedPrix: number = 0;
  generatedTravel = null;
  generatedImageUrl = "";

  genere = false;

  constructor(travels: TravelService, private readonly router: Router){
    this.travels = travels;
    this.descriptions = travels.DESCRIPTIONS;
    this.destinations = travels.DESTINATIONS;
    this.prix = travels.PRIX;
  }

  generateTravel(){
    let indDestination = Math.trunc(Math.random() * (this.destinations.length));
    let indDescription = Math.trunc(Math.random() * (this.descriptions.length));
    let indPrix = Math.trunc(Math.random() * (this.prix.length));

    this.generatedDescription = this.descriptions[indDescription];
    this.generatedDestination = this.destinations[indDestination];
    this.generatedPrix = this.prix[indPrix];
    this.generatedImageUrl = "https://picsum.photos/300/200";

    this.genere = true; 
  }

  validate(){
    this.travels.insertTravel(this.generatedDestination, this.generatedDescription, this.generatedPrix, this.generatedImageUrl);
    this.router.navigate(['']);
  }
}
