import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PizzaListPageComponent } from './features/pizza/pages/pizza-list-page/pizza-list-page.component';
import { OrderListPageComponent } from './features/orders/pages/order-list-page/order-list-page.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PizzaListPageComponent, OrderListPageComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
