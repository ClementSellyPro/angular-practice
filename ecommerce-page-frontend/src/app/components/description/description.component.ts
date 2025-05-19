import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ItemsService} from '../../services/items.service';
import {ItemType} from '../../models/ItemType';

@Component({
  selector: 'app-description',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements OnInit {
  constructor(private itemsService: ItemsService) {}
  currentItem: ItemType | undefined;
  params: string = 'i0001';
  quantity: number = 0;

  ngOnInit(): void {
    this.currentItem = this.itemsService.getItem(this.params);
  }
  quantityClick() {
    this.quantity++;
  }
}
