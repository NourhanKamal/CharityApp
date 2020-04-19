import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection , AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from '../services/Item';  
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import {map, take} from 'rxjs/operators';


@Injectable() 

export class charityService {

itemsCollection: AngularFirestoreCollection<Item>;
items: Observable<Item[]>;

constructor(public afs: AngularFirestore) 
{
        // this.items = this.afs.collection('items').valueChanges();
        this.itemsCollection=this.afs.collection<Item>('items')
        this.items = this.afs.collection('items', ref => ref.orderBy('title', 'asc')).snapshotChanges().map(changes => { 
            return changes.map(a => { 
                const data = a.payload.doc.data() as Item;
                data.id = a.payload.doc.id;
                return data; 
            })
        });

    }
    
    getItems(){ 
        return this.items;
    }
    getItem(id: string): Observable<Item> {
        console.log("This id ",id)
        return this.itemsCollection.doc<Item>(id).valueChanges().pipe(
            
            take(1),
            map(charity => {
                console.log("This id ",charity)
                charity.id = id;
              return charity;
            })
        );
      }

}
