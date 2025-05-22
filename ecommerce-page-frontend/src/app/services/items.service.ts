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
      price: 250,
      description: 'These low-profile sneakers are your perfect casual wear companions.Featuring a durable rubber outer sole, they\'ll withstand everythin the weather can offer.',
      discount: 50,
      images: [
        'assets/images/image-product-1.jpg',
        'assets/images/image-product-1-thumbnail.jpg',
        'assets/images/image-product-2.jpg',
        'assets/images/image-product-2-thumbnail.jpg',
        'assets/images/image-product-3.jpg',
        'assets/images/image-product-3-thumbnail.jpg',
        'assets/images/image-product-4.jpg',
        'assets/images/image-product-4-thumbnail.jpg']
    }
  ]

  getItems() {
    return [...this.Items];
  }

  getItem(id: string) {
    return this.Items.find(item => item.id === id);
  }
}
