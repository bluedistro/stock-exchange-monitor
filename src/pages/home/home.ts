import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StockProvider } from '../../providers/stock/stock';
import { LoadingController } from 'ionic-angular';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { BackgroundMode } from '@ionic-native/background-mode';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit{

 home:string = "stockExchange"
 isAndroid:boolean = false;
 homePage = HomePage;
 stockInfo: any;
 equityInfo: any;
 eqName: any;
 retrieved_stored_value: any;

 dataSource: Object
 constructor(private platform: Platform,  public loadingController: LoadingController, private se: StockProvider, private storage: Storage, private localNotifications: LocalNotifications, public backgroundMode: BackgroundMode){
   this.isAndroid = platform.is('android');
 }


   ngOnInit(){
      this.loadingController.create({
        content: 'Please wait...',
        duration: 5000,
        dismissOnPageChange: true
      }).present();

      this.backgroundMode.setDefaults({
        silent: true
      }).then(() => {
        this.backgroundMode.enable();
      }, () => {});

      this.se.getStockData()
      .subscribe(stockData => {
       this.stockInfo = stockData;
       this.storage.set('stored_value', this.stockInfo);

       this.storage.get('stored_value').then((val) => {
         this.retrieved_stored_value = val;

        for(var i = 0; i < this.retrieved_stored_value.length; i++) {
            if(stockData[i].price === this.retrieved_stored_value[i].price && stockData[i].change === this.retrieved_stored_value[i].change){
              console.log('Equal Price');
              console.log(stockData[i].price, this.retrieved_stored_value[i].price);

              this.localNotifications.schedule({
                title: 'GSE Notification',
                text: 'No change in stock price',
                sound: null,
                at: new Date(new Date().getTime() + 3600)
              });

            }else{
              console.log('Different Prices');
              this.localNotifications.schedule({
                title: 'GSE Notification',
                text: 'Changes have occurred in stock prices',
                sound: null,
                at: new Date(new Date().getTime() + 3600)
              });
            }
        } // end of for loop to check for changes in data

       }); // stored data retrieval

      // chart drawing

        this.dataSource = {
              "chart": {
                "caption": "Symbol Performance Monitor",
                "subCaption": "Performance of various Stock Symbols against one another",
                "bgcolor": "FFFFFF",
                "showvalues" : "0",
                "showborder": "0",
                "showplotborder": "0",
                "showlegend": "1",
                "legendborder": "0",
                "legendposition": "bottom",
                "enablesmartlabels": "1",
                "use3dlighting": "0",
                "showshadow": "0",
                "legendbgcolor": "#CCCCCC",
                "legendbgalpha": "20",
                "legendborderalpha": "0",
                "legendshadow": "0",
                "legendnumcolumns": "5",
                "theme":"fint"
              },
              "data": [{
                "label": this.stockInfo[0].name,
                 "value": this.stockInfo[0].price
              }, {
                "label": this.stockInfo[1].name,
                "value": this.stockInfo[1].price
              }, {
                "label": this.stockInfo[2].name,
                "value": this.stockInfo[2].price
              }, {
                "label": this.stockInfo[3].name,
                "value": this.stockInfo[3].price
              }, {
                "label": this.stockInfo[4].name,
                "value": this.stockInfo[4].price
              }, {
                "label": this.stockInfo[5].name,
                "value": this.stockInfo[5].price
              },{
                "label": this.stockInfo[6].name,
                "value": this.stockInfo[6].price
              }, {
                "label": this.stockInfo[7].name,
                "value": this.stockInfo[7].price
              }, {
                "label": this.stockInfo[8].name,
                "value": this.stockInfo[8].price
              }, {
                "label": this.stockInfo[9].name,
                "value": this.stockInfo[9].price
              }, {
                "label": this.stockInfo[10].name,
                "value": this.stockInfo[10].price
              }, {
                "label": this.stockInfo[11].name,
                 "value": this.stockInfo[11].price
              }, {
                "label": this.stockInfo[12].name,
                "value": this.stockInfo[12].price
              }, {
                "label": this.stockInfo[13].name,
                "value": this.stockInfo[13].price
              }, {
                "label": this.stockInfo[14].name,
                "value": this.stockInfo[14].price
              }, {
                "label": this.stockInfo[15].name,
                "value": this.stockInfo[15].price
              }, {
                "label": this.stockInfo[16].name,
                "value": this.stockInfo[16].price
              },{
                "label": this.stockInfo[17].name,
                "value": this.stockInfo[17].price
              }, {
                "label": this.stockInfo[18].name,
                "value": this.stockInfo[18].price
              }, {
                "label": this.stockInfo[19].name,
                "value": this.stockInfo[19].price
              }, {
                "label": this.stockInfo[20].name,
                "value": this.stockInfo[20].price
              }, {
                "label": this.stockInfo[21].name,
                "value": this.stockInfo[21].price
              }, {
                "label": this.stockInfo[22].name,
                "value": this.stockInfo[22].price
              }, {
                "label": this.stockInfo[23].name,
                "value": this.stockInfo[23].price
              }, {
                "label": this.stockInfo[24].name,
                 "value": this.stockInfo[24].price
              }, {
                "label": this.stockInfo[25].name,
                "value": this.stockInfo[25].price
              }, {
                "label": this.stockInfo[26].name,
                "value": this.stockInfo[26].price
              }, {
                "label": this.stockInfo[27].name,
                "value": this.stockInfo[27].price
              }, {
                "label": this.stockInfo[28].name,
                "value": this.stockInfo[28].price
              }, {
                "label": this.stockInfo[29].name,
                "value": this.stockInfo[29].price
              },{
                "label": this.stockInfo[30].name,
                "value": this.stockInfo[30].price
              }, {
                "label": this.stockInfo[31].name,
                "value": this.stockInfo[31].price
              }, {
                "label": this.stockInfo[32].name,
                "value": this.stockInfo[32].price
              }, {
                "label": this.stockInfo[33].name,
                "value": this.stockInfo[33].price
              }, {
                "label": this.stockInfo[34].name,
                "value": this.stockInfo[34].price
              }, {
                "label": this.stockInfo[35].name,
                "value": this.stockInfo[35].price
              }, {
                "label": this.stockInfo[36].name,
                "value": this.stockInfo[36].price
              }, {
                "label": this.stockInfo[37].name,
                "value": this.stockInfo[37].price
              }, {
                "label": this.stockInfo[38].name,
                "value": this.stockInfo[38].price
              },{
                "label": this.stockInfo[39].name,
                "value": this.stockInfo[39].price
              }, {
                "label": this.stockInfo[40].name,
                "value": this.stockInfo[40].price
              }, {
                "label": this.stockInfo[41].name,
                "value": this.stockInfo[41].price
              }, {
                "label": this.stockInfo[42].name,
                "value": this.stockInfo[42].price
              }]
        }

      // end of charts

     }); // end of stockdata subscription function

   }// end of ngOnInit function

   doRefresh(refresher){
     console.log('Refreshing ...');

      this.se.getStockData()
     .subscribe(stockData => {
       this.stockInfo = stockData;
       refresher.complete();

       this.storage.set('stored_value', this.stockInfo);

       this.storage.get('stored_value').then((val) => {
         this.retrieved_stored_value = val;

        for(var i = 0; i < this.retrieved_stored_value.length; i++) {
            if(stockData[i].price === this.retrieved_stored_value[i].price && stockData[i].change === this.retrieved_stored_value[i].change){
              console.log('Equal Price');
              console.log(stockData[i].price, this.retrieved_stored_value[i].price);

              this.localNotifications.schedule({
                title: 'GSE Notification',
                text: 'No change in stock price',
                sound: null,
                at: new Date(new Date().getTime() + 3600)
              });


            }else{
              console.log('Difference Prices');
              this.localNotifications.schedule({
                title: 'GSE Notification',
                text: 'Changes have occurred in stock prices',
                sound: null,
                at: new Date(new Date().getTime() + 3600)
              });
            }
        }

       });

     });

   }

  getEquityInfo(equity){
    this.se.getEquityDetails(equity)
    .subscribe(equityData => {
      this.equityInfo = equityData;
    })
  }

  submitForm(){

      this.loadingController.create({
        content: 'Please wait...',
        duration: 5000,
        dismissOnPageChange: true
      }).present();

    console.log('Equity Name');
    console.log(this.eqName);
    this.getEquityInfo(this.eqName);
  }

}
