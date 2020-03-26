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
 




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = '';
  password: string = '';
  cpassword: string = '';

  constructor(public afAuth: AngularFireAuth, 
    private router: Router,
    private fb : Facebook,
    private service: AppService,
    private google: GooglePlus , 
    private platform: Platform,
    
    
   
    ) { }

  ngOnInit() {
  }

  async register(){

    const { username, password, cpassword} = this;
    if (password !== cpassword ) { 
      alert ("Passwords don't match!");
    }
     try{    const res = await this.afAuth.auth.createUserWithEmailAndPassword(username , password).then((res)=> {this.router.navigate(['/tabs/tab2']);
      console.log(res);})
      } 
        catch(error) { console.log(error)}

  }

  
  loginWithFacebook(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .catch(e => console.log('Error logging into Facebook', e));
    
 }
 logoutOfFacebook(){
   this.afAuth.auth.signOut()

 }

 loginWithGoogle(){
  this.google.login({})
  .then(res => {
    console.log(res);
    
  })
  .catch(err => {
    console.error(err);
  });
}


}
