import {Component, OnInit} from '@angular/core';
import {CartItemComponent} from '../cart-item/cart-item.component';
import {CommandType} from '../../models/Command.Type';
import {CommandsService} from '../../services/commands.service';

@Component({
  selector: 'app-modal-cart',
  imports: [CartItemComponent],
  templateUrl: './modal-cart.component.html',
  styleUrl: './modal-cart.component.css'
})
export class ModalCartComponent implements OnInit {
  commands: CommandType[] = [];

  constructor(private commandsService: CommandsService) {}

  ngOnInit() {
    this.commands = this.commandsService.getCommands();
  }

  deleteItem(idItem: string) {
    this.commandsService.removeItem(idItem);
    this.commands = this.commandsService.getCommands();
  }
}
