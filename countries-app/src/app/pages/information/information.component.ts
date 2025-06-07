import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information',
  imports: [],
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
