import { Component } from '@angular/core';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.sass'
})
export class HomePageComponent {

}
