import { Component } from '@angular/core';

@Component({
  selector: 'app-region',
  standalone: true,
  imports: [],
  templateUrl: './region.component.html',
  styleUrl: './region.component.sass'
})
export class RegionComponent {
  title: string = "Region";
  elements: Array<string> = ["Indonesia", "Singapore", "HongKong", "Canada"];
}
