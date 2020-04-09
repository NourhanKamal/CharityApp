import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Item } from '../Models/Item'



@Injectable({
  providedIn: 'root'
})
export class InfoService {
  id
  getID(id) {
    this.id = id
  }
  constructor() { 
   
  }
 
}

