import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// import { AngularFirestoreDocument } from 'angularfire2/firestore';
// // import { Observable } from 'rxjs/Observable';
// // import { Item } from '../../Models/Item';
import { Component, OnInit } from '@angular/core';
import {InfoService} from '../services/info.service'
import 'firebase/firestore';
import * as firebase from 'firebase/app'


const fireConfig = {
  apiKey: "AIzaSyCooEGHuvVmHCXUVyerZ1CqKxL61Ckj7vU",
  authDomain: "charity-app-306b7.firebaseapp.com",
  databaseURL: "https://charity-app-306b7.firebaseio.com",
  projectId: "charity-app-306b7",
  storageBucket: "charity-app-306b7.appspot.com",
  messagingSenderId: "694372527034",
  appId: "1:694372527034:web:0fb69549b9c76b021b8b83",
  measurementId: "G-JZ24E58HHT"
};

firebase.initializeApp(fireConfig);

@Component({
  
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],


})

@Injectable()
export class AboutPage implements OnInit {
  @Output() charities;
  @Output() changeID = new EventEmitter()
  @Output() id;

     
  constructor(private db:AngularFirestore, private InfoService:InfoService ){ 

    /* let about = this.db.collection('/About ');
    let query = about.where('adress', '==' ,"21st").get()
    .then(snapshot => { 
      if(snapshot.empty) {
        console.log('no matching documents');
        return;
      } 

      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
    }).catch(err => { 
      console.log('Error getting documents' , err);

      
    }); */

    // const about = this.db.collection('/About ')
    // .get().then((snapshot)=> {
    //   snapshot.docs.forEach(doc => {
    //     console.log(doc.data())
    //   }
    //     )
    // })
   

   };

   getId(title) {
    this.db.collection('/about').doc(title).snapshotChanges().subscribe(val => {
      
      this.id = val.payload.id
      
      this.changeID.emit(this.id)
      console.log(this.id)
    })
   }
  

  ngOnInit(){
    /* this.db.collection('/About ').doc('Resala').snapshotChanges().subscribe(val => {
      console.log(val.payload.id)
      this.id = val.payload.id
      
    }) */
    /* this.db.doc(`/About /${this.id}`).valueChanges().subscribe(val => {
      console.log(val)
    }) */
    this.db.collection('/about').valueChanges().subscribe(val => {
      console.log(val)
      this.charities = val
    })
  }
  }
