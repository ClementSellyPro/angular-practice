import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  standalone: true,
  selector: 'app-user-controls',
  imports: [FormsModule],
  templateUrl: './user-controls.component.html',
  styleUrl: './user-controls.component.css'
})
export class UserControlsComponent {
  search: string = '';
  region: string = '';

  constructor(private dataService: DataService){}

  onFilterChange(){
    this.dataService.filterData(this.region, this.search);
  }
}
