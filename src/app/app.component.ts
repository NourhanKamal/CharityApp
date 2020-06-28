import { Component, Input , ViewChild} from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';

import { Platform, IonApp } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, AlertController } from '@ionic/angular'
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  @ViewChild(NavController , { static: true }) nav: NavController;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router : Router ,
    public nativeStorage : NativeStorage,
    public alertCtrl: AlertController,
    private fireAuth:AngularFireAuth,

  ) {

    this.initializeApp();
    

    }

  
    initializeApp() { 
      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        
      });

    //     let navig = this.app.getActiveNavs();

    //   this.platform.backButton.subscribeWithPriority(0 ,() => {
    //     // Catches the active view
    //     let nav = this.app.getActiveNavs()[0];
    //     let activeView = nav.getActive();                
    //     // Checks if can go back before show up the alert
    //     if(activeView.name === 'HomePage') {
    //         if (nav.canGoBack()){
    //             nav.pop();
    //         } else {
    //             const alert = this.alertCtrl.create({
    //                 message: 'Você tem certeza?',
    //                 buttons: [{
    //                     text: 'Cancelar',
    //                     role: 'cancel',
    //                     handler: () => {
    //                       this.nav.navigateRoot('HomePage');
    //                       console.log('** Saída do App Cancelada! **');
    //                     }
    //                 },{
    //                     text: 'Fechar o App',
    //                     handler: () => {
    //                       this.logout();
    //                       // this.platform.exitApp();
    //                     }
    //                 }]
    //             });
    //             alert.present();
    //         }
    //     }
    // });

     }
     
  
   
  
  }
//     // user is previously logged and we have his data
    //     // we will let him access the app
    //     this.router.navigate(["/tabs"]);
    //     this.splashScreen.hide();
    //   }, err => {
    //     //we don't have the user data so we will ask him to log in
    //   	this.router.navigate(["/login"]);
    //     this.splashScreen.hide();
    //   });

    //   this.statusBar.styleDefault();
    // }