import { Component } from '@angular/core';
import { LogoTitreComponent } from './logo-titre/logo-titre.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoTitreComponent, NavBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

}
