import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
// import { AppService } from '../../app.service'
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular'
import { templateJitUrl } from '@angular/compiler';
import { LoadingController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Observable } from 'rxjs/Observable'
import { AuthenticationService } from "../../../services/services";
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { MenuController,NavController } from '@ionic/angular';





@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  public registerForm: FormGroup;


  user: Observable<firebase.User>;



  constructor(public afAuth: AngularFireAuth, 
    private router: Router,
    private fb : Facebook,
    // private service: AppService,
    private google: GooglePlus , 
    private platform: Platform,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    public authService: AuthenticationService,
    public  formBuilder: FormBuilder,
    public menuctrl: MenuController

    
   
    ) { let EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  
    // this.registerForm = fb.group({
    //let Email_Val =     /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  
    // this.registerForm = fb.group({
    //       email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
    //       profileName: ['', Validators.compose([Validators.minLength(2), Validators.required])],
  
  
    //       phone: ['', Validators.compose([Validators.minLength(6), Validators.required])],
    //       password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
  
    // });
  
  
  // Tips: If you can't bind to 'formGroup' since it isn't a known property of 'form'.
  //  ******Don't forgot to import FormsModule and ReactiveFormsModule into your <page-name>.module.ts and then add them to the imports array.
  // https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
  // https://stackoverflow.com/questions/53130244/cant-bind-to-formgroup-in-angular-7
  
    this.registerForm = formBuilder.group({
      firstname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      lastname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      phone: ['', Validators.compose([Validators.minLength(2), Validators.required])],
      username:  ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      password:  ['', Validators.compose([Validators.minLength(6), Validators.required])],
  //['', Validators.compose([Validators.required])]
    }); }

  ngOnInit() {
  }

  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)
    .then((res) => {
      // Do something here
      this.authService.SendVerificationMail()
      this.router.navigate(['verify-email']);
    }).catch((error) => {
      window.alert(error.message)
    })
}


    loginWithFacebook(){

      this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .then(()=> this.router.navigate(['/tabs']))
      .catch(e => console.log('Error logging into Facebook', e));
    
    }  

	
  //   loginWithGoogle(){
  //     if(this.platform.is('cordova')) {
  //       this.nativeGoogleLogin();
  //     } else { 
  //       this.webGoogleLogin();
  //     }
   
    
  //  }
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
