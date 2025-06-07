import { Component, OnInit } from '@angular/core';
import { CountryItemComponent } from '../country-item/country-item.component';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-countries-list',
  imports: [
    CountryItemComponent,
    AsyncPipe
  ],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.css'
})
export class CountriesListComponent implements OnInit {
  countries$!: Observable<any[]>;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.countries$ = this.dataService.countries$;
  }
}
