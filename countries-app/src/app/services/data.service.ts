import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  countries: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  countries$: Observable<any[]> = this.countries.asObservable();

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http.get<any[]>('assets/data.json').subscribe(data => {
      this.countries.next(data)
    });
  }
}
