import {Component} from '@angular/core';
import {CartItemComponent} from '../cart-item/cart-item.component';

@Component({
  selector: 'app-modal-cart',
  imports: [CartItemComponent],
  templateUrl: './modal-cart.component.html',
  styleUrl: './modal-cart.component.css'
})
export class ModalCartComponent {

}
