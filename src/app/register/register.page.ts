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






@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
	FB_APP_ID: number = 1032124980494760;

	email: string = ''; 
    password: string = '';
//   username: string = '';
//   password: string = '';
//   cpassword: string = '';

  constructor(public afAuth: AngularFireAuth, 
    private router: Router,
    private fb : Facebook,
    private service: AppService,
    private google: GooglePlus , 
    private platform: Platform,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController

    
   
    ) { }

  ngOnInit() {
  }

  async register() {
	try {
		var res = await this.afAuth.auth.createUserWithEmailAndPassword( this.email, this.password
		);
		if (res) {
		  console.log("Successfully registered!");
		  this.router.navigate(['/login']);
		}
  
	  } catch (err) {
		console.error(err);
	  }}	


//   async doFbLogin(){
// 	try{
// 		const  result = await this.fb.login(['email']);
  
// 		const fbCredential = firebase.auth.FacebookAuthProvider.credential(result.authResponse.accessToken);
  
// 		await firebase.auth().signInWithCredential(fbCredential);
  
// 	  }catch(err){
// 		console.error(err);
// 	  }
  
// 	}
	

	
	
  
  




//  loginWithGoogle(){
//   this.google.login({})
//   .then(res => {
//     console.log(res);
    
//   }).then(() => this.router.navigate(['/tabs']))
//   .catch(err => {
//     console.error(err);
//   });
// }
// }

	}
