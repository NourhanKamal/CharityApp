import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


export interface Star {
    userId: any;
    nCharityId: any;
    value: number;
}


@Injectable()
export class StarService {
   
    constructor( private afs: AngularFirestore ) { }
    
    //Star reviews that belong to a user
    getUserStars( userId ) {
        const starsRef = this.afs.collection('stars', ref => ref.where('userId', '==', userId) );
        return starsRef.valueChanges();
    }

    //Get all stars that belong to a charity
    getCharityStars( nCharityId ) {
        const starsRef = this.afs.collection('stars', ref => ref.where('nCharityId', '==', nCharityId) );
        return starsRef.valueChanges();
    }

    //Create or Update star
    setStar( userId, nCharityId, value) {
        // Star document data
        const star: Star = { userId, nCharityId, value };

        //Custom doc ID for relationship
        const starPath = `stars/${star.userId}_${star.nCharityId}` ;

        //Set the data, return the promise
        return this.afs.doc(starPath).set(star)
    }





}