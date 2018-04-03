import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { Facebook } from '@ionic-native/facebook';
import { Network } from '@ionic-native/network';

import firebase  from 'firebase';
import { IonicStorageModule } from '@ionic/storage';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { BackgroundMode } from '@ionic-native/background-mode';

import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';

import { ChartsModule } from 'ng2-charts';

// Import angular2-fusioncharts
import { FusionChartsModule } from 'angular2-fusioncharts';
 
// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';
// Load FusionCharts Charts module
import Charts from "fusioncharts/fusioncharts.charts";
// Load themes
import themes from "fusioncharts/themes/fusioncharts.theme.fint";

firebase.initializeApp({
    apiKey: "AIzaSyAi5d3-dZjrigygIQ9eJuO1VTpdCYjz7HY",
    authDomain: "http-service-a672f.firebaseapp.com",
    databaseURL: "https://http-service-a672f.firebaseio.com",
    projectId: "http-service-a672f",
    storageBucket: "http-service-a672f.appspot.com",
    messagingSenderId: "582231063739"
  });

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { StockProvider } from '../providers/stock/stock';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { LoginPage } from '../pages/login/login';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AboutPage,
    SettingsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, themes),
    IonicStorageModule.forRoot(),
    ChartModule.forRoot(highcharts),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AboutPage,
    SettingsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StockProvider,
    AuthenticationProvider,
    Facebook,
    Network,
    LocalNotifications,
    BackgroundMode
  ]
})
export class AppModule {}
