import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelService } from '../../service/travel.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.sass'
})
export class DetailComponent implements OnInit{
  id!: number;
  travels;
  travelDescription: string = "";
  travelDestination: string = "";
  travelPrix: number = NaN; 
  travelImageUrl: string = "";

  constructor(private readonly activatedRoute: ActivatedRoute, travels: TravelService){
    this.travels = travels.travels;
  }

  ngOnInit(){
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.affTravel();
  }

  affTravel(){
    for (const travel of this.travels) {
      if(travel.id == this.id){
        this.travelDescription = travel.description;
        this.travelDestination = travel.destination;
        this.travelPrix = travel.prix;
        this.travelImageUrl = travel.imageUrl;
      }
    }
  }
}
