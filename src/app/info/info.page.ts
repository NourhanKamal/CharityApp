import { Component, AfterViewInit,OnInit} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController,ModalController} from '@ionic/angular';
import { TravelService } from '../../services/travel.service';
import { IonicComponentService} from '../../services/ionic-component.service';
import { Observable, Subscription } from 'rxjs';
import { charityService } from '../../services/charity.service';
import {Item} from '../../services/Item';
import {reviewService} from '../../services/review.service';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  //First Rating Part
  userDoc: AngularFirestoreDocument<any>
  charityDoc: AngularFirestoreDocument<any>

  user: Observable<any>;
  nCharity: Observable<any>;
  //End First Rating Part


  showLiner = false;
  showTitle = false;
  transition:boolean = false;


  charityId: string;
  parentPath: any;

  public charities: any[];
  
  charity: Item = {
    id: '',
    title: '',
    description:'',
    phone: '',
    address: '',
    type: []
  };
  //type: any;

//Review first part declerations
comment = [];
reviewItems = [];

sliderConfig = {
  slidesPerView: 1.6,
  spaceBetween: 10,
  centeredSlides: true
};




  constructor( 
    public travelService: TravelService,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService, 
    public charityService: charityService,
    private reviewService: reviewService,
    private afs: AngularFirestore) {

    //console.log(this.router.url,"Current URL");

    }




  ngOnInit() {

    this.parentPath= this.router.url;
    //console.log("....Current route path"+this.parentPath);
    this.getItem();
    this.getType();

    //Review second part declerations
    this.reviewItems = this.reviewService.getReviews();
    this.comment = this.reviewService.getComment();


    
    //Start Second Rating Part 

    this.userDoc = this.afs.doc('users/test-user-3')
    this.charityDoc = this.afs.doc('items/Resala')

    this.nCharity = this.charityDoc.valueChanges()
    /*console.log('this is charity', this.nCharity); */
    this.user = this.userDoc.valueChanges()
    /*console.log('this is user-3', this.user);*/
    
    //End Second Rating Part

  }

   //Start Third Rating Part
   get nCharityId() {
    return this.charityDoc.ref.id
   }

   get userId() {
     return this.userDoc.ref.id
   }

   /*TEST
      get userId() {
        const x = this.userDoc.ref.id
     return console.log('this is user id:', x)
   } */


   //End Third Rating Part

  getItem(){ 
     
    const id = this.activatedRoute.snapshot.paramMap.get('id'); 
    //const id2 = this.activatedRoute.snapshot.paramMap.get('activity'); 
    this.charityService.getItem(id).subscribe(res => {
      //console.log("Get charities=" + res) 

      this.charity = res;
      //this.activities = res[`${id2}`];
      


    });
  
  };
  getType() {
    for(let type of this.charity['type']) {
      //this.type = type
    }
  }
  getCategory(){
    this.travelService.getCategories().subscribe(res => {
      //console.log("Get categories response="+res);
      this.charities = res
    });
  }

  // Review part functions
  addToComment(review) {
    this.reviewService.addReview(review);
  }
 
  openComments() {
    this.router.navigate(['comment']);
  }

  //To read the rating value in the .ts file
  /*  onRateChange(event) {
    console.log('Your rate:', event);
  } */
  

  } ;



  // oggleSideMenu() {
  //   this.ionicComponentService.sideMenu(); //Add this method to your button click function
  // }
  // onScroll($event: CustomEvent) {
  //   if ($event && $event.detail && $event.detail.scrollTop) {
  //     const scrollTop = $event.detail.scrollTop;
  //     this.transition = true;

  //     this.showTitle = scrollTop >= 44;
  //     this.showLiner = scrollTop >= 44;
  //     console.log("showTitle="+this.showTitle);
  //   }else{
  //     this.transition = false;
  //   }
  // }
  


