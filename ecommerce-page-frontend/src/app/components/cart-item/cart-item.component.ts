import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DecimalPipe, NgOptimizedImage} from '@angular/common';
import {CommandType} from '../../models/Command.Type';

@Component({
  selector: 'app-cart-item',
  imports: [
    NgOptimizedImage,
    DecimalPipe
  ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() command!: CommandType;
  @Output() remove = new EventEmitter<string>();

  onDelete() {
    this.remove.emit(this.command.id);
  }
}
