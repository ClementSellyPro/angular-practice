import { Component } from '@angular/core';
import { NgIf, NgOptimizedImage} from '@angular/common';
import {ModalCartComponent} from '../modal-cart/modal-cart.component';


@Component({
  selector: 'app-user-section',
  imports: [
    NgOptimizedImage,
    ModalCartComponent,
    NgIf,
  ],
  templateUrl: './user-section.component.html',
  styleUrl: './user-section.component.css'
})
export class UserSectionComponent {
  isCartOpen: boolean = false;

  displayModal() {
    this.isCartOpen = !this.isCartOpen;
  }
}
