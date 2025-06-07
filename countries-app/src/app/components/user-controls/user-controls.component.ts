import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-user-controls',
  imports: [FormsModule],
  templateUrl: './user-controls.component.html',
  styleUrl: './user-controls.component.css'
})
export class UserControlsComponent {
  search!: string;

}
