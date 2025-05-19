import {Injectable} from '@angular/core';
import {ItemType} from '../models/ItemType';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private Items: ItemType[] = [
    {
      id: 'i0001',
      brand: 'SNEAKER COMPANY',
      name: 'Fall Limited Edition Sneakers',
      price: 25000,
      description: 'These low-profile sneakers are your perfect casual wear companions.Featuring a durable rubber outer sole, they\'ll withstand everythin the weather can offer.',
      discount: 50
    }
  ]

  // getItems() {
  //   return [...this.Items];
  // }

  getItem(id: string) {
    return this.Items.find(item => item.id === id);
  }
}
