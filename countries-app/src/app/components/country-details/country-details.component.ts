import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-country-details',
  imports: [],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css'
})
export class CountryDetailsComponent implements OnInit {
  @Input() countryId!: string;
  countrySelection!: any;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.countrySelection = this.dataService.allCountries.filter(country => country.alpha3Code === this.countryId)[0];
    console.log(this.countrySelection);
  }
}
