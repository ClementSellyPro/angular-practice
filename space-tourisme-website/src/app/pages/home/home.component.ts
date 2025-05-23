import { Component } from '@angular/core';
import {HomeContentComponent} from './home-content/home-content.component';

@Component({
  selector: 'app-home',
  imports: [HomeContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
