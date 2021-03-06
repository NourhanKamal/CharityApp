import { Component, OnInit,ViewChild , ElementRef, Injectable  } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { IonContent ,ModalController,NavParams,NavController,LoadingController, Platform, AlertController} from '@ionic/angular';
import { TravelService } from '../../../services/travel.service';
import { IonicComponentService} from '../../../services/ionic-component.service';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { charityService } from '../../../services/charity.service';
import { Geolocation  } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage'
import { filter } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import {map, take} from 'rxjs/operators';
import { Item }  from  '../../../services/Item';


declare var google: any;


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
  viewType: string = "map";
  
   
  parentPath: any;
 
  map: any;


  locations: Observable<any>;

  locationCollection: AngularFirestoreCollection<any>;

watch = null;
markers = [];
charities;
charity;

  currentMapTrack = null;
  

  isTracking = false;

  //******************** Map style  **************************//
  //***** go to snazzymaps.com for more map style  ***********//
  //**********************************************************//

  constructor(
    public travelService: TravelService,
    private ionicComponentService: IonicComponentService,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    public charityService: charityService,
    private plt: Platform,
    private geolocation: Geolocation,
    private storage: Storage,
    private afs: AngularFirestore
  )
  {
   }

   ngOnInit() {

    this.displayGoogleMap()
    

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      this.charityService.getItem(id).subscribe(res => {
        //console.log("Get charities=" + res) 
  
        this.charity = res;
        //console.log(this.charity)
        let latLng = new google.maps.LatLng(this.charity.lan, this.charity.lng);
  
        let mapOptions = { 
          center: latLng, 
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: latLng,
          title: this.charity.title
        });
        
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        marker.setMap(this.map);
  
      });
    } else {
        let latLng;
        let charityService = this.charityService
        let mapElement = this.mapElement
        let map = this.map
        this.geolocation.getCurrentPosition().then(function (position) {
          //console.log(position)

          latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          
          let mapOptions = { 
            center: latLng, 
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
        
          map = new google.maps.Map(mapElement.nativeElement, mapOptions);
          var infowindow = new google.maps.InfoWindow();
          var marker;
          charityService.getItems().subscribe(charitys => {
        
            for (let item of charitys) {
              //console.log(item)
              marker = new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(item['lan'], item.lng),
                title: item.title
              });
              //infowindow.setContent(item.title);
            }
            var img = 'https://firebasestorage.googleapis.com/v0/b/charity-app-306b7.appspot.com/o/icons%2Ficon-user-blue.png?alt=media&token=6d959f08-9f34-4e84-85f5-ae72b7723178'
            marker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.DROP,
              icon: img,
              position: latLng,
              title: 'موقعك'
            });
            infowindow.setContent(marker.title);
            infowindow.open(map, marker);
        })
        
        
        })


        
      
    

  }

  
    /* this.locations.subscribe(locations => {
      console.log('new locations:', locations );
       this.updateMap(locations);
    }) */
  
 
    /* this.parentPath= this.router.url;
    console.log("....Current route path"+this.parentPath); */
 

    // this.getItem()
    





  }

  displayGoogleMap() {
    let latLng = new google.maps.LatLng(26.8206, 30.8025);
    let mapOptions = {
        center: latLng,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    //console.log("...call map");
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
   // delay or await
    // this.addMarkersToMap()
  }


  /* updateMap(locations) {
    // Remove all current marker
    this.markers.map(marker => marker.setMap(null));
    this.markers = [];
   
    for (let loc of locations) {
      let latLng = new google.maps.LatLng(loc.lat, loc.lng);
   
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
      this.markers.push(marker);
    }
  } */

 
  
  

  

 /*  startTracking() {
    this.isTracking = true;
    this.watch = this.geolocation.watchPosition().subscribe(position => {
      if (position) {
        this.addNewLocation(
          position.coords.latitude,
          position.coords.longitude,
          position.timestamp
        );
      }
    });
  } */

   /* addNewLocation(lat, lng, timestamp){

    console.log("new location added" , lat, lng, timestamp)

     this.locationCollection.add({ 
       lat,
       lng,
       timestamp
     });
     let position = new google.maps.LatLng(lat, lng);
     this.map.setCenter(position);
     this.map.setZoom(5);

   } */

   

  /*    deleteLocation(pos){ 
       this.locationCollection.doc(pos.id).delete();
     } */

    //  getItem(){ 
     
    //   const id = this.activatedRoute.snapshot.paramMap.get('lat'); 
    //   this.charityService.getItem(id).subscribe(res => {
    //     console.log("Get charities=" + res) 
  
    //     this.charity = res;
  
  
    //   });
    
    // }; 
















}

