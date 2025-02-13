import { Component } from '@angular/core';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-our-service',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.sass'
})
export class OurServiceComponent {
  title = "Our service";
  paragraph = `We provide to you the best choiches for you.
               Adjust it to your health needs and make sure 
               your undergo treatment with our highly qualified 
               doctors you can consult with us which type of 
               service is suitable for your health`;
}
