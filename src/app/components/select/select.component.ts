import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  foods: Food[] = [
    { value: 'USD', viewValue: 'Долар США' },
    { value: 'EUR', viewValue: 'Євро' },
    { value: 'PLN', viewValue: 'Злотий' },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
