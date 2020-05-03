import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { charityService } from '../../../services/charity.service';
import { Item }  from  '../../../services/Item';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  parentPath: any;
  charities: Item[];
  constructor(private charityService: charityService,
    public router: Router,
    public afAuth: AngularFireAuth

    ) {}
    ngOnInit() {
    this.charityService.getItems().subscribe(charity => {
      
      
      console.log("charitis",charity);
      this.charities = charity;
      this.parentPath= this.router.url.match('/tabs/tab1');
      console.log("....Current route "+this.parentPath,charity[16]['type']);
      
    
    });

    
    
    }
  
    openInfoWithInTab(){
      this.router.navigateByUrl("'tabs/tab1/info/'+charity.id")
    }
  


    logOut() {
      this.afAuth.auth.signOut()
     .then(()=> this.router.navigate(['/login']))
 
     

   }
}
