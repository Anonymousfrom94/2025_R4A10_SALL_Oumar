import { Component } from '@angular/core';
import { TextComponent } from './text/text.component';
import { IllustrationComponent } from './illustration/illustration.component';

@Component({
  selector: 'app-consult-today',
  standalone: true,
  imports: [TextComponent, IllustrationComponent],
  templateUrl: './consult-today.component.html',
  styleUrl: './consult-today.component.sass'
})
export class ConsultTodayComponent {

}
