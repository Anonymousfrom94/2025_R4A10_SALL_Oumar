import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../../../../models/order';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css',
})
export class OrderCardComponent {
  @Input() order!: Order;
  
  @Output() deleteOrder = new EventEmitter<string>(); 

  removeOrder() {
    this.deleteOrder.emit(this.order.id); 
  }
}
