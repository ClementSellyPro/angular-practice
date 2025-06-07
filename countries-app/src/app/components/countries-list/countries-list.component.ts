import { Component } from '@angular/core';
import { CountryItemComponent } from '../country-item/country-item.component';

@Component({
  selector: 'app-countries-list',
  imports: [CountryItemComponent],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.css'
})
export class CountriesListComponent {

}
