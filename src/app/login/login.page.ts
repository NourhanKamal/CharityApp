import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AppService } from '../app.service'
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular'
import { templateJitUrl } from '@angular/compiler';
import { LoadingController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Observable } from 'rxjs/Observable'
import { AuthenticationService } from "../services/services";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: Observable<firebase.User>;

	



  constructor(public afAuth: AngularFireAuth,
     private router: Router, 
     private fb : Facebook,
     private service: AppService,
     private google: GooglePlus , 
     private platform: Platform,
     private nativeStorage: NativeStorage,
     public loadingController: LoadingController,
     public authService: AuthenticationService) {
       this.user = this.afAuth.authState;
      }

  ngOnInit() {
  }
  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['dashboard']);          
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })}

  loginWithFacebook(){

    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .then(()=> this.router.navigate(['/tabs']))
    .catch(e => console.log('Error logging into Facebook', e));
  
	}
  

  loginWithGoogle(){
   if(this.platform.is('cordova')) {
     this.nativeGoogleLogin();
   } else { 
     this.webGoogleLogin();
   }

 
}
 async nativeGoogleLogin() {
   try { 
     const gplusUser = await this.google.login({
       'webClientId': '694372527034-ragclp8c4psgdnehprmgaukpueuo27j1.apps.googleusercontent.com',
       'offline': true, 
       'scopes': 'profile email'
    
    })
    return await this.afAuth.auth.signInWithCredential(
       firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
    ).then(()=> this.router.navigate(['/tabs']))

   }catch (err) {
     console.log(err)
   }
   }

   async webGoogleLogin() {
     try { 
       const provider = new firebase.auth.GoogleAuthProvider();
       const credential = await this.afAuth.auth.signInWithPopup(provider);
     }catch (err) {
       console.log(err)
     }
   }

 }

    
