import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController,ModalController} from '@ionic/angular';
import { TravelService } from '../../service/travel.service';
import { IonicComponentService} from '../../service/ionic-component.service';
import { Observable, Subscription } from 'rxjs';
import { charityService } from '../../service/charity.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  showLiner = false;
  showTitle = false;
  transition:boolean = false;


  charityId: string;
  parentPath: any;

  public charities: any[];

  constructor( 
    public travelService: TravelService,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService, 
    public charityService: charityService,) {


      console.log(this.router.url,"Current URL");


     }

  ngOnInit() {

    this.parentPath= this.router.url;
    console.log("....Current route path"+this.parentPath);
    this.getCategory();
  }

  getCategory(){
    this.travelService.getCategories().subscribe(res => {
      console.log("Get categories response="+res);
      this.charities = res
    });
  }

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
  

}
