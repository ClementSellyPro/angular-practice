import { Component, OnInit } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-crew',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css'
})
export class CrewComponent implements OnInit {
  crew: any[] = [];
  currentCrew: any = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.crew = data.crew;
      this.currentCrew = this.crew[0];
    })

  }
}
