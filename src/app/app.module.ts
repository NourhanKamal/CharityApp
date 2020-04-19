import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireDatabaseModule  } from 'angularfire2/database' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth' 
import { HttpClientModule } from '@angular/common/http';
import { Facebook } from '@ionic-native/facebook/ngx';
import {  GooglePlus } from '@ionic-native/google-plus/ngx'
import { IonicStorageModule } from '@ionic/storage'
import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';
import {NativeStorage} from '@ionic-native/native-storage/ngx'
import { AngularFirestore } from 'angularfire2/firestore';
import { Geolocation,  } from '@ionic-native/geolocation/ngx';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { charityService } from '../services/charity.service';

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
    AngularFireModule.initializeApp(fireConfig, 'angularfs'), 
    AngularFireAuthModule,
    HttpClientModule,
    IonicStorageModule.forRoot() , 
    AngularFireDatabaseModule, 
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy,  } ,
      Facebook  , 
      Geolocation, 
      GooglePlus, 
      BackgroundGeolocation ,
      Injectable ,
      NativeStorage,
      AngularFirestore,
      charityService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 

})
export class AppModule {}
