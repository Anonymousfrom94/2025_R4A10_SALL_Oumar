import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from '../../service/travel.service';
import { Travel } from '../../type/TravelType';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.sass'
})
export class DetailComponent implements OnInit{
  id!: number;
  travel: Travel | undefined = undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly travels: TravelService,
    private readonly router: Router
  ){}

  ngOnInit(){
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.travel = this.travels.findById(this.id);
    if (!this.travel) {
      this.router.navigate(['/404']);
    }
  }
}
