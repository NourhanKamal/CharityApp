import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  charity;
  constructor(private db:AngularFirestore) { }

  getCharity(index) {
    this.db.collection('/About ').valueChanges().subscribe(val => {
      console.log(val)
      this.charity = val[index]
    })
    return this.charity
  }
}
