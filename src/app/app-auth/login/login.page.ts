import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
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
import { IonicComponentService } from '../../../services/ionic-component.service'
import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  redirectUrl: string;
  //****** form validation ******//
  public loginForm: FormGroup;
  public redirectPath: any;

  user: Observable<firebase.User>;
  authToken: auth.UserCredential;

	



  constructor(public afAuth: AngularFireAuth,
     private router: Router, 
     private fb : Facebook,
    //  private service: AppService,
     private google: GooglePlus , 
     private platform: Platform,
     private nativeStorage: NativeStorage,
     public loadingController: LoadingController,
     public authService: AuthenticationService,
     public  formBuilder: FormBuilder,
     private activatedRoute: ActivatedRoute,
     private ionicComponentService: IonicComponentService,
     private userService: UserService
     ) {
       this.user = this.afAuth.authState;

       //this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
   /// console.log("CatId="+this.catId);

    let EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  
    // this.registerForm = fb.group({
    //let Email_Val =     /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  
    // this.registerForm = fb.group({
    //       email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
    //       profileName: ['', Validators.compose([Validators.minLength(2), Validators.required])],


    //       phone: ['', Validators.compose([Validators.minLength(6), Validators.required])],
    //       password: ['', Validators.compose([Validators.minLength(6), Validators.required])],

    // });
   // this.redirectPath = this.activatedRoute.snapshot.paramMap.get('redirectPath');

// Tips: If you can't bind to 'formGroup' since it isn't a known property of 'form'.
//  ******Don't forgot to import FormsModule and ReactiveFormsModule into your <page-name>.module.ts and then add them to the imports array.
// https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
// https://stackoverflow.com/questions/53130244/cant-bind-to-formgroup-in-angular-7

    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      password: ['', Validators.compose([Validators.required])]

    });
      }

  ngOnInit() {
  }

  logIn() {

    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
      //this.presentAlert("invalid form");
      console.log("invalid form")
    } else {
      this.ionicComponentService.presentLoading()
      console.log(this.loginForm.value);
      console.log("yes, ")
      this.userService.signinUser(this.loginForm.value.username, this.loginForm.value.password)
      .then( authData => {
        console.log("Auth pass");   
        this.ionicComponentService.dismissLoading()
        if(this.redirectUrl){
          this.router.navigateByUrl('/'+this.redirectUrl);
        }else{
          this.router.navigateByUrl('/tabs');
        }

      }, error => {
        //var errorMessage: string = error.message;
        this.ionicComponentService.dismissLoading()
        console.log("Error:"+error.message);
        this.ionicComponentService.presentAlert(error.message)
        
      });
    }
    






    // this.authService.SignIn(email.value, password.value)
    //   .then((res) => {
    //     if(this.authService.isEmailVerified) {
    //       this.router.navigate(['tabs/tab2']);          
    //     } else {
    //       window.alert('Email is not verified')
    //       return false;
    //     }
    //   }).catch((error) => {
    //     window.alert(error.message)
    //   })} 
  }

  logOut() {
    this.userService.signoutUser()
    this.fb.logout()
  }

  loginWithFacebook(){


  //   this.fb.getLoginStatus().then((res) => {
  //     if (res.status === 'connected') {
  //         // Already logged in to FB so pass credentials to provider (in my case firebase)
  //         let provider = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
  //         firebase.auth().signInWithCredential(provider).then((authToken) => {
  //            this.authToken = authToken;
  //         });
  //     } else {
  //         // Not already logged in to FB so sign in
  //         this.fb.login(['public_profile', 'email']).then((userData) => {
  //           console.log(userData)
  //             // FB Log in success
  //         }).then(()=> this.router.navigate(['/tabs']))
  //         .catch((error) => {
  //             // FB Log in error 
  //             console.log(error)
  //         });
  //     }
  // });



  this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider).then(res => {
    this.router.navigate(['/tabs'])
    console.log('facebook login')
   
  }).catch(err => {
    console.log(err)
  })


    // this.fb.login(['public_profile', 'email'])
    // .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    // .then(()=> this.router.navigate(['/tabs']))
    // .catch(e => console.log('Error logging into Facebook', e));
    // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART)
  
	}
  

//   loginWithGoogle(){
//    if(this.platform.is('cordova')) {
//      this.nativeGoogleLogin();
//    } else { 
//      this.webGoogleLogin();
//    }

 
// }
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

    
