import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  allCountries: any[] = [];
  countries: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  countries$: Observable<any[]> = this.countries.asObservable();

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http.get<any[]>('assets/data.json').subscribe(data => {
      this.allCountries = data;
      this.countries.next(this.allCountries)
    });
  }

  filterData(region: string = '', search: string = '') {
    let filtered = this.allCountries;

    if(region) {
      filtered = filtered.filter(country => country.region === region)
    } 

    if(search) {
      filtered = filtered.filter(country => 
        country.name.toLowerCase().includes(search.toLowerCase()));
    }
    
    this.countries.next(filtered);
  }
}
