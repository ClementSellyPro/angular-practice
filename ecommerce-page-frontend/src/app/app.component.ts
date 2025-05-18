import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import {GalleryComponent} from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
