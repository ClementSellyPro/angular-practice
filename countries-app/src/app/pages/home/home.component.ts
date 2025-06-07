import { Component } from '@angular/core';
import { UserControlsComponent } from '../../components/user-controls/user-controls.component';
import { CountriesListComponent } from '../../components/countries-list/countries-list.component';

@Component({
  selector: 'app-home',
  imports: [
    UserControlsComponent,
    CountriesListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
