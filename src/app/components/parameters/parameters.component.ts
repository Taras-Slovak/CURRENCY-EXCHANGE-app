import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  btnTable() {
    console.log("TABLE!!!!!!!!")
  }

  btnChart() {
    console.log("CHART!!!!!!!!!S")
  }
}
