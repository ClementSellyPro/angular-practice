import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, shareReplay} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data$!: Observable<any>;

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    if(!this.data$) {
      this.data$ = this.http.get('assets/data/data.json').pipe(
        shareReplay(1)
      );
    }
    return this.data$;
  }
}
