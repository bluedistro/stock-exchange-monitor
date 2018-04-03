import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import firebase from 'firebase';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { ToastController } from 'ionic-angular';

import { Network } from '@ionic-native/network';

// import { AuthenticationProvider } from '../../providers/authentication/authentication';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})


export class LoginPage {

    userData = null;

    constructor(private navCtrl: NavController, private facebook: Facebook, private toastCtrl: ToastController, private network: Network){}

    ionViewDidEnter(){
        this.network.onConnect().subscribe(data => {
          console.log(data);  
          this.displayNetworkUpdate(data.type);
        }, error => console.log(error));

        this.network.onDisconnect().subscribe(data => {
            console.log(data);
            this.displayNetworkUpdate(data.type);
        }, error => console.log(error));
    }

    displayNetworkUpdate(connectionState: string){
        let networkType = this.network.type;
        this.toastCtrl.create({
            message: `${connectionState}`,
            duration: 6000
        }).present();
    }

    // loginfbalt(){

    //     this.network.onDisconnect().subscribe(data => {
    //         console.log(data);
    //         this.displayNetworkUpdate(data.type);
    //     }, error => console.log(error));

    //     this.ap.login();
    // }

    loginfb(){
        
        this.network.onDisconnect().subscribe(data => {
            console.log(data);
            this.displayNetworkUpdate(data.type);
        }, error => console.log(error));

        this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
            this.facebook.api('me?fields=id, name, email, firstname, picture.width(720).height(720).as(picture_large)', []).then(profile => {
                this.userData = {email: profile['email'], firstname: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}

            let toast = this.toastCtrl.create({
                message: 'Redirecting to homepage...',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            
            });
            if (response.status == 'connected'){
                this.navCtrl.push(TabsPage);
            }else{
            let toast = this.toastCtrl.create({
                message: 'Problem encountered while trying to log In',
                duration: 5000,
                position: 'top'
            });
            toast.present();
            }
            
        });

    }

    // logout(){
    //     this.facebook.logout().then(res => {
    //        console.log('Logged out');
    //        this.navCtrl.push(LoginPage);
    //     });
    // }


    // login(){
    //     let provider = new firebase.auth.FacebookAuthProvider();
    //     firebase.auth().signInWithRedirect(provider).then(() => {
    //         firebase.auth().getRedirectResult().then(result => {
    //             if(result.user){
    //                 this.navCtrl.push(HomePage)
    //             }
    //         })
    //     })
    // }

}

