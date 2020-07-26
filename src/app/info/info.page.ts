import { Component, AfterViewInit,OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController,ModalController} from '@ionic/angular';
import { TravelService } from '../../services/travel.service';
import { IonicComponentService} from '../../services/ionic-component.service';
import { Observable, Subscription } from 'rxjs';
import { charityService } from '../../services/charity.service';
import {Item} from '../../services/Item';
import { StarService } from '../../services/star.service';
import { UserService } from  '../../services/user.service';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore'

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

        // 1st Rating Part


  userDoc: AngularFirestoreDocument<any>;
  charityDoc: AngularFirestoreDocument<any>;


  //_________//

  user: any;
  char: any;

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

  constructor( 
    public travelService: TravelService,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService, 
    public charityService: charityService,
    private starService: StarService,
    private userService: UserService,
    private afs: AngularFirestore) {


      //console.log(this.router.url,"Current URL");


     }

  ngOnInit() {


      // 2nd Rating Part
    this.userDoc = this.afs.doc('users/test-user-3')
    this.charityDoc = this.afs.doc('items/Resala')

    this.char = this.charityDoc.valueChanges();
    this.user = this.userDoc.valueChanges();
   
    ///____________________________\\\

    this.parentPath= this.router.url;
    //console.log("....Current route path"+this.parentPath);
    this.getItem();
    this.getType();
  }


  // 3rd Rating Part 
  starHandler(value) {

    this.starService.setStar(this.user, this.char, value)
 }

  get charityID() { 

    return this.charityDoc.ref.id
  }

  get userId(){
    return this.userDoc.ref.id
  }
//__________________\\

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
  


