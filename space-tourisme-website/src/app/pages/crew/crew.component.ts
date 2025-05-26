import { Component, OnInit } from '@angular/core';
import {NgClass, NgOptimizedImage, UpperCasePipe} from '@angular/common';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-crew',
  imports: [
    NgOptimizedImage,
    UpperCasePipe,
    NgClass
  ],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css'
})
export class CrewComponent implements OnInit {
  crew: any[] = [];
  currentNumber: number = 0;
  currentCrew: any = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.crew = data.crew;
      this.currentCrew = this.crew[0];
    })
  }

  crewSelection(number: number): void {
    this.currentNumber = number;
    this.currentCrew = this.crew[this.currentNumber];
  }
}
