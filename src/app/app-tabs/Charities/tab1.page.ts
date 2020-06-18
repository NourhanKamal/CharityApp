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
  charities;
  constructor(private charityService: charityService,
    public router: Router,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public activatedRoute:ActivatedRoute

    ) {}
    ngOnInit() {

      
     var idArr = this.router.url.split('/')
      //console.log(this.router.url)

      if (idArr[3]) {
        
        this.afs.collection('items', ref => ref.where('type.'+ idArr[3],'==',true)).valueChanges().subscribe(res =>{
          //console.log(res)
          this.charities = res;
        })
      } else {
        this.charityService.getItems().subscribe(res => {
          //console.log(res);
          this.charities = res;
        })
        // this.afs.collection('items').valueChanges().subscribe(res =>{
        //   console.log(res)
        //   this.charities = res;
        // })
      }
      
    /* this.charityService.getItems().subscribe(charity => {
      
      
      console.log("charitis",charity);
      this.charities = charity;
      this.parentPath= this.router.url.match('/tabs/tab1');
      console.log("....Current route "+this.parentPath,charity[16]['type']);
      
    
    }); */

    
    
    }
  
    openInfoWithInTab(){
      this.router.navigateByUrl("'tabs/tab1/info/'+charity.id")
    }
  


    logOut() {
      this.afAuth.auth.signOut()
     .then(()=> this.router.navigate(['/login']))
 
     

   }
}
