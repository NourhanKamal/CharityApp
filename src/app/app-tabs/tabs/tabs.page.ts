
import { Component } from '@angular/core';
import { FcmService } from '../../../services/fcm.service'
import { ToastController } from '@ionic/angular'
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public fcm: FcmService, 
    public toastCrtl: ToastController, ) {}

  // ionViewDidLoad() {
  //   // get a FCM token 
    
  //   this.fcm.getToken() 

  //   this.fcm.listenToNotifications().pipe(
  //     tap(async msg => { 
  //       const toast =  await this.toastCrtl.create({ 
  //         message: msg.body,
  //         duration: 3000
  //       })
  //        toast.present();
  //     })
  //   ).subscribe()

  // }

}