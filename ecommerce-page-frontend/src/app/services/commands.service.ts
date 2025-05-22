import {Injectable} from '@angular/core';
import {CommandType} from '../models/Command.Type';
import {ItemType} from '../models/ItemType';

@Injectable({
 providedIn: 'root'
})
export class CommandsService {
  private commands: CommandType[] = [];

  getCommands(): CommandType[] {
    return [...this.commands];
  }

  removeItem(idItem: string): void {
    this.commands = this.commands.filter(command => command.id !== idItem);
  }

  addItem(item: ItemType, quantity: number): void {
    if (quantity <= 0) return

    const newCommand: CommandType = {
      id: crypto.randomUUID(),
      item: item.name,
      price: ((item.price - item.price * (item.discount / 100)).toFixed(2)).toString(),
      quantity: quantity.toString(),
      image: item.images[1]
    }

    this.commands.push(newCommand);
  }
}
