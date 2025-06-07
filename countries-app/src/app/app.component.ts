import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserControlsComponent } from './components/user-controls/user-controls.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    UserControlsComponent,
    CountriesListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
