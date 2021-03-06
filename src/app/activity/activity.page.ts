import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { NavController,ModalController} from '@ionic/angular';
import { TravelService } from '../../services/travel.service';
import { IonicComponentService} from '../../services/ionic-component.service';
import { charityService } from '../../services/charity.service';
import {Item} from '../../services/Item';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  parentPath: any;
  
   charity;
  
  activities: [];


  constructor( public travelService: TravelService,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    public router: Router,
    private ionicComponentService: IonicComponentService, 
    public charityService: charityService) { }

  ngOnInit() {
    
    this.parentPath= this.router.url;

    this.getItem()
  }

  getItem(){ 
     
    const id = this.activatedRoute.snapshot.paramMap.get('id'); 
    const activity = this.activatedRoute.snapshot.paramMap.get('activity'); 
    this.charityService.getItem(id).subscribe(res => {
      console.log("Get charities=" + res) 

      this.charity = res;
      this.activities = res[`${activity}`];
      console.log("Get activity=" + res[`${activity}`])
      


    });
  }}
