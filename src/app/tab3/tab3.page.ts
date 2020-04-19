import { Component, OnInit,ViewChild , ElementRef, Injectable  } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { IonContent ,ModalController,NavParams,NavController,LoadingController} from '@ionic/angular';

import { TravelService } from '../../services/travel.service';
import { IonicComponentService} from '../../services/ionic-component.service';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
declare var google;


@Injectable()
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
//https://stackoverflow.com/questions/43745022/loading-map-to-ngswitch-child-scope-using-elementref-in-ionic
 // @ViewChildren("map")  mapElement: ElementRef;

 @ViewChild('map',  { static: true }) mapElement: ElementRef;
  categoryId:any
  viewType: string = "map";

  public places: any[];
  //public places: Observable<Place[]>;

 
  map: any;
  markerSelected: boolean = false;
  //******************** Map style  **************************//
  //***** go to snazzymaps.com for more map style  ***********//
  //**********************************************************//
  mapStyle: any = [{"featureType":"landscape.man_made","elementType":"all","stylers":[{"color":"#faf5ed"},{"lightness":"0"},{"gamma":"1"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#bae5a6"}]},{"featureType":"road","elementType":"all","stylers":[{"weight":"1.00"},{"gamma":"1.8"},{"saturation":"0"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ffb200"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"lightness":"0"},{"gamma":"1"}]},{"featureType":"transit.station.airport","elementType":"all","stylers":[{"hue":"#b000ff"},{"saturation":"23"},{"lightness":"-4"},{"gamma":"0.80"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#a0daf2"}]}];
  infoWindows: any=[];

  constructor(
    public travelService: TravelService,
    private ionicComponentService: IonicComponentService,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router
  )
  {
      this.categoryId =  this.activatedRoute.snapshot.paramMap.get('categoryId');
      //console.log("Get activatedRoute categoryId="+ this.activatedRoute.snapshot.paramMap.get('categoryId'));
   }



   ngOnInit() {

    //this.categoryId = this.navParams.get('categoryId');
    //console.log("$$$$ model >>>>>>get categoryId ="+this.categoryId);
    this.getPlace();
    setTimeout(() => {
       this.displayGoogleMap();
    }, 1000);

  }

  async close(){
    await this.modalController.dismiss();
  }

  getPlace(){
    this.ionicComponentService.presentLoading();
    this.travelService.getPlacesByCatId( this.categoryId ).subscribe(actionArray => {
      console.log("######################### firebase/ getPlace loaded ="+actionArray);
      this.places = actionArray;
      this.ionicComponentService.dismissLoading();
      console.log("+++++++++++++= place array="+JSON.stringify(this.places));
    });
  }

  
  goDetail(placeId: string){
    this.ionicComponentService.presentTimeoutLoading(500,true);
    console.log("...goDetail placeId="+placeId);
    this.close();
    this.router.navigateByUrl('/travel-place-detail/'+placeId);
  }

  displayGoogleMap() {
    let latLng = new google.maps.LatLng(13.801532791932946, 100.54677690766607);
    let mapOptions = {
        center: latLng,
        zoom: 12,
        styles: this.mapStyle,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    };
    console.log("...call map");
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
   // delay or await
    this.addMarkersToMap()
  }



  addMarkersToMap() {
    console.log("...call addMarkeToMap");

    for(let place of this.places) {
      console.log("lat="+place.lat);
      var position = new google.maps.LatLng(place.lat, place.lng);
      var markerIcon = {
        url: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png", // icon url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      };
      //var markerIcon = 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'
      var mapMarker = new google.maps.Marker({
            position: position,
            animation: google.maps.Animation.DROP,
            markerSelected : true,
            title: place.name,
            email: place.email,
            web: place.web,
            phone: place.phone,

            //**** Custom Marker Symbols ****/
            icon:  markerIcon,

                anchorPoint: new google.maps.Point(0, -40)
      });

      mapMarker.setMap(this.map);
      // add information window to marker
      //this.addInfoWindowToMarker(mapMarker);


      this.map.setCenter(position);
      // google.maps.event.addListener( mapMarker, 'click', function() {
      //   this.goDetail(place.id);
      //   //alert( place.lat + "-" + place.lng + "//placeId=" + place.id);xs
      //   /// do update something
      // });
      google.maps.event.addListener(mapMarker, 'click', () => {
        this.goDetail(place.id);
      });


    }

  }


x

  addInfoWindowToMarker(marker) {

    var infoWindowContent = '<div id="iw-container">' +
                                '<div class="iw-content">' +
                                      '<div class="iw-subTitle">'+marker.title+'</div>' +
                                      '<br><b>Phonesssssssssss:</b> '+marker.phone+'<br><b>E-mail:</b>'+marker.email+'<br><b>Website:</b> '+marker.web+'</p>'+
                                '</div>' +
                                //'<div id="do-something-button">button</div>' +
                            '</div>';
    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the ' +
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
        'south west of the nearest large town, Alice Springs; 450&#160;km ' +
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
        'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
        'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
        'Aboriginal people of the area. It has many springs, waterholes, ' +
        'rock caves and ancient paintings. Uluru is listed as a World ' +
        'Heritage Site.</p>' +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
        '(last visited June 22, 2009).</p>' +
        '</div>' +
        '</div>';

    // var infoWindowContent = '<div id="iw-container">' +
    //                         '<div class="iw-content">' +
    //                               '<div class="iw-subTitle">'+marker.title+'</div>' +
    //                               '<br><b>Phone:</b> '+marker.phone+'<br><b>E-mail:</b>'+marker.email+'<br><b>Website:</b> '+marker.web+'</p>'+
    //                         '</div>' +
    //                         //'<div id="do-something-button">button</div>' +
    //                     '</div>';


    var infoWindow = new google.maps.InfoWindow();
        // infoWindow.setOptions({
        //     disableAutoPan:false
        // });
        infoWindow.setContent(infoWindowContent);

        marker.addListener('click', () => {
              this.closeAllInfoWindows();
              infoWindow.open(this.map, marker);
              // add listener that will capture the click event of the infoWindow
              // google.maps.event.addListener(infoWindow, 'domready', () => {
              //   document.getElementById('do-something-button').addEventListener('click', () => {
              //      this.doSomething();
              //   });
              // });

        });
        this.infoWindows.push(infoWindow);
}



doSomething(){
  console.log("doSomething");
}
closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
}

}


















  //   ionViewDidLoad(){
  //     if(this.ngAuth.auth.currentUser != null){
  //       console.log("Welcome Home Page");
  //     }
  //     else {
  //       this.navCtrl.navigateRoot('/login');
  //     }
  //   }
  // start(){

  // Background Tracking

//   let config = {
//     desiredAccuracy: this.desiredAccuracy,
//     stationaryRadius: this.stationaryRadius,
//     distanceFilter: this.distanceFilter,
//     debug: true,
//     interval: 2000
//   };

//   this.backgroundGeolocation.configure(config).then((location) => {

//     console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

//     // Run update inside of Angular's zone
//     this.zone.run(() => {
//       this.lat = location.latitude;
//       this.lng = location.longitude;
//       this.db.database.ref(`testBackgroundGeo/${new Date().getTime()}/`).set({
//         latitude : this.lat ,
//         longitude : this.lng
//       }).then(res => {
//         console.log('result location' , res)
//       })
//     });

//   }, (err) => {

//     console.log(err);

//   });

//   // Turn ON the background-geolocation system.
//   this.backgroundGeolocation.start();


//   // Foreground Tracking

// let options = {
//   frequency: 3000,
//   enableHighAccuracy: true
// };

// this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

//   console.log(position);

//   // Run update inside of Angular's zone
//   this.zone.run(() => {
//     this.lat = position.coords.latitude;
//     this.lng = position.coords.longitude;
//   });

// });
//   }

//   stop(){
//     console.log('stopTracking');

//     console.log('stopTracking');

//     this.backgroundGeolocation.finish();
//     this.watch.unsubscribe();
//   }

