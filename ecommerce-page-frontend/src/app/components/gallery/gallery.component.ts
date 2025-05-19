import { Component } from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {ImagesType} from '../../models/ImagesType.type';

@Component({
  selector: 'app-gallery',
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  selectedImage: number = 0;

  images: ImagesType[] = [
    {id: 0, largeImg: "assets/images/image-product-1.jpg", thumbImg: "assets/images/image-product-1-thumbnail.jpg", },
    {id: 1, largeImg: "assets/images/image-product-2.jpg", thumbImg: "assets/images/image-product-2-thumbnail.jpg", },
    {id: 2, largeImg: "assets/images/image-product-3.jpg", thumbImg: "assets/images/image-product-3-thumbnail.jpg", },
    {id: 3, largeImg: "assets/images/image-product-4.jpg", thumbImg: "assets/images/image-product-4-thumbnail.jpg", },
  ];

  selectImage(id: number): void {
    this.selectedImage = id;
  }
}
