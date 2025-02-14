import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [],
  templateUrl: './help.component.html',
  styleUrl: './help.component.sass'
})
export class HelpComponent {
  title: string = "Help";
  elements: Array<string> = ["Help center", "Contact support", "Instructions", "How it works"];
}
