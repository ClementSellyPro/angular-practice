import {Component, OnInit} from '@angular/core';
import {DecimalPipe, NgOptimizedImage} from '@angular/common';
import {ItemsService} from '../../services/items.service';
import {ItemType} from '../../models/ItemType';
import {QuantityType} from '../../models/QuantityType.type';
import {CommandsService} from '../../services/commands.service';

@Component({
  selector: 'app-description',
  imports: [
    NgOptimizedImage,
    DecimalPipe
  ],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements OnInit {
  constructor(
    private itemsService: ItemsService,
    private commandsService: CommandsService) {}

  currentItem: ItemType | undefined;
  params: string = 'i0001';
  quantity: number = 0;
  currentPrice!: number | undefined;

  ngOnInit(): void {
    this.currentItem = this.itemsService.getItem(this.params);
    this.currentPrice = (this.currentItem?.price!) - (this.currentItem?.price! * (this.currentItem?.discount! / 100));
  }

  quantityClick(click: QuantityType) {
    if(click === 'plus'){
      this.quantity++;
    }
    if(click === 'minus' && this.quantity > 0){
      this.quantity--;
    }
  }

  addToCart() {
    if(!this.currentItem || this.quantity <= 0) return;
    this.commandsService.addItem(this.currentItem, this.quantity);
    this.quantity = 0;
  }
}
