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

  filterData(filter: string) {
    if(filter != ''){
      const filteredData = this.allCountries.filter(country => country.region === filter);
      this.countries.next(filteredData);
    } else {
      this.countries.next(this.allCountries)
    }
  }
}
