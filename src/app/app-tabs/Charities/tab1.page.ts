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

  myItems: string[];
  toggled: boolean;

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


// CODE NOUR
myInitializeItems() {
  this.myItems = [

   'جمعية تعزيز صحة المرأة',
   'جمعية الشبان المسلمين',
   'جمعية جيل المستقبل',
   'جمعية رسالة للأعمال الخيريية',
   'جمعية الأورمان الخيرية',
   'بنك الطعام المصري',
   'مؤسسة مصر الخير',
   'مؤسسة مجدى يعقوب لأبحاث القلب',
   'مستشفى 57357 لعلاج سرطان الأطفال',
   'أنصار السنة المحمدية',
   'الاتحاد النسائي المصري',
   'الجمعية الشرعية',
   'الجمعية الطبية الإسلامية',
   'المؤسسة المصرية لحقوق الصم',
   'رابطة الاصلاح الاجتماعى',
   'مؤسسة ساويرس للتنمية الاجتماعية',
   'مجمع الباقيات الصالحات',
   'مستشفى بروك'
  ]
}

myGetItems(ev) {
  // Bt3red kol l items elly fe l array
  this.myInitializeItems();

  // Set val to the value of the ev target
  var val = ev.target.value;

  // If the value is an empty string don't filter the items
  if( val && val.trim() != '' ){
    this.myItems = this.myItems.filter((myItem) => {
      return (myItem.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })

  }
}

onCancel(event) { }

  public toggle(): void {
    this.toggled = this.toggled ? false : true;
  }

//CODE NOUR


}
