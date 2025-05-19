import {Injectable} from '@angular/core';
import {CommandType} from '../models/Command.Type';

@Injectable({
 providedIn: 'root'
})
export class CommandsService {
  private commands: CommandType[] = [

  ];

  getCommands(): CommandType[] {
    return [...this.commands];
  }

  addCommand(command: CommandType): void {
    this.commands.push(command);
  }

  addQuantity(): void {

  }
}
