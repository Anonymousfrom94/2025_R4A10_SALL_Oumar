import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ConsultTodayComponent } from './consult-today/consult-today.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { FooterComponent } from './footer/footer.component';
import { CommentariesComponent } from './commentaries/commentaries.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ConsultTodayComponent, OurServiceComponent,
    FooterComponent, CommentariesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Le désepoir d\'un gars qui reste déterminé';
}
