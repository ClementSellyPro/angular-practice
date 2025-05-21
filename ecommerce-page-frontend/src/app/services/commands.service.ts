import {Injectable} from '@angular/core';
import {CommandType} from '../models/Command.Type';

@Injectable({
 providedIn: 'root'
})
export class CommandsService {
  private commands: CommandType[] = [
    {
      id: '001',
      item: 'Fall Limited Edition Sneakers',
      price: '125',
      quantity: '3',
      image: 'assets/images/image-product-1-thumbnail.jpg'
    },
    {
      id: '002',
      item: 'Fall Limited Edition Sneakers',
      price: '125',
      quantity: '1',
      image: 'assets/images/image-product-1-thumbnail.jpg'
    }
  ];

  getCommands(): CommandType[] {
    return [...this.commands];
  }

  addCommand(command: CommandType): void {
    this.commands.push(command);
  }

  addQuantity(): void {

  }

  removeItem(idItem: string): void {
    this.commands = this.commands.filter(command => command.id !== idItem);
  }
}
