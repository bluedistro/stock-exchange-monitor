import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from 'angular2/router';

import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { LoginPage } from '../../pages/login/login';
import { ToastController } from 'ionic-angular';

import firebase from 'firebase';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Network } from '@ionic-native/network';

@Injectable()
export class AuthenticationProvider {
    // @ViewChild('myNav') nav: NavController
    userData = null;

    constructor(private facebook: Facebook, private network: Network, private toastCtrl: ToastController, private router: Router){}

    //login using facebook
    login(){
        return this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
            this.facebook.api('me?fields=id, name, email, firstname, picture.width(720).height(720).as(picture_large)', []).then(profile => {
                this.userData = {email: profile['email'], firstname: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}

            let toast = this.toastCtrl.create({
                message: 'Redirecting to homepage...',
                duration: 3000,
                position: 'top'
            });
            toast.present();

            });

            // this.nav.push(TabsPage);

        });
    }

    //log user out
    logout(){
          this.facebook.logout().then(res => {
           console.log('Logged out');
        //    this.nav.push(LoginPage);
        });
    }
}
