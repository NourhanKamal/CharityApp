import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AppService } from '../../app.service'
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular'
import { templateJitUrl } from '@angular/compiler';
import { LoadingController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular'
import { FcmService } from '../../../services/fcm.service'
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public afAuth: AngularFireAuth, 
    private router: Router,
    private fb : Facebook,
    private service: AppService,
    private google: GooglePlus , 
    private platform: Platform,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    public toastCrtl: ToastController,
    public fcm: FcmService) {}

    // ionViewDidLoad() {
    //   // get a FCM token 
      
    //   this.fcm.getToken() 
  
    //   this.fcm.listenToNotifications().pipe(
    //     tap(async msg => { 
    //       const toast =  await this.toastCrtl.create({ 
    //         message: msg.body,
    //         duration: 3000
    //       })
    //        toast.present();
    //     })
    //   ).subscribe()
  
    // }

    logOut() {
       this.afAuth.auth.signOut()
      .then(()=> this.router.navigate(['/login']))
      this.fb.logout()
  
      

    }
    
  malyWithTab(){
    this.router.navigateByUrl('/tabs/tab2/maly')
  }

  ayniWithTab(){
    this.router.navigateByUrl('/tabs/tab2/ayni')
  }

}
