import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  dataChange($event: any) {
    console.log($event.value);
  }

}
