import { Injectable } from '@angular/core';
import { Currency } from 'src/app/data/Currency';
import { CURRENCY } from 'src/app/data/moak-currency';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }
  getCurrency(): Observable<Currency[]> {
    const currency = of(CURRENCY);
    return currency;
  }
}
