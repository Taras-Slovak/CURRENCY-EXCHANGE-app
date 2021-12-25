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
    { value: 'steak-0', viewValue: 'Stweak' },
    { value: 'pizza-1', viewValue: 'Pizza' },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
