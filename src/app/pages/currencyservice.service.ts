import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CurrencyserviceService {

  // constructor(private http: HttpClient) {}

  // getExchangeRate(from: string, to: string): Observable<any> {
  //   const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
  //   return this.http.get(url);
  // }

  constructor(private http: HttpClient) {}

  getExchangeRate(from: string, to: string) {
    return this.http.get<any>(`https://open.er-api.com/v6/latest/${from}`);
  }

  getAllCurrencies() {
    return this.http.get<any>('https://open.er-api.com/v6/latest/USD');
  }
}
