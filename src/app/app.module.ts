import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonApp } from '@ionic/angular';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth' 
import { HttpClientModule } from '@angular/common/http';
import { Facebook } from '@ionic-native/facebook/ngx';
import {  GooglePlus } from '@ionic-native/google-plus/ngx'
import { Geolocation } from '@ionic-native/geolocation'
import { IonicStorageModule } from '@ionic/storage'
import { LocationTrackerProvider } from '../providers/location-tracker';



const fireConfig = {
  apiKey: "AIzaSyCooEGHuvVmHCXUVyerZ1CqKxL61Ckj7vU",
  authDomain: "charity-app-306b7.firebaseapp.com",
  databaseURL: "https://charity-app-306b7.firebaseio.com",
  projectId: "charity-app-306b7",
  storageBucket: "charity-app-306b7.appspot.com",
  messagingSenderId: "694372527034",
  appId: "1:694372527034:web:0fb69549b9c76b021b8b83",
  measurementId: "G-JZ24E58HHT"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    AngularFireModule.initializeApp(fireConfig), 
    AngularFireAuthModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
    
    
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy,  } ,
      Facebook, GooglePlus, Geolocation ,LocationTrackerProvider
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
