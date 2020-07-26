import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Platform } from '@ionic/angular'
import { Firebase } from '@ionic-native/firebase/ngx';
import { UserService } from '../services/user.service'

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(
     public platform: Platform,
     public afs: AngularFirestore ,
     public firebase: Firebase,
     public userService: UserService
  ) { }

  async getToken(){

    let token;
    if (this.platform.is('android')) {
      
      token = await this.firebase.getToken();
    }

    if (this.platform.is('ios')) {

      token = await this.firebase.getToken();
      const perm = await this.firebase.grantPermission();
        

    }
   
    return this.saveTokenToFirestore(token)
  }

  private saveTokenToFirestore(token){
    if (!token) return; 
    const deviceRef = this.afs.collection('devices')

    const docData = { 
      token, 
      userId: this.userService.getUserId()
    }
    return deviceRef.doc(token).set(docData)
  }

  listenToNotifications() {
    return this.firebase.onNotificationOpen()
  }

}

