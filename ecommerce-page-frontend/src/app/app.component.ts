import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {DescriptionComponent} from './components/description/description.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, GalleryComponent, DescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
