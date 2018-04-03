import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';

@IonicPage()
@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="homePage" tabTitle="Home" [tabIcon]="homeIcon" tabsHideOnSubPages="true"></ion-tab>
      <ion-tab [root]="settingsPage" tabTitle="Settings" [tabIcon]="settingsIcon" tabsHideOnSubPages="true"></ion-tab>
    </ion-tabs>
  `
})

// <ion-tab [root]="aboutPage" tabTitle="About" [tabIcon]="aboutIcon" tabsHideOnSubPages="true"></ion-tab>
export class TabsPage {

  homePage = HomePage
  aboutPage = AboutPage
  settingsPage = SettingsPage
  settingsIcon:string = "cog"
  homeIcon:string = "planet"
  aboutIcon: string = "information-circle"

}
