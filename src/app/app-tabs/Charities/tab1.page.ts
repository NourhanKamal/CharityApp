import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { charityService } from '../../../services/charity.service';
import { Item }  from  '../../../services/Item';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  parentPath: any;

  charities: Item[];
  constructor(private charityService: charityService,
    public router: Router

    ) {}
    ngOnInit() {
    this.charityService.getItems().subscribe(charity => {
      
      
      console.log(charity);
      this.charities = charity;
    
    }
    

    
    );

    this.parentPath= this.router.url;
    console.log("....Current route path"+this.parentPath);
    
    }
  
  

}
