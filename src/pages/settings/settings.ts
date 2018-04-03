import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { LoginPage } from '../../pages/login/login';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private facebook: Facebook, private navCtrl: NavController){}

    //Logout user from the system
    logout(){
      this.facebook.getLoginStatus().then(data => {
        if(data.status == 'connected'){
            this.facebook.logout().then(res => {
              this.navCtrl.push(LoginPage);
            })
        }
      })
    }
}
