import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountryDetailsComponent } from '../../components/country-details/country-details.component';

@Component({
  selector: 'app-information',
  imports: [
    RouterLink,
    CountryDetailsComponent
  ],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent implements OnInit {
  countryId!: string;

  constructor(private route: ActivatedRoute){};

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryId = params.get('id')!;
    })
  }
}
