import { Component } from '@angular/core';
import { CurrencyserviceService } from '../currencyservice.service';
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



  amount: number = 0.95;
  fromCurrency: string = 'ANG';
  toCurrency: string = 'AMD';
  rate: number = 0;
  conversionResult: number | null = null;
  lastUpdated: Date = new Date();

  currencies = [
    { code: 'ANG', name: 'Netherlands Antillean guilder' },
    { code: 'AMD', name: 'Armenian dram' },
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'INR', name: 'Indian Rupee' }
  ];

  constructor(private currencyService: CurrencyserviceService) {}

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
    // If the selected currencies are the same, just return the amount
    if (this.fromCurrency === this.toCurrency) {
      this.rate = 1;
      this.conversionResult = this.amount; // Set the conversion result directly
      this.lastUpdated = new Date(); // Set the last updated time
      return;
    }
  
    // Manually setting the rate for specific cases
    if (this.fromCurrency === 'ANG' && this.toCurrency === 'AMD') {
      this.rate = 218.645951;
    } else if (this.fromCurrency === 'AMD' && this.toCurrency === 'ANG') {
      this.rate = 1 / 218.645951;
    } else {
      this.rate = 1.1;  // Default rate
    }
  
    // Initially calculate the conversion result with the rate (without waiting for the API)
    this.conversionResult = this.amount * this.rate;
  
    // Make the API call to get the actual conversion rate
    this.currencyService.getExchangeRate(this.fromCurrency, this.toCurrency)
      .subscribe({
        next: (data) => {
          console.log('API Response:', data); // Debugging the API response
          // If API provides a valid rate, update the rate and the result
          if (data.result) {
            this.rate = data.result;
            this.conversionResult = this.amount * this.rate;
            this.lastUpdated = new Date(data.date || new Date()); // Set last updated time
          } else {
            // Handle unexpected data if the rate is missing
            console.error('Invalid API response:', data);
          }
        },
        error: (err) => {
          console.error('API Error:', err); // Log any errors from the API call
          // Optionally show a message if the API fails
          this.conversionResult = null;
          // this.lastUpdated = null;
        }
      });
  }

  
  swapCurrencies() {
    [this.fromCurrency, this.toCurrency] = [this.toCurrency, this.fromCurrency];
    this.convertCurrency();
  }

  getCurrencyName(code: string): string {
    return this.currencies.find(c => c.code === code)?.name || code;
  }
}
