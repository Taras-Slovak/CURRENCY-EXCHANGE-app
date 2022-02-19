import { AddCurrency } from "../model/AddCurrency.model";

export class GetCurrency {
  static readonly type = '[currency] Get Currency';

  constructor(public payload: AddCurrency) { }
}