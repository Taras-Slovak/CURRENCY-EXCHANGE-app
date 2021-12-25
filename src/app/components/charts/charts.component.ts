import { Component, OnInit } from '@angular/core';
// import { Currency } from 'src/app/data/Currency';
import { CURRENCY } from 'src/app/data/moak-currency';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currencies: any = CURRENCY;

}
