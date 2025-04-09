import { Component } from '@angular/core';
import { CurrencyserviceService } from '../currencyservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-currnecy-convert',
  templateUrl: './currnecy-convert.component.html',
  styleUrl: './currnecy-convert.component.css'
})
export class CurrnecyConvertComponent {
  // amount: number = 1;
  // fromCurrency: string = 'ANG';
  // toCurrency: string = 'AMD';

  // rate: number = 218.645951; 
  // conversionResult: number | null = null;
  // lastUpdated: Date = new Date();

  // currencies = [
  //   { code: 'ANG', name: 'Netherlands Antillean guilder' },
  //   { code: 'AMD', name: 'Armenian dram' },
  //   { code: 'USD', name: 'US Dollar' },
  //   { code: 'EUR', name: 'Euro' },
  //   { code: 'INR', name: 'Indian Rupee' }
  // ];

  // convertCurrency() {
  
  //   if (this.fromCurrency === 'ANG' && this.toCurrency === 'AMD') {
  //     this.rate = 218.645951;
  //   } else if (this.fromCurrency === 'AMD' && this.toCurrency === 'ANG') {
  //     this.rate = 1 / 218.645951;
  //   } else {
  //     this.rate = 1.1; 
  //   }

  //   this.conversionResult = this.amount * this.rate;
  //   this.lastUpdated = new Date(); 
  // }

  // swapCurrencies() {
  //   [this.fromCurrency, this.toCurrency] = [this.toCurrency, this.fromCurrency];
  //   this.convertCurrency();
  // }

  // getCurrencyName(code: string): string {
  //   return this.currencies.find(c => c.code === code)?.name || code;
  // }



  // amount: number = 0.95;
  // fromCurrency: string = 'ANG';
  // toCurrency: string = 'AMD';
  // rate: number = 0;
  // conversionResult: number | null = null;
  // lastUpdated: Date = new Date();

  // currencies = [
  //   { code: 'ANG', name: 'Netherlands Antillean guilder' },
  //   { code: 'AMD', name: 'Armenian dram' },
  //   { code: 'USD', name: 'US Dollar' },
  //   { code: 'EUR', name: 'Euro' },
  //   { code: 'INR', name: 'Indian Rupee' }
  // ];

  // constructor(private currencyService: CurrencyserviceService) {}

  //  convertCurrency() {
  //   if (this.fromCurrency === this.toCurrency) {
  //     this.rate = 1;
  //     this.conversionResult = this.amount;
  //     return;
  //   }


  //    this.conversionResult = this.amount * this.rate;
  //   this.lastUpdated = new Date();
  //   this.currencyService.getExchangeRate(this.fromCurrency, this.toCurrency)
  //     .subscribe(data => {
  //       this.rate = data.result;
  //       this.conversionResult = this.amount * this.rate;
  //       this.lastUpdated = new Date(data.date || new Date());
  //     }, error => {
  //       console.error('API Error:', error);
  //     });
  // }
  // convertCurrency() {
  //   // if (this.fromCurrency === this.toCurrency) {
  //   //   this.rate = 1;
  //   //   this.conversionResult = this.amount;
  //   //   this.lastUpdated = new Date();
  //   //   return;
  //   // }
  //       if (this.fromCurrency === 'ANG' && this.toCurrency === 'AMD') {
  //     this.rate = 218.645951;
  //   } else if (this.fromCurrency === 'AMD' && this.toCurrency === 'ANG') {
  //     this.rate = 1 / 218.645951;
  //   } else {
  //     this.rate = 1.1; 
  //   }
  //   this.conversionResult = this.amount * this.rate;
  //   // this.lastUpdated = new Date(); 
  //   this.currencyService.getExchangeRate(this.fromCurrency, this.toCurrency)
  //     .subscribe(data => {
  //       this.rate = data.result;
  //       this.conversionResult = this.amount * this.rate;
  //       this.lastUpdated = new Date(data.date || new Date());
  //     }, error => {
  //       console.error('API Error:', error);
  //       this.conversionResult = null;
  //     });
  // }




  convertCurrency() {
    if (this.fromCurrency === this.toCurrency) {
      this.rate = 1;
      this.conversionResult = this.amount; 
      this.lastUpdated = new Date(); 
      return;
    }
    if (this.fromCurrency === 'ANG' && this.toCurrency === 'AMD') {
      this.rate = 218.645951;
    } else if (this.fromCurrency === 'AMD' && this.toCurrency === 'ANG') {
      this.rate = 1 / 218.645951;
    } else {
      this.rate = 1.1; 
    }
    this.conversionResult = this.amount * this.rate;
    this.currencyService.getExchangeRate(this.fromCurrency, this.toCurrency)
      .subscribe({
        next: (data) => {
          console.log('API Response:', data); 
          if (data.result) {
            this.rate = data.result;
            this.conversionResult = this.amount * this.rate;
            this.lastUpdated = new Date(data.date || new Date()); 
          } else {
            console.error('Invalid API response:', data);
          }
        },
        error: (err) => {
          console.error('API Error:', err); 
          this.conversionResult = null;

        }
      });
  }

  
  // swapCurrencies() {
  //   [this.fromCurrency, this.toCurrency] = [this.toCurrency, this.fromCurrency];
  //   this.convertCurrency();
  // }

  // getCurrencyName(code: string): string {
  //   return this.currencies.find(c => c.code === code)?.name || code;
  // }


























  amount: number = 0.95;
  fromCurrency: string = 'AMD';
  toCurrency: string = 'AND';
  rate: number = 0;
  conversionResult: number | null = null;
  lastUpdated: Date = new Date();
  
  currencies = [
    { code: 'AMD', name: 'Armenian dram', countryCode: 'am' },
    { code: 'ANG', name: 'Netherlands Antillean', countryCode: 'nl' },
    { code: 'USD', name: 'US Dollar', countryCode: 'us' },
    { code: 'EUR', name: 'Euro', countryCode: 'eu' },
    { code: 'INR', name: 'Indian Rupee', countryCode: 'in' }
  ];
  
  constructor(private currencyService: CurrencyserviceService) {}
  
  getCurrencyName(code: string): string {
    return this.currencies.find(c => c.code === code)?.name || code;
  }
  
  getCountryCode(code: string): string {
    return this.currencies.find(c => c.code === code)?.countryCode || 'us';
  }
  
  // convertCurrency() {
  //   if (this.fromCurrency === this.toCurrency) {
  //     this.rate = 1;
  //     this.conversionResult = this.amount;
  //     this.lastUpdated = new Date();
  //     return;
  //   }
  
  //   this.currencyService.getExchangeRate(this.fromCurrency, this.toCurrency)
  //     .subscribe({
  //       next: (data) => {
  //         if (data.result) {
  //           this.rate = data.result;
  //           this.conversionResult = this.amount * this.rate;
  //           this.lastUpdated = new Date(data.date || new Date());
  //         }
  //       },
  //       error: (err) => {
  //         console.error('API Error:', err);
  //         this.conversionResult = null;
  //       }
  //     });
  // }
  
  swapCurrencies() {
    [this.fromCurrency, this.toCurrency] = [this.toCurrency, this.fromCurrency];
    this.convertCurrency();
  }
  
  
}
