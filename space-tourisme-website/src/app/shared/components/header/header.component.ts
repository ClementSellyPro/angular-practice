import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {NavBarComponent} from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    NavBarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
