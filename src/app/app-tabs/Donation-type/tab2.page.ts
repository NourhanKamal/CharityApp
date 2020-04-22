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
    public loadingController: LoadingController) {}



    
    logOut(){  this.afAuth.auth.signOut()
      .then(()=> this.router.navigate(['/login']))
  
    }
    
  malyWithTab(){
    this.router.navigateByUrl('/tabs/tab2/maly')
  }

  ayniWithTab(){
    this.router.navigateByUrl('/tabs/tab2/ayni')
  }

}
