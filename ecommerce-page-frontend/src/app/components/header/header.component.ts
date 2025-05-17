import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {UserSectionComponent} from '../user-section/user-section.component';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    NavBarComponent,
    UserSectionComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
