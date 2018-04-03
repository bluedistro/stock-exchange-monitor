import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StockProvider {

  stockUrl;
  equityUrl;

  constructor(public http: Http) {
    this.stockUrl = 'https://dev.kwayisi.org/apis/gse/live';
    this.equityUrl = 'https://dev.kwayisi.org/apis/gse/equities/'
  }


  getStockData(){
    return this.http.get(this.stockUrl)
    .map(res => res.json());
  }

  getEquityDetails(equity){
    return this.http.get(this.equityUrl+equity)
    .map(res => res.json())
  }

}
