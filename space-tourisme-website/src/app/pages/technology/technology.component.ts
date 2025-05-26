import { Component, OnInit } from '@angular/core';
import {NgClass, NgOptimizedImage, UpperCasePipe} from '@angular/common';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-technology',
  imports: [
    NgOptimizedImage,
    NgClass,
    UpperCasePipe
  ],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent implements OnInit {
  technologies: any[] = [];
  currentTechnology: any = null;
  currentTechnologyIndex: number = 0;

  constructor(private dataService: DataService) {};

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.technologies = data.technology;
      this.currentTechnology = this.technologies[this.currentTechnologyIndex];
    });
  }

  technologySelection(number: number): void {
    this.currentTechnologyIndex = number;
    this.updateCurrentTechnology();
  }

  updateCurrentTechnology(){
    this.currentTechnology = this.technologies[this.currentTechnologyIndex];
  }
}
