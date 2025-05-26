import {Component, OnInit} from '@angular/core';
import {NgClass, NgOptimizedImage, UpperCasePipe} from '@angular/common';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-destination',
  imports: [
    NgOptimizedImage,
    NgClass,
    UpperCasePipe
  ],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent implements OnInit {
  destinations: any[] = [];
  currentDestination: any = null;
  destinationSelected: string = 'Moon';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.destinations = data.destinations;

      this.updateCurrentDestination();
    });
    console.log(this.currentDestination);
  }

  updateCurrentDestination(): void {
    this.currentDestination = this.destinations.find(
      destination => destination.name === this.destinationSelected
    );
  }

  onDestinationSelection(destination: string): void {
    this.destinationSelected = destination;
    this.updateCurrentDestination();
  }
}
