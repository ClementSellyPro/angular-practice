import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserControlsComponent } from './components/user-controls/user-controls.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
