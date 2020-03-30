import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Injectable, NgZone } from '@angular/core';

import 'rxjs/add/operator/filter';
import { AngularFireAuth } from 'angularfire2/auth';
// import { LocationTrackerService } from 'src/providers/location-tracker.service';
/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Injectable()
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  // styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public watch: any;
  public lat: number = 0;
  public lng: number = 0;
  public desiredAccuracy : number = 0;
  public stationaryRadius : number = 10;
  public distanceFilter : number = 10;
 

  constructor(
    public navCtrl: NavController,
    public backgroundGeolocation : BackgroundGeolocation ,
    public geolocation : Geolocation,
    public zone: NgZone,
    public db : AngularFireDatabase,
    public ngAuth : AngularFireAuth, 
    public platform : Platform

    ) {}

    ionViewDidLoad(){
      if(this.ngAuth.auth.currentUser != null){
        console.log("Welcome Home Page");
      }
      else {
        this.navCtrl.navigateRoot('/login');
      }
    }
  start(){

  // Background Tracking

  let config = {
    desiredAccuracy: this.desiredAccuracy,
    stationaryRadius: this.stationaryRadius,
    distanceFilter: this.distanceFilter,
    debug: true,
    interval: 2000
  };

  this.backgroundGeolocation.configure(config).then((location) => {

    console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

    // Run update inside of Angular's zone
    this.zone.run(() => {
      this.lat = location.latitude;
      this.lng = location.longitude;
      this.db.database.ref(`testBackgroundGeo/${new Date().getTime()}/`).set({
        latitude : this.lat ,
        longitude : this.lng
      }).then(res => {
        console.log('result location' , res)
      })
    });

  }, (err) => {

    console.log(err);

  });

  // Turn ON the background-geolocation system.
  this.backgroundGeolocation.start();


  // Foreground Tracking

let options = {
  frequency: 3000,
  enableHighAccuracy: true
};

this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

  console.log(position);

  // Run update inside of Angular's zone
  this.zone.run(() => {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
  });

});
  }

  stop(){
    console.log('stopTracking');

    console.log('stopTracking');

    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();
  }
}
