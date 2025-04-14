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




  // convertCurrency() {
  //   if (this.fromCurrency === this.toCurrency) {
  //     this.rate = 1;
  //     this.conversionResult = this.amount; 
  //     this.lastUpdated = new Date(); 
  //     return;
  //   }
  //   if (this.fromCurrency === 'ANG' && this.toCurrency === 'AMD') {
  //     this.rate = 218.645951;
  //   } else if (this.fromCurrency === 'AMD' && this.toCurrency === 'ANG') {
  //     this.rate = 1 / 218.645951;
  //   } else {
  //     this.rate = 1.1; 
  //   }
  //   this.conversionResult = this.amount * this.rate;
  //   this.currencyService.getExchangeRate(this.fromCurrency, this.toCurrency)
  //     .subscribe({
  //       next: (data) => {
  //         console.log('API Response:', data); 
  //         if (data.result) {
  //           this.rate = data.result;
  //           this.conversionResult = this.amount * this.rate;
  //           this.lastUpdated = new Date(data.date || new Date()); 
  //         } else {
  //           console.error('Invalid API response:', data);
  //         }
  //       },
  //       error: (err) => {
  //         console.error('API Error:', err); 
  //         this.conversionResult = null;

  //       }
  //     });
  // }


  // swapCurrencies() {
  //   [this.fromCurrency, this.toCurrency] = [this.toCurrency, this.fromCurrency];
  //   this.convertCurrency();
  // }

  // getCurrencyName(code: string): string {
  //   return this.currencies.find(c => c.code === code)?.name || code;
  // }


























  // amount: number = 0.95;
  // fromCurrency: string = 'AMD';
  // toCurrency: string = 'AND';
  // rate: number = 0;
  // conversionResult: number | null = null;
  // lastUpdated: Date = new Date();

  // currencies = [
  //   { code: 'AMD', name: 'Armenian dram', countryCode: 'am' },
  //   { code: 'ANG', name: 'Netherlands Antillean', countryCode: 'nl' },
  //   { code: 'USD', name: 'US Dollar', countryCode: 'us' },
  //   { code: 'EUR', name: 'Euro', countryCode: 'eu' },
  //   { code: 'INR', name: 'Indian Rupee', countryCode: 'in' }
  // ];

  //  constructor(private currencyService: CurrencyserviceService) {}

  // getCurrencyName(code: string): string {
  //   return this.currencies.find(c => c.code === code)?.name || code;
  // }

  // getCountryCode(code: string): string {
  //   return this.currencies.find(c => c.code === code)?.countryCode || 'us';
  // }
  // swapCurrencies() {
  //   [this.fromCurrency, this.toCurrency] = [this.toCurrency, this.fromCurrency];
  //   this.convertCurrency();
  // }

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







































  // currencies: any[] = [];
  // amount: number = 0.95;
  // fromCurrency: string = 'USD';
  // toCurrency: string = 'INR';
  // rate: number = 0;
  // conversionResult: number | null = null;
  // lastUpdated: Date = new Date();

  // constructor(private currencyService: CurrencyserviceService) {}

  // ngOnInit() {
  //   this.currencyService.getAllCurrencies().subscribe({
  //     next: (data) => {
  //       const currencyCodes = Object.keys(data.rates);
  //       this.currencies = currencyCodes.map(code => ({
  //         code,
  //         name: this.getCurrencyName(code), 
  //         countryCode: this.getCountryCode(code), 
  //       }));
  //     },
  //     error: (err) => {
  //       console.error('Error fetching currencies:', err);
  //     }
  //   });
  // }
  // getCurrencyName(code: string): string {
  //   const currencyNames : { [key: string]: string } = {
  //     USD: 'US Dollar',
  //     EUR: 'Euro',
  //     INR: 'Indian Rupee',
  //     GBP: 'British Pound',
  //     JPY: 'Japanese Yen',
  //     AUD: 'Australian Dollar',
  //     CAD: 'Canadian Dollar',
  //     CNY: 'Chinese Yuan',
  //     ZAR: 'South African Rand',

  //   };
  //   return currencyNames[code] || code;
  // }
  // getCountryCode(code: string): string {
  //   const countryCodes : { [key: string]: string } = {
  //     USD: 'us',
  //     EUR: 'eu',
  //     INR: 'in',
  //     GBP: 'gb',
  //     JPY: 'jp',
  //     AUD: 'au',
  //     CAD: 'ca',
  //     CNY: 'cn',
  //     ZAR: 'za',
  //   };
  //   return countryCodes[code] || 'us';
  // }

  // convertCurrency() {
  //   if (this.fromCurrency === this.toCurrency) {
  //     this.rate = 1;
  //     this.conversionResult = this.amount;
  //     this.lastUpdated = new Date();
  //     return;
  //   }

  //   this.currencyService.getExchangeRate(this.fromCurrency, this.toCurrency).subscribe({
  //     next: (data) => {
  //       if (data.rates && data.rates[this.toCurrency]) {
  //         this.rate = data.rates[this.toCurrency];
  //         this.conversionResult = this.amount * this.rate;
  //         this.lastUpdated = new Date(data.time_last_update_utc);
  //       }

  //     },
  //     error: (err) => {
  //       console.error('Conversion API error:', err);
  //       this.conversionResult = null;
  //     }
  //   });
  // }

  // swapCurrencies() {
  //   [this.fromCurrency, this.toCurrency] = [this.toCurrency, this.fromCurrency];
  //   this.convertCurrency();
  // }





























  currencies: any[] = [];
  amount: number = 0.95;
  fromCurrency: string = 'AMD';
  toCurrency: string = 'ZAR';
  rate: number = 0;
  conversionResult: number | null = null;
  lastUpdated: Date = new Date();

  constructor(private currencyService: CurrencyserviceService) { }

  ngOnInit() {
    this.currencyService.getAllCurrencies().subscribe({
      next: (data) => {
        const currencyCodes = Object.keys(data.rates);
        this.currencies = currencyCodes.map(code => ({
          code,
          name: this.getCurrencyName(code),
          countryCode: this.getCountryCode(code),
        }));
      },
      error: (err) => {
        console.error('Error fetching currencies:', err);
      }
    });
  }

  getCurrencyName(code: string): string {
    const currencyNames: { [key: string]: string } = {
      AMD: 'Armenian Dram',
      // USD: 'US Dollar',
      EUR: 'Euro',
      INR: 'Indian Rupee',
      GBP: 'British Pound',
      JPY: 'Japanese Yen',
      AUD: 'Australian Dollar',
      CAD: 'Canadian Dollar',
      CNY: 'Chinese Yuan',
      ZAR: 'South African Rand',
      AED: 'UAE Dirham',
      AFN: 'Afghan Afghani',
      ALL: 'Albanian Lek',
      // AMD: 'Armenian Dram',
      ANG: 'Netherlands Antillean Guilder',
      AOA: 'Angolan Kwanza',
      ARS: 'Argentine Peso',
      AWG: 'Aruban Florin',
      AZN: 'Azerbaijani Manat',
      BAM: 'Bosnia-Herzegovina Convertible Mark',
      BBD: 'Barbadian Dollar',
      BDT: 'Bangladeshi Taka',
      BGN: 'Bulgarian Lev',
      BHD: 'Bahraini Dinar',
      BIF: 'Burundian Franc',
      BMD: 'Bermudian Dollar',
      BND: 'Brunei Dollar',
      BOB: 'Bolivian Boliviano',
      BRL: 'Brazilian Real',
      BSD: 'Bahamian Dollar',
      BTN: 'Bhutanese Ngultrum',
      BWP: 'Botswana Pula',
      BYN: 'Belarusian Ruble',
      BZD: 'Belize Dollar',
      // Add more if needed...
    };
    return currencyNames[code] || code;
  }

  getCountryCode(code: string): string {
    const countryCodes: { [key: string]: string } = {
      USD: 'us',
      EUR: 'eu',
      INR: 'in',
      GBP: 'gb',
      JPY: 'jp',
      AUD: 'au',
      CAD: 'ca',
      CNY: 'cn',
      ZAR: 'za',
      AED: 'ae',
      AFN: 'af',
      ALL: 'al',
      AMD: 'am',
      ANG: 'an',
      AOA: 'ao',
      ARS: 'ar',
      AWG: 'aw',
      AZN: 'az',
      BAM: 'ba',
      BBD: 'bb',
      BDT: 'bd',
      BGN: 'bg',
      BHD: 'bh',
      BIF: 'bi',
      BMD: 'bm',
      BND: 'bn',
      BOB: 'bo',
      BRL: 'br',
      BSD: 'bs',
      BTN: 'bt',
      BWP: 'bw',
      BYN: 'by',
      BZD: 'bz',
      // Add more if needed...
    };
    return countryCodes[code] || 'us'; // Default flag
  }

  convertCurrency() {
    if (this.fromCurrency === this.toCurrency) {
      this.rate = 1;
      this.conversionResult = this.amount;
      this.lastUpdated = new Date();
      return;
    }

    this.currencyService.getExchangeRate(this.fromCurrency, this.toCurrency).subscribe({
      next: (data) => {
        if (data.rates && data.rates[this.toCurrency]) {
          this.rate = data.rates[this.toCurrency];
          this.rate = parseFloat(data.rates[this.toCurrency].toFixed(4));
          this.conversionResult = parseFloat((this.amount * this.rate).toFixed(4));
          this.conversionResult = this.amount * this.rate;
          this.lastUpdated = new Date(data.time_last_update_utc);
        }
      },
      error: (err) => {
        console.error('Conversion API error:', err);
        this.conversionResult = null;
      }
    });
  }

  swapCurrencies() {
    [this.fromCurrency, this.toCurrency] = [this.toCurrency, this.fromCurrency];
    this.convertCurrency();
  }



}

