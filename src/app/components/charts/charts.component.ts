import { Component, Input, OnInit } from '@angular/core';
import { Currency } from 'src/app/data/Currency';
import { CurrencyService } from 'src/app/services/currency.service';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  currencies: Currency[] = [];



  constructor(public currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getCurrency().subscribe((currencies => {
      this.currencies = currencies;
    }));
  }


}
